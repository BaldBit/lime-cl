# Lime Component Library

Welcome to the Lime component library. We got collection of React components styled with styled-components which you can used for your project.

For the moment we have two components you can use straightaway.

- Button
- Loader

## Usage

### Button

| Prop | Type | Value |
| ---- | ---- | ----- |
| `value` | `{string}` | Text to display on the button element
| `mode` | `{string}('primary' | 'secondary' | 'neutral')` | Set a style for the button
| `size` | `{string}('regular' | 'big')` | Set a size for the button
| `disabled` | `{bool}` | Set the disable property for the button element
| `loading` | `{bool}` | Show the loading component
| `fluid` | `{bool}` | Stretch the button to it's parent's width
| `onClick` | `{func}` | The callback function which invoked when click on the button

### Loader

| Prop | Type | Value |
| ---- | ---- | ----- |
| `size` | `{string}('regular' | 'big')` | Set a size for the loader
| `speed` | `{number}` | Set the animation speed
| `thickness` | `{number}` | Set the thickness of the Loader component
| `color` | `{string}` | Set the color of the spinning circle

## Contributing

We are using following tech stack to develop Lime component library.

- React
- Styled-Components
- Storybook
- Jest
- Enzyme


### Setup

To setup the project in your local machine run the following code. That will clone the github repo to your local machine.

``` bash
git clone https://github.com/ryxle/lime-acl.git
```

To install all the dependencies run

``` bash
yarn install
```

### Running the project

We are using storybook for component development. To start the storybook run the below code in the terminal.

``` bash
yarn storybook
```

Lime Cl project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So you can test your components in normal web app also. To run the app you can use below code in the terminal.

``` bash
yarn start
```

### Implementing components

All our components are inside the `src/components` folder. We follow the below folder structure for every component.

``` javascript
Component
│
└─── __test__
│    │
│    └─── __snapshots__
│    │    │
│    │    └─── component.test.js.snap
│    │
│    └─── component.test.js
│
└─── Component.jsx
└─── Component.story.jsx
└─── styled.js
```

### Testing components

We use Jest and Enzyme to test our components.

To run tests run the below command in the terminal

``` bash
yarn test
```

To update snapshots

``` bash
yarn test:update
```

## Future

- Need to integrate styled-components theming feature
- Add more components
