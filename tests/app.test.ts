import supertest from "supertest";
import app from "../src/index";

const server = supertest(app);

describe("testsFruits", () => {
  it("should return 201 when inserting a fruit", async () => {
    const response = (await server.post("/fruits").send({
        name: "banana",
        price: 5,
  }))
    expect(response.status).toBe(201);
  });

//   it("should return 409 when inserting a fruit that is already registered", async () => {
//     const response = await server.post("/fruits");
//     expect(response.status).toBe(409);
//   });

  it("should return 422 when inserting a fruit with data missing", async () => {
    const fruitData = { name: 'Banana' };
    const response = await server.post("/fruits").send(fruitData);
    expect(response.status).toBe(422);
  });

  it("shoud return 404 when trying to get a fruit that doesn't exists", async () => {
    const fruitId = 7;
    const response = await server.get(`fruits/${fruitId}`);
    expect(response.status).toBe(404);
  });

//   it("should return 400 when id param is not valid", async () => {

//   });

//   it("should return a fruit given an id", async () => {

//   });

//   it("should return all fruits", async () => {

//   });
});
