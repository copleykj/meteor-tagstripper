# Tag Stripper #

An HTML tag striper for Meteor.

**This is a pre-release package which still contains a bug**


## Helper ##

This package includes a `striptags` block helper for use in your templates.

```
{{#striptags allowedTags="a"}}<p>This is a paragraph with a <a href="www.google.com">Link</a></p>{{/striptags}}
```
