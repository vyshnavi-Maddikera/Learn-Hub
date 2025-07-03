import BlogModel from "../models/blog.js";


export const searchBlogs = async (req, res) => {
    try {
        const { text, field } = req.body;
        //  Search Logic

        text = text.toLowerCase();
        const title_query = { title: text }
        const field_query = { field: field }
        const title_blogs = BlogModel.find(title_query).toArray();
        const field_blogs = BlogModel.find(field_query).toArray();
        if (!title_blogs) {
            if (field_blogs) {
                res.status(201).json({ message: "Not blogs with given title", blogs: field_blogs })
            }
            else {
                return res.status(200).json({ mesage: "Not Found" });
            }
        }
        res.status(200).json({ blogs: title_blogs });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

};

export const postBlog = async (req, res) => {
    
    try {
        const { title, subtitle, descriptions, author, discipline } = req.body;
        const image = req.file;
        
        if (!title || !subtitle || !descriptions || !author || !image || !discipline) {
            return res.status(400).send({ msg: "Please provide all fields" })
        }

        const newBlog = new BlogModel({
            title,
            subtitle,
            descriptions,
            author,
            discipline,
            imageUrl: image.filename,
        });
        await newBlog.save();
        res.status(200).json({ message: "Successfully Saved !!" });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
};

export const getBlog = async (req, res) => {
    try {
        const blogid = req.params.id;        

        const blog = await BlogModel.findById(blogid)
            .populate({
                path: 'author',
                select: '-password',
            })
        if (!blog) {
            res.status(400).json({ message: "Blog not found" });
        }
        res.status(200).json({ blog })
    }
    catch (error) {
        res.status(500).json({ error: err.message })
    }        
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find()
            .populate({
                path: 'author',
                select: '-password',
            });

        res.status(200).json({
            msg: "Blogs fetched successfully",
            blogs
        })

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getBlogsByCategory = async (req, res) => {
    try {
        const blogCategory = req.params.category;
        const blogs = await BlogModel.find({ category: blogCategory });
        res.status(200).json({
            msg: "Blogs fetched successfully",
            blogs
        })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

