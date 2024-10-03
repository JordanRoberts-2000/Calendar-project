import Calendar from "./components/Calendar"
import DaysOfWeek from "./components/DaysOfWeek"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col py-4 gap-2 border-b border-b-neutral-300">
        <div className="p-4 flex justify-between">
          <h1 className="text-2xl font-semibold">Sezzi Calendar</h1>
          <button className="bg-neutral-900 text-white py-1 px-3 rounded-md">sign in</button>
        </div>
        <DaysOfWeek/>
      </header>
      <Calendar/>
    </div>
  )
}

export default App
