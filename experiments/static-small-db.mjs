import {users} from '../lib/users-database.mjs';
import sizeof from 'object-sizeof';

console.table(users[0]);

const new_user = { name: 'Levi Ackerman', age: '37', city: 'Paradis' };
users.push(new_user)
new_user.id = users.length + 1;

const results = users.filter(user => user.name === 'Levi Ackerman')
console.table(results);

const serialized = JSON.stringify(users);

console.log(`serialized: ${sizeof(serialized)}`);	
console.log(`deserialized: ${sizeof(users)}`);
console.log(`increase: ${(sizeof(serialized) - sizeof(users))/sizeof(users)}`);