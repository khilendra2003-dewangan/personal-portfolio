
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact - Save contact form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, projectType, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            projectType,
            message
        });

        await newContact.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ success: false, message: 'Server Error. Please try again later.' });
    }
});

export default router;
