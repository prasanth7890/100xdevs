const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");

const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;
        const doc = await Admin.create({username, password});
        res.json({message: 'Admin created succesfully'});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;
        await Admin.findOne({username, password});
        const token = jwt.sign({username: username, password: password}, process.env.JWT_SECRET);
        res.json({token: token});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = await Course.create({title, description, price, imageLink});
    res.json( { message: 'Course created successfully', courseId: course.id });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json(courses);
});

module.exports = router;