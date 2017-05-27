var expect    = require("chai").expect;
var jslrs = require("../src/jslrs");

describe("Three Ways String Quick Sort", function() {
  it("should sort strings descendingly", function() {
      var a = [ "this", "is", "jim", "nice", "to", "meet", "you"];
      
      jslrs.threeWaysStringQuickSort(a);
      
      console.log(a);
    

  });
      
});