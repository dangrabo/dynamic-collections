import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PlayerCard from "./components/PlayerCard.jsx";
import data from "./data.js";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        {data.map((player) => {
          return <PlayerCard key={player.id} {...player} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
