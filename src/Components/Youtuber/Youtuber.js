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
                    <h4 className="fw-bolder">{name}</h4>
                    <h6>Role :{role}</h6>
                    <h6 >Channel : <span className="fw-bold">{channel}</span> </h6>
                    <h6>Subscriber : <span className="fw-bold">{subscriber}</span> </h6>
                    <h6>Income : $ {income}</h6>
                    <button className="btn btn-outline-danger w-75" onClick={() => props.handleAdd(props.youtuber)}>{heartIcon} Favourite</button>
                </div>
           </div>

        </div>
    );
};

export default Youtuber;