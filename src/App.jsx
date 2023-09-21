import Result from "./components/Result"
import Summary from "./components/Summary"

function App() {
  return (
    <main className='font-hanken md:flex md:items-center md:justify-center md:h-screen'>
      <div className='md:flex md:max-w-[736px] md:shadow-2xl md:rounded-3xl'>
        <Result />
        <Summary />
      </div>
    </main>
  )
}

export default App
