import React from 'react';
import UserInputs from './components/UserInputs';
// import BillsTable from './components/BillsTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <UserInputs />
        {/* <BillsTable /> */}
      </div>
    );
  }
}

export default App
