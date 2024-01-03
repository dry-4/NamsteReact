import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *    -logo
 *    -Nav bar
 * Body
 *    -Search
 *    -RestauratContainer
 *       -RestaurantCard
 *          -image
 *          -name, location, rating, cuisine, cost, delevery time, etc
 * Footer
 *   -Social Media
 *    -Contact Us
 *   -About Us
 *    -Privacy Policy
 *   -Terms & Conditions
 *   -Copy Right
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://designlogo6.files.wordpress.com/2023/03/fast-food-logo-design-inspiration-2.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ props }) => {
  // Deser
  const {
    resName,
    resLocation,
    resCuisine,
    resRating,
    resCost,
    resDeliveryTime,
  } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="restaurant-name"
      />
      <h3>{resName}</h3>
      <p>Location : {resLocation}</p>
      <p>Cuisine : {resCuisine}</p>
      <p>Rating : {resRating}</p>
      <p>Cost : {resCost}</p>
      <p>Delivery Time : {resDeliveryTime}</p>
    </div>
  );
};

// Example of props via JOSN object
const resObj = [
  {
    id: '315774',
    resName: "Leon's Grill",
    cloudinaryImageId: 'b2edbc28b7b8219d6e0a9c049ce06658',
    resLocation: 'Bellandur',
    areaName: 'Bellandur',
    resCost: '₹300 for two',
    resCuisine: 'American',
    resRating: 4.4,
    parentId: '371281',
    avgRatingString: '4.4',
    totalRatingsString: '10K+',
    resDeliveryTime: '30 Min',
  },

  {
    id: '389992',
    resName: 'Nandhana Palace',
    cloudinaryImageId: '195876a3181ef63f76e45e3a7b49b585',
    locality: 'Daddakanahalli',
    resLocation: 'Sarjapur Road',
    resCost: '₹600 for two',
    resCuisine: ['Desserts'],
    resRating: 4.2,
    resDeliveryTime: '30 Min',
  },
  {
    id: '570509',
    resName: 'Bakingo',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Sarjapur Road',
    resCost: '₹299 for two',
    resCuisine: ['Bakery'],
    resRating: 4.3,
    resDeliveryTime: '20 Min',
  },
  {
    id: '5705010',
    resName: 'Natural Ice Creams',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Sarjapur Road',
    resCost: '₹160 for two',
    resCuisine: ['Ice Creams'],
    resRating: 4.8,
    resDeliveryTime: '20 Min',
  },
  {
    id: '5705011',
    resName: 'Millet Bowls',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    resLocation: 'HSR Layout',
    resCost: '₹500 for two',
    resCuisine: ['Millets'],
    resRating: 4.8,
    resDeliveryTime: '20 Min',
  },

  {
    id: '5705012',
    resName: 'Frozen Bottles',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Marathalli',
    resCost: '₹200 for two',
    resCuisine: ['shakes'],
    resRating: 4.8,
    resDeliveryTime: '35 Min',
  },
  {
    id: '5705013',
    resName: 'Lunch Box',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Belendur',
    resCost: '₹400 for two',
    resCuisine: ['North Indian'],
    resRating: 4.8,
    resDeliveryTime: '30 Min',
  },
  {
    id: '5705014',
    resName: 'NH1 Bowls',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Kormangala',
    resCost: '₹350 for two',
    resCuisine: ['North Indian'],
    resRating: 4.8,
    resDeliveryTime: '40 Min',
  },
  {
    id: '5705015',
    resName: 'Truffles',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Indra Nagar',
    resCost: '₹500 for two',
    resCuisine: ['Burgers'],
    resRating: 4.8,
    resDeliveryTime: '45 Min',
  },
  {
    id: '5705017',
    resName: 'Louies Burger',
    cloudinaryImageId: '0c53fd8f62e3d25ba56d1b4cfe572cef',
    locality: 'Junasandra Main Road',
    resLocation: 'Kormangala',
    resCost: '₹500 for two',
    resCuisine: ['Burgers'],
    resRating: 4.8,
    resDeliveryTime: '40 Min',
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restaurant-container">
        {/* to pass the restaurant data from JSON */}
        {/* always provide an unique key to props, for render cycle optimization, else a warning will be thrown*/}
        {/* Note - React official doc states that never use index as keys */}
        {resObj.map((restaurent) => (
          <RestaurantCard key={restaurent.id} props={restaurent} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

// example of sending the props to the component
/**
  * <RestaurantCard
          resName="Burger King"
          resLocation="Delhi"
          resCuisine="Burger"
          resRating="4.9"
          resCost="Rs. 400"
          resDeliveryTime="30 min"
        />
  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
