import Nav from "./Components/Nav"
import Mainroutes from "./Routes/Mainroutes"

const App = () => {
  return (
    <div className=" text-xl w-full min-h-screen overflow-auto bg-[#1e1e1e] text-white   ">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App