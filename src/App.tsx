import React from 'react'
import Map from './components/map'
import Sidebar from './components/sidebar'

const sidebarWidth = 300

const App: React.FC = () => {

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: sidebarWidth, height: '100vh', overflow: 'auto' }}>
        <div style={{ padding: 8 }}><Sidebar /></div>
      </div>
      <div style={{ position: 'absolute', top: 0, left: sidebarWidth, width: `calc(100vw - ${sidebarWidth}px)`, height: '100vh' }}>
        <Map />
      </div>
    </>
  );
}

export default App;
