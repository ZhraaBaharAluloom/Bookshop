import React, { useState } from "react";
import { observer } from "mobx-react";
import logo from "./logo4.webp";

//Components
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";

//Stores
import vendorStore from "./stores/vendorStore";
import bookStore from "./stores/bookStore";

//styles
import { GlobalStyle } from "./styles";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#f7f7ee",
    lightGrey: " #6d6875",
    grey: "#424b54",
    red: "#6a040f",
    brown: "#463f3a",
  },
  dark: {
    mainColor: "#faeee7",
    backgroundColor: "#363636",
    lightGrey: " #979797",
    red: "#ff3232",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        logo={logo}
      />
      {vendorStore.loading || bookStore.loading ? (
        <h1>Loadinggg</h1>
      ) : (
        <Routes />
      )}{" "}
    </ThemeProvider>
  );
}

export default observer(App);
