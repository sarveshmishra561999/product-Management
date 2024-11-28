const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
    user:'candidate',
    password:"NoTeDeSt^C10.6?SxwY882}",
    database:'conqtvms_dev',
    port:3306,
    connectionLimit:10,
})
module.exports =pool.promise()
