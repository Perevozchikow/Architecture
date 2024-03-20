
import igFlag from "./imj/250px-Flag_of_Izhevsk_(Udmurtia).svg.png";
import rsFlag from "./imj/unnamed.png";
import './App.css';

function App() {
  return (
      <div className="container">
        <main className="main_container">
            <p>City: <strong>Ижевск</strong></p>
            <p>Country: <strong>Россия</strong></p>
            <p>Number of inhabitants: <strong>620 591 человек</strong></p>
            <p>City flag:  <img src={igFlag} alt=""/></p>
            <p>Country flag:  <img src={rsFlag} alt=""/></p>
        </main>
      </div>
  );
}

export default App;
