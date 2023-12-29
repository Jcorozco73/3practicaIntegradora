import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const api = supertest("http://localhost:8080");

describe("Product Router", () => {
  it("should return status 200 when GET /products is called", async () => {
    const response = await api.get("/products");
    expect(response.status).to.equal(200);
  });

  it("should return status 201 when POST /products is called", async () => {
    const newProduct = {
      name: "Test Product",
      price: 10.99,
      description: "This is a test product",
      category: "test"
    };

    const response = await api.post("/products").send(newProduct);
    console.log(response);
    expect(response.status).to.equal(201);
  });

  it("should return status 200 when PUT /products/:id is called", async () => {
    const newProduct = {
      name: "Test Product",
      price: 10.99,
      description: "This is a test product",
      category: "test"
    };

    const response = await api.put("/products/:id").send(newProduct);
    expect(response.status).to.equal(200);
  });

  it("should return status 200 when DELETE /products/:id is called", async () => {
    const newProduct = {
      name: "Test Product",
      price: 10.99,
      description: "This is a test product",
      category: "test"
    };

    const response = await api.delete("/products/:id").send(newProduct);
    expect(response.status).to.equal(200);
  });
});

describe("Product Router", () => {
  it("should create a new product", async () => {
    const newProduct = {
      name: "Test Product",
      price: 10.99,
      description: "This is a test product",
      category: "test"
    };

    const response = await api.post("/products").send(newProduct);
    expect(response.status).to.equal(201);
    expect(response.body.name).to.equal(newProduct.name);
    expect(response.body.price).to.equal(newProduct.price);
    expect(response.body.description).to.equal(newProduct.description);
    expect(response.body.category).to.equal(newProduct.category);
  });

  it("should update an existing product", async () => {
    const updatedProduct = {
      name: "Updated Product",
      price: 19.99,
      description: "This is an updated product",
      category: "updated"
    };

    const response = await api.put("/products/:id").send(updatedProduct);
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal(updatedProduct.name);
    expect(response.body.price).to.equal(updatedProduct.price);
    expect(response.body.description).to.equal(updatedProduct.description);
    expect(response.body.category).to.equal(updatedProduct.category);
  });

  it("should delete an existing product", async () => {
    const response = await api.delete("/products/:id");
    expect(response.status).to.equal(200);
  });
});