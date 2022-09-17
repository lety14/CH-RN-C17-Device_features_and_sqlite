import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { init } from "./db";

init();
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
