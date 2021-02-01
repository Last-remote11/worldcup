import React from 'react';
import Card from './Card';


const CardList = ({ currentCandidates, onPickItem }) => {

        return(
            <div id = 'CardList'>
                {currentCandidates.map(element =>
                     <Card 
                     key = {element.id} 
                     id = {element.id} 
                     img = {element.img} 
                     name = {element.name} 
                     onPick = {onPickItem}/>
                    )}
            </div>
        )
    }


export default CardList;