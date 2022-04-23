import SqlBaseListener from './SqlBaseListener.js'

export class CustomListener extends SqlBaseListener {
  constructor(result) {
    super();
    this.result = result;
  }

  // override default listener behavior
  exitStatement = function(ctx) {
    console.log(ctx)
    this.result.push([ctx.start.start, ctx.stop.stop]); // storing the start and stop indices of every statement
  }
}