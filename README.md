# Tag Stripper #

An HTML tag striper for Meteor.

## JavaScrip API ##

> **TagStripper.strip(** *input*, *inverse*, *allowedTags*, *allowedAttributes* **)** - Strips HTML tags
> + **input** - *string* - The html input.
> + **allowedTags** - *string "&lt;a&gt;&lt;p&gt;"* - The list of tags that should *not* be removed (opposite if inverse flag is set).
> + **allowedAttributes** -  *string "href class src alt"* - Space delimited list of attributes that are allowed in tags that are not removed.
> + **inverse** - *boolean* - Passing true causes the method to only remove specified tags.
>
> **TagStripper.setTags(** *tags* **)** - Sets default tags to use when stripping.
> + **tags** - *string* - List of default tags
>
> **TagStripper.setAttributes(** *attributes* **)** - Set default attributes to use when stripping
> + **attributes** *string* - Space delimited list of default attributes

## Template Helper ##

This package includes a `striptags` block helper for use in your templates.

> **{{#striptags** *allowedTags="&lt;a&gt;&lt;img&gt;&lt;p&gt;"* *allowedAttributes="href title src alt"* **}}**

```html
{{#striptags allowedTags="a"}}
    <p>This is a paragraph with a <a href="www.google.com">Link</a></p>
{{/striptags}}

Result: This is a paragraph with a <a href="www.google.com">Link</a>
```

> **{{#striptags** *disallowedTags="&lt;a&gt;&lt;img&gt;&lt;p&gt;"* *allowedAttributes="class"* **}}**

```html
{{#striptags disallowedTags="a" allowedAttributes="class"}}
    <p class="green">This is a paragraph with a <a href="www.google.com">Link</a></p>
{{/striptags}}

Result: <p class="green">This is a paragraph with a Link</p>
```

## Using Default Tags/Attributes ##

If you are using the block helper repeatedly with the same tags and attributes you can setup defaults using the JavaScript API. Once specified you can overried one or both of them by specifying them as parameters to the helper normally.

To switch between allowing the default tags and removing them use the inverse parameter on the block helper.

```javascript
TagStripper.setTags("<a>");
TagStripper.setAttributes("href");
```

```html
<!--Using tags and attributes set with the JavaScript API-->
{{#striptags}}
    <p>This is a paragraph with a <a href="www.google.com">Link</a></p>
{{/striptags}}

Result: This is a paragraph with a <a href="www.google.com">Link</a>
```

```html
<!--Using tags and attributes set with the JavaScript API with the inverse flag to strip the set tags instead of allow them-->
{{#striptags inverse="true"}}
    <p class="green">This is a paragraph with a <a href="www.google.com">Link</a></p>
{{/striptags}}

Result: <p class="green">This is a paragraph with a Link</p>
```
