const express = require("express");
const router = express.Router();
const service = require('../service')

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/tasks", async(req, res) => {
  try {
    const getTitlesRes = await service.getTitles()
    let result = []
    if (getTitlesRes?.data) {
      result = getTitlesRes.data.map((value, index) => {
        return {uuid: index, title: value }
      })
    }
    res.send({ response: result }).status(200);
  } catch (error) {
    console.log('Algo salio mal', error);
  }
});

router.put("/tasks", async(req, res) => {
  try {
    console.log('Get Request', req);
    res.send({ response: 'Ok' }).status(200);
  } catch (error) {
    console.log('Algo salio mal', error);
  }
});

module.exports = router;