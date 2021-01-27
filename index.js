const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.NODE_PORT || 3232;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
