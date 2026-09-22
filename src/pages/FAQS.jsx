import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";


const Faqs = () => {

    const [openQuestion, setOpenQuestion] = useState(null);


    const questions = [
        {
            id: 1,
            question: "What programs does the university offer?",
            answer:
                "Our university offers a wide range of academic programs designed to provide students with both theoretical knowledge and practical experience."
        },

        {
            id: 2,
            question: "How can I apply to the university?",
            answer:
                "You can apply by completing the application form and submitting the required documents. Our admissions team will review your application and contact you with the next steps."
        },

        {
            id: 3,
            question: "What are the admission requirements?",
            answer:
                "Admission requirements vary depending on the program. Generally, students need to provide their academic certificates, identification documents, and any additional documents required by the university."
        },

        {
            id: 4,
            question: "Does the university provide student support?",
            answer:
                "Yes. Students can access academic guidance, career support, student activities, and other services designed to help them succeed throughout their university journey."
        },

        {
            id: 5,
            question: "Can international students apply?",
            answer:
                "Yes. International students can apply to our programs. Additional documents and requirements may apply depending on the student's country and chosen program."
        }
    ];


    const toggleQuestion = (id) => {

        if (openQuestion === id) {

            setOpenQuestion(null);

        } else {

            setOpenQuestion(id);

        }

    };


    return (

        <div className="faqs">


            {/* =========================
                FAQ HEADER
            ========================= */}

            <div className="faq-heading">

                <span>
                    NEED HELP?
                </span>

                <h2>
                    Frequently Asked Questions
                </h2>

                <p>
                    Find answers to the most common questions
                    about our university and programs.
                </p>

            </div>


            {/* =========================
                QUESTIONS
            ========================= */}

            <div className="questions">

                {questions.map((item) => (

                    <div
                        className={`question ${
                            openQuestion === item.id
                                ? "open"
                                : ""
                        }`}
                        key={item.id}
                    >


                        {/* QUESTION */}

                        <button
                            className="question-header"
                            onClick={() => toggleQuestion(item.id)}
                        >

                            <span>

                                <strong>
                                    Q:
                                </strong>

                                {item.question}

                            </span>


                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="faq-arrow"
                            />

                        </button>


                        {/* ANSWER */}

                        <div className="answer">

                            <p>

                                <strong>
                                    Ans:
                                </strong>

                                {item.answer}

                            </p>

                        </div>


                    </div>

                ))}

            </div>


        </div>

    );
};


export default Faqs;