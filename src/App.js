import "./App.css";
import Header from "./components/Header";
import DropDown from "./components/DropDown";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <DropDown />
      </main>
    </div>
  );
}
