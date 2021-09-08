const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes here

//hivindu
const applicationRoutes = require('./routes/applications')
const registeredRoutes = require('./routes/registered')

//dima
const eventRoutes = require('./routes/specialevents');
const timetableRoutes = require('./routes/timetables');
const attendanceRoutes = require('./routes/attendances');
const studentattendancesRoute = require('./routes/studentattendances');
const leaverequests = require('./routes/leaverequest');
const ttrequest = require('./routes/timetablerequest');



//app middleware
app.use(bodyParser.json());
app.use(cors());




//route middleware

//hivindu
app.use(applicationRoutes);
app.use(registeredRoutes);

//dima
app.use(eventRoutes);
app.use(timetableRoutes);
app.use(attendanceRoutes);
app.use(studentattendancesRoute);
app.use(leaverequests);
app.use(ttrequest);



const PORT = 8090;
const DB_URL = 'mongodb+srv://admin:admin@institutedb.nhxwx.mongodb.net/instituteDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB connect failed', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

