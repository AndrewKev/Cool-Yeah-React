import './style/output.css';
import Navbar from './components/Navbar';
import HomeContent  from './components/HomeContent';

function App() {
  return (
    <div className='font-dosis'>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeContent />
      </main>
    </div>
  );
}

export default App;
