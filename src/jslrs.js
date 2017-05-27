var jslrs = jslrs || {};

(function (jss) {
    'use strict';
	
    jss.threeWaysStringQuickSort = function(a) {
        jss._sort(a, 0, a.length-1, 0);    
    };
    
    jss._sort = function(a, lo, hi, d) {
        if(lo >= hi) return;
        
        var i = lo, lt = lo, gt = hi;
        var c = jss._charAt(a[lo], d);
        while(i <= gt) {
            var cmp = jss._charAt(a[i], d) - c;
            if(c < 0) {
                jss.exchange(a, i++, lt++);
            } 
            else if(c > 0) {
                jss.exchange(a, i, gt--);
            }
            else {
                i++;
            }
        }
        
        jss._sort(a, lo, lt-1, d);
        if(c >= 0) jss._sort(a, lt, gt, d+1);
        jss._sort(a, gt+1, hi, d);
    };
    
    jss._charAt = function(a, d) {
        if(a.length <= d) {
            return -1;
        }  
        return a.charAt(d);
    };
    
})(jslrs);

if(module) {
	module.exports = jslrs;
}