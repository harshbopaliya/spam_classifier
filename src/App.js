import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";

function App() {

  return (
    <>
      <Header title="My TodosList" searchBar={false} />
      <About />
      <Footer />
    </>
  );
}

export default App;
