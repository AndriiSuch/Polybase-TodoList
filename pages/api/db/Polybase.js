import { Polybase } from "@polybase/client";
import { ethPersonalSign } from "@polybase/eth";
import Wallet from "ethereumjs-wallet";
import { schema } from "./schema";

export async function createTask(id, task) {
  const DB = new Polybase();

  const createResponse = await DB.applySchema(schema, "test-app");
  const collectionReference = DB.collection("test-app/Tasks");

  const recordData = await collectionReference.create([id, task]);
  // console.log(recordData);
  return `schema loaded`;
}

export async function deleteTask(id) {
  const DB = new Polybase();

  const createResponse = await DB.applySchema(schema, "test-app");
  const collectionReference = DB.collection("test-app/Tasks");

  const recordData = await collectionReference.record(id).call("del");
}

createTask().then(console.log).catch(console.error);
