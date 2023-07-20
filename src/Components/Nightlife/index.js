import React from 'react'
import './Nightlife.css';
import Collection from '../Common/collection';
import Filters from '../Common/filters';
import ExploreSection from '../Common/exploresection';
import { nightlife } from '../../data/nightlife';
const collectionList =[
  
   
  {
    id: 1,
    title:"9 Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675245875.jpg",
    places:"8 Places",
  },
  
  {
    id: 2 ,
    title:"9 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675245943.jpg",
    places:"8 Places",
  }
]
const nightlifeFilters=[
  {
    id:1,
    icon: <i className=
    "fi fi-rr-settings-sliders absolute-center"
    ></i>,
    title: "Filters"
  },
  {
    id:2,
    title: "Rating: 4.0+"
  },

  {
    id:3,
    title: "Safe and Hygienic"
  },

  {
    id:4,
    title: "Pure Veg"
  },

  {
    id:5,
    icon: <i className=
    "fi fi-rs-sort-alt absolute-center"
    ></i>,
    title: "Delivery Time"
  },

  {
    id:6,
    title: "Great Offers"
  }
 
]
const nightList= nightlife;
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightlifeFilters} />
      </div>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Phase 1' />
    </div>
  )
}

export default Nightlife
