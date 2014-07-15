var Model = {};

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


module.exports = Model;