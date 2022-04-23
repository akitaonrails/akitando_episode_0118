import SqlBaseListener from './SqlBaseListener.js'

export var CustomListener = function(result) {
  this.result = result;
  SqlBaseListener.call(this); // inherit default listener
  return this;
};

// continue inheriting default listener
CustomListener.prototype = Object.create(SqlBaseListener.prototype);
CustomListener.prototype.constructor = CustomListener;

// override default listener behavior
CustomListener.prototype.exitStatement = function(ctx) {
  console.log(ctx)
  this.result.push([ctx.start.start, ctx.stop.stop]); // storing the start and stop indices of every statement
};