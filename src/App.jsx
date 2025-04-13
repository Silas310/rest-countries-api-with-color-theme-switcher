import "../src/index.css"
import Header from "../src/components/Header"

function App() {

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full">
        <Header />
      </main>
    </div>
  )
}

export default App