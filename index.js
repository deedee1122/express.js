const express = require('express')
const multer = require('multer')
const path = require('path')

const cors = require('cors')
const { error } = require('console')

const image = ['https://plus.unsplash.com/premium_photo-1700984292453-732e26d205fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
'https://plus.unsplash.com/premium_photo-1679079455767-1bbb40492d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGlvfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1542262867-c4b517b92db8?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//'https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]


const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }

  })
  const upload = multer({
    storage: storage,
    limits: {fileSize: 100000},
    fileFilter: function(req, file, cb){
      //checkFileType(file, cb)
    }
  }).single('image')


  // function checkFileType(file, cb){
  //   const filetypes = '/jpeg|jpg|png|gif';
  // }


  const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))


app.get('/', (req, res) =>{
    res.status(200).json(image)
   

})

app.post("/upload/image", upload, function(req, res) {
  
  req.file
  

  image.push(req.file)
    res.sendStatus(201)
    
})

const port = 3000

app.listen(port, () =>{
    console.log(`Server started on ${port}`)
});