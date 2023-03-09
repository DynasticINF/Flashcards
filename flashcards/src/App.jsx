import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const data = [
  {
    Question: 'Start',
    Answer: 'Press the next button to begin'
  },
  {
    Question: 'Who is the main character of Dragon Ball Z?',
    Answer: 'Son Goku'
  },
  {
    Question: 'Name of the Tailed Beast inside of Naruto? ',
    Answer: 'Kurama',
  },
  {
    Question: 'Narutos Author?',
    Answer: 'Masashi Kishimoto',
  },
  {
    Question: 'Bleach main characters name',
    Answer: 'Ichigo Kurosaki',
  },
  {
    Question: 'My Hero?',
    Answer: 'Academia!',
  },
  {
    Question: 'What year was My Hero Academia Published in Shonen Jump',
    Answer: '2014',
  },
  {
    Question: 'Luffy has what Devil Fruit?',
    Answer: 'Gum-Gum Fruit',
  },
  {
    Question: 'What is Narutos main goal?',
    Answer: 'Becoming Hokage',
  },
  {
    Question: 'What does Gon want to do in Hunter X Hunter?',
    Answer: 'Find his Dad',
  },
]

const [flipped, setFlipped] = useState(false);

const [index, setIndex] = useState(0);

const handleFlipped = () => {
  if (flipped === false) {
    setFlipped(true);
  } else {
    setFlipped(false);
  }
}



const handleIndex = () => {
  const newIndex = Math.floor(Math.random() * data.length);
  setIndex(newIndex);
  setFlipped(false);
}

  return (
    <div className="App">
      <h1 className='headerText' >Flashcards</h1>
      <h3>Study for your Anime Final Exam!</h3>
      <p>Number of Flashcards: {data.length - 1}</p>
      <div className='flashcardContainer' onClick={handleFlipped}>
        {flipped ? <div className='flashcardFront'> <Card question = {data[index].Answer}/> </div> : <div className='flashcardBack'><Card question = {data[index].Question}/></div>}
      </div>
      <button className='nextCard' onClick={handleIndex}>Next</button>
    </div>
  )
}

export default App