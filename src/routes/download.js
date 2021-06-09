const router=require('express').Router()
const fileinfo = require("../files/filemodel");

router.get('/:uuid',async (req,res)=>
{
    const file = await fileinfo.findOne({ uuid: req.params.uuid });
    if(!file) {
         return res.render('download', { error: 'Link has been expired.'});
    } 
    const response = await file.save();
    const filePath = `${__dirname}/../../${file.path}`;
    res.download(filePath);
})

module.exports=router