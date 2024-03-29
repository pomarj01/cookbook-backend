const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
const PORT = process.env.PORT || 8000;
const app = express();

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected successfully');
} catch (error) {
  console.log(error);
}

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});