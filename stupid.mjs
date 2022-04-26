//import * as fs from 'fs';
import {SplitQueries} from './parser/SplitQueries.mjs';
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

/*const readScriptFromFile = (file) => {
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



const script = await readScriptFromFile('test.sql');
const parsed = parseScriptWithSplitQueries(script);
*/

const parseScriptWithSplitQueries = (script) => {
    return SplitQueries(script)
}

export async function searchWithQueryValue (query){

    const parsed = parseScriptWithSplitQueries(query);

    await parsed.forEach(query => {
        console.log(`running: ${query}`);
        const result =  eval(query)
        console.log(result);
        return result    
})

}