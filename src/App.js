import { Provider } from "react-redux";
import { Home } from "./pages/Home/Index";
import { GlobalStyle } from './styles/GlobalStyles'
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
