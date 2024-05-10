import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", async (req, res) => {
    res.render("budget.ejs");

});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });