import "./App.css";
import Header from "./components/Header";
import NewInvoice from "./components/NewInvoice";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <NewInvoice />
      </main>
    </div>
  );
}
