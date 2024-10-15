export interface DartsPlayer {
  name: string;
  score: ScoreData[];
  currentPlayer: boolean;

  doubleEndings: String[][];
}

export interface ScoreData {
  newScore: number;
  darts: String[];
  visitScore: number;
}


export interface GameStats {
  numberOfDarts: number;
}
