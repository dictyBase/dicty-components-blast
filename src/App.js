import React, { Component } from 'react';
import './App.css';
import Blast from './Components/Blast'
import {
    programOptions,
    organismOptions,
    databaseOptions,
    eValueOptions,
    alignmentOptions,
    wordSizeOptions,
    matrixOptions
} from './constants/Options'

const dummyHandler = (val) => {console.log(val)}
class App extends Component {
  render() {
    return (
      <div className="App">
          <Blast
              handleEValueChange={ dummyHandler }
              handleProgramChange={ dummyHandler }
              handleOrganismChange={ dummyHandler }
              handleDatabaseChange={ dummyHandler }
              handleAlignmentChange={ dummyHandler }
              handleWordSizeChange={ dummyHandler }
              handleMatrixChange={ dummyHandler }
              handleGappedAlignmentChange={ dummyHandler }
              handleFilterChange={ dummyHandler }
              programOptions={ programOptions }
              organismOptions={ organismOptions }
              databaseOptions={ databaseOptions }
              eValueOptions={ eValueOptions }
              alignmentOptions={ alignmentOptions }
              wordSizeOptions={ wordSizeOptions }
              matrixOptions={ matrixOptions }
          />
      </div>
    )
  }
}

export default App;
