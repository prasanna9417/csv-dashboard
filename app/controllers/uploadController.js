const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

module.exports.create=(req,res,next)=>{
    console.log(req.file)
    const csvData = []
    if(!req.file) {
        res.status(500)
        return next(err)
    }
    const extension = path.extname(req.file.path)
    if (extension != '.csv') {
        res.json({error:"only csv file is allowed"})
    }
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            
            //console.log(row)
            csvData.push(row)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            Promise.all(csvData).then(values => {
                fs.unlinkSync(req.file.path)
                res.send(csvData)
            })
            .catch((err) => {
                res.json(err)
            })
        }) 
}


 