import Calendar from './components/Calendar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
