import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const PortfolioDetails = () => {
    const { title, img, img1, img2, description, liveLink, liveLink1, liveLink2, longDes, point, point1, point2, imgtitle, imgtitle1, imgtitle2 } = useLoaderData();

    return (
        <div className="card w-200 bg-base-100 shadow-xl">
            <h2 className='p-7 font-bold '>Live Project Screenshot </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-7'>

                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure><img className='h-70 w-50' src={img} alt="" /></figure>
                        </PhotoView>
                        <h2>{imgtitle}</h2>

                    </PhotoProvider>
                </div>

                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure><img className='h-70 w-50' src={img1} alt="" /></figure>
                        </PhotoView>
                        <h2>{imgtitle1}</h2>

                    </PhotoProvider>
                </div>
                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure><img className='h-70 w-50' src={img2} alt="" /></figure>
                        </PhotoView>
                        <h2>{imgtitle2}</h2>

                    </PhotoProvider>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {/* <div className="badge badge-secondary">$ {price}</div> */}
                </h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions">
                    <div className="">{longDes}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <div className="card-actions">
                    <div className="">{point}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <div className="card-actions">
                    <div className="">{point1}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <div className="card-actions">
                    <div className="">{point2}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>

            </div>
            <div className="card-actions justify-center mb-12">
                <div className=' card-actions justify-end'>
                    <button className="btn btn-ghost"><a href={liveLink}>Live Link</a></button>
                </div>
                <button className="btn btn-ghost"><a href={liveLink1}>GitHub Client Link</a></button>
                <button className="btn btn-ghost"><a href={liveLink2}>GitHub Server Link</a></button>
            </div>
        </div>
    );
};

export default PortfolioDetails;