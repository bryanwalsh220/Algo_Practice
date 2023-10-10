/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

// const table = "users";
// const insertData1 = { first_name: "John", last_name: "Doe" };
// // extract just the keys from an object?
// console.log(

//   Object.values(insertData1) // returns an array of arrays of the key-value pairs
// );

// const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// // loop over an obj?
// for (let key in obj) {

// }
// // loop over an array?
// for (let element of array) {
//   element;
// }

// Bonus:
// const insertData2 = {
//   first_name: "John",
//   last_name: "Doe",
//   age: 30,
//   is_admin: false,
// };
const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
  // remember to write the pseudocode first!
  //extract column names and values first
const columns = Object.keys(columnValuePairs).join(",");
const values = Object.values(columnValuePairs)
    .map((val) => (typeof val === "string" ? `'${val}'` : val))
    .join(",");

const statement = `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;

return statement;
}
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
