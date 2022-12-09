import { Polybase } from "@polybase/client";

const db = new Polybase({ defaultNamespace: "your-namespace" });
const data = await db.collection("Tasks").record("task1");

console.log(data);
