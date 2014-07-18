var Model = {},
	Util = require('./Utilities');

Model.Util = Util;	

Model.idTransform = {
	versionKey : false,
	toJSON : {
		virtuals : true,
		transform : function (doc, ret, options) {
			ret.id = ret._id.toHexString();
			delete ret._id;
		}
	},
	toObject : {
		virtuals : true
	}
};

Model.commonFields = {
	createdOn:String,
	createdBy:String,
	lastUpdatedOn:String,
	lastUpdatedBy:String
};


module.exports = Model;