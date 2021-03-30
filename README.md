# react-set-store

> Simple global state in React

[![NPM](https://img.shields.io/npm/v/react-set-store.svg)](https://www.npmjs.com/package/react-set-store) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-set-store
```

## Usage

```jsx
import React from 'react';
import Store, { useStore } from 'react-set-store';

/*
 * Initial state has to be an object
 * Initial state cannot have `setStore` as key
 */
const INITIAL_STATE = {
  count: 0
};

// Button.js
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

// PlusButton.js
const PlusButton = () => {
  /*
   * setStore works exactly like `setState` in  class based components
   */
  const [store, setStore] = useStore();

  return (
    <Button
      text='+'
      onClick={() => setStore({ count: store.count + 1 })}
    />
  );
};

// MinusButton.js
const MinusButton = () => {
  const [store, setStore] = useStore();
  return (
    <Button
      text='-'
      onClick={() => setStore({ count: store.count - 1 })}
    />
  );
};

// App.js
const App = () => {
  const [store] = useStore();
  return (
    <div>
      <h1>{store.count}</h1>
      <PlusButton />
      <MinusButton />
    </div>
  )
};

// index.js
ReactDOM.render(
  <Store state={INITIAL_STATE}>
    <App />
  </Store>,
  document.getElementById('root')
);
```

## License

MIT © [BibekSaha](https://github.com/BibekSaha)
