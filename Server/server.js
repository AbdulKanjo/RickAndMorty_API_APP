const express = require("express");
const { json } = require("body-parser");
const app = express();
const port = 3030;
const charController = require("./controllers/card_controllers");

app.use(json());

app.get("/api/characters", charController.getCharacters);
app.get("/api/characters/:page", charController.getNextPage);
app.post("/api/characters/:id", charController.favCharacter);
app.put("/api/characters/:id", charController.updateCharacter);
app.delete("/api/characters/:id", charController.deleteCharacter);

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});
