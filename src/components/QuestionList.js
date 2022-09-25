import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => setQuestion(data))
  })
  
  function onDelete(id){
    fetch(`http://localhost:4000/questions/${id}`,{
    method: 'DELETE',
    })
    .then(r => r.json())
    .then( () => {
      const deleted = questions.filter(questions => questions.id != id)
      setQuestion(deleted)
    })
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => <QuestionItem question={question}  onDelete={onDelete}/> )}</ul>
    </section>
  );
}

export default QuestionList;
