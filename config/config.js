var env = process.env.NODE_ENV || 'development',

    config = {
        port: 3000,
        db_old: 'mongodb://localhost:27017/ipm',       
		db_lab: "mongodb://ipmuser:ipmuserpass@ds055699.mongolab.com:55699/ipm",
		db: 'mongodb://ipmuser:ipmuserpass@kahana.mongohq.com:10092/ipm',
        host: '127.0.0.1',
		salt: "5A+Kv}tJ@^}mUC.NE|Ib]F7+=5:p)kRTZ]Y5|M1FoE.Uw9|n;ASOI%{dYd=!0c&Q"
    };

module.exports = config;