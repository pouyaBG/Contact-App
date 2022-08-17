import './App.css';
import AddContact from './components/AddContact/AddContact';

function App() {
  return (
    <main className='App'>
      <h1>Contact App</h1>
      <section>
        <AddContact />
      </section>
      <section>Contact List</section>
    </main>
  );
}

export default App;
