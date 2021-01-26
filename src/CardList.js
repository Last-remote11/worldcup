import React from 'react';
import Card from './Card';


const CardList = ({ currentCandidates, onPick }) => {

        return(
            <div id = 'CardList'>
                {console.log(currentCandidates)}
                {currentCandidates.map(element =>
                     <Card key = {element.id} id = {element.id} image = {element.image} name = {element.name} onPick = {onPick}/>)}
                <button>button</button>
            </div>
        )
    }


export default CardList;