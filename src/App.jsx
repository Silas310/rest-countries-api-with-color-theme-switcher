import "../src/index.css"
import Header from "../src/components/Header"
import Search from "./components/Search"  

function App() {

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg">
        <Header />
        <Search />
      </main>
    </div>
  )
}

export default App