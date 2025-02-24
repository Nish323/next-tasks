import mongoose from "mongoose";

export const connextDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI || '');
    } catch (error) {
        console.log('DB接続失敗');
        throw new Error();
    }
}