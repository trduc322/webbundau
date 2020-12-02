import axios from "axios";


const listProducts = axios.get(`https://localhost:5001/food`).then(res => {
    //const persons = res.data;
    console.log("sdfjhskdjfhsd");
  })
  .catch(error => console.log(error));


var initialState = [
        {
            id : 1,
            name : "Bún Đậu",
            image : "./Images/bundau.jpg",
             description : "Lorem ipsum dolor sit amet.",
            price : 100,
        },
        {
            id : 2,
            name : "Ốc Hút",
            image : "./Images/ochut.jpg",
            description : "Lorem ipsum dolor sit amet.",
            price : 100,
        },
        {
            id : 3,
            name : "Mat Cha",
            image : "./Images/matcha.jpg",
            description : "Lorem ipsum dolor sit amet.",
            price : 100,
        },
        {
            id : 4,
            name : "Nước ép",
            image : "./Images/nuocep.jpg",
            description : "Lorem ipsum dolor sit amet.",
            price : 100,
        },
        {
            id : 5,
            name : "Nem chua rán",
            image : "./Images/nemchuaran.jpg",
            description : "Lorem ipsum dolor sit amet.",
            price : 100,
        }
    ];
console.log(listProducts);
const products = (state = initialState, action) =>{
    switch(action.type){
        
        default : return [...state];
    }
}

export default products;
