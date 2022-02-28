import request from "supertest";
import mongoose from "mongoose";
import app from "../../src/app";

beforeAll(() => {
  const DB_PORT = process.env.MONGO_URI;
  mongoose.connect(DB_PORT);
});

afterAll(() => {
  mongoose.disconnect();
});

describe("The root path responds with status code of 200", () => {
  test("should say Hello There", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /encode", () => {
  test("should return a response body", async () => {
    const response = await request(app).post("/encode");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe("POST /decode", () => {
  test("should return a response body", async () => {
    const response = await request(app).post("/decode");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});

describe("GET /statistic/:shorty", () => {
  test("should return a response body", async () => {
    const path = "DjWUqnelCHE6zvW7vIKA1";
    const response = await request(app).get(`/statistic/${path}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });
});
