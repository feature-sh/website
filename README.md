# feature-sh front-end

The front-end for Feature.sh, built with [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/).

## Development server

Install dependencies and start the dev server as follows:

```sh
yarn install && yarn dev
```

## Format codebase

The codebase is formatted using the [prettier](https://prettier.io) tool.
Issuing the command `yarn format` will make use of the local installation of prettier
to format the entire codebase.

## Internationalization

Internationalized routing is handled natively by NextJS through [sub-path routing](https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing).

Management of translations is done with the `next-i18next` library. Supported locales can be found inside the `public/locales` directory. Translations are
stored inside different `.json` files commonly referred as translation namespaces.
