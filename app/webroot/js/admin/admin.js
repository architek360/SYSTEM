
//onload init
$(function() { 
		   
	// datepicker for date selection
	$('.datepicker').datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
	});
	
	$('.datetimepicker').datetimepicker({
		//ampm: true,
		//showSecond: true,
		dateFormat: 'yy-mm-dd',
		stepHour: 1,
		stepMinute: 10,
		stepSecond: 10,
		timeformat: 'hh:mm:ss'
	});
	
	$('.timepicker').timepicker({
		//ampm: true,
		//showSecond: true,
		stepHour: 1,
		stepMinute: 10,
		stepSecond: 10,
		timeformat: 'hh:mm:ss'
	});
	
	// modal dialog windows
	$(".dialog").click(function(e){
		var url = $(this).attr("href");
		$("#siteWrap").append("<div id='dialogLoad' style='background: #fff;'></div>");
		$("#dialogLoad").load(url).dialog({
			modal:true,
			});
		return false;
	});
	
	/* Helper Text show statement */
	if ($.cookie('showHelperText') == null) {
		$('#helpOpen').slideDown();
	} else {		
		$('#helperText').show();
		$('#helpOpen').hide();
	}
	/* Helper Text links */
	$('#helpClose').click(function(e){
		$.cookie('showHelperText', null);
		$('#helperText').slideUp('slow');
		$('#helpOpen').show();
	});
	$('#helpOpen').click(function(e){
		$.cookie('showHelperText', 1, { expires: 999 });
		$('#helperText').slideDown('slow');
		$('#helpOpen').hide();
	});
	
	
	
	// reusable select box update
	// requires json attribute, which is equal to the relative url to call
	// requires element attribute, which is equal to select (other types in other functions)
	// requires rel attribute, which is the target id of the select box to update
	$('select[element="select"]').change(function(){
		var url = '/' + $(this).attr('json') + '/' + $(this).val() + '.json';
		var target = $(this).attr('rel');
		$.getJSON(url, function(data){
			var items = [];	
 			$.each(data, function(key, val) {
				if (val['value']) { value = val['value']; } else { value = val['name']; }
				items += '<option value="' + value + '">' + val['name'] + '</option>';
			});
			$('#' +  target).html(items);
			if ($.isFunction(window.selectCallBack)) { selectCallBack(data); }
	    });
	});
	
	
	/* site wide toggle, set the click elements class to toggleClick, 
	   and the name attribute to the id of the element you want to toggle */
	$(".toggleClick").click(function () {
		var currentName = $(this).attr('name');
		$('#'+currentName).toggle('slow');
		$('.'+currentName).toggle('slow');
		return false;
	});
	
	$(".toggleHover").hover(function () {
		var currentName = $(this).attr('name');
		$('#'+currentName).toggle();
		$('.'+currentName).toggle();
		return false;
	});
	
	
	/* Tabs */
	$('#contentWrapper div.tabs a').click(function(e){
		$('#contentWrapper div.tabs a').removeClass('active');
		$('#tabTwo, #tabOne').hide();
	
		$(this).addClass('active');
	
		$('#contentWrapper div.tabs a span.ls,#contentWrapper div.tabs a span.rs').removeAttr('style');
			var id = $(this).attr('rel');
			$('#'+id).show();
			e.preventDefault();
	
	});


	// hides form elements except the legend (click the legend to show form elements
  	$('legend.toggleClick').siblings().hide();
	
  	$('legend.toggleClick').click(function(){
    	$(this).siblings().slideToggle("toggle");
    });
		
	//$('#tabs').tabs({fx:{height: "toggle"}});	
	$('.tabs').parent().tabs({fx:{height: "toggle"}});
	/* make the current tab have the class active
	$('#tabs a').click(function() {
		$('#tabs a').removeClass('active');
		$(this).addClass('active');
	});
	$('#navigation a').click(function() {
		$('#navigation a').removeClass('active');
		$(this).addClass('active');
	});**/
	
	
	/* Font size changer */
	if ($.cookie('fontSize') != null) {
		$('body').css('font-size', $.cookie('fontSize'));
	}
	$('#fontSize1').click(function(e){
		$('body').css('font-size', '0.8em');
		$.cookie('fontSize', '0.8em', { expires: 999 });
	});
	$('#fontSize2').click(function(e){
		$('body').css('font-size', '1.3em');
		$.cookie('fontSize', '1.3em', { expires: 999 });
	});
	$('#fontSize3').click(function(e){
		$('body').css('font-size', '1.6em');
		$.cookie('fontSize', '1.6em', { expires: 999 });
	});
	
});