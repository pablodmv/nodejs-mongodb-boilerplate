const { Request, Response } = require("express");

const apiAlive = (req, res) => {
  const response = {
    message: "live",
  };
  res.json(response);
};


const apiPing = (req, res) => {
  const { data } = req.body;
  console.log(data);
  const response = {
    data
  }
  res.json(response)
}

module.exports = {
  apiAlive,
  apiPing
};
