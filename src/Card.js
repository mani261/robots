import React from "react";

const Card = (probs) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="" src={`https://robohash.org/${probs.id}`} />
            <div>
                <h3>{probs.name}</h3>
                <p>{probs.email}</p>
            </div>
        </div>
    );
}

export default Card;