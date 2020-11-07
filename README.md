# Challenge App

## Features

- Login
- Logout
- Assets table and details by company
- Health check
- Version in footer
- Responsive (run the app and then test at: http://www.responsinator.com/?url=http%3A%2F%2Flocalhost%3A4200%2Fdashboard)
- Dark/Light mode
- Zoom friendly

## Third libraries

- UX/UI From scratch, without libraries
- Angular
- NGRX (for states, single source of truth)
- Material icons and select input
- Karma and Jazmin for unit tests

## Run app

### requirements

- Nodejs >=12
- Angular CLI requirement

```bash
npm install -g @angular/cli
git clone https://github.com/thiswallz/sgs.git
cd sgs/
npm i
ng serve
```

now should be running under http://localhost:4200

## Run unit tests

```bash
cd sgs/
ng test
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Folder structure

- components: here are the main components with business logic
- containers: basically we have general views with none or low logic
- guards: security layer for routes
- models: dtos
- pipes: text tansformations for angular views
- services: where we handle rest calls and other kind of services
- store: here we have ngrx structure
