import Calendar from "./components/Calendar"
import DaysOfWeek from "./components/DaysOfWeek"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <DaysOfWeek/>
      </div>
      <Calendar/>
    </div>
  )
}

export default App
