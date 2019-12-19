import 'dart:io';
import 'package:folf/models/courseModel.dart';
import 'package:folf/models/gameModel.dart';
import 'package:folf/models/selectedPlayerModel.dart';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path_provider/path_provider.dart';

// -------------------------------------------
// classes to make managing the columns easier
class GameTable {
  static const String tableName = "games";
  static const String id = "id";
  static const String courseId = "courseId";
  static const String courseName = "courseName";
  static const String courseHoles = "courseHoles";
  static const String date = "date";
}

class PlayerTable {
  static const String tableName = "players";
  static const String id = "id";
  static const String name = "name";
  static const String displayed = "displayed";
  static const String fake = "fake";
}

class HoleScoresTable {
  static const String tableName = "holeScores";
  static const String playerId = "playerId";
  static const String gameId = "gameId";
  static const String holeNr = "holeNr";
  static const String score = "score";
}
// ----------------------------------------------

class LocalDatabaseService {
  // This is the actual database filename that is saved in the docs directory.
  static final _databaseName = "localDatabase.db";

  // Increment this version when you need to change the schema.
  static final _databaseVersion = 3;

  // Make this a singleton class.
  LocalDatabaseService._privateConstructor();
  static final LocalDatabaseService instance =
      LocalDatabaseService._privateConstructor();

  // Only allow a single open connection to the database.
  static Database _database;
  Future<Database> get database async {
    if (_database != null) return _database;

    _database = await _initDatabase();
    return _database;
  }

  // open the database
  _initDatabase() async {
    // The path_provider plugin gets the right directory for Android or iOS.
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, _databaseName);
    // Open the database. Can also add an onUpdate callback parameter.

    return await openDatabase(path,
        version: _databaseVersion, onCreate: _onCreate);
  }

  // SQL string to create the database
  Future _onCreate(Database db, int version) async {
    // create tables -----------------------------------------------------
    // create table for players
    await db.execute('''
              CREATE TABLE ${PlayerTable.tableName} (
                ${PlayerTable.id} TEXT PRIMARY KEY,
                ${PlayerTable.name} TEXT NOT NULL,
                ${PlayerTable.displayed} INT NOT NULL,
                ${PlayerTable.fake} INT NOT NULL
              )
              ''');

    // create table for games
    await db.execute('''
              CREATE TABLE ${GameTable.tableName} (
                ${GameTable.id} TEXT PRIMARY KEY,
                ${GameTable.courseId} TEXT,
                ${GameTable.courseName} TEXT,
                ${GameTable.courseHoles} INT,
                ${GameTable.date} TEXT NOT NULL
              )
              ''');

    // create table for scores
    await db.execute('''
              CREATE TABLE ${HoleScoresTable.tableName} (
                ${HoleScoresTable.playerId} TEXT NOT NULL,
                ${HoleScoresTable.gameId} TEXT NOT NULL,
                ${HoleScoresTable.holeNr} INT NOT NULL,
                ${HoleScoresTable.score} INT NOT NULL,
                FOREIGN KEY(${HoleScoresTable.playerId}) REFERENCES ${PlayerTable.tableName}(${PlayerTable.id}),
                FOREIGN KEY(${HoleScoresTable.gameId}) REFERENCES ${GameTable.tableName}(${GameTable.id}),
                PRIMARY KEY(${HoleScoresTable.playerId}, ${HoleScoresTable.holeNr}, ${HoleScoresTable.gameId})
              )
              ''');
  }

  // Database helper methods:

  Future<String> insertGame(GameModel game) async {
    Database db = await database;

    // if gameId is null generate a unique id.
    if (game.gameId == null) {
      int gameCount = Sqflite.firstIntValue(
          await db.rawQuery('SELECT COUNT(*) FROM ${GameTable.tableName}'));

      game.gameId = gameCount.toString();
    }

    // insert into games table
    dynamic gameMap = {
      GameTable.id: game.gameId,
      GameTable.courseId: game.course.cid,
      GameTable.courseName: game.course.name,
      GameTable.courseHoles: game.course.holes,
      GameTable.date: DateTime.now().toString()
    };
    await db.insert(GameTable.tableName, gameMap);

    game.players.forEach((selectedPlayer) async {
      // insert int holeScores table
      int holeNr = 0;
      selectedPlayer.individualScores.forEach((score) async {
        dynamic holeScoreMap = {
          HoleScoresTable.score: score,
          HoleScoresTable.holeNr: holeNr != null ? holeNr : 0,
          HoleScoresTable.playerId: selectedPlayer.userId,
          HoleScoresTable.gameId: game.gameId
        };
        holeNr++;
        await db.insert(HoleScoresTable.tableName, holeScoreMap);
      });
    });

    return game.gameId;
  }

  Future<void> updateScore(
      String gameId, String playerId, int holeNr, int score) async {
    Database db = await database;
    db.update(HoleScoresTable.tableName, {HoleScoresTable.score: score},
        where: '''
              ${HoleScoresTable.gameId} = $gameId AND 
              ${HoleScoresTable.holeNr} = $holeNr AND
              ${HoleScoresTable.playerId} = $playerId
              ''');
  }

  Future<List<GameModel>> queryGames() async {
    Database db = await database;

    List<GameModel> returnList = [];

    // get all games in games table
    List<Map> games = await db.query(GameTable.tableName);
    for (Map game in games) {
      List<SelectedPlayerModel> players = [];

      // get all playerIds in the game
      List<Map> playerIdsInGame = await db.query(HoleScoresTable.tableName,
          distinct: true,
          columns: [HoleScoresTable.playerId],
          where: "${HoleScoresTable.gameId} = ${game[GameTable.id]}");

      // iterate through the players and get all their hole scores for the game
      // as well as getting player details.
      for (Map playerId in playerIdsInGame) {
        SelectedPlayerModel selectedPlayerModel;

        Map playerFromDb = (await db.query(PlayerTable.tableName,
                where:
                    "${PlayerTable.id} = ${playerId[HoleScoresTable.playerId]}"))
            .first;

        selectedPlayerModel = SelectedPlayerModel(
            name: playerFromDb[PlayerTable.name],
            userId: playerFromDb[PlayerTable.id],
            fake: playerFromDb[PlayerTable.fake] == 1,
            imageUrl: "");

        // initialize the inidvidualscores list and total
        selectedPlayerModel.individualScores =
            List<int>.generate(game[GameTable.courseHoles], (_) => 0);
        selectedPlayerModel.total = 0;

        List<Map> scoresForPlayer = await db.query(HoleScoresTable.tableName,
            columns: [HoleScoresTable.holeNr, HoleScoresTable.score],
            distinct: true,
            where:
                "${HoleScoresTable.gameId} = ${game[GameTable.id]} AND ${HoleScoresTable.playerId} = ${playerId[HoleScoresTable.playerId]}");

        // iterate through the scores add add them to the player and increase total
        scoresForPlayer.forEach((scoreMap) {
          int holeNr = scoreMap[HoleScoresTable.holeNr];
          int score = scoreMap[HoleScoresTable.score];
          selectedPlayerModel.individualScores[holeNr] = score;
          selectedPlayerModel.total += score;
        });

        players.add(selectedPlayerModel);
      }

      CourseModel courseModel = CourseModel(
          name: game[GameTable.courseName],
          cid: game[GameTable.courseId],
          holes: game[GameTable.courseHoles]);

      GameModel gameModel = GameModel(
          date: game[GameTable.date],
          players: players,
          course: courseModel,
          gameId: game[GameTable.id]);

      returnList.add(gameModel);
    }

    return returnList;
  }

  Future<List<SelectedPlayerModel>> queryDisplayedPlayers() async {
    List<SelectedPlayerModel> returnList = [];

    Database db = await database;

    // await dropTablesAndRecreate(db);

    // get all players in players table that are to be displayed
    List<Map> players = await db.query(PlayerTable.tableName,
        where: "${PlayerTable.displayed} = 1");
    players.forEach((player) {
      returnList.add(SelectedPlayerModel(
          name: player[PlayerTable.name],
          userId: player[PlayerTable.id],
          fake: player[PlayerTable.fake] == 1));
    });

    return returnList;
  }

  Future<String> insertPlayer(SelectedPlayerModel player, bool fake) async {
    Database db = await database;

    // if player is fake (created by user) then we decide on the id.
    if (fake) {
      int playerCount = Sqflite.firstIntValue(
          await db.rawQuery('SELECT COUNT(*) FROM ${PlayerTable.tableName}'));
      player.userId = playerCount.toString();
    }

    dynamic playerMap = {
      PlayerTable.id: player.userId,
      PlayerTable.name: player.name,
      PlayerTable.displayed: true,
      PlayerTable.fake: fake
    };
    await db.insert(PlayerTable.tableName, playerMap);
    return player.userId;
  }

  // only for development purposes
  Future<void> dropTablesAndRecreate(Database db) async {
    await db.execute(''' 
                DROP TABLE IF EXISTS ${HoleScoresTable.tableName}
              ''');

    await db.execute(''' 
                DROP TABLE IF EXISTS ${PlayerTable.tableName}
              ''');

    await db.execute(''' 
                DROP TABLE IF EXISTS ${GameTable.tableName}
              ''');

    await db.execute('''
              CREATE TABLE ${PlayerTable.tableName} (
                ${PlayerTable.id} TEXT PRIMARY KEY,
                ${PlayerTable.name} TEXT NOT NULL,
                ${PlayerTable.displayed} INT NOT NULL,
                ${PlayerTable.fake} INT NOT NULL
              )
              ''');

    // create tables -----------------------------------------------------
    // create table for games
    await db.execute('''
              CREATE TABLE ${GameTable.tableName} (
                ${GameTable.id} TEXT PRIMARY KEY,
                ${GameTable.courseId} TEXT,
                ${GameTable.courseName} TEXT,
                ${GameTable.courseHoles} INT,
                ${GameTable.date} TEXT NOT NULL
              )
              ''');

    // create table for scores
    await db.execute('''
              CREATE TABLE ${HoleScoresTable.tableName} (
                ${HoleScoresTable.playerId} TEXT NOT NULL,
                ${HoleScoresTable.gameId} TEXT NOT NULL,
                ${HoleScoresTable.holeNr} INT NOT NULL,
                ${HoleScoresTable.score} INT NOT NULL,
                FOREIGN KEY(${HoleScoresTable.playerId}) REFERENCES ${PlayerTable.tableName}(${PlayerTable.id}),
                FOREIGN KEY(${HoleScoresTable.gameId}) REFERENCES ${GameTable.tableName}(${GameTable.id}),
                PRIMARY KEY(${HoleScoresTable.playerId}, ${HoleScoresTable.holeNr}, ${HoleScoresTable.gameId})
              )
              ''');
  }
}
