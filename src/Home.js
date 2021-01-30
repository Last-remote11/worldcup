import React from 'react';
import Card from './Card';

const Home = ( {WorldCups, onPick} ) => {
   
    return (
        <div id = 'WorldCupList'>
        {WorldCups.map(element =>
             <Card 
             key = {element.id} 
             id = {element.worldCupName} 
             img = {element.thumbnail} 
             name = {element.worldCupName}
             onPick = {onPick}
             width = '300px'
             height = '300px'/>
            )}
        </div>
    );
};

export default Home;
