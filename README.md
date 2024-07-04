# User Decoration

![License](https://img.shields.io/badge/license-MIT-blue.svg)

A [Flarum](http://flarum.org) extension. Add decoration for user avatar/username/posts/usercard.

## Notice

This code uses some aggressive tricks to make interceptions of all avatars/usernames possible. This may cause problems with other parts of the plugin. If there is a problem, please disable username/avatar hijacking in the settings.

To experience full functionality, you may also need to install [xypp/store](https://github.com/zxy19/store)

## Introduction

This plugin provides a way to change the appearance of user components using CSS and other special markup.

Administrators can create decorations and then grant them to users. Users can see the decorations they have been granted and apply them on their personal home page. Decorations should be in effect anywhere on the forum.

If [xypp/store](https://github.com/zxy19/store) is installed, users can buy decorations from the store!

## Special CSS Mark

Use .base to select a dressed container element (i.e. a .decoration-container element). This element will have all the attributes of its original counterpart and wrap its content.

Use .element-aNameToBeFillThere[....] to create a new element. See below for a specific use case

```css
/** Rules */
.element-<unique-id>[tag="<tag>"][parent="<parent selector>"][copy="<copy selector>"][after="<after selector>"][content="<content>"][ class="<class>"]

.element-test
/** Create a span element with the content Hello, located under container */
.element-test1[tag="span"][content="hello"]{....}
/** Create a div element under .Post-body */
.element-test1[tag="div"][parent="Post-body"]{....}
/** Create a span element with the content Hello, located under the first child of the first element */
.element-test1[tag="div"][parent="* *"]{....}
/** Copy the first img element and place under the container */
.element-test1[tag="#"][content="img"]{....}
```

The `<parent selector>` and `<copy selector>` above support matching any element with `*`, or matching className or tagName with a string. Note that className and tagName do not need to be prefixed with `. ` or `#` , and they are case sensitive. Separate nested matches with a space.


## Q&A

+ Why does style selection not work with QuerySelector?

> Element matching does not run on the DOM, but on the VNode tree.

+ Can't administrators delete their own decorations?

> Turn off the `View All` feature

+ Decoration does not take effect

> Open the console to see if warnings or errors are output.

## Installation

Install with composer:

```sh
composer require xypp/user-decoration:"*"
```

## Updating

```sh
composer update xypp/user-decoration:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/xypp/user-decoration)
- [GitHub](https://github.com/zxy19/user-decoration)
