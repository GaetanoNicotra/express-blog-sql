const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/post')

//middleware
app.use(express.static('public'))

app.use(express.json());

app.use('/posts', postsRouter)

// rotta base
app.get("/", (req, res) => {
    res.json('Benvenuto nella Hompage dei miei posts')
});



// metto in ascolto il server sulla porta 3000
app.listen(port, () => {
    console.log('Server in ascolto sulla porta' + ' ' + port)
})