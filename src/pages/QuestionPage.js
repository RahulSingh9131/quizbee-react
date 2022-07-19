import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../css/main.css";
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import { decode } from 'html-entities';


const getRandomInt=(max)=>{
    return Math.floor(Math.random()*Math.floor(max));
}

const QuestionPage = () => {
    const {
        score,
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
    }=useSelector((store)=>store.quiz)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useDocumentTitle("questions");

    let apiUrl=`/api.php?amount=${amount_of_question}`;
    if(question_category){
        apiUrl= apiUrl.concat(`&category=${question_category}`)
     
    }
    if(question_difficulty){
        apiUrl=apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if(question_type){
        apiUrl=apiUrl.concat(`&type=${question_type}`)
    }

    const {response,loading}=useAxios({url: apiUrl});
    const [questionIdx,setQuestionIdx]=useState(0);
    const [options,setOptions]=useState([]);

    useEffect(()=>{
        if(response?.results.length){
            const question=response.results[questionIdx];
            let answers=[...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            )
            setOptions(answers);
        }
    },[response,questionIdx]);


    if(loading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    const handleClickAnswer=(e)=>{
        const question=response.results[questionIdx];
        if(e.target.textContent===question.correct_answer){
            dispatch(handleScoreChange(score+1));
        }
        if(questionIdx+1<response.results.length){
            setQuestionIdx(questionIdx+1)
        }else{
            navigate("/scorepage");
        }
    }
    console.log(score);

  return (
    <main>
        <div className='big-wrapper'>
            <Header/>
            <section className='section'>
                <div className='container'>
                    <div className="heading">
                        <h1>Play the quiz.</h1>
                    </div>
                    <div className='quiz-box-container'>
                        <div className="quiz-box">
                            <div className="quiz-header">
                                <p>Question {questionIdx+1}/{amount_of_question} </p>
                            </div>
                            <div className="quiz-question">
                                <p>{decode(response?.results[questionIdx].question)}?</p>
                            </div>
                            <div className="quiz-option-list">
                                {options.map((data,id)=>(
                                    <div key={id}>
                                        <button className="option" onClick={handleClickAnswer}>{decode(data)}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </main>
  )
}

export default QuestionPage