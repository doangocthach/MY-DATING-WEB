import React, { ComponentType, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";

import getInjectors from "./sagaInjectors";
import { ReactReduxContext } from "react-redux";

// /**
//  * Dynamically injects a saga, passes component's props as saga arguments
//  *
//  * @param {string} key A key of the saga
//  * @param {function} saga A root saga that will be injected
//  * @param {string} [mode] By default (constants.RESTART_ON_REMOUNT) the saga will be started on component mount and
//  * cancelled with `task.cancel()` on component un-mount for improved performance. Another two options:
//  *   - constants.DAEMON—starts the saga on component mount and never cancels it or starts again,
//  *   - constants.ONCE_TILL_UNMOUNT—behaves like 'RESTART_ON_REMOUNT' but never runs it again.
//  *
//  */
interface IParams {
  key: string;
  saga: any;
  mode?: string;
}
// export default ({ key, saga, mode }) => (WrappedComponent) => {
// export default (params: IParams) => (WrappedComponent: ComponentType) => {
//   const { key, mode, saga } = params;
//   class InjectSaga extends React.Component {
//     static WrappedComponent = WrappedComponent;
//     static displayName = `withSaga(${
//       WrappedComponent.displayName || WrappedComponent.name || "Component"
//     })`;
//     static contextTypes = {
//       // eslint-disable-next-line react/forbid-prop-types
//       store: PropTypes.object.isRequired,
//     };

//     // eslint-disable-next-line camelcase
//     UNSAFE_componentWillMount() {
//       const { injectSaga } = this.injectors;

//       injectSaga(key, { saga, mode }, this.props);
//     }

//     componentWillUnmount() {
//       const { ejectSaga } = this.injectors;

//       ejectSaga(key);
//     }

//     injectors = getInjectors(this.context.store);

//     render() {
//       return WrappedComponent;
//       // return <WrappedComponent {...this.props} />;
//     }
//   }

//   return hoistNonReactStatics(InjectSaga, WrappedComponent);
// };

const useInjectSaga = (params: IParams) => {
  const { key, mode, saga } = params;
  const context = useContext(ReactReduxContext);
  useEffect(() => {
    const injectors = getInjectors(context.store);
    injectors.injectSaga(key, { saga, mode }, null);
    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };
