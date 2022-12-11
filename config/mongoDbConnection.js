import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set("strictQuery", false);

const mongoDbConnection = () => {
    console.log(process.env.MONGO_URL);
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Sucessfully');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default mongoDbConnection;