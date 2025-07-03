
import './App.css';
import MoodDisplay from './MoodDisplay';
import { useState } from 'react';
function App() {
    const [mood,setMethod] = useState("");
    return (
      <div className={`container ${mood}`}>
        <h1>How are yor feeling Today?</h1>
        <div className="button">
          <button className="btn happy"onClick={() => setMethod("happy")}>
            😁 happy
          </button>
          <button className="btn sad"onClick={() => setMethod("sad")}>
            😒 sad
          </button>
          <button className="btn excited"onClick={() => setMethod("excited")}>
          🤗 excited
          </button>
          <button className="btn angry"onClick={() => setMethod("angry")}>
            🤬 angry
          </button>
        </div>
        <MoodDisplay value={mood} />
      </div>
    );
}

export default App;