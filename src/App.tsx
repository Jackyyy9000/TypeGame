import { useState } from 'react';
import './App.css';

function App() {
  const [charArray, setCharArray] = useState<string[]>([]);
  
  const exampleWord: string[] = Array.from('This is the most beautiful sentence ever written.');

  const getStyledWord = () => {
      return exampleWord.map((char, index) => {
      const isCorrect = charArray[index] === char;
      let style;
      if (charArray[index] != undefined)
      {
        style = {
          color: isCorrect ? 'green' : 'red',
        };
      }
      
      return <span key={index} style={style}>{char}</span>;
    });
  };

  return (
    <>
      <div className='container'>
        <div className='exampleWord'>{getStyledWord()}</div>
        <input
          className='inputField'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCharArray(Array.from(e.target.value));
          }}
        />     
      </div>
    </>
  );
}


export default App;
