import request from "supertest";
import app from "../../src/app";

describe("The root path responds with status code of 200", () => {
  test("should say Hello There", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
  });
});
