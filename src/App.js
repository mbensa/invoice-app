import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
      </main>
    </div>
  );
}
