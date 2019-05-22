# Babel Plugin Lodash Template Compile

Babel plugin for compiling lodash templates at compile-time, rather than run-time.

## Install

```sh
npm install --save-dev babel-plugin-lodash-template-compile
```

## Usage

Add this plugin to your babel plugins:

```ts
  plugins: [
    ['babel-plugin-lodash-template-compile', { /* plugin options */ }]
  ]
```

This plugin supports the following options:

```ts
{
  minify?: boolean, // Whether to minify the compiled template or not
  data?: any, // If provided the templates will be rendered to HTML directly using this data
  templateOptions?: {} // All options supported by `lodash.template`
}
```

This plugin will compile lodash templates written like so at compile-time, so that your app won't waste time on this at run-time:

```ts
_.template ( '<%= obj.value %>' );
_.template ( "<%= obj.value %>" );
_.template ( `<%= obj.value %>` );
lodash.template ( '<%= obj.value %>' );
lodash.template ( "<%= obj.value %>" );
lodash.template ( `<%= obj.value %>` );
```

Other ways to use lodash's `template` function aren't currently supported.

## License

MIT © Fabio Spampinato
