import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const StarRating = ({item, getRating}) => {
    
    const [rating, setRating]= useState(parseInt(getRating));
    let getArticle = localStorage.getItem("article");
    let dataArray = JSON.parse(getArticle);

    if (dataArray && dataArray[item - 1]) {
        dataArray[item - 1].stars = rating;
        getArticle = JSON.stringify(dataArray);
        localStorage.setItem('article', getArticle);
        window.location.reload();
      }

    return (
    <div>
        {
            [...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return <label key={ rating + i }>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => (setRating(ratingValue))}
                            />
                        <FaStar className='star m-2' size={30} color={ratingValue <= rating ? "#ffc107":"grey"}/>
                    </label>
            })
        }
    </div>
  )
}
