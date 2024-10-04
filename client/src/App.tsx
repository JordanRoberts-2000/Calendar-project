import Calendar from './components/Calendar';
import DaysOfWeek from './components/DaysOfWeek';

function App() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <header className="flex flex-col py-4 gap-2 border-b border-b-neutral-200 shadow-sm">
        <div className="p-4 flex relative">
          <h1 className="text-xl font-semibold absolute left-1/2 pb-4 top-1/2 -translate-x-1/2 font-serif -translate-y-1/2">
            Sezzi Calendar
          </h1>
          {/* <button className="border-neutral-900 border-2 font-bold px-3 rounded-md ml-auto">
            sign in
          </button> */}
        </div>
        <DaysOfWeek />
      </header>
      <Calendar />
    </div>
  );
}

export default App;
