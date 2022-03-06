// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//import '@testing-library/cypress/add-commands';
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// Cypress.Commands.add("addValues", (a, b) => {
//   return a + b;
// });
// Cypress.Commands.add("osama", async (csv) => {
//   console.log("running ");
//   // const csvToJson = (csv) => {
//   const lines = csv.split("\n");

//   const users = [];
//   const headers = lines[0].split(",").map((header) => header.trim());

//   for (let i = 1; i < lines.length; i++) {
//     if (lines[i]) {
//       const obj = {};
//       const currentline = lines[i].split(",");
//       for (let j = 0; j < headers.length; j++) {
//         obj[headers[j]] = currentline[j].trim();
//       }

//       users.push(obj);
//     }
//   }
//   console.log(users);
//   return users;
//   //   };
// });

// Cypress.Commands.add("csv_to_json", (csv) => {
//   const csvToJson = (csv) => {
//     const lines = csv.split("\n");

//     const users = [];
//     const headers = lines[0].split(",").map((header) => header.trim());

//     for (let i = 1; i < lines.length; i++) {
//       if (lines[i]) {
//         const obj = {};
//         const currentline = lines[i].split(",");
//         for (let j = 0; j < headers.length; j++) {
//           obj[headers[j]] = currentline[j].trim();
//         }

//         users.push(obj);
//       }
//     }

//     return users;
//   };
// });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
