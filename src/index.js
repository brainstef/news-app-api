let express = require('express');
let app = express();

let newsRoute = require('./news/routes');

app.use((req, res, next)=>{
  console.log(`${new Date().toString()}=>${req.originalUrl}`);
  next();
});

app.use(newsRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.info(`Server has started on ${PORT}`));

