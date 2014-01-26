$(document).ready(function()
{
	updateProgress();
	updateAge();

    $(document).unload(function() {$('*').unbind(); });
});