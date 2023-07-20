import React from 'react'
import './delivery.css'
import Filters from '../Common/filters';
import Deliverycollection from './delivercollection';
import TopBrand from './topBrands';
import ExploreSection from '../Common/exploresection';
import { restaurant } from '../../data/restaurants';
const deliveryFilters=[
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
const restaurantList= restaurant;
const Delivery = () => {
  return (
    <div>
     <div className='max-width'>
     <Filters filterList={deliveryFilters} />
     </div>
      <Deliverycollection/>
      <TopBrand/>
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Phase 1, Kamla Market, Sector 57'/>
    </div>
  )
}

export default Delivery;
