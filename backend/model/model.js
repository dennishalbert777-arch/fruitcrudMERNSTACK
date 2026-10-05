const db=require("../config/db")

exports.getfruit=async () => {
    const[result]=await db.query("SELECT * FROM fruits")
    return result
    
}



exports.registerfruit=async (data) => {
    const[result]=await db.query("INSERT INTO fruits(name,price,unit)value(?,?,?)",[data.name,data.price,data.unit])
    return result
    
}



exports.deletefruit=async (id) => {
    const[result]=await db.query("DELETE FROM fruits where id=?",[id])
    return result
}