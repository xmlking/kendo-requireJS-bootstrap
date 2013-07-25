define(['jquery', 
		'css!f/css/font-awesome.min.css'], function($) {
    $(function() { 
        console.log('font-awesome loaded....');
    	if ($('html').hasClass('lt-ie8') ) {
    		require(['css!f/css/font-awesome-ie7.min.css'], function(ieCSS) {
        		 console.log('font-awesome for IE7 loaded....');
    		});
		}
    });
});     
        