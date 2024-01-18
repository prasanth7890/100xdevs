import { useState, useCallback } from "react";
import './App.css';

function App() {
  const [wordCount, setWordCount] = useState();
  const [generatedpara, setgeneratedPara] = useState("");

  const genearteParagraph = useCallback(() => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let para = "";

    for(let j=0;j<wordCount;j++) {
      const wordLength = Math.floor(Math.random() * (10 - 3 + 1) + 3);

      let word = "";
      for(let i=0;i<wordLength;i++) {
        const index = Math.floor(Math.random() * 26);
        word += alphabets[index];
      }
      
      para += " " + word;
    }
    return para;

  }, [wordCount]);

  function handleClick() {
    const generated = genearteParagraph();
    setgeneratedPara(generated);
  }

  return(
    <>
      <div className="main">
        <h2>Para Generator</h2>
        <div className="input-div">
          <input type="text" placeholder="Enter Number of words" value={wordCount} onChange={(e)=>setWordCount(e.target.value)}/>
          <button onClick={handleClick}>Generate</button>
        </div>
        <p>{generatedpara}</p>
      </div>
    </>
    
  )
  
}

export default App
