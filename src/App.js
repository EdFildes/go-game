import React, {useState} from 'react';
import Square from './components/Square';
import './css/App.css';

function App() {
  let size = 6
  let [color, setGlobalColor] = useState('white')
  let grid = []
  let coordinates = []

  
  for(let y=0;y<size;y++){
    let fullRow = []
    for(let x=0;x<size;x++){
      fullRow.push(0)
      grid.push(<Square pos={[x,y]} makeMove={makeMove} color={color}/>)
    }
    coordinates.push(fullRow)
  }

  function makeMove(pos, col){
    color === 'white' ? setGlobalColor('black') : setGlobalColor('white')
    checkAdjacent(pos, col)
  }

  function checkAdjacent(pos, col){
   let [x, y] = pos
   let target
   if(col === 'black'){
     target = 'w'
   } else target = 'b'
   if(coordinates[x + 1][y] === target){

   }
   if(coordinates[x + 1][y] === target){
    
    }
    if(coordinates[x + 1][y] === target){
      
    }
  }

  return (
    <div className='grid'>
        {grid}
    </div>
  );
}

export default App;
