import logo from "./logo.svg";
import "./App.scss";
import { AppImages } from "./AppData/appImages";
import Logo from "./Assets/Logos/logo.svg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} />
      <div
        className="appBg flex-row"
        style={{
          background: `url(${AppImages.dashboardBg})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.6)",
            padding: 15,
            color: "black",
          }}
        >
          <h1>All the best Folks!</h1>
          <ul style={{ textAlign: "left" }}>
            <li>make a New Branch with your name "firstName_lastName"</li>
            <li>checkout to your created branch and start your task</li>
          </ul>
          <p>
            You will find all the Description at top of the{" "}
            <a
              target="_blank"
              href="https://www.figma.com/file/rtsfhxsZmH9Vj8Y9ve3YPU/React_Interview_Figma?type=design&node-id=1%3A13571&mode=design&t=nAc7AiN9tuYVekdW-1"
            >
              Figma
            </a>{" "}
            file
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
