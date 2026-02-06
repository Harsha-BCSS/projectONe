import React from 'react';

const App = () => {
  return (
    // Main container now uses flex-direction: row to align columns side-by-side
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row'
    }}>

      {/* Column 1: Split vertically into Red and Blue */}
      <div style={{ width: '16.6vw', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: 'red', flex: 1 }}></div>
        <div style={{ backgroundColor: 'blue', flex: 1 }}></div>
      </div>

      {/* Column 2: Solid Yellow */}
      <div style={{ backgroundColor: 'yellow', width: '16.6vw', height: '100%' }}></div>

      {/* Column 3: Split vertically into 4 colors */}
      <div style={{ width: '16.6vw', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: 'brown', flex: 1 }}></div>
        <div style={{ backgroundColor: 'indigo', flex: 1 }}></div>
        <div style={{ backgroundColor: 'pink', flex: 1 }}></div>
        <div style={{ backgroundColor: 'green', flex: 1 }}></div>
      </div>

      {/* Column 4: Solid Orange */}
      <div style={{ backgroundColor: 'orange', width: '16.6vw', height: '100%' }}></div>

      {/* Column 5: Solid White */}
      <div style={{ backgroundColor: 'white', width: '16.6vw', height: '100%' }}></div>

      {/* Column 6: Solid Green */}
      <div style={{ backgroundColor: 'green', width: '16.6vw', height: '100%' }}></div>

    </div>
  );
};

export default App;


