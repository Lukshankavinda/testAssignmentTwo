const express = require('express');
const cors = require('cors');// cors middleware
const bodyParser = require('body-parser');// body-parser middleware

const app = express();

var corsOptions ={
	origin:'https://localhost:5000'
}


//middleware
app.use(cors(corsOptions))

//parse aplication/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// routers
const router = require('./routes/router.js')
app.use('/api', router)

// static Image folder /public/images/profile_images
app.use('/public/images/profile_images', express.static('./public/images/profile_images'))


// port

const PORT = process.env.PORT || 5000


//test api 
app.get('/', (req,res) => {
	res.json({message: 'hello from api'})
})


// server 
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})