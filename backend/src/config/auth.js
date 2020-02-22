const auth = {
    jwt: {
        secret: process.env.JWT_SECRET
    },
    ssl: {
        cert: process.env.SERVER_CERT,
        key: process.env.SERVER_KEY
    }
};

module.exports = auth;