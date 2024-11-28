const express = require("express")
const productRouters = require("./routes/productRoutes")
const app = express()

app.use(express.json());
app.use("/api", productRouters)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server running on port 3000")
})