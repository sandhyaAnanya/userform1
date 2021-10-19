import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './RecipeList.css'



function RecipelList({items, getOneItemIndex}) {
    //console.log(items);
    const getIndex = (index)=>{
        console.log(index);
        getOneItemIndex(index)
    }
    return (
        <div>
            <p>welcome to RecipelList </p>
            <div className="card" style={{width: '18rem',backgroundColor:"blue"}}>
                
                <ul className="list-group list-group-flush">
                    {
                        items.map((item,index)=>{
                           return ( 
                           <div key={index} onClick={()=>{getIndex(index)}}>
                            <li className="list-group-item" style={{backgroundColor:"blueviolet"}}>{item.id}.{item.name}</li>
                            <li className="list-group-item">{item.ingredients}</li>
                            <li>{item.image}</li>
                            </div>
                            )
                        })
                    }
                   
                   
                </ul>
            </div>
            
        </div>
    )
}

export default RecipelList
