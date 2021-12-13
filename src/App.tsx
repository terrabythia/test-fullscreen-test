import { useState } from "react";
import { FullScreenTests } from "./components/FullScreenTests";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [errorMargin, setErrorMargin] = useState(10);
  const onErrorMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMargin(Number(e.target.value));
  };
  return (
    <div className="App">
      <UserInfo />
      <div>
      <div>
        <label htmlFor="fullScreenErrorMargin">Error margin:</label>
        <input 
          type="range" 
          min="0" 
          step="1"
          max="1000" 
          defaultValue={10} 
          onChange={onErrorMarginChange} 
          id="fullScreenErrorMargin" 
        />
        <span>{errorMargin}</span>
      </div>
      </div>
      <div>
        <FullScreenTests errorMargin={errorMargin} />
      </div>
    </div>
  );
}

export default App;
