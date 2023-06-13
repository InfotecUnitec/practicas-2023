const db = require("./db/db.js");
const express = require("express");

const PORT = 8080;
const app = express();

const productsRouter = express.Router();
const cartRouter = express.Router();

// EXAMPLE
productsRouter.get("/", async (req, res) => {
  const [data, error] = await db.productsRepository.getAll();

  if (error) return res.status(500).json({ status: "fail", message: error.message });
  res.status(200).json({ status: "success", data });
});

productsRouter.post("/", async (req, res) => {
  console.log(req.body);

  // create a new product

  res.status(201).json({ status: "sucess", message: "created" });
});

app.use(express.json({ limit: "50mb" }));

app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.get("/init", async (req, res) => {
  db.init();
  res.status(200).json({});
});

app.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});
