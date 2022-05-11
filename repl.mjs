#!/usr/bin/env node
import promptSync from 'prompt-sync'
import {SplitQueries} from './parser/SplitQueries.mjs';
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

const parseScriptWithSplitQueries = (script) => {
  const result = SplitQueries(script);
  try {
    result.forEach(query => {
      console.log(`running: ${query}`);
      const result = eval(query);
      console.table(result);
    })
  } catch(err) {
    console.error(err.message);
  }
  const query = prompt('stupid query > ')
  parseScriptWithSplitQueries(query)
}

console.log("Welcome to Stupid Client! Type Ctrl+C to exit.");
const prompt = promptSync({sigint: true});
const query = prompt('stupid query > ')
parseScriptWithSplitQueries(query)
