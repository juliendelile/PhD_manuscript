
    
    //from http://docs.jquery.com/Using_jQuery_with_Other_Libraries
    jQuery.noConflict();
     
     // Use jQuery via jQuery(...)
	

	jQuery(document).ready(function() {
		jQuery( "#sliderAdh" ).slider({
			step: .01,
			min: 0,
			orientation: 'horizontal',
			max: 1.5,
			value: 1,
			change: function( event, ui ) {
				jQuery( "#amountAdh" ).val( "Adh " +  ui.value );
				refreshSphereContactPlot();
			}
		});
		jQuery( "#amountAdh" ).val( "alpha " + jQuery( "#sliderAdh" ).slider( "value" ) );
	});
	
	jQuery(document).ready(function() {
		jQuery( "#sliderSigma" ).slider({
			step: .01,
			min: 0,
			orientation: 'horizontal',
			max: .5,
			value: .4,
			change: function( event, ui ) {
				jQuery( "#amountSigma" ).val( "Sigma " +  ui.value );
				
				refreshSphereContactPlot();
			}
		});
		jQuery( "#amountSigma" ).val( "Sigma " + jQuery( "#sliderSigma" ).slider( "value" ) );
	});
	
	jQuery(document).ready(function() {
		jQuery( "#sliderE" ).slider({
			step: .001,
			min: .001,
			orientation: 'horizontal',
			max: 3,
			value: 1,
			change: function( event, ui ) {
				jQuery( "#amountE" ).val( "E " +  ui.value );
				
				refreshSphereContactPlot();
			}
		});
		jQuery( "#amountE" ).val( "E " + jQuery( "#sliderE" ).slider( "value" ) );
	});
	
	jQuery(document).ready(function() {
		jQuery( "#slider-rangeR1R2" ).slider({
			range: true,
			step: .000001,
			min: .003,
			max: .01,
			values: [ .007654, .007654],
			change: function( event, ui ) {
				jQuery( "#amountR1R2" ).val( "R1 " + ui.values[ 0 ] + " R2 " + ui.values[ 1 ] );
				
				refreshSphereContactPlot();
			}
		});
		line = "R1 " + jQuery( "#slider-rangeR1R2" ).slider( "values", 0 ) +
			 " R2 " + jQuery( "#slider-rangeR1R2" ).slider( "values", 1 );
		
		jQuery( "#amountR1R2" ).val(  line );
	});	
	
	jQuery(document).ready(function() {
		
		jQuery( "#buttonMorse" ).button({
		});
		
		jQuery("#buttonMorse").css("background-color","red");
		
		jQuery("#buttonMorse").click(function () {
			draw_morse = 1 - draw_morse;
			refreshSphereContactPlot();
			if(draw_morse){
				jQuery("#buttonMorse").css("background-color","red");
			}
			else{
				jQuery("#buttonMorse").css("background-color","white");
			}
		});

	});
	
	jQuery(document).ready(function() {
		
		jQuery( "#buttonMorseCM" ).button({
		});
		
		jQuery("#buttonMorseCM").css("background-color","Lightgreen");
		
		jQuery("#buttonMorseCM").click(function () {
			draw_morse_constant_max = 1 - draw_morse_constant_max;
			refreshSphereContactPlot();
			if(draw_morse_constant_max){
				jQuery("#buttonMorseCM").css("background-color","Lightgreen");
			}
			else{
				jQuery("#buttonMorseCM").css("background-color","white");
			}
		});

	});
		
	jQuery(document).ready(function() {
		
		jQuery( "#buttonMorseCMS" ).button({
		});
		
		jQuery("#buttonMorseCMS").css("background-color","yellow");
		
		jQuery("#buttonMorseCMS").click(function () {
			draw_morse_constant_max_surface = 1 - draw_morse_constant_max_surface;
			refreshSphereContactPlot();
			if(draw_morse_constant_max_surface){
				jQuery("#buttonMorseCMS").css("background-color","yellow");
			}
			else{
				jQuery("#buttonMorseCMS").css("background-color","white");
			}
		});

	});		

	jQuery(document).ready(function() {
		
		jQuery( "#buttonF" ).button({
		
			
		});
		
		jQuery("#buttonF").css("background-color","Lightblue");
		
		jQuery("#buttonF").click(function () {
			draw_f = 1 - draw_f;
			refreshSphereContactPlot();
			if(draw_f){
				jQuery("#buttonF").css("background-color","Lightblue");
			}
			else{
				jQuery("#buttonF").css("background-color","white");
			}
		});

	});

	jQuery(document).ready(function() {
		
		jQuery( "#buttonF2" ).button({
		
			
		});
		
		jQuery("#buttonF2").css("background-color","LightSalmon");
		
		jQuery("#buttonF2").click(function () {
			draw_f2 = 1 - draw_f2;
			refreshSphereContactPlot();
			if(draw_f2){
				jQuery("#buttonF2").css("background-color","LightSalmon");
			}
			else{
				jQuery("#buttonF2").css("background-color","white");
			}
		});

	});
