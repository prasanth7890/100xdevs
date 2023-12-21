const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('<YOUR MONGO URI HERE>').then(function() {
    console.log('MongoDb connected Succesfully');
}).catch((err)=>{
    console.log('failed to connect to DB\n', err);
})

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Course',
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}