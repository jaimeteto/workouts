const request = require("supertest");
// we also need our app for the correct routes!
const app = require("./app");
jest.setTimeout(20000);

describe("GET /minimalEquipment ", () => {
  test("It should respond with 5 workout routines", async () => {
    
    await new Promise((r) => setTimeout(r, 5000));
    const response = await request(app).get("/minimalEquipment");
    expect(response.body.length).toEqual(5);
    
  });
});
