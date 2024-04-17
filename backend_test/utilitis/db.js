
const client = new MongoClient(process.env.MONGODB_URI)

await client.connenct()
console.log("Connected")

const db = client.db('expenses')

export default db
