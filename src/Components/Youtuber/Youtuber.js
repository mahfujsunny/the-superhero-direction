import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './Youtuber.css';

const Youtuber = (props) => {

    const {name, role, channel, subscriber, income, image} = props.youtuber;

    const heartIcon = <FontAwesomeIcon icon={faHeart} />

    return (
        <div className="col-lg-4">
           <div className="background d-flex border border-5 border-primary m-5 w-100 h-75 ">
                <div className="card-images my-auto mx-3">
                    <img className=" rounded-circle" src={image} alt="" />
                </div>

                <div className="my-auto mx-3 text-danger">
                    <h3 className="fw-bolder">{name}</h3>
                    <h5>Role :{role}</h5>
                    <h5 >Channel : <span className="fw-bold">{channel}</span> </h5>
                    <h5>Subscriber : <span className="fw-bold">{subscriber}</span> </h5>
                    <h5>Income : $ {income}</h5>
                    <button className="btn btn-outline-danger w-50" onClick={() => props.handleAdd(props.youtuber)}>{heartIcon} Favourite</button>
                </div>
           </div>

        </div>
    );
};

export default Youtuber;