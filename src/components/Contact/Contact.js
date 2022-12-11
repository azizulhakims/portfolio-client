import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2as4ug4',
            'template_gqidw0m', form.current, 'hvZuMWFkCcS87ByY0')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    };

    return (
        <section>
            <div className="hero min-h-screen bg-base-200 container">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-center m-4'>Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name='user_name'
                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name='user_email'
                                        required
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name='subject'
                                        required
                                        className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Text</span>
                                    </label>
                                    <textarea

                                        name='message'
                                        cols='30'
                                        rows='10'
                                        className=""
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;