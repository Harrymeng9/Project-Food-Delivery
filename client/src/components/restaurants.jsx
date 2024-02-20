import React from "react";
import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Restaurant from "./restaurant.jsx";

const Restaurants = (props) => {
  const [allRestaurantsInfo, setAllRestaurantsInfo] = useState([]);

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    // uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  const GET_RESTAURANT = gql`
    query GetRestaurant($name: String!) {
      getRestaurant(name: $name) {
        name
        address
        phone_number
        created_at
      }
    }
  `;

  const GET_ALL_RESTAURANTS = gql`
    query GetAllRestaurant {
      getAllRestaurant {
        name
        address
        phone_number
        created_at
      }
    }
  `;

  useEffect(() => {
    client
      .query({
        query: GET_ALL_RESTAURANTS,
      })
      .then((result) => {
        setAllRestaurantsInfo(result.data.getAllRestaurant);
      });
  }, []);

  const retrieveRestaurantDetail = (result) => {
    console.log("testing testing", result.name);

    // Navigate to different page
    // Show each restaurant's menu/review/etc

    // client
    //   .query({
    //     query: GET_RESTAURANT,
    //     variables: { name: "Sushipro" },
    //   })
    //   .then((result) => {
    //     console.log("frontend data", result.data);
    //   })
    //   .catch((error) => console.error(error));
  };

  return (
    <div>
      <div>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {allRestaurantsInfo.map((result, i) => {
                return (
                  <div
                    key={i}
                    onClick={(e) => {
                      retrieveRestaurantDetail(result);
                    }}
                  >
                    <Restaurant restaurant={result} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
