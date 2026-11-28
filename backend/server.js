
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
    res.json({
        message: "Backend connected successfully",
        status: 200,
        data: "Hello from Backend"
    });
});

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
