var expect = require('chai').expect;
var baseUrl = "http://localhost:3000/"
var should = require('should');
var request = require('request');
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

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
/*
describe('add_task()', function(){
    it('Add a task', function(done){
        request.post({
            headers: {'content-type' : 'application/json'},
            url: baseUrl + "task", 
            body: {
                email: "soyfeliz",
                title: "Comer",
                description: "Ir a cafeteria",
                dueDate: "2018-04-30",
                reminderDate: "2018-04-30",
                reminderDaysBeforeDueDate: "5"
            }
        }, function(error, response, body){
            var bodyObj = JSON.parse(body);
            expect(bodyObj[0].email).to.equal("soyfeliz");
            expect(bodyObj[0].title).to.equal("Comer");
            expect(bodyObj[0].description).to.equal("Ir a cafeteria");
        done();
        });
    });
});
*/

describe('add_task()', function(){
    it('Add a task', function(done){
        chai.request(baseUrl)
        .post('task')
        .send({
            email: "soyfeliz",
            title: "Comer",
            description: "Ir a cafeteria",
            dueDate: "2018-04-30",
            reminderDate: "2018-04-30",
            reminderDaysBeforeDueDate: "5"
        })
        .end(function(err, res){
            expect(res.body.email).to.equal("soyfeliz");
            done();
        });
    });
});


describe('get_a_task()', function(){
    it('Get a task',function(done){
        request.get({url: baseUrl+"task?email=soyfeliz&title=Comer"},
            function(error, response, body){
        
                var bodyObj = JSON.parse(body);
                expect(bodyObj[0].email).to.equal("soyfeliz");
                expect(bodyObj[0].title).to.equal("Comer");
                expect(bodyObj[0].description).to.equal("Ir a cafeteria");
                expect(bodyObj[0].reminderDaysBeforeDueDate).to.equal(5);
                expect(response.statusCode).to.equal(200);
       done();
      });
    });
    it('Get an invalid tasks', function(done){
        request.get({url: baseUrl + "task?email=juanito&title=Ir al cine"},
            function(error, response, body){
                var bodyObj = JSON.parse(body);
                expect(bodyObj[0]).to.equal("[]");
        });
        done();
    });
});

