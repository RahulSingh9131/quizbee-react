import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import "../css/main.css";
import useAxios from '../hooks/useAxios';
import useDocumentTitle from '../hooks/useDocumentTitle';


const SettingsPage = () => {
    const {response,loading,error}=useAxios({url: "/api_category.php"})
    useDocumentTitle("settingsPage");

    if(loading){
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h1>Something went wrong!!</h1>
            </div>
        )
    }

    const difficultyOptions=[
        {id:"easy",name:"Easy"},
        {id:"medium",name:"Medium"},
        {id:"hard",name:"Hard"},
    ]

    const typeOptions=[
        {id:"multiple",name:"Multiple Choice"},
        {id:"boolean",name:"True/False"},
    ]

  return (
    <main>
        <div className='big-wrapper'>
            <Header/>
            <section className='showcase-area-settings'>
                <div className='container'>
                    <div className="heading">
                        <span>Q</span>
                        <span>U</span>
                        <span>I</span>
                        <span>Z</span>
                    </div>
                    <h3 className="settings-heading">Choose from the options below.</h3>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <SelectField options={response?.trivia_categories} label="Category"/>
                        <SelectField options={difficultyOptions} label="Difficulty"/>
                        <SelectField options={typeOptions} label="Type"/>
                        <TextFieldComp/>
                        <div className='button-container'>
                            <button>Get Started</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    </main>
  )
}

export default SettingsPage