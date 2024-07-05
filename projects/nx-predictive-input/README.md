# nx-predictive-input

This library was generated with [Nx](https://nx.dev).

## Description

Could not find any similar Angular component for this purpose, so I created my own. 
This is a standalone component which accepts @Input() **predictions** as a simple array of strings and works fine with ReactiveFormsModule.

### Showcase

![Example image](https://i.ibb.co/Sc9DSvj/Screenshot-2024-07-05-104100.png)

## Install

Run `npm install nx-predictive-input@latest` to install this library.

## Usage

Import component like this:

`import { NxPredictiveInputComponent } from "nx-predictive-input";`

In your component, please create array of countries like this:

`@Component({...}) export class MyComponent { countries = ["Bosnia and Herzegovina"]; }`

And use it in HTML like this:

`
<input-predictive [predictions]="countries"></input-predictive>
`

## Running unit tests

Run `nx test nx-predictive-input` to execute the unit tests.
