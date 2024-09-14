const mongoose = require("mongoose");

const getConection = async () => {
  try {
    const url =
      'mongodb+srv://lisandroc1990:ItiKcMTkxMQzh9hS@cluster0.rdwn8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    await mongoose.connect(url);
    console.log("conexcion es exitosa");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getConection
}
//ItiKcMTkxMQzh9hS