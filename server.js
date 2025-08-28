import express from "express";
import connection from "./db.js";

const app = express();
app.use(express.json());

// rota simples
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// rota para listar usuários
app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Erro no banco" });
    } else {
      res.json(results);
    }
  });
});

// rota para adicionar usuário
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  connection.query(
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
    [nome, email],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: "Erro ao inserir" });
      } else {
        res.json({ id: results.insertId, nome, email });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
