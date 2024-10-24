const sql = require('mssql');

// Configuration to connect to Azure SQL
const config = {
    user: 'iccdasqladmin',
    password: 'Muscat@1234567',
    server: 'iccdalabdbserver.database.windows.net',
    database: 'ICCDALabDatabase',
    options: {
        encrypt: true
    }
};

// Connect to the database
sql.connect(config, err => {
    if (err) console.log(err);
    else console.log('Connected to Azure SQL Database');

    // Query example
    const request = new sql.Request();
    request.query('SELECT * FROM Users', (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    });
});
