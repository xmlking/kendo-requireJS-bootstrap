//http://demos.kendoui.com/web/mvvm/widgets.html
//http://demos.kendoui.com/web/mvvm/widgets.html
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'kendo'], factory);
    } else {
        // Browser globals
        factory(window.jQuery, window.kendo);
    }
}(function ($, kendo) {
'use strict';

// 	var ui = kendo.ui, //TODO: Not working. kendo = undefined 
	var kendo = window.kendo,
		ui = kendo.ui,
        Widget = ui.Widget

    var supportedColors = [ 'red', 'green', 'yellow', 'blue' ],
        DATABINDING = "dataBinding",
        DATABOUND = "dataBound",
        CHANGE = "change"       
    
	var  Led = Widget.extend({
	
			init: function(element, options) {
				var that = this;
			
				Widget.fn.init.call(this, element, options);
				
				if(supportedColors.indexOf(that.options.color) > -1) {
					that.options.color =  that.options.color;
				} else {
					console.log('color: '+that.options.color +' not supported. using default -green-');
					that.options.color =  'green';
				}
		
				$(that.element).addClass('led-'+that.options.color);
				if(that.options.size) {
					$(that.element).css('height',that.options.size || '12px'); 
					$(that.element).css('width',that.options.size || '12px');
				}    
			},

			events: [
				DATABINDING,
				DATABOUND
			],
			
			items: function() {
        		return this.element.children();
    		},
		
			refresh: function() {
				var that = this;
				that.trigger(DATABINDING);

				$(that.element).removeClass (function (index, css) {
					return (css.match (/\bled-\S+/g) || []).join(' ');
				}).addClass('led-'+that.options.color);	
				
				if(that.options.size) {
					$(that.element).css('height', that.options.size || '12px'); 
					$(that.element).css('width', that.options.size || '12px');    
				}
				
				that.trigger(DATABOUND);
			},
	
			options: { 
				 name: "Led",
				 size: null,
				 color: null,
				 brightness: 10
			},
		
			setColor: function(color) { 
				var that = this;
				that.options.color =  color;
				$(that.element).removeClass (function (index, css) {
					return (css.match (/\bled-\S+/g) || []).join(' ');
				}).addClass('led-'+that.options.color);	
			},

			setBrightness: function(brightness) { 
				var that = this;
				//TODO check brightness is valid.
				this.options.brightness = brightness;
			  	this.refresh();
			}

    });
    
    ui.plugin(Led);
    // expose the public module functions
    return Led;
}));


 