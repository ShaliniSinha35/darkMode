import React, { useContext } from "react";
import { UserContext } from "../Contexts/Context";

function Home() {
  const { theme, setTheme } = useContext(UserContext);

  return (
    <div
      className={theme ? "dark" : "light"}
      style={{ height: "10rem", width: "100vw" }}
    >
      <div>Home </div>

      <p></p>
    </div>
  );
}

export default Home;
