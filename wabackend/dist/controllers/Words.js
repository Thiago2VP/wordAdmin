"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Words = require('../models/Words'); var _Words2 = _interopRequireDefault(_Words);

class Words {
  async index(req, res) {
    const result = await _Words2.default.showAll();
    res.send(result);
  }

  async search(req, res) {
    const name = req.params.id;
    const result = await _Words2.default.showSome(name);
    res.send(result);
  }

  async edit(req, res) {
    const { Platform, email, password } = req.body;
    const result = await _Words2.default.edit({ Platform, email, password });
    res.send(result);
  }

  async insert(req, res) {
    const { Platform, email, password } = req.body;
    const result = await _Words2.default.insert({ Platform, email, password });
    res.send(result);
  }

  async delete(req, res) {
    const name = req.params.id;
    const result = await _Words2.default.delete(name);
    res.send(result);
  }
}

exports. default = new Words();
