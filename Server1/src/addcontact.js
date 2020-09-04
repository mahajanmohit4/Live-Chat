  
const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");

let ADDContact11 = async (user) => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

     
        let sql = "INSERT INTO contact (NAME , EMAIL ,MASSAGE ) VALUES(?,?,?)";
        let result = await connection.queryAsync(sql,[user.name ,user.email ,user.massage]);
        console.log(result);

        console.log("connected .. ");

        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}

module.exports = {ADDContact11};
// const input = {name: "Amit", email: "amit@gmail.com", massage: "nniasdvadsf asdfnon dsaf"};
// ADDContact(input);