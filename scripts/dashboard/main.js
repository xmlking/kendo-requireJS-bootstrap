define([
	'jquery',
    'utils',
	'bootstrap',
	'font-awesome',
	'holder',
	'jquery.smooth',
	'kendo',
	'console',
	'led'
], function($,b,f,h,js,k,c,l) {
	'use strict';
	
	return { 
		init : function(){

			/** bootswitch **/
			$('a[rel=tooltip]').tooltip({
				'placement': 'bottom'
			});

			$('.navbar a, .subnav a').smoothScroll();

			// fix sub nav on scroll
			var $win = $(window),
					$body = $('body'),
					$nav = $('.subnav'),
					navHeight = $('.navbar').first().height(),
					subnavHeight = $('.subnav').first().height(),
					subnavTop = $('.subnav').length && $('.subnav').offset().top - navHeight,
					marginTop = parseInt($body.css('margin-top'), 10),
					isFixed = 0

			processScroll();

			$win.on('scroll', processScroll);

			function processScroll() {
				var i, scrollTop = $win.scrollTop();

				if (scrollTop >= subnavTop && !isFixed) {
					isFixed = 1;
					$nav.addClass('subnav-fixed');
					$body.css('margin-top', marginTop + subnavHeight + 'px');
				} else if (scrollTop <= subnavTop && isFixed) {
					isFixed = 0;
					$nav.removeClass('subnav-fixed');
					$body.css('margin-top', marginTop + 'px');
				}
			}

			/** console_pane **/
	// 		$("#sumoConsole").kendoConsole();
			kendo.bind($("#sumoConsole"));
			var sumoConsole = $("#sumoConsole").data("kendoConsole");
	
			$("#addbutton").click(function() {
				sumoConsole.log("dddd");
				sumoConsole.error("fffff fgdg");
			});


			$("#cleanbutton").click(function() {
				sumoConsole.clean();
			});
						
			//c.fn.error('aaaa...');
				
			/** gauge_pane  **/
            var gaugeModel = kendo.observable({
                things: [ 22, 33, 44,55,66,77,88,99,120,150 ],
                thing: 34,
                thingsWidth: "300px",
                thingsFontSize: "2em",
                youSelectedColor: "blue",
                thingSelection: function() {
                    return "You selected " + this.get("thing");
                }
            });

			var LedViewModel = kendo.observable({
				colog: 'red',
				size: "13px",
			});
			kendo.bind($("#led1"), LedViewModel);
		
			var pressure_dat = new kendo.data.DataSource({
				data: [ 936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
						1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
						974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
						952, 940, 937, 980, 966, 965, 928, 916, 910, 980]
			});

            $("#gauge_tab").on('shown', function (e) {

                require(['css!k/styles/kendo.dataviz.min.css',
                    'css!k/styles/kendo.dataviz.metro.min.css',
                    'k/js/kendo.dataviz.sparkline.min',
                    'k/js/kendo.dataviz.gauge.min'
                ], function() {
                    // Binding directly to an array
                    $("#press-log").kendoSparkline([
                        936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
                        1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
                        974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
                        952, 940, 937, 980, 966, 965, 928, 916, 910, 980
                    ]);

                    // User-set Sparkline type
                    $("#temp-log").kendoSparkline({
                        type: "column",
                        data: [
                            16, 17, 18, 19, 20, 21, 21, 22, 23, 22,
                            20, 18, 17, 17, 16, 16, 17, 18, 19, 20,
                            21, 22, 23, 25, 24, 24, 22, 22, 23, 22,
                            22, 21, 16, 15, 15, 16, 19, 20, 20, 21
                        ],
                        tooltip: {
                            format: "{0} &deg;C"
                        }
                    });

                    $("#hum-log").kendoSparkline({
                        type: "area",
                        data: [
                            71, 70, 69, 68, 65, 60, 55, 55, 50, 52,
                            73, 72, 72, 71, 68, 63, 57, 58, 53, 55,
                            63, 59, 61, 64, 58, 53, 48, 48, 45, 45,
                            63, 64, 63, 67, 58, 56, 53, 59, 51, 54
                        ],
                        tooltip: {
                            format: "{0} %"
                        }
                    });

                    kendo.bind($("#gauge_pane"), gaugeModel);
                    kendo.init($("#gauge_pane"));
                    gaugeModel.set("thing", 66);
                });

            });


            $("#toggleled").clickToggle(
                function () {
                    $("#led1").data("kendoLed").setColor('red');
                },
                function () {
                    $("#led1").data("kendoLed").setColor('green');
                }
            );
			
			kendo.bind($("#container"));
			//k.init($("#container"));			
			kendo.init($("#container"));
		} 	
  	}
});



//---
//    //Wait for dom ready before setting up widgets.
//    $(function () {
//
//        //Make the tabs.
//        $('#tabs')
//            .tabs({
//                load: function (event, ui) {
//                    //If the second tab is clicked, dynamically load
//                    //the datepicker.
//                    if (ui.index === 1) {
//                        //Load the datepicker in French, on demand.
//                        req(['jqueryui/datepicker', 'jqueryui/datepicker-fr'],
//                            function () {
//                                $('#datepicker').datepicker();
//                            }
//                        );
//                    }
//                }
//            })
//            //Make the tabs visible now that the widget has been instantiated.
//            .removeClass('invisible');
//    });