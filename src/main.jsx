import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import WeatherStore from "./store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={WeatherStore}>
    <App />
  </Provider>
);
