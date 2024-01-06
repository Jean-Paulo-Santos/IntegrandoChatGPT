const inputPrompt = require("../Models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const OpenAIAPI = openai.configuration();
    const inputModel = new inputPrompt(req.body);

    try {
      const response = await OpenAIAPI.creatCompletion(
        openai.textCompletion(inputModel)
      );
      return res.status(200).json({
        secess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response.data
          : "there was an inssue on the server",
      });
    }
  },
};
