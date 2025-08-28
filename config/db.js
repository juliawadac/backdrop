import mysql from "mysql2";

// cria a conexão com o banco
const connection = mysql.createConnection({
  host: "localhost", 
  port: 3007,
  user: "root",
  password: "root",
  database: "drop"
});

// abre a conexão
connection.connect(err => {
  if (err) {
    console.error("Erro ao conectar no banco:", err);
    return;
  }
  console.log("✅ Conectado ao MySQL!");
});

export default connection;
