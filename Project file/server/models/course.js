import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        enum: ['engineering', 'medical', 'development', 'technology', 'marketing', 'science', 'designer'],
        required: true,
    },
    chapters: [
        {
            title: {
                type: String,
                required: true
            },
            subTopics: [
                {                    
                    title: {
                        type: String,
                        required: true
                    },
                    videoUrl: {
                        type: String,
                        required: true
                    },
                }
            ],
        }
    ],
    metadata: {
        professor: {
            type: String,
            required: true
        },
    },
});

const Course = mongoose.model('course', courseSchema);
export default Course;