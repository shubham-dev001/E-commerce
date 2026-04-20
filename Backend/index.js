const express = require("express");
const connectDb = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")

 
dotenv.config()
connectDb();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json());

app.use(cookieParser())

app.use("/image", express.static("upload/image"))

app.use("/", productRoutes)
app.use("/api", userRoutes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
    
});

