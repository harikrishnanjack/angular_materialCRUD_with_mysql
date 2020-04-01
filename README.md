# Crud
listen carefully

this project has two parts

1)backend and 2)frontend

1)backend files are routes,db.js,server.js

you cannot see the package.json(package.json in my repository used in the frontend) and package-lock.json in my backend.

package.json file is given below.

create package.json file and copy paste the below code then type npm install

{
  "name": "crud",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-fileupload": "^1.1.6",
    "image-to-base64": "^2.0.1",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.2",
    "req-flash": "0.0.3"
  }
}
then type npm start for starting the server

another way is 

npm init -y then install the required packages.

create table with these fields

id-primary key-auto increment

name-varchar

position-varchar

salary-int



2)the remaining files are frontend.

type npm install for nodemodules

npm start for run the angular application



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
