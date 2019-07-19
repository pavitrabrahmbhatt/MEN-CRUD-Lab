const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/robots';


mongoose.connect(connectionString,
  { useNewUrlParser: true,
    useCreateIndex: true // this will get rid of that
    // depracation warning we were getting yesterday
  });

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose disconnected to ${connectionString}`)
})

mongoose.connection.on('error', (err) => {
  console.log(`mongoose error: ${err}`)
})