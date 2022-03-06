/// <reference types="cypress" />

import csvToJson from "../../utils/csvToJson";
import {
  file_path,
  base_url,
  username,
  password,
  POI_Toggle_Xpath,
} from "../../utils/constants";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("GCSS Dashboard Test Suit", async () => {
  it("Dashboard (Peshawar) with dropdown clicks", async () => {
    // READ CSV FILE AND CONVERT TO JSON
    const newData = await cy.readFile(file_path);

    const jsonData = csvToJson(newData);

    ////////////////////////////////

    //CODE STARTS ////////
    cy.visit("https://gcss.eoc.gov.pk/campaigns");
    cy.contains("GCSS Visualization Tool").should("exist");

    cy.get("#basic_username").click().type(username);
    cy.get("#basic_password").click().type(password);
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    //console.log("Worked till here")

    for (let i = 0; i < jsonData.length; i++) {
      var temp = cy.get('[id="rc_select_1"]');
      temp.click({ force: true });
      cy.contains(jsonData[i].province_name).click();
      cy.wait(3000);
      // cy.scrollTo("top");

      var temp2 = cy.get('[id="rc_select_2"]');
      temp2.click({ force: true });
      cy.contains(jsonData[i].district_name).click();
      cy.wait(3000);

      var temp3 = cy.get('[id="rc_select_3"]');
      temp3.click({ force: true });
      cy.contains(jsonData[i].tehsil_name).click();
      cy.wait(3000);

      var temp4 = cy.get('[id="rc_select_4"]');
      temp4.click({ force: true });
      cy.contains(jsonData[i].uc_name).click();
      cy.wait(3000);

      cy.contains("View on Map").click();
      cy.wait(5000);

      cy.screenshot(
        `Clicks ${jsonData[i].district_name}/${jsonData[i].tehsil_name}/${jsonData[i].uc_name}`,
        {
          capture: "fullPage",
        }
      );
    }
  });

  it("Dashboard (Karachi) with dropdown clicks", async () => {
    // READ CSV FILE AND CONVERT TO JSON
    const newData = await cy.readFile(file_path);

    const jsonData = csvToJson(newData);
    console.log(jsonData);

    ////////////////////////////////

    //CODE STARTS ////////
    cy.visit("https://gcss.eoc.gov.pk/campaigns");
    cy.contains("GCSS Visualization Tool").should("exist");

    cy.get("#basic_username").click().type(username);
    cy.get("#basic_password").click().type(password);
    cy.get('[type="submit"]').click();
    cy.wait(3000);
    //console.log("Worked till here")
    for (let i = 0; i < jsonData.length; i++) {
      var temp = cy.get('[id="rc_select_1"]');
      temp.click({ force: true });
      cy.contains(jsonData[i].province_name).click();
      cy.wait(3000);
      // cy.scrollTo("top");

      var temp2 = cy.get('[id="rc_select_2"]');
      temp2.click({ force: true });
      cy.contains(jsonData[i].district_name).click();
      cy.wait(3000);

      var temp3 = cy.get('[id="rc_select_3"]');
      temp3.click({ force: true });
      cy.contains(jsonData[i].tehsil_name).click();
      cy.wait(3000);

      var temp4 = cy.get('[id="rc_select_4"]');
      temp4.click({ force: true });
      cy.contains(jsonData[i].uc_name).click();
      cy.wait(3000);

      cy.contains("View on Map").click();
      cy.wait(5000);

      cy.screenshot(
        `Clicks ${jsonData[i].district_name}/${jsonData[i].tehsil_name}/${jsonData[i].uc_name}`,
        {
          capture: "fullPage",
        }
      );
    }
  });

  it.only("Show POIs Toggle (Peshawar)", async () => {
    const newData = await cy.readFile(file_path);
    const jsonData = csvToJson(newData);

    ////////////////////////////////

    //CODE STARTS ////////
    cy.visit(base_url);
    cy.contains("GCSS Visualization Tool").should("exist");

    cy.get("#basic_username").click().type(username);
    cy.get("#basic_password").click().type(password);
    cy.get('[type="submit"]').click();
    cy.wait(3000);

    // FOR PESHAWAR
    console.log(jsonData.length);

    var counter = 1;
    for (const data of jsonData) {
      if (counter == 1) {
        var temp = cy.get('[id="rc_select_1"]');
        temp.click({ force: true });
        cy.contains(data.province_name).click();
        cy.wait(3000);
        // cy.scrollTo("top");

        var temp2 = cy.get('[id="rc_select_2"]');
        temp2.click({ force: true });
        cy.contains(data.district_name).click();
        cy.wait(3000);

        var temp3 = cy.get('[id="rc_select_3"]');
        temp3.click({ force: true });
        cy.contains(data.tehsil_name).click();
        cy.wait(3000);
        counter++;
      }
      var temp4 = cy.get('[id="rc_select_4"]');
      temp4.click({ force: true });
      cy.contains(data.uc_name).click();
      cy.wait(3000);

      cy.contains("View on Map").click();
      cy.wait(5000);
      cy.xpath(POI_Toggle_Xpath).click().should("have.text", "On");
      cy.wait(3000);

      cy.screenshot({
        capture: "fullPage",
      });
    }

    // var temp = cy.get('[id="rc_select_1"]');
    // temp.click({ force: true });
    // cy.contains(jsonData[0].province_name).click();
    // cy.wait(3000);
    // // cy.scrollTo("top");

    // var temp2 = cy.get('[id="rc_select_2"]');
    // temp2.click({ force: true });
    // cy.contains(jsonData[0].district_name).click();
    // cy.wait(3000);

    // var temp3 = cy.get('[id="rc_select_3"]');
    // temp3.click({ force: true });
    // cy.contains(jsonData[0].tehsil_name).click();
    // cy.wait(3000);

    // var temp4 = cy.get('[id="rc_select_4"]');
    // temp4.click({ force: true });
    // cy.contains(jsonData[0].uc_name).click();
    // cy.wait(3000);

    // cy.contains("View on Map").click();
    // cy.wait(5000);
    // cy.xpath(POI_Toggle_Xpath).click();
    // cy.wait(3000);
    // cy.screenshot({
    //   capture: "fullPage",
    // });
  });
});
