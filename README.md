# OutbrandAI

Coding submission for Outbrand AI interview - an FEAN Stack application that allows users to record videos directly from their webcam.

This was quite the undertaking to try to get off the ground in 72 hours. I was unable to complete all application requirements and guidelines I was able to create a very intuitive and functional application that allows users to record a webcam video. A firebase database has been implemented and I have been able to successfully POST video recording data in the Realtime Database.

One issue I have run into with the functionality of sending video recordings to the database however is the size of video recordings can only be roughly 1 second long to successfully be sent to Firebase, they are otherwise too large. Video compression would need to be implemented. I was also unable to complete user authentication as of now, and the ability for users to confirm or deny sending video data to the database. As of now data is submitted to the database upon the click of the stop recording button which can be seen live on the database itself and in the console. 

All things considered I feel good about the work I have put forth seeing how I have never before used Angular, or Firebase.

GENERAL USAGE:

- Clone the repo: https://github.com/rmessett15/OutbrandAI

- Open a terminal and run npi to install dependencies

- Run nmp start to spin up the server and application

- Intuitively click start recording button to start recording

- Click stop recording to stop

- Check console to see data thats been sent to Firebase ('will appear on 'stop recoding click')

- Navigate to the Realtime Database to view data (https://console.firebase.google.com/u/0/project/outbrand-ai-webcam-recorder/firestore/data/~2Fvideo~2FgIyRMeXslUpGaroJXhU5)

## Screenshot

<img width="1473" alt="Screenshot1" src="https://github.com/rmessett15/OutbrandAI/assets/120127903/edcea995-b44c-46fb-9d17-a7a384b3db47">

<img width="1495" alt="Screenshot2" src="https://github.com/rmessett15/OutbrandAI/assets/120127903/3ffa7d94-8954-4ca1-a919-958e625d3833">

<img width="582" alt="Screenshot3" src="https://github.com/rmessett15/OutbrandAI/assets/120127903/859e48af-1cd9-4b4b-9bbe-139428f60b9b">

<img width="1490" alt="Screenshot4" src="https://github.com/rmessett15/OutbrandAI/assets/120127903/26441322-9191-49c1-9b77-897e2009e67a">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Implemented set up so user can also run `npm start` to spin up server and application will open automatically and continuously update upon save.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
