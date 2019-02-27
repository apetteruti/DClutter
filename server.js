const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require("./routes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

// Routes
app.use(routes);

// Database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/donationcenters",
    { useNewUrlParser: true }
);

// Start server 
const PORT = process.env.PORT || 3001;
app.listen(PORT);

