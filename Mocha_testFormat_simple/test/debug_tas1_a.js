var mocha = require('mocha');
var expect = require('expect.js');
var assert = require('assert');
/*
expect(1).to.be.ok();
expect(true).to.be.ok();
expect({}).to.be.ok();
expect(0).to.not.be.ok();
//expect(window.r).to.be(undefined);
expect(5).to.be.a('number');
*/
describe('Array',function(){
	before(function(){

	})
	describe('#indexOf()',function(){
		it('should return -1 when the value is not present',function(){
			assert.equal(-1,[1,2,3].indexOf(5));
			assert.equal(-1,[1,2,3].indexOf(0));
		})
	})

	after(function(){
	
	})
})




