import express from 'express';
import config from './server/config';

//Initialization
const app = config(express());

//Server
app.listen(app.get('port'),() => {
    console.log('Server On Port: ', app.get('port'));
});