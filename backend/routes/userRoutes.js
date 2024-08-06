// backend/routes/users.js

const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

// Add User
router.post('/', async (req, res) => {
  try {
    const { username, address, email, password, image } = req.body;
    const user = new UserModel({ username, address, email, password, image });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete User
router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: error.message });
  }
});

// Fetch Users
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
