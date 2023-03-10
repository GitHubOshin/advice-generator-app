import axios from 'axios'
import { useState } from 'react'

function App() {
  const [quote, setQuote] = useState(null)
  const [isLoading, setIsloading] = useState(false)

  async function getQuotes() {
    setIsloading(true)
    const quote = await axios('https://api.adviceslip.com/advice')
    setIsloading(false)
    setQuote(quote.data.slip)
  }

  return (
    <div className="bg-bgWeb font-manrope mobile:p-5 w-screen h-screen flex items-center justify-center">
      <div className="relative bg-bgAdvice w-full h-full max-w-[539px] max-h-[332px] min-w-[343px] min-h-[315px] rounded-xl flex flex-col items-center justify-evenly p-[40px]">
        <h4 className="text-lightgreen text-[10px] tracking-[4px]">
          ADVICE #{quote?.id}
        </h4>
        {isLoading ? (
          <h1 className="text-quote text-[28px] text-center">"Loading..."</h1>
        ) : (
          <h1 className="text-quote text-[28px] text-center">
            "{quote?.advice}"
          </h1>
        )}
        <img alt="" src="images/pattern-divider-desktop.svg" />
        <button
          onClick={getQuotes}
          className="absolute bottom-[-32px] bg-lightgreen hover:shadow-[0px_0px_50px_-5px_lightgreen] w-[64px] h-[64px] rounded-full flex justify-center items-center"
        >
          <img alt="" src="images/icon-dice.svg" />
        </button>
      </div>
    </div>
  )
}

export default App

