import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ParentForwardRef from './react-templatecode/forwardRef/ParentForwardRef';
import DemoForUseImperativeHandler from './react-templatecode/useImprativeHandler/Index';
import DemoForUseMemo from './react-templatecode/useMemo/Index';
import DemoForMeMo from './react-templatecode/memo/Index';
import DemoForUseCallBacks from './react-templatecode/useCallback/Index';
import DemouseTransition from './react-templatecode/useTransition/Example1/Index';
import DemouseTransitionExample2 from './react-templatecode/useTransition/Example2/Index';
import DemoForDefferedValue from './react-templatecode/useDefferedValue/Index';
import DemoForUseLayoutEffect from './react-templatecode/useLayoutEffect/Index';
import DemoForuseReducer from './react-templatecode/useReducer/Index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Hook Examples</h1>
      <nav>
        <ul>
          <li><a href="#forward-ref">Forward Ref</a></li>
          <li><a href="#use-imperative-handle">useImperativeHandle</a></li>
          <li><a href="#use-memo">useMemo</a></li>
          <li><a href="#memo">Memo</a></li>
          <li><a href="#use-callback">useCallback</a></li>
          <li><a href="#use-transition">useTransition Example 1</a></li>
          <li><a href="#use-transition-2">useTransition Example 2</a></li>
          <li><a href="#use-deferred-value">useDeferredValue</a></li>
          <li><a href="#use-layout-effect">useLayoutEffect</a></li>
          <li><a href="#use-reducer">useReducer</a></li>
        </ul>
      </nav>


      <section id="forward-ref">
        <h3>Example for Forward Ref</h3>
        <p>Forward Ref is used for handling nodes of child from parent (<code>forwardRef(component name)</code>).</p>
        <ParentForwardRef />
      </section>

      <section id="use-imperative-handle">
        <h3>Example for useImperativeHandle</h3>
        <p>useImperativeHandle is used for handling nodes of child from parent but we can define particular functions which can be used by the parent function.</p>
        <DemoForUseImperativeHandler />
      </section>

      <section id="use-memo">
        <h3>Example for useMemo</h3>
        <p>useMemo is used to memoize values to avoid re-computing expensive calculations on every render.</p>
        <DemoForUseMemo />
      </section>

      <section id="memo">
        <h3>Example for Memo</h3>
        <p>Memo will only re-render the component when the given props have changed.</p>
        <DemoForMeMo />
      </section>

      <section id="use-callback">
        <h3>Example for useCallback</h3>
        <p>useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is used to prevent the creation of new functions on every render, which can be useful when passing callbacks to child components that rely on React.memo or other optimizations.</p>
        <p>useCallback is used as in React every time a function will re-render when the component is reloaded so we cannot use memo for that purpose.</p>
        <DemoForUseCallBacks />
      </section>

      <section id="use-transition">
        <h3>Use Transition Example 1</h3>
        <DemouseTransition />
      </section>

      <section id="use-transition-2">
        <h3>Use Transition Example 2</h3>
        <DemouseTransitionExample2 />
      </section>

      <section id="use-deferred-value">
        <h3>Example for useDeferredValue</h3>
        <p>During the initial render, the returned deferred value will be the same as the value you provided. During updates, React will first attempt a re-render with the old value (so it will return the old value), and then try another re-render in the background with the new value (so it will return the updated value).</p>
        <DemoForDefferedValue />
      </section>

      <section id="use-layout-effect">
        <h3>Example for useLayoutEffect</h3>
        <p>Works same as useEffect but useEffect is synchronous and useLayoutEffect is asynchronous so it executes the useeffect laout adn the renders other component</p>
        <DemoForUseLayoutEffect />
      </section>


      <section id="use-reducer">
        <h3>Example for useLayoutEffect</h3>
        <p>useReducer is a React hook used for state management in function components. It is similar to useState, but is more suitable for managing complex state logic involving multiple sub-values or when the next state depends on the previous state. It is inspired by the Redux library and follows the reducer pattern.

        Third Argument in useReducer
The third argument to useReducer is an optional init function that allows you to lazy-initialize the state. This can be useful if initializing the state is expensive or if you need to derive the initial state from some other source.
        </p>
        <DemoForuseReducer />
      </section>
    </div>
  );
}

export default App;
