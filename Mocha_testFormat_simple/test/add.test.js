var mocha = require('mocha');
var expect = require('expect.js');
var assert = require('assert');
var add =require('../add');
/*
expect(1).to.be.ok();
expect(true).to.be.ok();
expect({}).to.be.ok();
expect(0).to.not.be.ok();
//expect(window.r).to.be(undefined);
expect(5).to.be.a('number');
*/

//using the assert liberary to test a function of synchronize.
describe('#add()',function(){
	before(function(){

	});

	it('should return a result when the a number plus another',function(){
			assert.equal(10,add(5,5));
			//assert.equal(-1,[1,2,3].indexOf(0));
	});

	after(function(){
	
	});
});

//using the expect.js liberary to test a function of synchronize.
describe('#add()',function(){
	before(function(){

	});

	it('should return a result when the a number plus another',function(){
			expect(add(5,5)).to.be.equal(10);
			
	});

	after(function(){
	
	});
});





//using the expect.js liberary to test a function of asynchronize.
describe('#setTimeout()',function(){
	var sum = 0;

	before(function(done){
		setTimeout(function(){
			sum = add(4,5);
			done();
		},1000);
	});
	it('should return the sum of number when call the setTimeout()',function(){
		//expect(add(1,1)).to.be.equal(2);
		expect(sum).to.be.equal(9);
	});
	after(function(){
	});
});

//using the assert liberary to test a function of asynchronize.
describe('#setTimeout()',function(){
	var sum = 0;

	before(function(done){
		setTimeout(function(){
			sum = add(4,5);
			done();
		},1000);
	});

	it('should return the sum of number when call the setTimeout()',function(){
		//expect(add(1,1)).to.be.equal(2);
		//expect(sum).to.be.equal(9);
		assert.equal(9,sum);
		//console.log(sum);
	});

	after(function(){
	});
});

//using the assert/expect.js liberary to test a module of synchronize.
describe("moduleName",function(){
	describe("#function1()",function(){
		before(function(){


		});
		beforeEach(function(){


		});
		it("should return ...",function(){


		});

		after(function(){


		});

		afterEach(function(){


		});

	});
	describe("#function2()",function(){
		before(function(){


		});
		beforeEach(function(){


		});
		it("should return ...",function(){


		});
		
		after(function(){


		});

		afterEach(function(){


		});

	});

});

//using the assert/expect.js liberary to test a module of asynchronize.
describe("moduleName",function(){
	describe("#function1()",function(){
		before(function(){


		});
		beforeEach(function(){


		});
		it("should return ...",function(){


		});

		after(function(){


		});

		afterEach(function(){


		});

	});
	describe("#function2()",function(){
		before(function(){


		});
		beforeEach(function(){


		});
		it("should return ...",function(){


		});
		
		after(function(){


		});

		afterEach(function(){


		});

	});

});