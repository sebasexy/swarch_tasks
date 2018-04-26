var expect = require('chai').expect;
var baseUrl = "http://localhost:3000/"
var should = require('should');
var request = require('request');
var expect = require('chai').expect;

/*
describe("create_a_task()", function(){
    it("Should create a Task", function(){
            request.post({url: baseUrl + "task"}, function(err, res, body){
                var bodyObj = JSON.parse(body);
                expect(bodyObj[0].ema)
            });
    });
});
*/

describe('create_a_task()', function(){
    it('Create a task',function(done){
        request.get({url: baseUrl+"task?email=soygay&title=Comer"},
            function(error, response, body){
        
                var bodyObj = JSON.parse(body);
                expect(bodyObj[0].email).to.equal("soygay");
                expect(bodyObj[0].title).to.equal("Comer");
       done();
      });
    });
   });