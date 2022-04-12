const express = require('express')
const router = require('./routes.js')
const app = express();
const port = 8903

app.use(router)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
 
app.listen(port, ()=>{
    console.log(`listen on ${port}`)
})