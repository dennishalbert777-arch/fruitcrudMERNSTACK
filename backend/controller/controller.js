const model=require("../model/model")

exports.getfruit=async (req,res) => {

    const data=await model.getfruit()
    res.json(data)
    
}


exports.registerfruit=async (req,res) => {

    const data=await model.registerfruit(req.body)
    res.json(data)
    
}



exports.deletefruit=async (req,res) => {
    const id=req.params.id
    const data= await model.deletefruit(id)
    res.json(data)
    
}