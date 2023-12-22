const { Router, request } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken")
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const {username, password} = req.body;
        const doc = await User.create({username, password});
        res.json({message: 'User created succesfully'});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;
        await User.findOne({username, password});
        const token = jwt.sign({username: username, password: password}, process.env.JWT_SECRET);
        res.json({token: token});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({"courses": courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const course = await Course.findOne({_id: req.params.courseId});
        const UpdatedUser = await User.findOneAndUpdate({
            username: req.user,
        },{
           $push: {purchasedCourses: course}
        });

        res.json({message: 'Course Purchased Succesfully'});
    } catch (error) {
        res.json({"error": error.message});
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({username: req.user});
        await user.populate('purchasedCourses');
        res.json({purchasedCourses: user.purchasedCourses});
    } catch (error) {
        res.json({"error": error.message});
    }
});


module.exports = router;