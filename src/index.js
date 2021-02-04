import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const port = process.env.PORT || 3330;

app.listen(port, () => {
  console.log(`Server up and running on PORT ${port}👌`);
});
