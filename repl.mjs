#!/usr/bin/env node
import * as repl from 'repl';
import {SplitQueries} from './parser/SplitQueries.mjs';
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

const state = {
  p(sql) {
    const result = SplitQueries(sql);
    result.forEach(query => {
      console.log(`running: ${query}`);
      const result = eval(query);
      console.table(result);
    })
  }
};

const myRepl = repl.start("stupid sql > ");

Object.assign(myRepl.context, state);