
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

describe("select", () => {
    it("should find by name", () => {
        const result = select('name', from('users', { where: `users.name === 'Peter Parker'` }))
        expect(result[0].name).toBe('Peter Parker')
    })
    it("should find by range (between)", () => {
        const result = select('name', from('users', { where: 'users.age > 30 && users.age < 40'}))
        const names = result.map(user => user.name)
        expect(names.includes('Peter Parker')).toBe(false)
        expect(result.length).toBe(16)
    })
    it("should accept OR conditions", () => {
        const result = select('name', from('users', { where: 'users.city === "Gotham" || users.city === "Metropolis"'}))
        const names = result.map(user => user.name)
        expect(names.includes('Bruce Wayne')).toBe(true)
        expect(names.includes('Clark Kent')).toBe(true)
        expect(names.includes('Peter Parker')).toBe(false)
        expect(result.length).toBe(7)
    })
    it("should group and organize set by the column", () => {
        const result = select('name,age', groupBy('city', from('users'))['Coast City'])
        expect(result[0].name).toBe('Hal Jordan')
    })
    it("should inner join with another table", () => {
        const result = select('name,alterego', innerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes')))
        expect(result[0].alterego).toBe('Batman')
        expect(result.length).toBe(2)
    })
    it("should outer join with another table", () => {
        const result = select('name,alterego', outerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes')))
        expect(result[1].name).toBe('James Gordon')
        expect(result[1].alterego).toBe(null)
        expect(result.length).toBe(3)
    })
})

describe("scenario", () => {
    it("should be able to play an entire insert, select, update, delete scenario", () => {
        let user_id = insert('users', { name: 'Katar Hol', age: 35, city: 'Thanagar' })
        let hero_id = insert('heroes', { alterego: 'Hawkman', users_id: user_id })
        let total_users = select('count', from('users'))
        let total_heroes = select('count', from('heroes'))
        
        let result = select('name,alterego', innerJoin(from('users', { where: 'users.city === "Thanagar"' }), from('heroes')))
        expect(result[0].name).toBe('Katar Hol')
        expect(result[0].alterego).toBe('Hawkman')
        
        updateFrom('users', { age: 37 }, { where: 'users.city === "Thanagar"' } )
        result = select('name,age', from('users', { where: `users.id === ${user_id}` }))
        expect(result[0].age).toBe(37)
        
        deleteId('users', user_id)
        deleteId('heroes', hero_id)
        expect(select('count', from('users'))).toBe(total_users - 1)
        expect(select('count', from('heroes'))).toBe(total_heroes - 1)
    })
})  
