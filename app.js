import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/router/message.router.js';
import { corseMiddleware } from './src/cors/middleware.js'

export const createApp = () =>{

    const app = express();
    
    app.use(bodyParser.urlencoded({extended:true}))

    app.use(bodyParser.json())
    
    app.use(corseMiddleware);

    app.use('/mail', router)
    
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`listening on port: http://localhost:${PORT}`)
});
}



