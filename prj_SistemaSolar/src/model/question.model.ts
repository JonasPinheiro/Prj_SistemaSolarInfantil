export interface Question {
  id: number;
  question: string;
  alternatives: {
    option: string;
    correct: boolean;
  }[];
}
