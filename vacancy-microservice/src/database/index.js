import mongoose from 'mongoose';


class Database {
  constructor() {
    this.connection = mongoose.connect('mongodb://localhost/rachadinhapp', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  }
}


export default new Database().connection;
