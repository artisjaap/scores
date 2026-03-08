import {Action, createReducer, on} from '@ngrx/store';
import {
  newGame,
  potBlack,
  potBlue,
  potBrown,
  potGreen,
  potPink,
  potRed,
  potWhite,
  potYellow,
  restart,
  setMode,
  setPlayer1Name,
  setPlayer2Name,
  turnPlayer
} from './snooker-scoreboard-the-scoreboard.actions';
import {BallColor, PlayerStats, ScoreboardMode, TableStats} from '../model/model';

export const theScoreboardFeatureKey = 'theScoreboard';


export interface TheScoreboardState {

  playerStarted: number;
  mode: ScoreboardMode;

  player1: PlayerStats,
  player2: PlayerStats,

  tableStats: TableStats
}

export const theScoreboardInitialState: TheScoreboardState = {
  playerStarted: 1,
  mode: ScoreboardMode.NORMAL,

  player1: {
    name: 'Player 1',
    framesWon: 0,
    break: 0,
    highestBreak: 0,
    score: 0,
    matchHighestBreak: 0,
    currentPlayer: true,
    ballHistory: [],
    health: 100
  },
  player2: {
    name: 'Player 2',
    framesWon: 0,
    break: 0,
    highestBreak: 0,
    score: 0,
    matchHighestBreak: 0,
    currentPlayer: false,
    ballHistory: [],
    health: 100
  },

  tableStats: {
    red: 15,
    yellow: 1,
    green: 1,
    brown: 1,
    blue: 1,
    pink: 1,
    black: 1,
    maxPointsLeft: 147,
    extraYellow: true
  },
};

function calculatePointsLeft(tableStats: TableStats) {
  return tableStats.red * 8 + tableStats.yellow * 2 + tableStats.green * 3 +
    tableStats.brown * 4 + tableStats.blue * 5 + tableStats.pink * 6 +
    tableStats.black * 7;

}

function calculateError(state: TheScoreboardState) {
  if (state.tableStats.pink === 0) return 7;
  if (state.tableStats.blue === 0) return 6;
  if (state.tableStats.brown === 0) return 5;
  return 4;
}

function updateHealth(player1: PlayerStats, player2: PlayerStats, tableStats: TableStats) {
  if (player1.score >= player2.score) {
    return {...player1, health: 100};
  } else if (player1.score - player2.score + tableStats.maxPointsLeft > 0) {
    return {...player1, health: 50};
  } else {
    return {...player1, health: 0};
  }
}

function updateScoreForPlayer(state: TheScoreboardState, player: PlayerStats, points: number, tableStatBallsLeft: number) {
  let mode = state.mode;

  if (mode === ScoreboardMode.NORMAL) {
    return {
      ...player,
      score: player.currentPlayer && tableStatBallsLeft > 0 ? player.score + points : player.score,
      break: player.currentPlayer && tableStatBallsLeft > 0 ? player.break + points : player.break,
      highestBreak: player.currentPlayer && tableStatBallsLeft > 0 && player.break + points > player.highestBreak ? player.break + points : player.highestBreak,
      ballHistory: player.currentPlayer ? [...player.ballHistory, points - 1] : player.ballHistory,
    }
  } else if (mode === ScoreboardMode.FAULT) {
    return {
      ...player,
      score: !player.currentPlayer ? player.score + Math.max(4, points) : player.score,
      break: 0,
      currentPlayer: !player.currentPlayer
    }
  } else if (mode === ScoreboardMode.POSITIVE_CORRECTION) {
    return {
      ...player,
      score: player.currentPlayer ? player.score + points : player.score,
      break: 0,

    }
  } else if (mode === ScoreboardMode.NEGATIVE_CORRECTION) {
    return {
      ...player,
      score: player.currentPlayer ? player.score - points : player.score,
      break: 0,

    }
  } else {
    return {...player};
  }
}

function calculatePlayerAndHealth(state: TheScoreboardState, points: number, tableStatsBallsLeft: number, color: BallColor) {
  let player1 = updateScoreForPlayer(state, state.player1, points, tableStatsBallsLeft);
  let player2 = updateScoreForPlayer(state, state.player2, points, tableStatsBallsLeft);
  let tableStats = updateTableStats(state.mode, state.tableStats, color);

  let player1Health = updateHealth(player1, player2, tableStats);
  let player2Health = updateHealth(player2, player1, tableStats);

  return {player1: player1Health, player2: player2Health, tableStats: tableStats};
}

function updateTableStats(mode: ScoreboardMode, tableStats: TableStats, color: BallColor) {
  if (mode === ScoreboardMode.NORMAL) {
    let updatedTableStats = {
      ...tableStats,
      red: color === BallColor.RED && tableStats.red > 0 ? tableStats.red - 1 : tableStats.red,
      yellow: color === BallColor.YELLOW ? tableStats.red === 0 && tableStats.extraYellow ? 0 : 1 : tableStats.yellow,
      green: color === BallColor.GREEN ? tableStats.yellow === 0 ? 0 : 1 : tableStats.green,
      brown: color === BallColor.BROWN ? tableStats.green === 0 ? 0 : 1 : tableStats.brown,
      blue: color === BallColor.BLUE ? tableStats.brown === 0 ? 0 : 1 : tableStats.blue,
      pink: color === BallColor.PINK ? tableStats.blue === 0 ? 0 : 1 : tableStats.pink,
      black: color === BallColor.BLACK ? tableStats.pink === 0 ? 0 : 1 : tableStats.black,
      extraYellow: color === BallColor.RED && tableStats.red === 1
    };

    return {...updatedTableStats, maxPointsLeft: calculatePointsLeft(updatedTableStats)};
  } else if (mode === ScoreboardMode.BALLS_LEFT_CORRECTION) {
    let updatedTableStats = {
      ...tableStats,
      red: color === BallColor.RED && tableStats.red > 0 ? tableStats.red - 1 : 15,
      yellow: color === BallColor.YELLOW ? tableStats.yellow === 0 ? 1 : 0 : tableStats.yellow,
      green: color === BallColor.GREEN ? tableStats.green === 0 ? 1 : 0 : tableStats.green,
      brown: color === BallColor.BROWN ? tableStats.brown === 0 ? 1 : 0 : tableStats.brown,
      blue: color === BallColor.BLUE ? tableStats.blue === 0 ? 1 : 0 : tableStats.blue,
      pink: color === BallColor.PINK ? tableStats.pink === 0 ? 1 : 0 : tableStats.pink,
      black: color === BallColor.BLACK ? tableStats.black === 0 ? 1 : 0 : tableStats.black
    };
    return {...updatedTableStats, maxPointsLeft: calculatePointsLeft(updatedTableStats)}

  } else {
    return {...tableStats}
  }
}

const createTheScoreboardReducer = createReducer(
  theScoreboardInitialState,
  on(turnPlayer, (state: TheScoreboardState) => ({
    ...state,
    player1: {
      ...state.player1,
      break: 0,
      currentPlayer: !state.player1.currentPlayer

    },
    player2: {
      ...state.player2,
      break: 0,
      currentPlayer: !state.player2.currentPlayer
    }

  })),
  on(potRed, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 1, state.tableStats.red, BallColor.RED);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potYellow, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 2, state.tableStats.yellow, BallColor.YELLOW);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potGreen, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 3, state.tableStats.green, BallColor.GREEN);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potBrown, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 4, state.tableStats.brown, BallColor.BROWN);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potBlue, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 5, state.tableStats.blue, BallColor.BLUE);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potPink, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 6, state.tableStats.pink, BallColor.PINK);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potBlack, (state: TheScoreboardState) => {
    let playerResult = calculatePlayerAndHealth(state, 7, state.tableStats.black, BallColor.BLACK);
    return {
      ...state,
      mode: state.mode === ScoreboardMode.FAULT ? ScoreboardMode.NORMAL : state.mode,
      player1: playerResult.player1,
      player2: playerResult.player2,
      tableStats: playerResult.tableStats,
    }
  }),
  on(potWhite, (state: TheScoreboardState) => ({
    ...state,
    mode: ScoreboardMode.FAULT,

  })),
  on(restart, (state: TheScoreboardState) => ({
    ...theScoreboardInitialState
  })),
  on(newGame, (state: TheScoreboardState) => ({
    ...state,
    mode: ScoreboardMode.NORMAL,
    playerStarted: state.playerStarted === 1 ? 2 : 1,
    player1: {
      ...state.player1,
      highestBreak: 0,
      break: 0,
      score: 0,
      framesWon: state.player1.score > state.player2.score ? state.player1.framesWon + 1 : state.player1.framesWon,
      matchHighestBreak: state.player1.highestBreak > state.player1.matchHighestBreak ? state.player1.highestBreak : state.player1.matchHighestBreak,
      currentPlayer: state.playerStarted === 2
    },
    player2: {
      ...state.player2,
      highestBreak: 0,
      break: 0,
      score: 0,
      framesWon: state.player2.score > state.player1.score ? state.player2.framesWon + 1 : state.player2.framesWon,
      matchHighestBreak: state.player2.highestBreak > state.player2.matchHighestBreak ? state.player2.highestBreak : state.player2.matchHighestBreak,
      currentPlayer: state.playerStarted === 1
    },
    tableStats: {
      ...theScoreboardInitialState.tableStats
    }
  })),
  on(setMode, (state: TheScoreboardState, {mode}) => ({
    ...state,
    mode: mode
  })),
  on(setPlayer1Name, (state: TheScoreboardState, {name}) => ({
    ...state,
    player1: {
      ...state.player1,
      name: name
    }
  })),
  on(setPlayer2Name, (state: TheScoreboardState, {name}) => ({
    ...state,
    player2: {
      ...state.player2,
      name: name
    }
  }))
);

export function theScoreboardReducer(state: TheScoreboardState | undefined, action: Action) {
  return createTheScoreboardReducer(state, action);
}
