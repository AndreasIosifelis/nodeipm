var Utils = {};

Utils.Prototypes = function(){
	
	Array.prototype.Contains = function(v){
		 var l = this.length, i;
        for (i = l; i--; ) {
            if (this[i] === v || this[i] == v)
                return true;
        }
        return false;
	};	
	
};

Utils.extend = function(obj, obj2){
	for(var i in obj2)
		obj[i] = obj2[i];
		
	return obj;
};


Utils.Prototypes();


module.exports = Utils;
