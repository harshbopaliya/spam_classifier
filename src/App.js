import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import SpamClassifier from "./MyComponents/spamClassifier";

function App() {
  return (
    <>
      <Header title="My TodosList" searchBar={false} />
      <SpamClassifier />
      <About />
      <Footer />
    </>
  );
}

export default App;
