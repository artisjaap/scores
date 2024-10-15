export interface PlayerStats {
  name: string;
  score: number;
  break: number;
  highestBreak: number;
  framesWon: number;
  matchHighestBreak: number;
  currentPlayer: boolean;
}

export interface TableStats {
  red: number;
  yellow: number;
  green: number;
  brown: number;
  blue: number;
  pink: number;
  black: number;
  maxPointsLeft: number;
  extraYellow: boolean;

}

export enum ScoreboardMode {
  NORMAL, FAULT, NEGATIVE_CORRECTION, POSITIVE_CORRECTION, BALLS_LEFT_CORRECTION
}

export enum BallColor {
  RED, YELLOW, GREEN, BROWN, BLUE, PINK, BLACK
}
