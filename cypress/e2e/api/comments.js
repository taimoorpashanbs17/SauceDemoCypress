///<reference types = "cypress" />
import Comments from "../../json-schemas/comments";

const Ajv = require("ajv");
const avj = new Ajv();
const comments = new Comments();

const postID = Math.floor(Math.random() * 100) + 1;
const commentsURL =
  "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments";

describe("Comments - GET ALL Requests", () => {
  var result;
  it("Verify Status Code", () => {
    const message = "Status code is 200";
    const verifyingMessage = "Verifying Status code on "+commentsURL;
    cy.log(verifyingMessage)
    cy.addContext(verifyingMessage)
    result = cy.request(commentsURL);
    result.its("status").should("equal", 200);
    cy.log(message)
    cy.addContext(message)
  });

  it("Verify All Comments contains keys and values", () => {
    cy.request({
      method: "GET",
      url: commentsURL,
      body: undefined,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));

      body.forEach(function (item) {
        expect(item).to.have.all.keys("postId", "id", "name", "email", "body");
      });
    });
  });

  it("Verify JSON Schema of response", () => {
    cy.request({
      method: "GET",
      url: commentsURL,
      body: undefined,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      const schema = comments.schema;
      const validate = avj.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });

  it("Verify postID has one value", () => {
    cy.request({
      method: "GET",
      url: commentsURL,
      body: undefined,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      cy.wrap(Cypress._.every(body, ["postId", postID])).as("postId");
      cy.get("@postId").should("equal", true)
    });
  });
});
