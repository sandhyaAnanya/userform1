import React,{useState} from 'react'
import RecipeDetails from './RecipeDetails'
import RecipelList from './RecipelList'

function RecipeApp() {
    let arrayCopy;
    const [oneState,setoneState] = useState(true)
    const [items, setitems] = useState([{
        
        name:"Masala Dosa",
        id:1,
        ingredients:["rice,","dal,","idli,","onion,","chili pepper"],
        image:"https://live.staticflickr.com/7292/16453603008_ac1e190283_b.jpg"
    },
    {
        name:"Gulab Jamun",
        id:2,
        ingredients:["milk,","khoa,","gulab-jamun mix powder"],
        image:"https://live.staticflickr.com/7357/10207685114_c1ddd58085_n.jpg"
    },
    {
        name:"pepper chicken",
        id:3,
        ingredients:[" fresh chicken,","oil,","onion,","garam masala,","salt,","pepper powder,","chilli powder,"],
        image:"https://live.staticflickr.com/7292/16453603008_ac1e190283_b.jpg"
    }
    ])
    let oneItemIndex ;
    arrayCopy = [...items];
    //bnhnconsole.log(arrayCopy[0]);
    const getOneItemIndex = (index)=>{
       // console.log(index);
        oneItemIndex = index;
       // console.log(oneItemIndex);
        //console.log(arrayCopy[index]);
        setoneState(false);
    }
    return (
        <div>
            <RecipelList items={items} getOneItemIndex={getOneItemIndex}/>
            <RecipeDetails oneItem = {arrayCopy[oneItemIndex]} />
        </div>
    )
}

export default RecipeApp
