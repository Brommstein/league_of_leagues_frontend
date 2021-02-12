import React from 'react';
import HomePage from './homePage';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <main className='App'>
      <header>
        <Header />
      </header>
      <HomePage />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;