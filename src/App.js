import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import DatePicker from "./components/DatePicker";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <DatePicker />
      </main>
    </div>
  );
}
