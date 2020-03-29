import express from 'express';
const app = express();

const PORT = 3001;

app.listen(PORT);

console.log(`[app]: http://localhost:${PORT}`);
