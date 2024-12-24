const express = require("express");
const path = require("path");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rotte
app.use("/contact", contactRoutes);

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
