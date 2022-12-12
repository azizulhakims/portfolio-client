import React from 'react';
import { Link } from 'react-router-dom';


const SingelPortfolio = ({ portfolios }) => {
    const { _id, img, title, description, liveLink } = portfolios;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

                <div className="card-actions justify-end">
                    <Link to={`/portfoliodetails/${_id}`}> <div className=' card-actions justify-end'>
                        <button className="btn btn-warning ">Project Details</button>
                    </div></Link>
                    <button className="btn btn-ghost"><a href={liveLink}>Live Link</a></button>
                </div>
            </div>
        </div>
    );
};

export default SingelPortfolio;