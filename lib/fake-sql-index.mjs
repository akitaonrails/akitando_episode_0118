import AVLTree from 'avl';

export const createIndex = (table, column) => {
    indexes[table] = indexes[table] || {}
    indexes[table][column] = new AVLTree()
    return indexes[table][column]
}      

export const insertIndex = (table, column, value, id) => {
    const index = indexes[table][column]
    if (index === undefined) return
    const node = index.find(value)
    if (node === null) {
        const ids = new Set()
        ids.add(id)
        index.insert(value, ids)
    } else {
        node.data.add(id)
    }
}

export const removeIndex = (table, column, value, id) => {
    const index = indexes[table][column]
    if (index === undefined) return
    const node = index.find(value)
    if (node === null) return
    node.data.delete(id)
    if (node.data.size === 0) {
        index.remove(value)
    }
}

export const getRangeIndex = (table, column, min, max) => {
    const index = indexes[table][column]
    if (index === undefined) return []
    const result = []
    index.range(min, max, (node) => {
        result.push(...node.data)
    })
    return result
}

export const getFromIndex = (table, column, value) => {
    const index = indexes[table][column]
    if (index === undefined) return []
    const node = index.find(value)
    if (node === null) return []
    return [...node.data]
}

export const getFromIds = (table, ids) => {
    return ids.map(id => table[id - 1])
}

export const decorateInsert = (insertFn) => {
    return (table, values) => {
        const id = insertFn.call(this, table, values)
        Object.keys(values).forEach(column => {
            insertIndex(table, column, values[column], id)
        })
        return id
    }
}

export const decorateDeleteId = (deleteIdFn) => {
    return (table, id) => {
        const counter = deleteIdFn.call(this, table, id)
        Object.keys(indexes[table]).forEach(column => {
            removeIndex(table, column, from(table, { where: `${table}.id === ${id}` })[0][column], id)
        })
    }
}

export const indexes = {}
