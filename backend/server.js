const app = require('./app');
const path = require('path');
const connectDatabase = require('./config/database');


connectDatabase();


// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
    const __dirnamePath = path.resolve();
    app.use(express.static(path.join(__dirnamePath, 'frontend/build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirnamePath, 'frontend/build/index.html'));
    });
  }
  
const server = app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(()=>{
        process.exit(1);
    })
})



