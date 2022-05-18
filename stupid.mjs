#!/usr/bin/env node
import * as fs from 'fs';
import { SplitQueries } from './parser/SplitQueries.mjs';
import {
  select, from, outerJoin, innerJoin, orderBy, groupBy, insert, deleteFrom, deleteId,
  updateFrom, updateId, count, database
} from './lib/fake-sql.mjs';
import { users } from './lib/users-database.mjs';
import { heroes } from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

const readScriptFromFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const parseScriptWithSplitQueries = (script) => {
  return SplitQueries(script)
}

const script = await readScriptFromFile('test.sql');
const parsed = parseScriptWithSplitQueries(script);
parsed.forEach(query => {
  console.log(`running: ${query}`);
  const result = eval(query);
  console.table(result);
})
