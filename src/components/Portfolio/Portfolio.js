import React, { useEffect, useState } from 'react';
import SingelPortfolio from './SingelPortfolio';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/portfolio')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])
    return (
        <div>
            <div className='text-center p-4 m-4'>
                <p className='text-2xl font-bold text-orange-700'>Portfolio</p>
                <h2 className='text-3xl font semibold'>My Portfolio site</h2>
                <p>Here show my develope site with description</p>
            </div>
            <div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        portfolio.map(portfolios => <SingelPortfolio
                            key={portfolios._id}
                            portfolios={portfolios}
                        ></SingelPortfolio>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;