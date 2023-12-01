import './App.css';
import Stars from "./Components/Stars";

function App() {
  return (
    <div className="main-container">
      <Stars
      value={8}
      starSize="30px"
      starColor="black"
      direction="ltr"
      starsNumber={9}
      />
    </div>
  );
}

export default App;
