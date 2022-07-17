import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';
import Footer from '../components/Footer';
import "../css/main.css";
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => {
    useDocumentTitle("Home");
  return (
    <main>
        <div className="big-wrapper">
            <Header/>
            <section className="showcase-area">
                <div className="container">
                    <div className="left-side">
                        <div className="big-title">
                            <h2>play multiple categories of quiz on QuizBee</h2>
                            <h2>Start exploring now</h2>
                        </div>
                        <p className="text">
                            QuizBee contains different categories of quizzes, which are easy to play. I have made this website using React.
                            Play and share it with your friends.
                        </p>
                        <div className="cta">
                            <Link to="/settings">
                                <button className="enter-btn">Enter</button>
                            </Link>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-heading">
                            <span>c</span>
                            <span>a</span>
                            <span>t</span>
                            <span>e</span>
                            <span>g</span>
                            <span>o</span>
                            <span>r</span>
                            <span>i</span>
                            <span>e</span>
                            <span>s</span>
                        </div>
                        <div className="category-contents">
                            <ul>
                                <li className="category-list">
                                    <div className="list-left-side">
                                        <i className="fas fa-globe-asia"></i>
                                    </div>
                                    <div className="list-right-side">
                                        <h3>Geography</h3>
                                    </div>
                                </li>
                                <li className="category-list">
                                    <div className="list-left-side">
                                        <i className="fas fa-futbol"></i>
                                    </div>
                                    <div className="list-right-side">
                                        <h3>Sports</h3>
                                    </div>
                                </li>
                                <li className="category-list">
                                    <div className="list-left-side">
                                        <i className="fas fa-laptop"></i>
                                    </div>
                                    <div className="list-right-side">
                                        <h3>Programming</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    </main>
  )
}

export default LandingPage