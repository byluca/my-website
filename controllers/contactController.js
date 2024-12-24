const fs = require("fs");

exports.handleContact = (req, res) => {
    const { name, email, message } = req.body;
    const data = { name, email, message, date: new Date().toISOString() };

    fs.appendFile("messages.json", JSON.stringify(data) + "\n", (err) => {
        if (err) {
            console.error("Errore nel salvataggio del messaggio:", err);
            return res.status(500).send("Errore interno del server.");
        }
        res.send("Messaggio inviato con successo!");
    });
};
