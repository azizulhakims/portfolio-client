import React from 'react';
import image from '../../../img/Untitled-2.jpg'

const Slider = () => {

    return (
        <div className="hero container p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>


                    <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold py-5">Azizul Hakim</h1>
                    <h1 className="text-2xl font-bold">Web Developer</h1>
                    <p className="py-3">Hello! I am a web developer, mainly i develop web application with ReactJS</p>
                    <button className="btn btn-primary">Connect with Me</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;