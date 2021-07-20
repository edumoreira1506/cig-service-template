# cig-service-template

## Dependencies

```
NodeJS >= 14.17.3
Postgres >= 13
```

## Setup

Clone the project.

```console
$ git clone git@github.com:edumoreira1506/cig-service-template.git
$ cd cig-service-template
```

Copy the contents of the `.env.sample` to `.env` then change with the credentials of your local environment.

```console
$ cp .env.sample .env
```

Install all packages.

```console
$ npm i
```

For run server local.

```console
$ npm run dev
```

## Tests

For run tests.

```console
$ npm run test
```

## Linter

For run eslint.

```console
$ npm run lint
```

## Database

To run migrations.

```console
$ npm run db:migrate
```
