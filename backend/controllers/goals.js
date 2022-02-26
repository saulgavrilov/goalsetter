const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/v1/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get All Goals' });
});

// @desc    Create goal
// @route   POST /api/v1/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(201).json({ message: 'Create New Goal' });
});

// @desc    Update goal
// @route   PUT /api/v1/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal (ID: ${req.params.id})` });
});

// @desc    Delete goal
// @route   DELETE /api/v1/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal (ID: ${req.params.id})` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
