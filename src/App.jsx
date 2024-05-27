import { useState } from 'react';
import './App.css'

const menu = [
  {
      id:1,
      imgLink:"https://b.zmtcdn.com/data/dish_photos/d30/d4bc6d766510df18de2af08c012d2d30.jpg",
      title:"Suchali's Artisan Bakehouse",
      category:"Breakfast",
      desc:"Savoury croissant with mushroom, thyme and cream cheese,Savoury croissant with mushroom, thyme and cream cheese,Savoury croissant with mushroom, thyme and cream cheese,Savoury croissant with mushroom, thyme and cream cheese",
      price:"$ 150 .99"
  },
  {
      id:2,
      imgLink:"https://b.zmtcdn.com/data/pictures/3/20474473/32cf94e85b9fb3ad5dd75cf8fad6b516_featured_v2.jpg?output-format=webp",
      title:"Parvanii",
      category:"Lunch",
      desc:"Bengali, Odia, North Indian, Seafood, Desserts, BeveragesDLF Phase 3, Gurgaon , Bengali, Odia, North Indian, Seafood, Desserts, Beverages DLF Phase 3, Gurgaon , Bengali, Odia, North Indian, Seafood, Desserts, Beverages DLF Phase 3, Gurgaon , Bengali, Odia, North Indian, Seafood, Desserts, Beverages DLF Phase 3, Gurgaon" ,
      price:"$ 800 . 78"
  },
  {
      id:3,
      imgLink:"https://b.zmtcdn.com/data/pictures/chains/3/18626043/5b88b8b8d700db38f0f43cbdcf755878.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      title:"Odisha Hotel",
      category:"Dinner",
      desc:"Dahi Baigan, Curry Crab, Masala Prawn, Mutton Platter, Mutton Thali, Chicken Pakora , Dahi Baigan, Curry Crab, Masala Prawn, Mutton Platter, Mutton Thali, Chicken Pakora , Dahi Baigan, Curry Crab, Masala Prawn, Mutton Platter, Mutton Thali, Chicken Pakora ,Dahi Baigan, Curry Crab, Masala Prawn, Mutton Platter, Mutton Thali, Chicken Pakora",
      price:"$ 1000 . 76"
  },
  {
      id:4,
      imgLink:"https://b.zmtcdn.com/data/pictures/chains/8/19457968/4c677bdda26fad04886059cded59ae42_featured_v2.jpg?output-format=webp",
      title:"Malabar Coco",
      category:"Breakfast",
      desc:"South Indian, Kerala, Chinese Chaukhandi, Noida ,South Indian, Kerala, Chinese Chaukhandi, Noida ,South Indian, Kerala, Chinese Chaukhandi, Noida , South Indian, Kerala, Chinese Chaukhandi, Noida",
      price:"$ 180 .89"
  },
  {
      id:5,
      imgLink:"https://b.zmtcdn.com/data/dish_photos/db0/782da8057b760069457247e986cd0db0.png?output-format=webp",
      title:"Odisha Veg Item",
      category:"Lunch",
      desc:"A flavorful Dal Makani. Served with your choice of Steamed Basmati Rice OR Parathas (3 Nos) and Raita , A flavorful Dal Makani. Served with your choice of Steamed Basmati Rice OR Parathas (3 Nos) and Raita,A flavorful Dal Makani. Served with your choice of Steamed Basmati Rice OR Parathas (3 Nos) and Raita ,A flavorful Dal Makani. Served with your choice of Steamed Basmati Rice OR Parathas (3 Nos) and Raita",
      price:"$ 900 .42"
  },
  {
      id:6,
      imgLink:"https://b.zmtcdn.com/data/dish_photos/2f8/fc0e37a1551468be972871c85a32e2f8.jpg",
      title:"Sheraton New Delhi- Flavours",
      category:"Breakfast",
      desc:"Per Serve (~760g) 1292kcal [Contains Wheat/Rye/Barley/Oat,Nuts,Milk] ,the bread is moist with a coarse texture and nutty flavour.perfect for breakfast toastes, sandwiches or as a side to savoury dishes",
      price:"$ 180.76"
  },
  {
      id:7,
      imgLink:"https://b.zmtcdn.com/data/dish_photos/385/6f9802f2dc6532ac94b3eff6564f9385.jpeg?output-format=webp",
      title:"UBQ by Barbeque Nation",
      category:"Dinner",
      desc:"Chicken Dum Biryani + Chicken Tikka Boneless (6 Pcs) + Butter Chicken Masala + Dal Makhani + Dry Mix Veg + Parathas (2 Nos) + Small Angoori Gulab Jamun (4 Pcs). A wholesome North-Indian Thali served with Raita & Salad.",
      price:"$ 878 .78"
  },
];

function App() {
  
  const [updateMenu , setUpdateMenu ] = useState(menu);

  return (
    <>
        <h1><i>O<u>ur Men</u>u</i></h1>
        <button onClick={()=>{setUpdateMenu(menu);}}>All</button>

        <button onClick={()=>{
          setUpdateMenu(menu.filter((i) =>i.category === "Breakfast"))
        }}>Breakfast</button>

        <button onClick={()=>{setUpdateMenu(menu.filter((e)=>e.category === "Lunch"))}}>Lunch</button>
        <button onClick={()=>{setUpdateMenu(menu.filter((d)=>d.category === "Dinner"))}}>Dinner</button>
        <div className='totalmenu'>
          {
            updateMenu.map((menuItem)=>{
              const {id , imgLink , title , category , desc , price } = menuItem;
              return(
                <article key={id} className='menuCard'>
                    <img src={imgLink} alt={title} />
                    <h3>{title}</h3>
                    <b>{price}</b>
                    <p>{desc}</p>
                </article>
              )
            })
          }
        </div>
    </>
  )
}

export default App
