const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Postfix: number++ (önce değeri kullan, sonra artır)
app.get("/postfix", (req, res) => {
  let number = 0;
  const result = number++; // number önce 0 olarak kullanılır, sonra artırılır
  res.send("Your number is: " + number + ", Your result is: " + result);
});

// Prefix: ++number (önce artır, sonra değeri kullan)
app.get("/prefix", (req, res) => {
  let number2 = 0;
  const result = ++number2; // number önce artırılır, sonra kullanılır
  res.send("Your number is: " + number2 + ", Your result is: " + result);
});
