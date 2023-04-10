import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
       
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
      
       
    },
    { timestamps: true }
);

const product = mongoose.model("Product", productSchema);
export default product