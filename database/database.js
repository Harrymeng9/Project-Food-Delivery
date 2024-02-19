const { Client } = require("pg");

const db = new Client({
  user: "harry",
  host: "localhost",
  database: "fooddelivery",
  password: "password", // 0917
  port: 5432,
});

db.connect();

// const createUserIntoDB = (first_name, last_name, email, password) => {
//   const queryString = `
//     INSERT INTO customer (first_name, last_name, email, password)
//     VALUES (${first_name}, ${last_name}, ${email}, ${password})`;

//   db.query(queryString, (err, res) => {
//     if (err) {
//       console.error("Error");
//     } else {
//       console.log("Sign Up Successfully!");
//     }
//     db.end();
//   });
// };

// const getRestaurantInfo = (name) => {
//   const queryString = `
//     SELECT *
//     FROM restaurant
//     WHERE name = $1 `;

//   return new Promise((resolve, reject) => {
//     db.query(queryString,[name], (err, res) => {
//       if (err) {
//         console.error("Error");
//         reject(err);
//       } else {
//         console.log("data from database", res.rows);
//         resolve(res);
//       }
//       // db.end();
//     });
//   });
// };

// const resolvers = {
//   Query: {
//     getRestaurant: async (_, { id }) => {
//       const query = 'SELECT * FROM restaurant WHERE id = $1';
//       const values = [id];
//       const { rows } = await db.query(query, values);
//       return rows[0];
//     }
//   }
// };


module.exports = {
  // createUserIntoDB,
  // getRestaurantInfo,
  // resolvers,
  db
};
