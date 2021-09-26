import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Youtuber from '../Youtuber/Youtuber';
import './Youtubers.css'
const Youtubers = () => {
    
    const [youtubers, setYoutubers] = useState([]);

    const [count , setCount] = useState([]);

    useEffect(() => {
        fetch('./youtubers.json')
        .then(res => res.json())
        .then(data => setYoutubers(data))
    },[])

    const handleAdd = (add) => {
        const addToCart = [...count, add];
        setCount(addToCart);
    }

    return (
        <div>
            <div >
                <Cart count={count}></Cart>
            </div>

            <div className="row">
                {
                youtubers.map( youtuber => <Youtuber
                    key= {youtuber.id}
                    youtuber={youtuber}
                    handleAdd= {handleAdd}

                        >
                </Youtuber> )
            }
            </div>
            
        </div>
    );
};

export default Youtubers;