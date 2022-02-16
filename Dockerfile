# build: docker build . -t feature/prod
# run (example): docker run -p8080:3000 feature/prod

FROM		node:16-alpine3.14

WORKDIR		/usr/app

COPY		. .

RUN			yarn install

RUN			yarn build

CMD			[ "yarn", "start" ]
