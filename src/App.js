import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div>salve</div>
    </Provider>
  );
}

export default App;
