import React from 'react';
import Card from './Card';


const CardList = ({ Candidates }) => {

        return(
            <div id = 'CardList'>
                {console.log(Candidates)}
                {Candidates.map(element => <Card key = {element.id} image = {element.image} name = {element.name} />)}
                <button>button</button>
            </div>
        )
    }


export default CardList;