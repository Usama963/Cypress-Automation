/// <reference types="cypress" />

import peshawarData from "../../utils/peshawarData";
import { POI_Toggle_Xpath } from "../../utils/constants";
// console.log(southkpData);
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

const timeline = [
  "28 Feb",
  "01 Mar",
  "02 Mar",
  "03 Mar",
  "04 Mar",
  "05 Mar",
  "06 Mar",
  "07 Mar",
  "08 Mar",
];

describe("Peshawar Automation", () => {
  beforeEach("Login to dashboard", () => {
    cy.visit("https://gcss.eoc.gov.pk/campaigns");
    cy.get("#basic_username").click().type("03345959008");
    cy.get("#basic_password").click().type("123456");
    cy.get('[type="submit"]').click();
    cy.wait(4000);
    // console.log(jdata);
    //console.log(data.uc);
    // console.log(southkpData);
  });

  peshawarData.forEach(
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
            `https://gcss.eoc.gov.pk/campaigns?province=${province_id}&district=${district_id}&tehsil=${tehsil_id}&uc=${uc_id}&renderMap=1`,
            {
              wait: '[data-lt-installed="true"]',
            }
          );
          // cy.waitFor('[aria-label="Map"]');
          cy.wait(5000);
          // cy.screenshot(
          //   `${province_name}/${district_name}/${tehsil_name}/${uc_name}`,
          //   {
          //     capture: "fullPage",
          //   }
          // );
          // cy.wait(1000);
          for (let i = 0; i < timeline.length; i++) {
            if (i > 0) {
              cy.contains(`${timeline[i - 1]}`).click();
              cy.wait(2000);
            }
            cy.contains(`${timeline[i]}`).click();
            // cy.scrollIntoView();
            // cy.wait("[ant-click-animating-without-extra-node='false']");
            cy.wait(4000);
            if (i == timeline.length - 1) {
              cy.contains(`${timeline[i]}`).click();
            }
          }

          // cy.contains(`${timeline}`).click();
          // cy.wait(2000);
          cy.xpath(POI_Toggle_Xpath).click();
          //   .should("have.text", "ON");
          cy.wait(6000);
          cy.xpath(POI_Toggle_Xpath).click();
          //   .should("have.text", "OFF");
          cy.wait(2000);
        }
      );
    }
  );
});
