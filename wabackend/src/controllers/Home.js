class Home {
  async index(req, res) {
    res.send("Index");
  }
}

export default new Home();
