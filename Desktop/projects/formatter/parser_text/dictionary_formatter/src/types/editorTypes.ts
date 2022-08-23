interface DesriprtionWord {
  word: string;
  translate: string;
  comment: string;
}

export interface WordData {
  [key: string]: DesriprtionWord;
}
