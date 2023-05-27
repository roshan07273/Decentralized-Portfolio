/* eslint-disable react/no-unescaped-entities */
import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' />2022 - Present
                        </p>
                        <h3 className="card-text2"> Master's In Computer Application</h3>
                        <p className="card-text3">GEU University , Dehradun , Uttarakhand. CGPA- 8.23/10</p>
                        <p className="card-text4">
                            248002
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> 2019-2022
                        </p>
                        <h3 className="card-text2">Bachelor's In Computer Application.</h3>
                        <p className="card-text3">DIT University ,Dehradun,Uttarakhand. CGPA-7.23/10</p>
                        <p className="card-text4">
                           248001
                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' />2015-2017
                        </p>
                        <h3 className="card-text2">Schooling(10+2) From Govt. Inter College Baijrao.</h3>
                        <p className="card-text3">Major Subject s Physics , Chemistry , Maths. Percentage- 80%</p>
                        <p className="card-text4">
                        246275
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
