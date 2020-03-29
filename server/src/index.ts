import express from 'express';
import bodyParser from 'body-parser';
import { listings } from './listings';

const PORT = 3001;
const app = express();

app.use(bodyParser.json());

app.listen(PORT);

app.get('/listings', (_req, res) => {
  return res.status(200).send(listings);
});

app.delete('/listings/:id', (req, res) => {
  const id: number = +req.params.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      const deletedListing = listings.splice(i, 1);
      return res.status(200).send(deletedListing);
    }
  }

  return res.status(404).send('failed to delete listing');
});

console.log(`[app]: http://localhost:${PORT}`);
