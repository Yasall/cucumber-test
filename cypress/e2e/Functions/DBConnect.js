const sqlite3 = require('better-sqlite3')

class DBConnect {

    makeConnection(database) {
        let db;
        
        db = db.prepare(`../resources/${database}`);
        
        db.close();
    }

    verifyTable(database, table) {
       let db = db.prepare(`../resources/${database}`);

        const results = db.prepare(`select * from sqlite_master WHERE name = ${table}`);
        expect(results).to.exist;

        db.close();
    }

    verifyValue(database, table ,data) {
        let db = db.prepare(`../resources/${database}`);
        const results = db.prepare(`select * from ${table} where username = ${data}`)
        expect(results).to.exist;

        db.close();
    }
}