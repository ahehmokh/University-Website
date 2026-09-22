import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faArrowLeft,
    faArrowRight,
    faGraduationCap,
    faUsers,
    faBookOpen,
    faGlobe,
    faLightbulb,
    faHeart,
    faAward
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import { useRef } from "react";


const AboutUs = () => {

    const slider = useRef(null);

    const tx = useRef(0);


    const goleft = () => {

        if (tx.current < 0) {

            tx.current += 25;

            slider.current.style.transform =
                `translateX(${tx.current}%)`;
        }
    };


    const goright = () => {

        if (tx.current > -75) {

            tx.current -= 25;

            slider.current.style.transform =
                `translateX(${tx.current}%)`;

        } else {

            tx.current = 0;

            slider.current.style.transform =
                `translateX(${tx.current}%)`;
        }
    };


    return (
        <>

            <div className="about-us">

                {/* =========================
                    HERO
                ========================= */}

                <section className="about-top">

                    <div className="about-hero-content">

                        <span>
                            DISCOVER OUR STORY
                        </span>

                        <h1>
                            About Our University
                        </h1>

                        <p>
                            Discover our history, our values,
                            and the community that makes our
                            university a place to grow.
                        </p>

                    </div>

                </section>


                {/* =========================
                    INTRODUCTION
                ========================= */}

                <section className="about-intro">

                    <div className="intro-content">

                        <span>
                            WHO WE ARE
                        </span>

                        <h2>
                            Building Knowledge.
                            <br />
                            Inspiring Futures.
                        </h2>

                        <div className="intro-line"></div>

                        <p>
                            Our university is more than a place for
                            academic learning. It is a community where
                            students discover their potential, develop
                            meaningful skills, and prepare themselves
                            for the challenges of the future.
                        </p>

                        <p>
                            We believe that education should combine
                            knowledge, creativity, practical experience,
                            and personal development to help every
                            student build a successful future.
                        </p>

                    </div>


                    <div className="intro-features">

                        <div className="intro-feature">

                            <div className="intro-icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>

                            <div>
                                <h3>
                                    Quality Education
                                </h3>

                                <p>
                                    Modern programs designed to build
                                    strong academic and practical skills.
                                </p>
                            </div>

                        </div>


                        <div className="intro-feature">

                            <div className="intro-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>

                            <div>
                                <h3>
                                    Student Community
                                </h3>

                                <p>
                                    A supportive environment where
                                    students learn and grow together.
                                </p>
                            </div>

                        </div>


                        <div className="intro-feature">

                            <div className="intro-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>

                            <div>
                                <h3>
                                    Innovation
                                </h3>

                                <p>
                                    Encouraging creativity, curiosity,
                                    and new ideas.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =========================
                    HISTORY
                ========================= */}

                <section className="about-history">

                    <div className="about-history-image">

                        <img
                            src="/assets/about.png"
                            alt="University"
                        />

                    </div>


                    <div className="about-history-content">

                        <span>
                            OUR STORY
                        </span>

                        <h2>
                            History Of University
                        </h2>

                        <div className="history-line"></div>

                        <p>
                            Our university was founded with the goal
                            of creating an environment where students
                            can learn, grow, and prepare themselves
                            for a successful future.
                        </p>

                        <p>
                            Throughout the years, we have continued
                            to develop our educational programs and
                            provide students with valuable knowledge,
                            practical skills, and new opportunities.
                        </p>

                        <p>
                            Today, our university continues to focus
                            on creating a supportive learning environment
                            that encourages curiosity, innovation,
                            and personal development.
                        </p>

                    </div>

                </section>


                {/* =========================
                    STATS
                ========================= */}

                <section className="university-stats">

                    <div className="stat-box">

                        <FontAwesomeIcon icon={faGraduationCap} />

                        <h3>
                            15+
                        </h3>

                        <p>
                            Academic Programs
                        </p>

                    </div>


                    <div className="stat-box">

                        <FontAwesomeIcon icon={faUsers} />

                        <h3>
                            5K+
                        </h3>

                        <p>
                            Students
                        </p>

                    </div>


                    <div className="stat-box">

                        <FontAwesomeIcon icon={faBookOpen} />

                        <h3>
                            50+
                        </h3>

                        <p>
                            Expert Courses
                        </p>

                    </div>


                    <div className="stat-box">

                        <FontAwesomeIcon icon={faGlobe} />

                        <h3>
                            20+
                        </h3>

                        <p>
                            Countries
                        </p>

                    </div>

                </section>


                {/* =========================
                    MISSION & VISION
                ========================= */}

                <section className="mission-vision">

                    <div className="mission-card">

                        <div className="mission-icon">
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>

                        <span>
                            OUR MISSION
                        </span>

                        <h2>
                            Empowering Students Through Education
                        </h2>

                        <p>
                            Our mission is to provide students with
                            high-quality education, practical skills,
                            and an inspiring environment that helps
                            them achieve their personal and professional
                            goals.
                        </p>

                    </div>


                    <div className="mission-card">

                        <div className="mission-icon">
                            <FontAwesomeIcon icon={faAward} />
                        </div>

                        <span>
                            OUR VISION
                        </span>

                        <h2>
                            Creating The Leaders Of Tomorrow
                        </h2>

                        <p>
                            We aim to become a leading educational
                            community that inspires innovation,
                            encourages lifelong learning, and prepares
                            students to make a positive impact.
                        </p>

                    </div>

                </section>


                {/* =========================
                    WHY CHOOSE US
                ========================= */}

                <section className="why-us">

                    <div className="why-heading">

                        <span>
                            WHY CHOOSE US
                        </span>

                        <h2>
                            More Than Just A University
                        </h2>

                        <p>
                            We create an educational experience
                            that prepares students for real-world
                            opportunities.
                        </p>

                    </div>


                    <div className="why-cards">

                        <div className="why-card">

                            <div className="why-icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>

                            <h3>
                                Experienced Educators
                            </h3>

                            <p>
                                Learn from experienced instructors
                                who are committed to helping students
                                achieve their goals.
                            </p>

                        </div>


                        <div className="why-card">

                            <div className="why-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>

                            <h3>
                                Practical Learning
                            </h3>

                            <p>
                                Develop useful skills through practical
                                learning experiences and real-world
                                applications.
                            </p>

                        </div>


                        <div className="why-card">

                            <div className="why-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>

                            <h3>
                                Supportive Community
                            </h3>

                            <p>
                                Become part of a welcoming community
                                where students can connect, collaborate,
                                and grow.
                            </p>

                        </div>


                        <div className="why-card">

                            <div className="why-icon">
                                <FontAwesomeIcon icon={faHeart} />
                            </div>

                            <h3>
                                Student First
                            </h3>

                            <p>
                                Everything we do is focused on creating
                                a positive and rewarding student experience.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =========================
                    STUDENTS OPINIONS
                ========================= */}

                <section className="students-opinions">

                    <div className="before-slider">

                        <span>
                            STUDENT REVIEWS
                        </span>

                        <h2>
                            What Our Students Say
                        </h2>

                        <p>
                            Hear from students about their
                            experience at our university.
                        </p>

                    </div>


                    <div className="slide">

                        <button
                            className="arrows"
                            onClick={goleft}
                        >

                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="arrow"
                            />

                        </button>


                        <div className="slider">

                            <ul ref={slider}>

                                <li>

                                    <div className="student-card">

                                        <img
                                            src="/assets/user-1.png"
                                            alt="Michael Jackson"
                                        />

                                        <div className="student-info">

                                            <h3>
                                                Michael Jackson
                                            </h3>

                                            <span>
                                                Edusity, USA
                                            </span>

                                            <p>
                                                The university gave me
                                                the confidence and skills
                                                I needed to continue
                                                developing my career.
                                            </p>

                                        </div>

                                    </div>

                                </li>


                                <li>

                                    <div className="student-card">

                                        <img
                                            src="/assets/user-2.png"
                                            alt="Sarah Johnson"
                                        />

                                        <div className="student-info">

                                            <h3>
                                                Sarah Johnson
                                            </h3>

                                            <span>
                                                Edusity, USA
                                            </span>

                                            <p>
                                                I really enjoyed the
                                                learning environment
                                                and the support I received
                                                from the university.
                                            </p>

                                        </div>

                                    </div>

                                </li>


                                <li>

                                    <div className="student-card">

                                        <img
                                            src="/assets/user-3.png"
                                            alt="David Smith"
                                        />

                                        <div className="student-info">

                                            <h3>
                                                David Smith
                                            </h3>

                                            <span>
                                                Edusity, USA
                                            </span>

                                            <p>
                                                The practical courses
                                                helped me understand how
                                                to apply what I learned
                                                outside the classroom.
                                            </p>

                                        </div>

                                    </div>

                                </li>


                                <li>

                                    <div className="student-card">

                                        <img
                                            src="/assets/user-4.png"
                                            alt="Emma Wilson"
                                        />

                                        <div className="student-info">

                                            <h3>
                                                Emma Wilson
                                            </h3>

                                            <span>
                                                Edusity, USA
                                            </span>

                                            <p>
                                                Being part of this community
                                                helped me grow academically
                                                and personally.
                                            </p>

                                        </div>

                                    </div>

                                </li>

                            </ul>

                        </div>


                        <button
                            className="arrows"
                            onClick={goright}
                        >

                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="arrow"
                            />

                        </button>

                    </div>

                </section>


                {/* =========================
                    UNIVERSITY PHOTOS
                ========================= */}

                <section className="images">

                    <div className="images-heading">

                        <span>
                            OUR CAMPUS
                        </span>

                        <h2>
                            University Photos
                        </h2>

                        <p>
                            Take a look at some moments
                            from our university.
                        </p>

                    </div>


                    <div className="images-show">

                        <img
                            src="/assets/gallery-1.png"
                            alt="University"
                        />

                        <img
                            src="/assets/gallery-2.png"
                            alt="University"
                        />

                        <img
                            src="/assets/gallery-3.png"
                            alt="University"
                        />

                        <img
                            src="/assets/gallery-4.png"
                            alt="University"
                        />

                    </div>

                </section>


                {/* =========================
                    CTA
                ========================= */}

                <section className="about-cta">

                    <div className="cta-content">

                        <span>
                            START YOUR JOURNEY
                        </span>

                        <h2>
                            Ready To Start Learning?
                        </h2>

                        <p>
                            Explore our programs and discover
                            the right learning path for your future.
                        </p>

                        <Link to="/Program">
                            Explore Our Programs
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>

                    </div>

                </section>

            </div>


            {/* =========================
                FAQ LINK
            ========================= */}

            <div className="faq-link">

                <Link to="/Faqs">
                    FAQs
                </Link>

            </div>

        </>
    );
};


export default AboutUs;