import React, { useContext } from 'react';

const Context = React.createContext({});

// Base component for wrapping the root component
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

// Custom hook for functional component
export function useStore() {
  const {
    setStore = () => console.log('Wrap your root component with `Store`'),
    ...store
  } = useContext(Context);
  return [store, setStore];
}

// HOC for class based component
export const withStore = WrappedComponent => {
  class ClassComponentWithStore extends React.Component {
    render() {
      const { 
        setStore = () => console.log('Wrap your root component with `Store`'), 
        ...store 
      } = this.context;
      return (
        <WrappedComponent
          {...this.props}
          STORE={store}
          SET_STORE={setStore}
        />
      );
    }
  };

  ClassComponentWithStore.contextType = Context;

  return ClassComponentWithStore;
};

export default Store;
