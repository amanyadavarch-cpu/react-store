import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";


const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Navbar/>

      <Approutes/>
    </div>
  )
}

export default App
