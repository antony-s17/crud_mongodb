import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem trying to create a user"})
    }
});

export default router;