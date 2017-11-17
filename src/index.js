import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.json({ message: "Hey welcome to Node.js & Express" });
});

app.listen(3000, () => console.log("Listening to port 3000"));