import "./App.css";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MainHeader />
      </main>
    </div>
  );
}
