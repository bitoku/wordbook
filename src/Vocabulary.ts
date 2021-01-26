export type Vocabulary = {
  word: string,
  pronunciation: string,
  syllable: string,
  pos: PoS,
  inflection: string,
  meanings: string[],
  text: string,
}

export type PoS = string; // TODO: part of speech

export type ExampleSentence = {
  sentence: string,
  meaning: string
}