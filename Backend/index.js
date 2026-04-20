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
  origin:[ 
    "http://localhost:5173",
    "https://e-commerce-frontend-zflk.onrender.com",
    "https://e-commerce-admin-g6s7.onrender.com"
  ],
  credentials: true
}))
app.options("*", cors());
app.use(express.json());

app.use(cookieParser())

app.use("/image", express.static("upload/image"))

app.use("/", productRoutes)
app.use("/api", userRoutes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
    
});

