import { NextPage } from 'next'
import { useState } from 'react'

const GenerateQuiz: NextPage = () => {
  const [topping, setTopping] = useState("Medium")

  const onOptionChange = e => {
    setTopping(e.target.value)
  }

  // return <h1>GENERATOR PAGE</h1>
  return (
    <div className="App">
      <fieldset>
        <legend>How many questions to generate?:</legend>
        <input
          type="radio"
          name="topping"
          value="Regular"
          id="regular"
          checked={topping === "Regular"}
          onChange={onOptionChange}
        />
        <label htmlFor="regular">Regular</label>

        <input
          type="radio"
          name="topping"
          value="Medium"
          id="medium"
          checked={topping === "Medium"}
          onChange={onOptionChange}
        />
        <label htmlFor="medium">Medium</label>

        <input
          type="radio"
          name="topping"
          value="Large"
          id="large"
          checked={topping === "Large"}
          onChange={onOptionChange}
        />
        <label htmlFor="large">Large</label>
      </fieldset>

      <p>Selected <strong>{topping}</strong> questions</p>
    </div>
  )
}

export default GenerateQuiz



/* doesn't work below:

  //     {/* <form onSubmit={formSubmit}> */
  //       {/* <fieldset>
  //         <legend>Select number of questions:</legend> */}
  //         <div>
  //           <input type="radio" id="20" name="drone" value="20" onChange={onOptionChange} checked={numQuestions === '20'} />
  //           <label htmlFor="20">20</label>
  //         </div>
  //         <div>
  //           <input type="radio" id="30" name="drone" onChange={onOptionChange} value="30" checked={numQuestions === '30'}  />
  //           <label htmlFor="30">30</label>
  //         </div>
  //         <div>
  //           <input type="radio" id="40" name="drone" onChange={onOptionChange} value="40"  checked={numQuestions === '40'} />
  //           <label htmlFor="40">40</label>
  //         </div>
  //         <div>
  //           <input type="radio" id="Custom" name="drone" onChange={onOptionChange} value="Custom"  checked={numQuestions === 'Custom'} />
  //           <label id="Custom">Custom</label>
  //         </div>
  //       {/* </fieldset> */}