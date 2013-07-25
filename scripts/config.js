(function () {
    'use strict';
	var useCDN = false;
	require.config({

		paths: {
//      	jquery			: ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min','libs/jquery/jquery.min'],
//      	jquery.smooth   : ['//cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/1.4.10/jquery.smooth-scroll.min','libs/jquery.smooth-scroll/jquery.smooth-scroll.min'],
			jquery			: useCDN?'//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min':'libs/jquery/jquery.min',
			b				: useCDN?'//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2' : 'libs/bootstrap',
			f				: useCDN?'//netdna.bootstrapcdn.com/font-awesome/3.2.1':'libs/font-awesome',
			k				: useCDN?'//cdn.kendostatic.com/2013.1.514':'libs/kendo', 
			'jquery.smooth' : useCDN?'//cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/1.4.10/jquery.smooth-scroll.min':'libs/jquery.smooth-scroll/jquery.smooth-scroll.min',
			holder			: 'libs/holder/holder',
			/** RequireJS Plugins **/
			domReady		: 'libs/require/domReady',
			css				: 'libs/require/css',
			normalize		: 'libs/require/normalize',
			i18n			: 'labs/require/i18n',
			text			: 'labs/require/text',
			json			: 'labs/require/json'        
		},

		shim: {
			'jquery.smooth': ['jquery']
		},
		
		packages: [
			{ 	
				name: 'bootstrap',
				location: 'libs/bootstrap'
			},
			{ 	
				name: 'font-awesome',
				location: 'libs/font-awesome'
			},
			{ 	
				name: 'kendo',
				location: 'libs/kendo'
			},
			{ 	
				name: 'console',
				location: 'libs/console'
			},
			{ 	
				name: 'led',
				location: 'libs/led'
			},			
			'dashboard',
            'utils'
		]
		
	});
})();