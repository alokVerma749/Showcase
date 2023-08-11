import mongoose from "mongoose";

export const connect = async () => {
    try {
        (await mongoose.connect(process.env.MONGO_URL, { dbName: 'ShowCase' }));
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('DB connected successfully')
        });
        connection.on('error', (err) => {
            console.log('MongoDB error', err)
            process.exit();
        })
    } catch (error) {
        console.log('DB connection failed');
        console.log(error.message);
    }
}