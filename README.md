# User Decoration

![License](https://img.shields.io/badge/license-MIT-blue.svg)

A [Flarum](http://flarum.org) extension. Add decoration for user avatar/username/posts/usercard.

## Notice

This code uses some aggressive tricks to make interceptions of all avatars/usernames possible. This may cause problems with other parts of the plugin. If there is a problem, please disable username/avatar hijacking in the settings.

To experience full functionality, you may also need to install [xypp/store](https://github.com/zxy19/store)

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
