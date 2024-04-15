// Tab Panels
$(document).ready(function(){
	// grab all container panel DIVs
	var tabContainers = $('div.tabs > div');
	// hide all tab containers with 500ms delay
	tabContainers.hide().delay(500);
	// grab all children of ui element i.e. <li> elements.
	let ulItems = $('ul.tabNavigation > li');
	// hide all ul children elments
	ulItems.hide();
	// show first child of ul element
	$('ul>li:first-child').show("slow");
	// hide them all, then show the first one with 300 ms delay
	tabContainers.hide().filter(':first').show("slow");
	// hide them all and then show first with slow delay and later with 400 ms delay
	ulItems.hide().filter(':first').show("slow", function nextElement(){
		$(this).next("li").show(400, nextElement);
	})
	// set the first tab to class="selected"
	$('div.tabs ul.tabNavigation a:first').addClass('selected');
	// add onclick handlers to all tabs
	$('div.tabs ul.tabNavigation a').click(function(){
		// hide all tabContainers
		tabContainers.hide();
		// show only the tabContainer with the ID that matches the href for the A that was clicked
		// alert(this.hash);
		// Show/switch tab with 300 ms delay
		tabContainers.filter(this.hash).show(300);
		// remove class="selected" from all tabs
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		// set class="selected" on the tab that was just clicked
		$(this).addClass('selected');
		// stop following links
		return false;
	});
});