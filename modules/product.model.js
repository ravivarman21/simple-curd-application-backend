
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }

);


const Product = mongoose.model("product", ProductSchema);

// module.exports = Product;
export default Product;