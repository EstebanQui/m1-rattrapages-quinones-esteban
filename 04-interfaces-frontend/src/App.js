import React from 'react';
import Header from './components/header';
import './App.css';
import ListVacations from './components/listVacations';
import LeaveForm from './components/leaveForm';
import LeaveSummary from './components/leaveSummary';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <ListVacations />
        <LeaveForm />
        <LeaveSummary />
      </main>
    </div>
  );
}

export default App;
