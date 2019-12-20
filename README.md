# Event Driven Map

An example application to demonstrate an idea for adding a map component to a react application.

## Motivation

React applications and map component have different, and largely incompatible abstractions.

React component are based on maintaining a state, and binding that state the user interface.

Web mapping components have an 'API surface', with methods such as `addFeature()`, `removeFeature()` and `setCenter()`.
Web map component are not generally bound to a state object, although wrappers [do exist](https://github.com/google-map-react/google-map-react) anything
more that a simple use case impossible.

Web map components tend to be added to React components (or other front end library of your choice), and changes in state are
converted to operations on the map. Likewise, events raised by the map are translated back to changes in state.

The result is a complicated implementation, attempting to bridge these programming models.

This repository represents an alternative, whereby a pub/sub eventing model is used, as a lower common denominator between the two abstractions.

All actions raise events. Component subscribe to the necessary events, rather than handle these internally. This allows components that know
nothing about each other to respond to the same user input.

The event subscription model maps well to mutations of state in a react component, and to the method calls on the map component API.

## Running Locally

```
npm install
npm start
```

## Deploy to GitHub Page

```
npm run deploy
```

## License

MIT