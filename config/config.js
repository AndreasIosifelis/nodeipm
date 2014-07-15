var env = process.env.NODE_ENV || 'development',

    config = {
        port: 3000,
        db: 'mongodb://localhost:27017',       
        host: '127.0.0.1',
		dbPort: 27017,
		salt: "5A+Kv}tJ@^}mUC.NE|Ib]F7+=5:p)kRTZ]Y5|M1FoE.Uw9|n;ASOI%{dYd=!0c&Q"
    };

module.exports = config;