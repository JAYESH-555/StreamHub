import './App.css';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <div className="app-container">
      <div className="app-title-container">
        <img src="https://cdn-icons-png.flaticon.com/128/5822/5822071.png" alt="Play Icon" className="app-title-icon" />
        <h1 className="app-title">StreamHub</h1>
      </div>
      <VideoPlayer src={"http://localhost:8000/live/test.flv"} />
    </div>
  );
}

export default App;
