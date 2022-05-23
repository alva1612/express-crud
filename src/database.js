import mysql from 'mysql2';

(async ()=> {
    try {
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'express_crud'
        });
        db.connect( (err) => {
            if (err) {
                console.error('Error connecting: ', err.stack);
                return;
            }
            console.log('Conectado a DB');
        });
        db.end();
    } catch (error) {
        console.error(error);
    }
})();