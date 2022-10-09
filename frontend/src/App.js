import UpLoad from './component/UpLoad';
import NavBar from './component/home/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/home';
import SlideShow from './component/home/slideShow';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ 'text-align': 'center', 'border': '1px solid black', 'outline-stlye': 'solid', 'outline-color': 'white', 'color': 'blue' }}>Oma's Tree</h1>
        <NavBar />
        <Home />
        <SlideShow />
        <UpLoad />
      </header>
    </div>
  );
}

export default App;

