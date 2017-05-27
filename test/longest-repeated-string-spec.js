var expect = require("chai").expect;
var jslrs = require("../src/jslrs");

describe("Longest Repeated Substring", function(){
   it("should be able to isolate the longest repeated sub-seqeunce from text body", function(){
       var text = "ATCGATCGA$";
       expect(jslrs.lrs(text)).to.equal("ATCGA");
       console.log(jslrs.lrs(text));
   }) ;
});