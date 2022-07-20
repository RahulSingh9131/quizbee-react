import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import "../css/main.css";
import { useNavigate } from 'react-router-dom';
import { handleAmountChange, handleScoreChange } from '../redux/actions';


const ScorePage = () => {
    const {score}=useSelector((store)=>store.quiz);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handlebackToSettings=()=>{
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(10));
        navigate("/settings");
    }
  return (
    <main>
    <div className='big-wrapper'>
        <Header/>
        <section className='showcase-area-score'>
            <div className='container'>
                <div className="heading">
                    <span>S</span>
                    <span>C</span>
                    <span>O</span>
                    <span>R</span>
                    <span>E</span>
                </div>
                <div className='score-box-container'>
                    <h2>Congratulations on completing the quiz.</h2>
                    <h4>You have scored  {score}</h4>
                    <button className='score-btn' onClick={handlebackToSettings}>Back To Settings</button>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</main>
  )
}

export default ScorePage