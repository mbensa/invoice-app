import "./App.css";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <MainHeader />
      </main>
    </div>
  );
}
