const app = require ('./app');
require('dotenv').config();


// console.log(process.env)
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`server running on port ${port}`));