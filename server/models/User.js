var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
}, {
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: function(doc, ret, options){
            ret.id = ret._id.toHexString();
            delete ret._id;
        }
    },
    toObject:{
        virtuals: true
    }
});

mongoose.model('User', User);
