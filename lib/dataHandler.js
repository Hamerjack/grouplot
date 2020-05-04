var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lottery'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Connection Successful 1.');
    } else {
        console.log('Connection unsuccessful');
    }
});

module.exports = connection;

// book_recommendations.js

// stores the favorite author in a constant variable
const favoriteAuthor = { name: "Ken Bruen", genre: "Noir", nationality: "Irish" };

// returns the favorite book
function favoriteBook() {
    return { title: "The Guards", author: "Ken Bruen" };
}
 
// returns a list of good books
function getBookRecommendations() {
    return [
        {id: 1, title: "The Guards", author: "Ken Bruen"},
        {id: 2, title: "The Stand", author: "Steven King"},
        {id: 3, title: "The Postman Always Rings Twice", author: "James M. Cain"}
    ];
}
 
// exports the variables and functions above so that other modules can use them
module.exports.favoriteAuthor = favoriteAuthor;
module.exports.favoriteBook = favoriteBook;
module.exports.getBookRecommendations = getBookRecommendations;


module.exports.connection = connection;


































// const mysql = require('mysql');

// const dataHandler = {
//     // startDataHandler: (credentials) => {
//     //     return new Promise((res, rej) => {
//     //         const con = module.createConnection(credentials);
//     //     });
//     // },
//     // createConnection: (credentials) => {
//     //     const con = mysql.createConnection({
//     //         host: credentials.host,
//     //         user: credentials.user,
//     //         password: credentials.password,
//     //     });

//     //     return con;
//     // },
//     // startConnection: (connection) => {
//     //     connection.connect((err) => {
//     //         if(err){
//     //             console.info('Error connecting to Db');
//     //             return;
//     //         }
//     //         console.info('Connection established');
//     //     });
//     // },
//     // endConnection: (connection) => {
//     //     connection.end((err) => {
//     //         if(err){
//     //             console.info('Error Ending connection of Db');
//     //             return;
//     //         }
//     //         console.info('Connection ended');
//     //     });
//     // },
//     registerUser: (connection, data) => {
//         connection.query(`
//             INSERT INTO registeredUsers
//             (userName, emailAddress, firstName, lastName, password)
//             VALUES
//             ('TESTNAVTEJ1', 'USETHIS', 'UNKNOWN', 'NO KNOWN', 'DASHDASHDASH');
//         `);

//         return;
//     }
// };

// module.exports = dataHandler;