import React, { useState } from 'react';
import data from './data';
import Question from './singleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container"> 
        <h3>Question and answers for interveiw </h3>
        <section className="info">
          {
            questions.map((question)=>{
              return <Question key={question.id} {...question} />;
            })
          }
        </section>
      </div>
   </main>
  );
}

export default App;
