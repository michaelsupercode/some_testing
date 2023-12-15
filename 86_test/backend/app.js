import express from 'express';
import cors from 'cors';
import multer from 'multer';
import Joi from 'joi';
import {
  saveEntry,
  createStorage,
  getAllEntries,
  editEntry,
} from './utils/files.js';

const PORT = 9898;
const app = express();
const upload = multer({ dest: './uploads/' });
createStorage();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use('/uploads', express.static('./uploads')); // damit express wenn die route 'uploads' heißt das bild in dem order sucht

//$ email validation muss noch verbessert werden
// const schema = Joi.object({
//   name: Joi.string().required(),
//   lastname: Joi.string().required(),
//   email: Joi.string().email(),
//   message: Joi.string(),
//   date: Joi.string(),
// });

app.post('/api/entries', upload.single('userimg'), (req, res) => {
  const entry = req.body;
  console.log('file:', req.file);
  entry.userimg = req.file.path;
  // const { error, value } = schema.validate(entry);
  // if (error) {
  //   console.log(error.message);
  //   res.status(418).json({ message: error.message });
  //   return;
  // }
  // entry = value;

  console.log('so sieht der eintrag aus:', entry);
  saveEntry(entry);
  res.end();
});

app.get('/api/entries', (_req, res) => {
  getAllEntries()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).end('data fetching error', error));
});

app.put('/api/entries', upload.single('userimg'), (req, res) => {
  const entry = req.body;
  if (req.file) {
    entry.userimg = req.file.path;
  }

  editEntry(entry)
    .then(() => res.end())
    .catch(() => res.status(500).end());
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(process.env);

//
//
//
app.listen(PORT, () => console.log('express läuft auf port', PORT));
