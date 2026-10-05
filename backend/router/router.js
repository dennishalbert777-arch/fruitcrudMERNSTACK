const express=require("express")
const router=express.Router()
const multer = require("multer")

const upload = multer()
const controller=require("../controller/controller")

router.get("/",controller.getfruit)

router.post("/register",upload.none(),controller.registerfruit)

router.delete("/:id",controller.deletefruit)


module.exports=router