window.BCHTIX = window.BCHTIX || {}

BCHTIX = 
{

}

BCHTix.AjaxWrapper = function BCHTix$StaffPlan$Ajax$Wrapper(url, data, successHandler, failureHandler, overrides)
{
    overrides = overrides || {};
    return $.ajax({
        type: overrides.type || "GET",
        url: overrides.url || url + "?preventCache=" + new Date().getTime(),
        data: JSON.stringify(data),
        dataType: overrides.dataType || "json",
        contentType: overrides.contentType || "application/json; charset=utf-8",
        success: successHandler,
        error: failureHandler
    })
}

BCHTIX.SpinnerOptions = function BCHTIX$Spinner$Options(overrides)
{
	overrides = overrides || {};
	
	var opts = 
	{
		  lines: 		overrides.lines || 13, 					// The number of lines to draw
		  length: 		overrides.length || 38, 				// The length of each line
		  width: 		overrides.width || 17, 					// The line thickness
		  radius: 		overrides.radius || 45, 				// The radius of the inner circle
		  scale: 		overrides.scale || 1, 					// Scales overall size of the spinner
		  corners: 		overrides.corners || 1, 				// Corner roundness (0..1)
		  color: 		overrides.color || '#ffffff', 			// CSS color or array of colors
		  fadeColor: 	overrides.fadeColor || 'transparent', 	// CSS color or array of colors
		  opacity: 		overrides.opacity || 0.25, 				// Opacity of the lines
		  rotate: 		overrides.rotate || 0, 					// The rotation offset
		  direction: 	overrides.direction || 1, 				// 1: clockwise, -1: counterclockwise
		  speed: 		overrides.speed || 1, 					// Rounds per second
		  trail: 		overrides.trail || 60, 					// Afterglow percentage
		  fps: 			overrides.fps || 20, 					// Frames per second when using setTimeout() as a fallback in IE 9
		  zIndex: 		overrides.zIndex || 2e9, 				// The z-index (defaults to 2000000000)
		  className: 	overrides.className || 'spinner', 		// The CSS class to assign to the spinner
		  top: 			overrides.top || '50%', 				// Top position relative to parent
		  left: 		overrides.left || '50%', 				// Left position relative to parent
		  shadow: 		overrides.shadow || none, 				// Box-shadow for the lines
		  position: 	overrides.position || 'absolute' 		// Element positioning
	};
	
	return opts;

}