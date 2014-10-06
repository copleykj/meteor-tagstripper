Package.describe({
    name: "copleykj:tagstripper",

    summary: "HTML Tag stripper",

    version: "1.0.0-pre1",

    git: "https://github.com/copleykj/meteor-tagstripper.git"
});

Package.onUse(function(api) {
    if(api.versionsFrom){
        api.versionsFrom('METEOR@0.9.1');
    }
    api.use("templating", "client");

    api.addFiles('tagstripper.js');
    api.addFiles('helpers.js', "client");

    api.export("TagStripper");
});
