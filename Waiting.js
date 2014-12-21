/**
 * Waiting
 * 
 * A text loader, that simulates dots counting.
 *
 * Waiting.start();
 * Waiting.stop();
 *
 * @author Aaron Harding <aaron.thomas.harding@googelmail.com>
 */
 var Waiting = (function(elem) {

	var public = {},
		count = -1,
		dots = 3,
		running = false,
		delay = 500,
		container;

	function step()
	{
		count++;
		$(container).html(new Array((count % dots) + 2).join('.'));
		if(running) setTimeout(step, count % dots == 2 ? delay : delay / 2);
	}

	public.start = function()
	{
		if(running) return;
		else running = true;
		step();
	}

	public.stop = function()
	{
		running = false;
	}

	public.setContainer = function(element)
	{
		container = element;
	}

	return public;

}());