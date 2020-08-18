<p align="center">
   <img src="web/src/assets/home-background.svg" width="600"/>
</p>

# E-Coleta

> A React App created on Rocketseat's 1st Next Level Week for a waste collection marketplace

---

# :wrench: Stack

This project was created using [Express](https://expressjs.com/), [React](https://reactjs.org/) and [React Native](https://reactnative.dev/).

# :construction_worker: Installation

**Once you have [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) installed, install the dependencies running:**

```bash
$ yarn
```

**Setup the API**


First, inside the ``server`` folder, run the project migrations:

```bash
$ yarn knex:migrate
```

And then, to start the server:

```bash
$ yarn dev
```

# :rocket: Running the app

After doing the previous steps, inside the ``web`` folder run:

```bash
$ yarn start
```

For the React Native app, inside the ``mobile`` folder run:

```bash
$ yarn start
```

**Note**: you must have expo installed on your emulator or mobile device so you can build the app accessing the provided URL.

# :memo: License

This project is under the [MIT license](https://github.com/v1eira/e-coleta/blob/master/LICENSE).
