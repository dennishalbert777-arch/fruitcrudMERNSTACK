const mysql=require("mysql2")

const con=mysql.createPool({
    user:"root",
    host:"localhost",
    database:"joseph",
    password:process.env.DB_PASSWORD

})

module.exports=con.promise()