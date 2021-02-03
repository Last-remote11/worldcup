import React from 'react';
import Card from './Card';

const Home = ( {WorldCups, worldcupSelect} ) => {
   
    return (
        <div id = 'WorldCupList'>
        {WorldCups.map(element =>
             <Card 
             key = {element.id} 
             id = {element.id} 
             img = {element.thumbnail} 
             name = {element.worldcupname}
             onPick = {() => worldcupSelect(element.worldcupname)}
             width = '300px'
             height = '300px'/>
            )}
        </div>
    );
};

export default Home;
