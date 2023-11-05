import express from "express";
import cors from "cors";
import { writeFile, readFile } from "node:fs/promises";
import fs from "fs";

const PORT = 8888
const app = express()
app.use(cors())
app.use(express.json())


let guests = [];
const contacts = "./contacts.json";

if (fs.existsSync(contacts)) {
    (async () => {
      try {
        const readContent = await readFile(contacts, "utf-8");
        guests = JSON.parse(readContent);
        console.log(guests);
      } catch (error) {
        console.error("Fehler beim Lesen der Einträge", error);
      }
    })();
  }
  
  app.get("/", (_, res) => {
    res.send("<h6>..it works so entirely fuckin well..:</h6>")
})


// neue Einträge posten  

app.post('/api/guests', async (req, res) => {  
    const guest = req.body
    guests.push(guest)
    console.log(guests)

    try {
        await writeFile(contacts, JSON.stringify(guests, null, 2), "utf-8")
        res.status(200).json( "Einträge erfolgreich gespeichert" )
    } catch (error) {
        console.error("Fehler beim Speichern der Einträge", error)
        res.status(500).json({ error: "Serverfehler" })
    }
})


// alle Einträge anzeigen lassen

app.get('/api/guests', async (_, res) => {
    try {
        const readContent = await readFile(contacts, "utf-8");
        const content = JSON.parse(readContent);
        res.json(content);
      } catch (error) {
        console.error("Fehler beim Lesen der Einträge", error);
        res.status(500).json({ error: "Serverfehler" });
      }})


app.listen(PORT, () => console.log("Ich stehe vor der Tür:", PORT))