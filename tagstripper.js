TagStripper = {
    strip: function(input, allowed, inverse){
        allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

        return input.replace(tags, function($0, $1) {
            var match = allowed.indexOf('<' + $1.toLowerCase() + '>');
            if(inverse){
                match =  match === -1 ? $0 : '';
            }else{
                match =  match > -1 ? $0 : '';
            }
            return match;
        });
    }
};
