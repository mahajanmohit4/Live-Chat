  
const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");



let updatePassword = async (user) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();

    // const pass = "mohitmahajan";
    // const email = "mohit@gmail.com"
    const pass = user.password;
    const email = user.email;

    console.log(email);
    
    // let sql = "SELECT * FROM registration ";
    let sql  = `UPDATE registration
    SET password = "${pass}"
    WHERE email = "${email}";`
    let result = await connection.queryAsync(sql );
    console.log(result);

    console.log("db connected ... ");
    await connection.endAsync();
    return result;

}

// readAllCustomers();

module.exports = { updatePassword };