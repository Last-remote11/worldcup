import React from 'react';
import Card from './Card';

const Home = ( {WorldCups, worldCupSelect} ) => {
   
    return (
        <div id = 'WorldCupList'>
        {WorldCups.map(element =>
             <Card 
             key = {element.id} 
             id = {element.id} 
             img = {element.thumbnail} 
             name = {element.worldcupname}
             onPick = {() => worldCupSelect(element.worldcupname)}
             width = '300px'
             height = '300px'/>
            )}
        </div>
    );
};

export default Home;
