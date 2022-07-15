import express from "express";
const app = express();
const PORT = 5000;
import cors from "cors";

app.use(express.json());
app.get("/", (req, res)=>{
    res.json({success: "true", payload: "get all them for you!"})
})

//app.listen(PORT, () => console.log(`listening ${PORT}`));
// it is the same as bellow
app.listen(PORT, function() {console.log(`listening ${PORT}`)});