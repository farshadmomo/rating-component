import './App.css';
import Stars from "./Components/Stars";

function App() {
  return (
    <div className="main-container">
      <Stars
      value={1.5}
      fontSize="10px"
      starColor="black"
      direction="rtl"
      />
    </div>
  );
}

export default App;
