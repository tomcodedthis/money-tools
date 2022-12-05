import { MongoClient } from "mongodb";
import mongoose from "mongoose";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var mongoose: any;
}
