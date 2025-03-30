import mongoose from "mongoose";

const mongourl = process.env.mongourl;
if (!mongourl) {
    throw new Error("Environment variable 'mongourl' is not defined");
}

export const connectDb = async () => {
    await mongoose.connect(mongourl);
}
