const Program = () => {

    const programs = [
        {
            id: 1,
            image: "/assets/program-1.png",
            icon: "/assets/program-icon-1.png",
            title: "Graduation Degree",
            description:
                "Build a strong academic foundation and prepare for your professional career."
        },
        {
            id: 2,
            image: "/assets/program-2.png",
            icon: "/assets/program-icon-2.png",
            title: "Master Degree",
            description:
                "Develop advanced knowledge and specialize in your chosen field."
        },
        {
            id: 3,
            image: "/assets/program-3.png",
            icon: "/assets/program-icon-3.png",
            title: "Post Graduation",
            description:
                "Continue your academic journey and expand your professional expertise."
        }
    ];


    const features = [
        {
            id: 1,
            icon: "🎓",
            title: "Experienced Instructors",
            description:
                "Learn from knowledgeable instructors who are dedicated to helping students achieve their goals."
        },
        {
            id: 2,
            icon: "📚",
            title: "Practical Learning",
            description:
                "Gain valuable knowledge through practical lessons, activities, and real-world examples."
        },
        {
            id: 3,
            icon: "🚀",
            title: "Career Development",
            description:
                "Develop the skills and confidence you need to take the next step in your professional journey."
        }
    ];


    return (
        <div className="program">

            {/* =========================
                HERO
            ========================= */}

            <div className="top-program">

                <div className="program-hero-content">

                    <span>Education For Your Future</span>

                    <h1>
                        Our Programs
                    </h1>

                    <p>
                        Discover educational programs designed
                        to help you learn, grow, and achieve your goals.
                    </p>

                </div>

            </div>


            {/* =========================
                PROGRAMS
            ========================= */}

            <section className="section">

                <div className="section-heading">

                    <span>
                        Choose Your Path
                    </span>

                    <h2>
                        What We Offer
                    </h2>

                    <p>
                        Explore our academic programs designed
                        to help you develop your skills and achieve
                        your educational goals.
                    </p>

                </div>


                <div className="our-programs">

                    {programs.map((program) => (

                        <div
                            className="sec-card"
                            key={program.id}
                        >

                            <img
                                src={program.image}
                                className="prog-img"
                                alt={program.title}
                            />


                            <div className="caption">

                                <img
                                    src={program.icon}
                                    alt=""
                                />

                                <h3>
                                    {program.title}
                                </h3>

                                <p>
                                    {program.description}
                                </p>

                                <button>
                                    Read More
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================
                ABOUT PROGRAMS
            ========================= */}

            <section className="program-intro">

                <div className="program-intro-content">

                    <span>
                        Learn With Purpose
                    </span>

                    <h2>
                        Build Your Future With The Right Education
                    </h2>

                    <p>
                        Our programs are designed to provide students
                        with the knowledge, skills, and experience they
                        need to succeed in an evolving world.
                    </p>

                    <p>
                        Whether you are starting your academic journey
                        or looking to develop your existing knowledge,
                        our programs provide a supportive environment
                        where you can learn at every stage.
                    </p>

                </div>


                <div className="program-intro-stats">

                    <div>
                        <strong>50+</strong>
                        <span>Courses</span>
                    </div>

                    <div>
                        <strong>30+</strong>
                        <span>Instructors</span>
                    </div>

                    <div>
                        <strong>1000+</strong>
                        <span>Students</span>
                    </div>

                </div>

            </section>


            {/* =========================
                FEATURES
            ========================= */}

            <section className="program-features">

                <div className="section-heading">

                    <span>
                        Why Choose Us
                    </span>

                    <h2>
                        A Better Learning Experience
                    </h2>

                    <p>
                        Everything you need to make your learning
                        journey more valuable and effective.
                    </p>

                </div>


                <div className="features-container">

                    {features.map((feature) => (

                        <div
                            className="feature-card"
                            key={feature.id}
                        >

                            <div className="feature-icon">
                                {feature.icon}
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================
                LEARNING EXPERIENCE
            ========================= */}

            <section className="learning-experience">

                <div className="learning-content">

                    <span>
                        Your Learning Journey
                    </span>

                    <h2>
                        Learn Today, Grow Tomorrow
                    </h2>

                    <p>
                        Education is more than simply completing a course.
                        It is about developing new skills, discovering your
                        potential, and preparing yourself for future opportunities.
                    </p>

                    <p>
                        Our learning environment is designed to encourage
                        curiosity, continuous improvement, and personal growth.
                    </p>

                </div>

                <div className="learning-points">

                    <div>
                        <span>01</span>

                        <div>
                            <h3>Learn</h3>

                            <p>
                                Build your knowledge with structured lessons
                                and educational resources.
                            </p>
                        </div>
                    </div>


                    <div>
                        <span>02</span>

                        <div>
                            <h3>Practice</h3>

                            <p>
                                Apply what you learn through practical
                                activities and real examples.
                            </p>
                        </div>
                    </div>


                    <div>
                        <span>03</span>

                        <div>
                            <h3>Achieve</h3>

                            <p>
                                Use your new skills to reach your academic
                                and professional goals.
                            </p>
                        </div>
                    </div>

                </div>

            </section>


            {/* =========================
                CTA
            ========================= */}

            <section className="program-cta">

                <div>

                    <span>
                        Start Your Journey
                    </span>

                    <h2>
                        Ready To Start Learning?
                    </h2>

                    <p>
                        Explore our courses and find the program
                        that fits your goals.
                    </p>

                    <button>
                        Explore Courses
                    </button>

                </div>

            </section>

        </div>
    );
};

export default Program;