import React from 'react';
import PlayerInfo from './playerInfo';
import PlayerCard from './playerList';


// mapping through the players
const PlayersList = () => {
    return (
        <div style={{ display: 'flex', mt:'1cm', gap:'10px', alignItems:'center', justifyContent:'center'}}>
            {PlayerInfo.map((PlayerInfo, index) => (
                <PlayerCard key={index} {...PlayerInfo} />
            ))}
        </div>
    );
};

export default PlayersList;