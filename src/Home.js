import React from 'react';
import Card from './Card';

const Home = ( {WorldCups, worldCupSelect} ) => {
   
    return (
        <div id = 'WorldCupList'>
        {WorldCups.map(element =>
             <Card 
             key = {element.id} 
             id = {element.worldCupName} 
             img = {element.thumbnail} 
             name = {element.worldCupName}
             onPick = {worldCupSelect}
             width = '300px'
             height = '300px'/>
            )}
        </div>
    );
};

export default Home;
