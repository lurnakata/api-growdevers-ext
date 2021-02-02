import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3330;

app.listen(port, () => {
  console.log(`Server up and running on PORT ${port}👌`);
});
