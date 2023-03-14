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
const [answer, setAnswer] = useState('');
const [style, setStyle] = useState();

const handleFlipped = () => {
  if (flipped === false) {
    setFlipped(true);
  } else {
    setFlipped(false);
  }
}

const nextIndex = () => {
  setIndex(prev => {
    if (prev === data.length - 1){
      return 0;
    } else {
      return prev + 1 
    }
  })
  setAnswer('');
  setStyle('none');
}

const prevIndex = () => {
  setIndex(prev => {
    if (prev === 0){
      return 0;
    } else {
      return prev - 1;
    }
  })
  setAnswer('');
  setStyle('none');
}

const handleAnswer = (e) => {
  setAnswer(e.target.value);
}

const validateAnswer = () => {
  if (answer.length <= 1) {
    return 0;
  }
  if(answer === data[index].Answer) {
    setStyle(
      '3px solid green'
    )
  }

  if(answer !== data[index].Answer) {
    setStyle(
      '3px solid red'
    )
  }
}

  return (
    <div className="App">
      <h1 className='headerText' >Flashcards</h1>
      <h3>Study for your Anime Final Exam!</h3>
      <p>Number of Flashcards: {data.length - 1}</p>
      <div className='flashcardContainer' onClick={handleFlipped}>
        {flipped ? <div className='flashcardFront'> <Card question = {data[index].Answer}/> </div> : <div className='flashcardBack'><Card question = {data[index].Question}/></div>}
      </div>
      <div className='interaction'>
        <label className='headerText'>Insert Answer </label>
        <input type='text' placeholder='Place Answer Here' className='answerStyle' style={{border: style}} onChange={handleAnswer} value={answer}></input>
        <button className='prevCard' onClick={validateAnswer}>Submit</button> 
      </div>
      <div className='navigation'>
        <button className='prevCard' onClick={prevIndex}>Prev</button>
        <button className='nextCard' onClick={nextIndex}>Next</button>
      </div>
    </div>
  )
}

export default App