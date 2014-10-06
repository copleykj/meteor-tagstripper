if (Package.templating) {
    var Template = Package.templating.Template;
    var HTML = Package.htmljs.HTML; // implied by `ui`
    var Blaze = Package.blaze.Blaze; // implied by `ui`

    Blaze.Template.registerHelper("striptags", function(){
        var tags = this.allowedTags || this.disallowedTags || "";
        var inverse = this.inverse || false;

        return new Template('striptags', function () {
            var view = this;
            var content = '';

            if (view.templateContentBlock) {
              content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
            }
            
            content = HTML.Raw(TagStripper.strip(content, tags, inverse));
            return content;
        });
    });
}
