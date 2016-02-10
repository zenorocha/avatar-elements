# &lt;avatar-elements&gt;

> Avatars made easy with Web Components.

## Roadmap

This project is under construction, but you can check our high level goals.

- [X] GitHub
- [X] Facebook
- [X] Skype
- [X] Twitter
- [X] Instagram
- [ ] Gravatar

## Demo

[Check it live!](http://zenorocha.github.io/avatar-elements)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install avatar-elements --save
```

Or [download as ZIP](https://github.com/zenorocha/avatar-elements/archive/master.zip).

## Usage

1. Import Custom Elements' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/CustomElements.min.js"></script>
    ```

2. Import Custom Elements:

    ```html
    <script src="dist/avatars.js"></script>
    ```

3. Start using it!

    ```html
    <img is="avatar-github" username="zenorocha">
    ```

## `avatar-github`

### Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`username`    | *string*    | `null`       |  **Required.** The name of the user.
`size`        | *number*    | `48`         | Custom image dimensions.

## Development

In order to run it locally you'll need to fetch some dependencies.

* Install [Bower](http://bower.io/) & [Gulp](http://gulpjs.com/):

    ```sh
    $ [sudo] npm install -g bower gulp
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To watch ES6 compilation and start the development server.

    ```sh
    $ gulp
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/zenorocha/avatar-elements/releases).

## Credits

Inspired by [Phil Leggetter](https://github.com/leggetter) and [avatars.io](https://avatars.io/).

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
