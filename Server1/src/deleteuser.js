  
const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");



let deleteUser = async (user) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();

   
   
    const email = user.email;

    console.log(email);
    
  
  

    let sql = `DELETE FROM registration WHERE email="${email}";`
    let result = await connection.queryAsync(sql );
    console.log(result);

    console.log("db connected ... ");
    await connection.endAsync();
    return result;

}

// const data = { email : "asdf@asdf.com" };
// deleteUser(data);

module.exports = { deleteUser };