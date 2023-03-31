import { MongoClient } from 'mongodb';

if (!process.env.DATABASE_URL) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.DATABASE_URL;
const options = {};

let client;
let mongoClient: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  mongoClient = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  mongoClient = client.connect();
}

export { mongoClient };
