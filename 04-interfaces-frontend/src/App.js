import React from 'react';
import Header from './components/header';
import './App.css';
import ListVacations from './components/listVacations';
import LeaveForm from './components/leaveForm';
import LeaveSummary from './components/leaveSummary';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white w-full">
        <ListVacations />
        <LeaveForm />
        <LeaveSummary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
