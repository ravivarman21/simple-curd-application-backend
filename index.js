import express from 'express'
import mongoose from 'mongoose';
import Product from './modules/product.model.js'
import productRoutes from "./routes/product.route.js"
// const Product = require('./modules/product.model.js');


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//routes
app.use("/api/products" , productRoutes);




app.get('/', (req, res) => {
  res.send("hello from node api  u know server");
});


//update a product
//delete a product 


mongoose.connect("mongodb+srv://varmanravi1722_db_user:zu13sIK3dFFVKKwo@backenddb.7opazan.mongodb.net/Node-API?appName=backenddb")
  .then(() => {
    console.log('Connected to database!')

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    })
  })
  .catch(() => {
    console.log("connection failed")
  })