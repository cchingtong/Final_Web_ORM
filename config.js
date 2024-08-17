const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://yabek1689:simlyhab@ormfinal.b9d5c.mongodb.net/?retryWrites=true&w=majority&appName=ORMFINAL",
    JWT_SECRET: process.env.JWT_SECRET || "somethingsecret"
};
