import { MongoClient } from "mongodb";

class WordsModel {
  async connect() {
    const url = process.env.CONNECTION_URL;
    const client = new MongoClient(url);
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

  async edit(name, body) {
    const collection = await this.connect();
    const data = await collection.updateOne({ Platform: name }, { $set: body });
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

export default new WordsModel();
