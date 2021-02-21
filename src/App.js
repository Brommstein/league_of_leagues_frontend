import React from 'react';
import Routes from './Routes';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <main className='App'>
      <header>
        <Header />
      </header>
      <Routes />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;