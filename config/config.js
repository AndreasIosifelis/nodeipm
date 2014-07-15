var env = process.env.NODE_ENV || 'development',

    config = {
        port: 3000,
        db: 'mongodb://localhost:27017',
        host: 'localhost'
    };

module.exports = config;