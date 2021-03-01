import React from 'react';
import  "../../App.css";

const galleryBase = [
    {name:"Memory", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"},
    {name:"Another memory", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"},
    {name:"Yet another memory", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"},
    {name:"Again another memory", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"},
    {name:"Wait...", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"},
    {name:"Is this the same memory?", image:"https://i.pinimg.com/originals/a9/42/dc/a942dc2119ffafcdd3ca8c039db52d57.jpg"}
]


const UseStateArray = () => {
    return (
        <div className="galleryContainer">
            {galleryBase.map((piece)=>{
                const {name, image} = piece
                return(
                    <div className="container">
                        <img className="galleryImage" src={image} alt="Image of a lake"/>
                        <h1>{name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default UseStateArray;