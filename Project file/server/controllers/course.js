import Course from "../models/course.js";

const getAllCourses = async (req, res) => {
    try {
        const { discipline } = req.params;

        const courses = await Course.find({ discipline });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve courses' });
    }
};


const getCourseById = async (req, res) => {
    const courseId = req.params.id;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve the course' });
    }
};

export { getAllCourses, getCourseById }