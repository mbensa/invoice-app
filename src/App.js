import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Main />
      </main>
    </div>
  );
}
