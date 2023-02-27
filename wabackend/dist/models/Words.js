"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongodb = require('mongodb');

class WordsModel {
  async connect() {
    const url = process.env.CONNECTION_URL;
    const client = new (0, _mongodb.MongoClient)(url);
    const dbName = "words";

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("information");

    return collection;
  }

  async showAll() {
    const collection = await this.connect();
    const data = await collection.find({}).toArray();
    return data;
  }

  async showSome(name) {
    const collection = await this.connect();
    const data = await collection.find({ Platform: name }).toArray();
    return data;
  }

  async edit(body) {
    const collection = await this.connect();
    const data = await collection.updateOne({ Platform: body.Platform }, { $set: body });
    return data;
  }

  async insert(body) {
    const collection = await this.connect();
    const data = await collection.insertOne(body);
    return data;
  }

  async delete(name) {
    const collection = await this.connect();
    const data = await collection.deleteOne({ Platform: name });
    return data;
  }
}

exports. default = new WordsModel();
