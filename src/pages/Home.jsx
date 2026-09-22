import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGraduationCap,
  faUserTie,
  faBookOpen,
  faCertificate,
  faStar
} from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const musicCourses = [
    {
      id: 1,
      title: "Guitar",
      price: 30,
      image: "/assets/guitar.jpeg",
    },
    {
      id: 2,
      title: "Piano",
      price: 30,
      image: "/assets/piano.jpg",
    },
    {
      id: 3,
      title: "Trumpet",
      price: 30,
      image: "/assets/trumpet.webp",
    },
    {
      id: 4,
      title: "Xelephone",
      price: 30,
      image: "/assets/Xelephone.jpg",
    },
  ];


  const mathCourses = [
    {
      id: 5,
      title: "Algebra",
      price: 30,
      image: "/assets/Algebra.jpg",
    },
    {
      id: 6,
      title: "Dynamics",
      price: 30,
      image: "/assets/Dynamics.jpg",
    },
    {
      id: 7,
      title: "Statics",
      price: 30,
      image: "/assets/Statics.jpg",
    },
    {
      id: 8,
      title: "Trigonometry",
      price: 30,
      image: "/assets/Trig.png",
    },
  ];


  const CourseCard = ({ course }) => {

    return (

      <div className="card">

        <div className="cardimg">

          <img
            src={course.image}
            alt={course.title}
          />

        </div>


        <div className="card-data">

          <h5>
            {course.title}
          </h5>


          <p>
            ${course.price}
            <span> / hr</span>
          </p>


          <NavLink to={`/course/${course.id}`}>

            View Course

            <FontAwesomeIcon
              icon={faArrowRight}
            />

          </NavLink>

        </div>

      </div>

    );
  };


  return (

    <div className="home">


      {/* =========================
          HERO
      ========================= */}

      <section className="top">

        <div className="top-text">

          <span className="hero-label">
            Learn. Grow. Succeed.
          </span>


          <h1>

            Better Education
            <br />
            for a Better World

          </h1>


          <p>

            Discover quality courses designed to help you
            develop new skills, improve your knowledge,
            and build a better future.

          </p>


          <NavLink
            to="/Program"
            className="hero-btn"
          >

            Explore Courses

            <FontAwesomeIcon
              icon={faArrowRight}
              className="arrow-right"
            />

          </NavLink>

        </div>

      </section>



      {/* =========================
          STATISTICS
      ========================= */}

      <section className="stats">

        <div className="stat-box">

          <FontAwesomeIcon
            icon={faGraduationCap}
          />

          <h2>
            10K+
          </h2>

          <p>
            Students
          </p>

        </div>


        <div className="stat-box">

          <FontAwesomeIcon
            icon={faBookOpen}
          />

          <h2>
            50+
          </h2>

          <p>
            Courses
          </p>

        </div>


        <div className="stat-box">

          <FontAwesomeIcon
            icon={faUserTie}
          />

          <h2>
            100+
          </h2>

          <p>
            Expert Instructors
          </p>

        </div>


        <div className="stat-box">

          <FontAwesomeIcon
            icon={faCertificate}
          />

          <h2>
            95%
          </h2>

          <p>
            Success Rate
          </p>

        </div>

      </section>



      {/* =========================
          COURSES
      ========================= */}

      <section className="our-courses">


        <div className="section-heading">

          <span>
            Start Learning Today
          </span>


          <h1>
            Our Courses
          </h1>


          <p>

            Explore our carefully selected courses
            and learn from experienced instructors.

          </p>

        </div>



        <div className="courses">


          {/* MUSIC */}

          <div className="cards-holder">

            <div className="category-heading">

              <h3>
                Music
              </h3>

              <p>
                Discover your musical talent
              </p>

            </div>


            <div className="cards">

              {musicCourses.map((course) => (

                <CourseCard
                  key={course.id}
                  course={course}
                />

              ))}

            </div>

          </div>



          {/* MATHEMATICS */}

          <div className="cards-holder">

            <div className="category-heading">

              <h3>
                Mathematics
              </h3>

              <p>
                Build strong mathematical skills
              </p>

            </div>


            <div className="cards">

              {mathCourses.map((course) => (

                <CourseCard
                  key={course.id}
                  course={course}
                />

              ))}

            </div>

          </div>


          <NavLink
            to="/Program"
            className="explore-courses"
          >

            Explore Other Courses

            <FontAwesomeIcon
              icon={faArrowRight}
            />

          </NavLink>

        </div>

      </section>



      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="why-us">

        <div className="why-us-heading">

          <span>
            WHY CHOOSE US
          </span>

          <h2>
            Education That Makes a Difference
          </h2>

          <p>
            We provide students with the knowledge,
            skills, and support they need to achieve
            their academic and professional goals.
          </p>

        </div>


        <div className="features">


          <div className="feature">

            <div className="feature-icon">

              <FontAwesomeIcon
                icon={faGraduationCap}
              />

            </div>

            <h3>
              Quality Education
            </h3>

            <p>
              Learn through carefully designed programs
              created to provide practical and valuable knowledge.
            </p>

          </div>



          <div className="feature">

            <div className="feature-icon">

              <FontAwesomeIcon
                icon={faUserTie}
              />

            </div>

            <h3>
              Expert Instructors
            </h3>

            <p>
              Learn from experienced instructors who are
              dedicated to helping students succeed.
            </p>

          </div>



          <div className="feature">

            <div className="feature-icon">

              <FontAwesomeIcon
                icon={faBookOpen}
              />

            </div>

            <h3>
              Practical Learning
            </h3>

            <p>
              Develop real-world skills through practical
              activities and engaging learning experiences.
            </p>

          </div>



          <div className="feature">

            <div className="feature-icon">

              <FontAwesomeIcon
                icon={faCertificate}
              />

            </div>

            <h3>
              Recognized Certificates
            </h3>

            <p>
              Complete your programs and earn certificates
              that highlight your learning achievements.
            </p>

          </div>

        </div>

      </section>



      {/* =========================
          TESTIMONIAL
      ========================= */}

      <section className="home-testimonial">

        <div className="testimonial-content">

          <span>
            STUDENT EXPERIENCE
          </span>


          <h2>
            Learning Can Change Your Future
          </h2>


          <p>
            Our students gain more than academic knowledge.
            They develop confidence, practical skills, and
            the ability to achieve their future goals.
          </p>


          <div className="stars">

            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

          </div>


          <h4>
            Sarah Johnson
          </h4>


          <span>
            Computer Science Student
          </span>

        </div>

      </section>



      {/* =========================
          CTA
      ========================= */}

      <section className="home-cta">

        <div>

          <span>
            START YOUR JOURNEY
          </span>


          <h2>
            Ready to Start Learning?
          </h2>


          <p>
            Explore our programs and find the right
            course to help you reach your goals.
          </p>


          <NavLink
            to="/Program"
            className="cta-button"
          >

            Explore Programs

            <FontAwesomeIcon
              icon={faArrowRight}
            />

          </NavLink>

        </div>

      </section>



      {/* =========================
          NEWSLETTER
      ========================= */}

      <section className="sign-up">

        <div className="data">

          <span>
            Stay Updated
          </span>


          <h2>
            Never Miss a Learning Opportunity
          </h2>


          <p>
            Subscribe to our newsletter for new courses,
            special offers and educational content.
          </p>

        </div>


        <form className="newsletter">

          <input
            type="email"
            placeholder="Enter your email address"
          />


          <button type="submit">
            Subscribe
          </button>

        </form>

      </section>


    </div>

  );
};


export default Home;