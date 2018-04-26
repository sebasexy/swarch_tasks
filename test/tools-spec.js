var expect = require('chai').expect;
var baseUrl = "http://localhost:3000/"
var should = require('should');
var request = require('request');

var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

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
/*
describe('edit_task()', function(){
    it('Edit task', function(done){
        chai.request(baseUrl)
        .put('/user?email=soyfeliz&title=Comer')
        .send({
            title: "Acabar",
            description: "Unit test",
        })
        .end(function(err, res){
            expect(res.body.title).to.equal("Acabar");
            expect(res.body.description).to.equal("Unit test");
            done();
        })
    })
})
*/

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
                //expect(bodyObj[0]).to.equal("[]");
        });
        done();
    });
});

describe('Get task pending', function(){
    it('Get task pending',function(done){
      request.get({url: baseUrl + "task/user/pending?email=papaya&status=pending"},
        function(error, response, body){
            var bodyObj = JSON.parse(body);
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
            //console.log(bodyObj);
            //console.log(bodyObj[0].status[0]);
            //expect(bodyObj[0].status[0]).to.equal('pending');
            //expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });

describe('Get all tasks from user', function(){
    it('Get all tasks from user',function(done){
    request.get({url: baseUrl+"task/user?email=papaya"},
        function(error, response, body){
            var bodyObj = JSON.parse(body);
            //console.log(bodyObj);
            //expect(bodyObj[1].title).to.equal("First task");
            expect(response.statusCode).to.equal(200);
        done();
        });
    });
});

  describe('Get all tasks', function(){
    it('Get all tasks',function(done){
      request.get({url: baseUrl + "tasks"},
        function(error, response, body){
          var bodyObj = JSON.parse(body);
            //console.log(bodyObj);
            expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });

//Sí lo hace pero afecta los otros tests
/*  it('Delete a task from user',function(done){
    request.delete({url: baseUrl3+"?email=DANIEL&title=First task"},
      function(error, response, body){
        var bodyObj = JSON.parse(body);
          console.log(bodyObj);
          expect(response.statusCode).to.equal(200);
        done();
      });
  });
});*/