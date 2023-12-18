///<reference types = "cypress" />
import Posts from "../../json-schemas/posts";

const Ajv = require("ajv");
const avj = new Ajv();

const getAllPosts = new Posts();
const randomNumber = Math.floor(Math.random() * 10) + 1;
const postsURL = "https://jsonplaceholder.typicode.com/posts";

describe("Get all Posts - GET REQUEST End Point", () => {
  var result;
  it("Verify Status of Get All Posts", () => {
    result = cy.request(postsURL);
    result.its("status").should("equal", 200);
  });

  it("Verify All Posts response contains correct keys and values", () => {
    cy.request({
      method: "GET",
      url: postsURL,
      body:undefined,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));

      body.forEach(function (item) {
        expect(item).to.have.all.keys("userId", "id", "title", "body");
      });
    });
  });

  it("Verify All values of 1st object", () => {
    cy.request({
      method: "GET",
      url: postsURL,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));
      expect(body[0]).has.property("userId", 1);
      expect(body[0]).has.property("id", 1);
      expect(body[0]).has.property(
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(body[0]).has.property(
        "body",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      );
    });
  });

  it("Verify Status of Get All Posts with invalid Method", () => {
    cy.request({
      method: "DELETE",
      url: postsURL,
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
      url: postsURL,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      const schema = getAllPosts.getAllPostsSchema;
      const validate = avj.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });
});

describe("Create New Post - POST REQUEST End Point", () => {
  it("Verify Status of creating a Posts", () => {
    cy.request({
      url: postsURL,
      method: "POST",
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it("Verify schema Validation", () => {
    cy.request({
      url: postsURL,
      method: "POST",
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
      },
    }).then((response) => {
      const schema = getAllPosts.createPostSchema;
      const validate = avj.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });

  it("Verify values in response", () => {
    cy.request({
      method: "POST",
      url: postsURL,
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
      },
    }).then((res) => {
      cy.wrap(res.body.title).as("title");
      cy.wrap(res.body.body).as("body");
      cy.wrap(res.body.userId).as("userId");
      cy.get("@title").then((val) => {
        expect(val).to.equal("foo");
      });
      cy.get("@body").then((val) => {
        expect(val).to.equal("bar");
      });
      cy.get("@userId").then((val) => {
        expect(val).to.equal(randomNumber);
      });
    });
  });

  it("Verify Status Code with Invalid Method with 'PUT'", () => {
    cy.request({
      url: postsURL,
      method: "PUT",
      failOnStatusCode: false,
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
      },
    }).then((response) => {
      expect(response.status).to.eql(404);
    });
  });
});

describe("Update existing post - PUT Request End Point", () => {
  it("Verify Status code", () => {
    cy.request({
            url: postsURL + "/1",
            method: "PUT",
            body: {
              title: "foo",
              body: "bar",
              userId: randomNumber,
              id: 1
            },
          }).then((response) => {
            expect(response.status).to.eql(200);
          });
  })

    it("Verify schema Validation", () => {
    cy.request({
      url: postsURL + "/1",
      method: "PUT",
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
        id: 1
      },
    }).then((response) => {
      const schema = getAllPosts.createPostSchema;
      const validate = avj.compile(schema);
      const isValid = validate(response.body);
      expect(isValid).to.be.true;
    });
  });

    it("Verify values in response", () => {
    cy.request({
      method: "PUT",
      url: postsURL + "/1",
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
        id: 1
      },
    }).then((res) => {
      cy.wrap(res.body.title).as("title");
      cy.wrap(res.body.body).as("body");
      cy.wrap(res.body.userId).as("userId");
      cy.wrap(res.body.id).as("id");
      cy.get("@title").then((val) => {
        expect(val).to.equal("foo");
      });
      cy.get("@body").then((val) => {
        expect(val).to.equal("bar");
      });
      cy.get("@userId").then((val) => {
        expect(val).to.equal(randomNumber);
      });
      cy.get("@id").then((val) => {
        expect(val).to.equal(1);
      });
    });
  });
    it("Verify Status Code with Invalid Method with 'POST'", () => {
    cy.request({
      url: postsURL + "/1",
      method: "POST",
      failOnStatusCode: false,
      body: {
        title: "foo",
        body: "bar",
        userId: randomNumber,
        id: 1
      },
    }).then((response) => {
      expect(response.status).to.eql(404);
    });
  });
})
