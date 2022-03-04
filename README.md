# feature-sh front-end

The front-end for Feature.sh, built with [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/).

## Development

### Docker

A development Dockerfile has been set up to ease the development process.
One can execute the following script to build and run an instance of the dev container:

```sh
npm run docker-dev

# OR, if using yarn

yarn docker-dev
```

The app directory is bind mounted inside the container in development, which means that every change
made on the host also impacts the running container.

### Bare metal

Install dependencies and start the dev server as follows:

```sh
npm install && npm run dev

# OR, if using yarn

yarn install && yarn dev
```

## Production

### Docker

A production Dockerfile has been created to easily deploy the app.
To build and run an instance of the production image, execute the `docker-prod` node script:

```sh
npm run docker-prod

# OR, if using yarn

yarn docker-prod
```

### Bare metal

Install dependencies, build, and start the production server as follows:

```sh
npm install && npm run build && npm run start

# OR, if using yarn

yarn install && yarn build && yarn start
```

## Format codebase

The codebase is formatted using the [prettier](https://prettier.io) tool.
Issuing the command `npm run format` or `yarn format` will make use of the local installation of prettier
to format the entire codebase.

## Internationalization

Internationalized routing is handled natively by NextJS through [sub-path routing](https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing).

Management of translations is done with the `next-i18next` library. Supported locales can be found inside the `public/locales` directory. Translations are
stored inside different `.json` files commonly referred as translation namespaces.
stored inside different `.json` files commonly referred as translation namespaces.
