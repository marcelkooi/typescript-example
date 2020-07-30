import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

const addTen = (input: number): number => {
  return input + 10;
}

app
  .use(bodyParser.json())
  .post('/', (req: Request, res: Response) => {
    const { input } = req.body;
    const newNum = addTen(input);
    res.send(`The new number is: ${newNum}`);
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
