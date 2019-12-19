import React from 'react'
import Map from './components/map'
import Sidebar from './components/sidebar'

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">

        <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: '100vh', overflow: 'auto' }}>
          <div style={{ padding: 8 }}><Sidebar /></div>
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, marginLeft: 200, width: 'calc(100vw - 200px)', height: '100vh' }}>
          <Map />
        </div>

      </header>
    </div>
  );
}

export default App;
