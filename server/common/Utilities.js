var Utils = {};

Utils.Array = function(){
	
	Array.prototype.Contains = function(v){
		 var l = this.length, i;
        for (i = l; i--; ) {
            if (this[i] === v || this[i] == v)
                return true;
        }
        return false;
	};
	
	
};


Utils.Array();


module.exports = Utils;
