const ContactUs = () => {
    return (
        <div className="contactus">

            {/* =========================
                HERO
            ========================= */}

            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span>Get In Touch</span>

                    <h1>Contact Us</h1>

                    <p>
                        Have a question or need help?
                        We are here to help you.
                    </p>
                </div>
            </section>


            {/* =========================
                CONTACT SECTION
            ========================= */}

            <section className="contact-section">

                <div className="contact-info">

                    <span className="section-label">
                        Contact Us
                    </span>

                    <h2>
                        We'd Love To Hear From You
                    </h2>

                    <p>
                        Whether you have a question about our courses,
                        programs, or anything else, our team is ready
                        to answer all your questions.
                    </p>


                    <div className="contact-details">

                        <div className="contact-item">
                            <div className="contact-icon">
                                📍
                            </div>

                            <div>
                                <h4>Address</h4>
                                <p>Cairo, Egypt</p>
                            </div>
                        </div>


                        <div className="contact-item">
                            <div className="contact-icon">
                                📞
                            </div>

                            <div>
                                <h4>Phone</h4>
                                <p>+20 100 000 0000</p>
                            </div>
                        </div>


                        <div className="contact-item">
                            <div className="contact-icon">
                                ✉️
                            </div>

                            <div>
                                <h4>Email</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* =========================
                    FORM
                ========================= */}

                <div className="contact-form-container">

                    <form className="contact-form">

                        <div className="input-group">

                            <label htmlFor="name">
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />

                        </div>


                        <div className="input-group">

                            <label htmlFor="email">
                                Your Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />

                        </div>


                        <div className="input-group">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter subject"
                            />

                        </div>


                        <div className="input-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                rows="6"
                                placeholder="Write your message..."
                            ></textarea>

                        </div>


                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
};

export default ContactUs;