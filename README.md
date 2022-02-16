# feature-sh front-end

The front-end for Feature.sh, built with [NextJS](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/).

## Development

### Docker

A development Dockerfile has been set up to ease the development process.
One can build the development image as shown below:

```sh
docker build -f Dockerfile.dev . -t feature/dev
```

And then, run a container based on the freshly built image:

```sh
docker run -v$PWD:/usr/app -p8080:3000 feature/dev
```

The app directory is bind mounted inside the container in development, which means that every change
made on the host also impacts the running container.

**Protip**: replace `8080` by the port on which you want to access the app on your machine.

### Bare metal

Install dependencies and start the dev server as follows:

```sh
yarn install && yarn dev
```

## Production

A production Dockerfile has been created to easily deploy the app.
The build and run procedure is the following:

```sh
docker build . -t feature/prod
docker run -p8080:3000 feature/prod
```

## Format codebase

The codebase is formatted using the [prettier](https://prettier.io) tool.
Issuing the command `yarn format` will make use of the local installation of prettier
to format the entire codebase.

## Internationalization

Internationalized routing is handled natively by NextJS through [sub-path routing](https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing).

Management of translations is done with the `next-i18next` library. Supported locales can be found inside the `public/locales` directory. Translations are
stored inside different `.json` files commonly referred as translation namespaces.
stored inside different `.json` files commonly referred as translation namespaces.
