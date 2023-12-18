///<reference types = "cypress" />

import GetAllPhotos from "../../json-schemas/get-all-photos";

const Ajv = require("ajv");
const avj = new Ajv();

const getAllPhots = new GetAllPhotos();

describe("Photos - GET End Point", () => {
  var result;
  const photosListURL = "https://jsonplaceholder.typicode.com/albums/1/photos";
  it("Verify Status of Get All Photos", () => {
    result = cy.request(photosListURL);
    result.its("status").should("equal", 200);
  });

  it("Verify All Photos response contains correct keys and values", () => {
    cy.request({
      method: "GET",
      url: photosListURL,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));

      body.forEach(function (item) {
        expect(item).to.have.all.keys(
          "albumId",
          "id",
          "title",
          "url",
          "thumbnailUrl"
        );
      });
    });
  });

  it("Verify All Photos responses values are not empty", () => {
    cy.request({
      method: "GET",
      url: photosListURL,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(Cypress._.every(body, ["albumId", 1])).to.deep.equal(true);
    });
  });

  it("Verify All values of 1st object", () => {
    cy.request({
      method: "GET",
      url: photosListURL,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(body[0]).has.property("albumId", 1);
      expect(body[0]).has.property("id", 1);
      expect(body[0]).has.property(
        "url",
        "https://via.placeholder.com/600/92c952"
      );
      expect(body[0]).has.property(
        "thumbnailUrl",
        "https://via.placeholder.com/150/92c952"
      );
    });
  });

  it("Verify Status of Get All Photos with invalid Method", () => {
    cy.request({
      method: "DELETE",
      url: photosListURL,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    })
      .its("status")
      .should("equal", 404);
  });

  it("Verify JSON Schema against Response", () => {
    cy.request({
      method: "GET",
      url: photosListURL,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      const schema = getAllPhots.schema;
      const validate = avj.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });
});
