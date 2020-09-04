const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");


let ADDCustomers2 = async (user) => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

     
        let sql = "INSERT INTO registration (username,email,phone,password) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql,[user.name1 ,user.email1 ,user.phone1 ,user.password1]);
        console.log(result);


        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}


let authenticatePass = async (user) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();
    console.log(user);
    let sql = "SELECT * FROM registration  WHERE  EMAIL=?";
    const results = await connection.queryAsync(sql, [
      user.email
    ]);
    console.log("connected with db..");
    console.log(results);
    await connection.endAsync();
  
    if (results.length === 0) {
      throw new Error("Invalid Credentials");
    }
  };
  

module.exports = {authenticatePass};
