import "../src/index.css"
import Header from "./components/Header"
import Form from "./components/Form"
import CountriesList from "./components/CountriesList"  


function App() {

  return (
    <div className="flex justify-center w-screen h-screen">
      <main className="text-(length:--font-size-home) flex flex-col w-full bg-light-bg gap-6">
        <Header />
        <Form />
        <CountriesList />
      </main>
    </div>
  )
}

export default App