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

//diniru
const subjectRoutes = require('./routes/subjects');
const enrollmentRoutes = require('./routes/enrollments');

//nethmi
const lecturerRoutes = require('./routes/lecturers');
const regRoutes = require('./routes/registration');
const reqRoutes = require('./routes/request');
const timetableRoutes = require('./routes/updateTimet');
const detailRoutes = require('./routes/updateDetails');


//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


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

//diniru
app.use(subjectRoutes);
app.use(enrollmentRoutes);

//nethmi
app.use(lecturerRoutes);
app.use(regRoutes);
app.use(reqRoutes);
app.use(timetableRoutes);
app.use(detailRoutes);


const PORT = 8000;
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

