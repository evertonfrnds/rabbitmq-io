const axios = require("axios").default;

module.exports = {
  async handle(method, topic) {
    switch (method) {
      case "GET_DATA":
        const value = Math.floor(Math.random() * 100) + 1;

        await this.insert(topic, value);
        break;

      default:
        break;
    }
  },
  async insert(category, value) {
    await axios
      .post("http://localhost:3000/data", {
        category,
        value: value.toString(),
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
