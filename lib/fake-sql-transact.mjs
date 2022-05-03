import fs from 'fs';

export const openAppendOnlyTransactionLog = (path) => {
    const fd = fs.openSync(path, 'a')
    return fd
}

const saveCommandInTransactionLog = (fd, command) => {
    const buffer = Buffer.from(command + "\n")
    fs.writeSync(fd, buffer, 0, buffer.length, null, (err, written, buffer) => {
        if (err) {
            return err
        } else {
            return written
        }
    })
}

export const decorateInsertTransaction = (fd, insertFn) => {
    return (table, values) => {
        const id = insertFn.call(this, table, values)
        saveCommandInTransactionLog(fd, `insertOrig('${table}', ${JSON.stringify(values)})`)
        return id
    }
}

export const decorateUpdateFromTransaction = (fd, updateFn) => {
    return (table, values, conditions) => {
        const counter = updateFn.call(this, table, values, conditions)
        saveCommandInTransactionLog(fd, `updateFromOrig('${table}', ${JSON.stringify(values)}, ${JSON.stringify(conditions)})`)
        return counter
    }
}

export const decorateDeleteFromTransaction = (fd, deleteFn) => {
    return (table, where) => {
        const ids = deleteFn.call(this, table, where)
        saveCommandInTransactionLog(fd, `deleteFromOrig('${table}', ${JSON.stringify(where)})`)
        return ids
    }
}

export const replayTransactionLog = (path, insertOrig, deleteFromOrig, updateFromOrig) => {
    const fd = fs.openSync(path, 'r')
    const buffer = Buffer.alloc(1024)
    let offset = 0
    while (true) {
        const read = fs.readSync(fd, buffer, 0, 1024, offset)
        if (read === 0) break
        const line = buffer.toString('utf8', 0, read)
        console.log("replaying: " + line)
        eval(line)
        offset += read
    }
}
