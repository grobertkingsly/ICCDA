const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Fallback to 3000 if running locally

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
