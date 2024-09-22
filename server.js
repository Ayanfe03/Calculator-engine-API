const express = require('express');
const cors = require('cors');
const calculatorRouter = require('./routes/v1/calculator');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/v1/calculator', calculatorRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
})