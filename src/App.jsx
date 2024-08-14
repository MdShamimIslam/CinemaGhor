import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./compoennts/Page";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
      <Page/>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
