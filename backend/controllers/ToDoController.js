/*const { models } = require("mongoose");*/
const TodoModel = require("../models/TodoModel.js");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text })
    .then((data) => {
      console.log(`Added successfully! ${data}`);
      res.send(data);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send(`Updated Successfully!`);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send(`Deleted Successfully!`);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};
