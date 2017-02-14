var supertest = require("supertest");
var should = require("should");

let server = supertest.agent("http://localhost:3000");

describe('loading express', () => {
    it("should return 200 from the api", (done) => {
        server
            .get("/api/v1/ec2")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end((err, res) => {
                res.should.have.property('status', 200);
                done()
            });
    });
});

