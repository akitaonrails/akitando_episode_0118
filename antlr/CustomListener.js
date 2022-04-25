import SqlBaseListener from './SqlBaseListener.js'

export class CustomListener extends SqlBaseListener {
  constructor(result) {
    super();
    this.result = result;
  }

}