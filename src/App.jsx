import "../src/index.css"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg gap-6">
        <Header />
        <Form />
      </main>
    </div>
  )
}

export default App