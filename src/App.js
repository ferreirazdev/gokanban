import { Provider } from "react-redux";
import { Home } from "./pages/Home/Index";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
