// TODO: Replace with React.createContext once we can assume React 16+
import createContext from "mini-create-react-context";

/**
 * 这个文件是创建全局的context，react-router中，
 * 所有的组件都是通过RouterContext.Provider或者RouterContext.Consumer来访问这个context的值
 * */

const createNamedContext = name => {
  const context = createContext();
  context.displayName = name;

  return context;
};

const context = /*#__PURE__*/ createNamedContext("Router");
export default context;
