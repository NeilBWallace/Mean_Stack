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
app.get('*',(req,res) =>{
	res.send('<h1>Hello kkkworld</h1>');
});

app.listen(8080, () =>
	{
		console.log('listeiprott 8080');
			});