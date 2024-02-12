const express = require('express')
const postRoutes = require('./routes/posts.js')
const app = express()

app.use('/api/v1/post', postRoutes)
const port = 3000
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
