import React, { useContext } from 'react';

const Context = React.createContext({});

export class Store extends React.Component {
  state = this.props.state || {};

  render() {
    const { children } = this.props;
    return (
      <Context.Provider 
        value={{ 
          ...this.state, 
          setStore: this.setState.bind(this)
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export function useStore() {
  const { 
    setStore = () => console.log('Wrap your root component with `Store`'), 
    ...store 
  } = useContext(Context);
  return [store, setStore];
}

export default Store;
