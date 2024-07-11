import { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'
import {
  QuantityContainer,
  QuantityCustomWrapper,
  QuantityWrapper
} from './generate.style'

const Generate: NextPage = () => {
  const QUESTION_QUANTITY_OPTIONS = {
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    custom: undefined
  }

  const QUESTION_CATEGORIES = [
    'music',
    'sport_and_leisure',
    'film_and_tv',
    'arts_and_literature',
    'history',
    'society_and_culture',
    'science',
    'geography',
    'food_and_drink',
    'general_knowledge'
  ]

  const [quantity, setQuantity] = useState<Record<string, string | number>>({
    type: '10',
    value: 10
  })

  const [categories, setCategories] = useState<Record<string, boolean>>({
    music: false,
    sport_and_leisure: false,
    film_and_tv: false,
    arts_and_literature: false,
    history: false,
    society_and_culture: false,
    science: false,
    geography: false,
    food_and_drink: false,
    general_knowledge: false
  })

  const onQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setQuantity({ type: name, value: Number(value) })
  }

  const onCategoriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategories((prevState) => ({
      ...prevState,
      [event.target.name]: !prevState[event.target.name]
    }))
  }

  const generateQuiz = () => {
    // validation of form fields first
    const validationCheckResult = validationCheck()
    // call imported api /triva to generate quiz.
    null
  }

  const validationCheck = () => {
    // check if one category is selected
    const categoriesValid = Object.values(categories).some(
      (value) => value === true
    )
    // check if custom quantity is set if custom is selected.
    let quantityValid = true
    if (quantity.type === 'custom') {
      if (!Number(quantity.value) || Number(quantity.value) <= 0) {
        quantityValid = false
      }
    }
    return categoriesValid && quantityValid
  }

  return (
    <div className="App">
      <div style={{ margin: '0 15%' }}>
        <QuantityContainer>
          <h2>Number of questions to generate?</h2>
          {Object.entries(QUESTION_QUANTITY_OPTIONS).map(([type, value]) => {
            let Wrapper =
              type === 'custom' ? QuantityCustomWrapper : QuantityWrapper
            return (
              <Wrapper key={type}>
                <input
                  type="radio"
                  name={`${type}`}
                  id={`quantity_${type}`}
                  value={value}
                  checked={type === quantity.type}
                  onChange={onQuantityChange}
                />
                <label htmlFor={type}>{type}</label>
              </Wrapper>
            )
          })}
          <input
            type="number"
            min="1"
            max="100"
            name="custom"
            onChange={onQuantityChange}
          />
        </QuantityContainer>
        <h2>Categories</h2>
        {QUESTION_CATEGORIES.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              id={category}
              value={category}
              checked={categories[category]}
              onChange={onCategoriesChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <button onClick={generateQuiz}>Generate</button>
    </div>
  )
}

export default Generate
