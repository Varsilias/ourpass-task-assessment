import request from "supertest";
import app from "../../src/app";

describe("The root path responds with status code of 200", () => {
  test("should say Hello There", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /encode", () => {
  test("should return a a response body", async () => {
    const response = await request(app).post("/encode");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined()
  });
});

describe("POST /decode", () => {
  test("should return a a response body", async () => {
    const response = await request(app).post("/decode");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined()
  });
});


describe("POST /statistic/:shorty", () => {
  test("should return a a response body", async () => {
    const response = await request(app).post("/statistic/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined()
  });
});
