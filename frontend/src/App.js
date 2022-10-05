import UpLoad from './component/UpLoad';
import NavBar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home';
import SlideShow from './component/carousel';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ 'text-align': 'center' , 'color': 'pink' }}>Oma's Tree</h1>
        <NavBar />
        <Home />
        <SlideShow />
        <UpLoad />
      </header>
    </div>
  );
}

export default App;
