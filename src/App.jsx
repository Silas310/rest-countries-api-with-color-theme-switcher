import "../src/index.css"
import Header from "./components/Header"
import Search from "./components/Search"  
import Filter from "./components/Filter"

function App() {

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg">
        <Header />
        <Search />
        <Filter/>
      </main>
    </div>
  )
}

export default App