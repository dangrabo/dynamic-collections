import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import data from "./data.js";

function App() {
  const test = data[2];
  return (
    <>
      <Header />
      <PlayerCard {...test} />
      <Footer />
    </>
  );
}

export default App;
