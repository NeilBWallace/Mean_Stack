const express = require('express');
const app = express();
const mongoose =require('mongoose');
mongoose.Promise=global.Promise;



const config = require('./database');


mongoose.connect(config.url,(err)=>{
	if (err){
		console.log('could not connect',err);
	} else
	{
		console.log('connected');
	}


});

app.use(express.static(__dirname + '/client/dist/'));
const path=require('path');
app.get('*',(req,res) =>{
	res.send(path.join(__dirname + '/client/dist/'));
});

app.listen(8080, () =>
	{
		console.log('listeiprott 8080');
			});