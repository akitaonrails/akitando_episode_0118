import SQLiteParserListener from './SQLiteParserListener.js'

export class CustomListener extends SQLiteParserListener {
  constructor(result) {
    super();
    this.result = result;
  }

}