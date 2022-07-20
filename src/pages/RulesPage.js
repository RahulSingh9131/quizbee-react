import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "../css/main.css";


const RulesPage = () => {
    const navigate=useNavigate();
  return (
    <main>
        <div className="big-wrapper">
            <Header/>
            <section class="section-rules">
                <div class="container">
                    <div class="heading">
                        <span>R</span>
                        <span>U</span>
                        <span>L</span>
                        <span>E</span>
                        <span>S</span>
                    </div>
                    <div class="box-container-rules">
                        <div class="box">
                            <div class="content-rules">
                                <h3>Know the rules</h3>
                                <ol>
                                    <li>Questions will be from the category selected by you.</li>
                                    <li>You can select any one of the options displayed.</li>
                                    <li>You cant exit from the Quiz while you are playing.</li>
                                    <li>You will get points for each correct answer.</li>
                                    <li>you will have to answer all the questions.</li>
                                </ol>
                                <p>Take this quiz to test your knowledge.</p>
                                <div>
                                    <button className='rules-btn' onClick={()=>navigate("/questions")}>Start</button>
                                </div>
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

export default RulesPage