TagStripper = {
    strip: function(input, inverse, allowedTags, allowedAttributes){
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, attributes = /(\w+)\s*=\s*"[^"]+"/gi;

        allowedTags = allowedTags || this._allowedTags;
        allowedAttributes = allowedAttributes || this._allowedAttributes;

        allowedTags = (((allowedTags || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
        allowedAttributes = ((allowedAttributes || '') + '').toLowerCase().split(" ") || [];

        return input.replace(tags, function($0, $1) {

            var match = allowedTags.indexOf('<' + $1.toLowerCase() + '>');
            if(inverse){
                match =  match === -1 ? $0 : '';
            }else{
                match =  match > -1 ? $0 : '';
            }
            return match.replace(attributes, function($0, $1, $2){
                var match = allowedAttributes.indexOf($1.toLowerCase());
                return match > -1 ? $0 : '';
            });
        });
    },
    setTags:function(tags){
        this._allowedTags = tags;
    },
    setAttributes: function(attributes){
        this._allowedAttributes = attributes;
    }
};
