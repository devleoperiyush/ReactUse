import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import store from "./config/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
