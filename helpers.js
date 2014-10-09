if (Package.templating) {
    var Template = Package.templating.Template;
    var HTML = Package.htmljs.HTML; // implied by `ui`
    var Blaze = Package.blaze.Blaze; // implied by `ui`

    Blaze.Template.registerHelper("striptags", function(){
        var tags = this.allowedTags || this.disallowedTags || "";
        var attributes = this.allowedAttributes || "";
        var inverse = this.disallowedTags ? true : this.inverse || false;

        return new Template('striptags', function () {
            var view = this;
            var content = '';

            if (view.templateContentBlock) {
                var data = tags || attributes || inverse ? Template.parentData(1): Template.currentData();
                var block = Blaze.With(data, function() {
                    return view.templateContentBlock;
                });

                content = Blaze._toText(block, HTML.TEXTMODE.STRING);
            }
            content = HTML.Raw(TagStripper.strip(content, inverse, tags, attributes));
            return content;
        });
    });
}
