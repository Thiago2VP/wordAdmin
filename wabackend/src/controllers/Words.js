import WordsModel from "../models/Words";

class Words {
  async index(req, res) {
    const result = await WordsModel.showAll();
    res.send(result);
  }

  async search(req, res) {
    const name = req.params.id;
    const result = await WordsModel.showSome(name);
    res.send(result);
  }

  async edit(req, res) {
    const { Platform, email, password } = req.body;
    const result = await WordsModel.edit({ Platform, email, password });
    res.send(result);
  }

  async insert(req, res) {
    const { Platform, email, password } = req.body;
    const result = await WordsModel.insert({ Platform, email, password });
    res.send(result);
  }

  async delete(req, res) {
    const name = req.params.id;
    const result = await WordsModel.delete(name);
    res.send(result);
  }
}

export default new Words();
