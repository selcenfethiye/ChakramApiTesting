const chakram = require('chakram'), expect = chakram.expect;
describe("User Module", function(){
    it ("POST- CreateUser", function () {
        const body = {
            "id": 123123125,
            "username": "mehmetmersinli",
            "firstName": "mehmet",
            "lastName": "mersinli",
            "email": "mehmetmersinliu@gmail.com",
            "password": "111111",
            "phone": "00000000000",
            "userStatus": 1
        }
        const response = chakram.post("https://petstore.swagger.io/v2/user", body);
        expect (response).to.have.status(200);
        return chakram.wait();
    });
    it("GET- GetUserInfo", function(){
        const response = chakram.get("https://petstore.swagger.io/v2/user/mehmetmersinli");
        expect(response).to.have.status(200);
        return chakram.wait();
    });
    it ("PUT- UpdateUserInfo", function () {
        const body = {
            "id": 123123125,
            "username": "mehmetmersinli",
            "firstName": "mehmet",
            "lastName": "mersinli",
            "email": "mehmetmersinliu@gmail.com",
            "password": "222222",
            "phone": "00000000000",
            "userStatus": 0
        }
        const response = chakram.put("https://petstore.swagger.io/v2/user/mehmetmersinli", body);
        expect (response).to.have.status(200);
        return chakram.wait();
    });
    it ("DELETE- DeleteUser", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/mehmetmersinli");
        expect (response).to.have.status(200);
        return chakram.wait();
    });
    it ("GET- GetUserInfo Invalid User", function () {
        const resBody = {
            "code":1,
            "type":"error",
            "message":"User not found"
        }
        const response = chakram.get("https://petstore.swagger.io/v2/user/mehmetmersinli");
        expect (response).to.have.status(404);
        expect (response).to.comprise.of.json(resBody);
        expect (response).to.have.header('content-type', 'application/json');
        return chakram.wait();
    });

});


