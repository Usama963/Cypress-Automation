/// <reference types="cypress" />

import karachiData from "../../utils/KarachiData";
import { POI_Toggle_Xpath } from "../../utils/constants";
// console.log(southkpData);
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Karachi Automation", () => {
  beforeEach("Login to dashboard", () => {
    cy.visit("https://gcss.eoc.gov.pk/campaigns");
    cy.get("#basic_username").click().type("03345959008");
    cy.get("#basic_password").click().type("123456");
    cy.get('[type="submit"]').click();
    cy.wait(5000);
    // console.log(jdata);
    //console.log(data.uc);
    // console.log(southkpData);
  });

  karachiData.forEach(
    ({
      province_id,
      province_name,
      district_id,
      district_name,
      tehsil_id,
      tehsil_name,
      uc_id,
      uc_name,
    }) => {
      it(
        `Testing for ${province_name}->${district_name}->${tehsil_name}->${uc_name} :`,
        { retries: 2 },
        () => {
          // const newData = await cy.readFile("D:/polio vaccination center/Data.csv");
          // const jdata = csvToJson(newData);

          cy.visit(
            `https://gcss.eoc.gov.pk/campaigns?province=${province_id}&district=${district_id}&tehsil=${tehsil_id}&uc=${uc_id}&renderMap=1`
          );
          cy.wait(10000);
          // cy.screenshot(
          //   `${province_name}/${district_name}/${tehsil_name}/${uc_name}`,
          //   {
          //     capture: "fullPage",
          //   }
          // );
          cy.wait(2000);
          cy.xpath(POI_Toggle_Xpath).click().should("have.text", "ON");
          cy.wait(2000);
          cy.xpath(POI_Toggle_Xpath).click().should("have.text", "OFF");
        }
      );
    }
  );
});
