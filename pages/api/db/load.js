import { Polybase } from "@polybase/client";

export const schema = `
collection Tasks {
  id: string;
  task: string;

  constructor (id: string, task: string) {
    this.id = id;
    this.task = task;
  }

  @index(name);
}
`;

async function load() {
    try {
          const db = new Polybase({
    baseURL: `http://localhost:3000/v0`,
    signer: async data => {
      // const wallet = Wallet.fromPrivateKey(Buffer.from(PRIVATE_KEY, 'hex'))
      // return { h: 'eth-personal-sign', sig: ethPersonalSign(wallet.getPrivateKey(), data) }
    },
  });
  // if (!PRIVATE_KEY) {
  //   throw new Error('No private key provided')
  // }

  await db.applySchema(schema, "demo/social");

  return "Schema loaded";
    } catch (error) {
        log
    }

}

load().then(console.log).catch(console.error);
