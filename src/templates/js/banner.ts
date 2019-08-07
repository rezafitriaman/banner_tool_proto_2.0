// Type definitions for building ads with DoubleClick Studio HTML5 SDK.
// Project: https://www.doubleclickbygoogle.com/solutions/digital-marketing/creative-solutions/
// Definitions by: Jarkko Syrjälä <https://github.com/jarkkosyrjala>
// SDK javascript documentation https://www.google.com/doubleclick/studio/docs/sdk/html5/en/namespace_studio.html

declare module studio {
    export class Enabler {
        constructor(useSingletonGetter:number);
        static getInstance():studio.Enabler;

        /**
         * Adds an event listener to the event target. The same handler can only be added once per the type. Even if you add the same handler multiple times using the same type then it will only be called once when the event is dispatched.
         * @param type
         * @param eventHandler
         * @param opt_capture
         * @param opt_handlerScope
         */
        addEventListener(type:string, eventHandler:Function, opt_capture?:boolean, opt_handlerScope?:any);
        /**
         * Adds a new handler for an otherwise unknown message.
         * @param messageName
         * @param handler
         */
        addMessageHandler(messageName:string, handler:Function);
        /**
         * Calls the callback when the enabler is initialized or after.
         * @param callback
         */
        callAfterInitialized(callback:Function);
        /**
         * Closes floating and popup creative types. If it is an expanding creative, close acts as a proxy to collapse.
         */
        close();
        /**
         * Closes the companion asset for floating, reminder, and pop-up creative types.
         */
        closeCompanion();
        /**
         * @deprecated Use requestCollapse() instead.
         */
        collapse();
        /**
         * Tracks a counter event.
         * @param eventId
         * @param opt_isCumulative
         */
        counter(eventId:string, opt_isCumulative?:boolean);
        /**
         * Triggers the display of the companion asset for floating, reminder, and pop-up advert types.
         */
        displayCompanion();
        /**
         * Opens a new window with the URL as identified by the given exit ID.
         * @param id The exit ID.
         * @param opt_url The url to navigate to.
         */
        exit(id:string, opt_url?:string);
        /**
         * Opens a new window with the URL as identified by the given exit ID. This differs from normal exit() as the url value will always override the value modified in Studio or elsewhere.
         * @param id The exit ID.
         * @param url The url to navigate to regardless of what has been set in Studio.
         */
        exitOverride(id:String, url:string);
        /**
         * Opens a new window with the URL as identified by the given exit ID with an optional queryString appended.
         * @param id
         * @param opt_queryString
         */
        exitQueryString(id:string, opt_queryString?:string);
        /**
         * Clips the container of the html asset from the expanded dimensions to the collapsed dimensions. Please use event listeners to invoke the collapsed state of the ad as the collapse event may be dispatched by the environment independently of calling studio.Enabler#requestCollapse().
         */
        finishCollapse();
        /**
         * Finalizes the expand call via the rendering code.
         */
        finishExpand();
        /**
         * Finishes fullscreen collapse.
         */
        finishFullscreenCollapse();
        /**
         * Finishes fullscreen expand.
         */
        finishFullscreenExpand();
        /**
         * Returns the current state of the container.
         */
        getContainerState():studio.sdk.ContainerState;
        /**
         * Returns the DART ad ID.
         * @return Integer value of the ID number (generated by DART) that identifies the ad.
         */
        getDartAdId():number;
        /**
         * Returns the DART asset ID.
         */
        getDartAssetId():string;
        /**
         * Returns the DART creative ID.
         */
        getDartCreativeId():number;
        /**
         * Returns the DART page ID.
         */
        getDartPageId():number;
        /**
         * Returns the DART rendering ID.
         */
        getDartRenderingId():string;
        /**
         * Returns the DART site ID.
         */
        getDartSiteId():number;
        /**
         * Returns the DART site name.
         */
        getDartSiteName():string;
        /**
         * Returns the expand direction.
         */
        getExpandDirection():studio.common.mde.Direction;
        /**
         * @deprecated Use getUrl(filename). Returns the runtime file name given the original compile-time file name. The original file name may have been mapped to a newer file name.
         */
        getFilename(originalFilename):string;
        /**
         * Returns an object representing the orientation of the device.
         */
        getOrientation():studio.common.Orientation;
        /**
         * Retrieves a creative parameter that the user can pass via queryString URL. This is also used internally to access ad configuration data.
         * @param variableName
         */
        getParameter(variableName:string):any;
        /**
         * Retrieves a creative parameter as an integer.
         * @param name
         */
        getParameterAsInteger(name:string):number;
        /**
         * Retrieves a creative parameter as a nullable string.
         * @param name
         */
        getParameterAsNullableString(name:string):string;
        getProfileId():number;
        /**
         * Gets the runtime URL given the original compile-time filename.
         * @param filepath The original full path of the asset
         */
        getUrl(filepath:string):string;
        /**
         * Returns the user's bandwidth according to DART bandwidth codes.
         */
        getUserBandwidth():number;
        /**
         * Returns the two-letter string representation of the user's country.
         */
        getUserCountry():string;
        /**
         * Returns the DART representation of the user's Nielsen Designated Market Area.
         */
        getUserDMACode():number;
        /**
         * Returns the two-letter string representation of the user's state or province.
         */
        getUserState():string;
        /**
         * Returns the user's zip code (for users in the United States, U.S. territories, and Canada).
         */
        getUserZipCode():string;
        /**
         * Checks if a user has interacted with the document.
         */
        hasUserInteracted():boolean;
        /**
         * Invoke a function in the parent container. This could be the top frame if served via a adj (script) tag, the serving iframe if served via and adi (iframe) tag.
         * @param functionName
         */
        invokeExternalJsFunction(functionName:string);
        /**
         * Invoke a function on the mraid api. This is different from invokeExternalJsFunction as you are given the results of the function in a callback.
         * @param methodName
         * @param opt_args
         * @param opt_callback
         */
        invokeMraidMethod(methodName:String, opt_args?:any[], opt_callback?:Function);
        /**
         * Returns whether the Enabler is intialized.
         */
        isInitialized():boolean;
        /**
         * Returns whether the parent page has loaded. The iframe is notified when the page has loaded and dispatches the StudioEvent.PAGE_LOADED event.
         */
        isPageLoaded():boolean;
        /**
         * Returns whether the ad is serving in the live environment or not.
         */
        isServingInLiveEnvironment():boolean;
        /**
         * Returns whether the ad is visible. The iframe is notified when the ad is visible and the enabler dispatches the StudioEvent.VISIBLE event.
         */
        isVisible():boolean;
        /** Loads an additional module. */
        loadModule(moduleName:string, opt_loadedCallback:Function);

        /** Loads an additional script file.*/
        loadScript(scriptUrl:string, opt_loadedCallback:Function);

        /**
         *  Initiates a query for the maximum allowable fullscreen dimensions. A studio.event.StudioEvent.FULLSCREEN_DIMENSIONS event will be dispatched with the maximum allowed width and height as properties. Some publishers may pad the fullscreen window for a lightbox-like experience. Because of this the maximum allowable dimensions may not take up the entire browser window or screen.
         */
        queryFullscreenDimensions();
        /**
         * Initiates a query to find out whether mock fullscreen expansion mode is supported. Please listen for the studio.event.StudioEvent.FULLSCREEN_SUPPORT event. This event will contain the support status.
         */
        queryFullscreenSupport();
        /**
         * Provide a method that allows the creative to define a chargeable event.
         * @example Enabler.registerChargeableEventName("SWIPE");
         */
        registerChargeableEventName(eventName:string);
        /**
         * Removes an event listener from the event target. The handler must be the same object as the one added. If the handler has not been added then nothing is done.
         */
        removeEventListener(type:string, eventHandler:Function, opt_capture?:boolean, opt_handlerScope?:any);
        /**
         * Removes a new handler for an otherwise unknown message.
         */
        removeMessageHandler(messageName:string);
        /**
         * @deprecated Use studio.Enabler#reportCustomVariableCount1(custom).
         */
        reportCustomClickVariable(postString:string);
        /**
         * @deprecated Use studio.Enabler#reportCustomVariableCount1(custom).
         */
        reportCustomImpressionVariable(postString:string);
        /**
         * Counts instances of the string parameter, aggregated as Custom Variable Count 1 in reports. The string must meet the following criteria:
         */
        reportCustomVariableCount1(customString:string);
        /**
         * Counts instances of the string parameter, aggregated as Custom Variable Count 2 in reports. The string must meet the following criteria:
         */
        reportCustomVariableCount2(customString:string);

        /**
         * Records a manual closing of a floating, pop-up, expanding, in-page with pop-up, or in-page with floating ad.
         */
        reportManualClose();
        /**
         * Initiates the collapse lifecycle. This begins by calling requestCollapse(), waiting for the COLLAPSE_START event, animating your collapse, then calling finishCollapse() when the creative has fully collapsed. Please use event listeners to invoke the collapsed state of the ad as the collapse event may be dispatched by the environment independently of calling studio.Enabler#requestCollapse().
         */
        requestCollapse();
        /**
         * Initiates the expand lifecycle. This begins by calling requestExpand(), waiting for the EXPAND_START event, animating your expand, then calling finishExpand() when the creative has fully expanded. Please use event listeners to invoke the expanded state of the ad as the expand may be dispatched by the environment independently of calling studio.Enabler#requestExpand(). This is especially true on networks such as the Google Display Network that display a hover timer before allowing the ad to expand. Typical usage will look like:
         */
        requestExpand();
        /**
         * Requests fullscreen collapse. Please listen for the studio.event.StudioEvent.FULLSCREEN_COLLAPSE_START event to start collapse.
         */
        requestFullscreenCollapse();
        /**
         * Requests fullscreen expand. If width and height are provided, expands to a rectangle of that width and height centered in the middle of the display (or browser window, if the browser is not fullscreen). Otherwise expands to the full size of the browser window/display. Note that on mobile devices the browser window typically takes up the entire display.
         * @param opt_width Width we would like to expand to in pixels.
         * @param opt_height Height we would like to expand to in pixels.
         */
        requestFullscreenExpand(opt_width:number, opt_height:number);


        /**
         * Set the dynamic content development values.
         * @param value The Dynamic Content development values.
         */
        setDevDynamicContent(value:any);
        /**
         * Sets the pixel offsets for the collapsed portion of the ad. This does not affect the local testing environment but when the ad is live the collapsed portion will be shown at 0x0. This method works by setting the marginLeft and marginTop of the body element which is set to relative positioning.
         * @param left
         * @param top
         * @param opt_expandedWidth
         * @param opt_expandedHeight
         * @param opt_startExpanded
         * @param opt_isMultiDirectional
         */
        setExpandingPixelOffsets(left:number, top:number, opt_expandedWidth?:number, opt_expandedHeight?:number, opt_startExpanded?:boolean, opt_isMultiDirectional?:boolean);
        /**
         * Prepopulates the width and height of a floating or peeldown creative.
         * @param width
         * @param height
         */
        setFloatingPixelDimensions(width:number, height:number);
        /**Adds a Hint to this creative
         * @param name
         * @param value
         */
        setHint(name:studio.sdk.hint.Hint, value:string):studio.Enabler;

        /**
         * Sets the isMultiDirectional flag.
         * @param isMultiDirectional
         */
        setIsMultiDirectional(isMultiDirectional:boolean);
        /**
         * Set the dynamic creative profile id.
         * @param value
         */
        setProfileId(value:number);
        /**
         * Sets the startExpanded flag, which controls whether the asset starts in the expanded state or not. If true, then when the initial requestExpand call will not be tracked or logged and will not trigger an expansion timer.
         * @param startExpanded
         */
        setStartExpanded(startExpanded:boolean);
        /**
         * Sets useCustomClose. This is primarily of use in mobile environments using MRAID. When this flag is set, it means that the creative will provide its own close button, so MRAID doesn't have to provide one.
         * @param useCustomClose
         */
        setUseCustomClose(useCustomClose:boolean);
        /**
         * Starts an event timer.
         * @param timerId
         */
        startTimer(timerId:string);
        /**Stops an event timer.*/
        stopTimer(timerId:string);
    }
}
// COMMON
declare module studio.common.Orientation {
    export enum Mode { LANDSCAPE, PORTRAIT }
}

declare module studio.common {
    export class Orientation {
        constructor(mode:studio.common.Orientation.Mode, opt_degree?:number);     //
        //TODO studio.common.Orientation
        /**
         * Returns the degrees of orientation. This is not dependable to calculate whether the device is landscape or portrait as the base orientation varies per device, per OS. This should be used to distinguish rotation for games and such.
         */
        getDegrees():number;
        /**
         * Returns the orientation mode of the device or browser.
         */
        getMode():studio.common.Orientation.Mode;
    }
}
declare module studio.common.mde {
    export class Direction {
        // TODO studio.common.mde.Direction =  "tl" || "tr" || "bl" || "br";
    }
}
// EVENTS
declare module studio.events {
    export class StudioEvent {
        constructor(type:string);
        addProperty(key:number, value:any):studio.events.StudioEvent;
        static COLLAPSE:string;
        static COLLAPSE_FINISH:string;
        static COLLAPSE_START:string;
        static EXIT:string;
        static EXPAND_FINISH:string;
        static EXPAND_START:string;
        static FULLSCREEN_COLLAPSE_FINISH:string;
        static FULLSCREEN_COLLAPSE_START:string;
        static FULLSCREEN_DIMENSIONS:string;
        static FULLSCREEN_EXPAND_FINISH:string;
        static FULLSCREEN_EXPAND_START:string;
        static FULLSCREEN_SUPPORT:string;
        static HIDDEN:string;
        static INIT:string;
        static INTERACTION:string;
        static ORIENTATION:string;
        static PAGE_LOADED:string;
        static VISIBLE:string;
    }
}
// studio.module package
declare module studio.module {
    /**
     * The available modules to load.
     */
    export class ModuleId {
        static ENABLER:string;
        static CONFIGURABLE:string;
        static CONFIGURABLE_FILLER:string;
        static VIDEO:string;
        static LAYOUTS:string;
        static FILLER:string;
        static RAD_VIDEO:string;
    }
}

// studio.sdk package
declare module studio.sdk {
    /**
     * Enum representing the container possible states.
     */
    export class ContainerState {
        static COLLAPSED:string;
        static COLLAPSING:string;
        static EXPANDED:string;
        static EXPANDING:string;
        static FS_COLLAPSING:string;
        static FS_EXPANDING:string;
        static FS_EXPANDED:string;
    }
    export class MraidMethod {
        static GET_CURRENT_POSITION:string;
        static GET_DEFAULT_POSITION:string;
        static GET_RESIZE_PROPERTIES:string;
        static GET_SCREEN_SIZE:string;
        static SET_RESIZE_PROPERTIES:string;
        static SIZE_CHANGE:string;
        static CREATE_CALENDAR_EVENT:string;
        static GET_MAX_SIZE:string;
        static PLAY_VIDEO:string;
        static STORE_PICTURE:string;
        static SUPPORTS:string;
    }
    export class logger {
        // TODO
    }


}
// TODO studio.sdk.configurable package

declare module studio.sdk.hint {
    export class Hint {
        // TODO
        //Enum of hints to be parsed on upload of a creative.
        static EXPANSION_MODE:string;
        static EXPANSION_TRIGGER:string;
    }
}

// TODO  studio.sdk.layouts package
// TODO  studio.sdk.rad package

declare module studio.utils {
    /**
     * Util for getting the initialized enabler reference by callback.
     */
    export class EnablerAccessor {
        constructor();
        /**
         * Invokes the given callback when the Enabler is initialized. The enabler is passed to the callback as the first argument.
         * @param enablerInitializedCallback The callback to call when the enabler has been initialized.
         */
        getInitializedEnablerByCallback(enablerInitializedCallback:Function); //function(studio.Enabler)
        /**
         * Waits until the enabler is initialized, then loads the given module. When the module is loaded, invokes the callback, if any was provided.
         * @param moduleId The module to load.
         * @param opt_callback The callback to invoke when the module is loaded.
         */
        loadModuleWhenReady(moduleId:studio.module.ModuleId, opt_callback?:Function);
    }
}

declare module studio.video {
    /**
     * Video reporting class to observe a video element.
     */
    export class Reporter {
        constructor(videoElement:HTMLVideoElement);
        // Static Methods
        /**
         * Observes a video element for reporting.
         * @param videoReportingIdentifier
         * @param videoElement
         * @param opt_trackAsAutoPlay
         */
        static attach(videoReportingIdentifier:string, videoElement:HTMLVideoElement, opt_trackAsAutoPlay?:boolean);

        /**
         * Stops a video reporting identifier from reporting.
         * @param videoReportingIdentifier
         */
        static detach(videoReportingIdentifier:string);
    }
}

/**
 * Enabler instance, an alias for studio.Enabler.getInstance()
 */
declare var Enabler:studio.Enabler;

declare var dynamicContent:any;

/*-----------------------------start test------------------------------------*/
export function test() {

	/*-----------------------------------------------------------------*/
	class BaseBanner {
	    main: NodeList;
	    name: string;
	    constructor(theName: string) { 
	    	this.main = document.querySelectorAll('.main'); 

	    	this.name = theName;
	    }
	    bannerWidth(size: string) {
	    	
	    	let main = this.main;
	    	let sizeContent = '.content-' + size;
	    	let width;

	    	for (let i = main.length - 1; i >= 0; i--) {
	    		let target:NodeList = (<HTMLElement>main[i]).querySelectorAll(sizeContent);
	    		if(target.length > 0) {
		    		width = (<HTMLElement>target[0]).offsetWidth;
	    		}
	    	}
	    	return width;
	    }
	    bannerHeight(size: string) {
	    	
	    	let main = this.main;
	    	let sizeContent = '.content-' + size;
	    	let height;

	    	for (let i = main.length - 1; i >= 0; i--) {
	    		let target:NodeList = (<HTMLElement>main[i]).querySelectorAll(sizeContent);
	    		if(target.length > 0) {
		    		height = (<HTMLElement>target[0]).offsetHeight;
	    		}
	    	}
	    	return height;
	    }
	    init() {
	    	window.onload = function() {
				if (Enabler.isInitialized()) {
					enablerInitHandler();
				} else {
					Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
				}
			}

			function enablerInitHandler() {
			  // Start polite loading, or start animation,
			  // load in your image assets, call Enabler methods,
			  // and/or include other Studio modules.
			  if (Enabler.isPageLoaded()) {
			    showAd();
			  } else {
			    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
			  }
			}

			function showAd() {
				/*This code checks if the page is loaded using the Enabler’s isPageLoaded method, which returns true or false.
				If true, call a custom function that loads your creative (in this example, the custom function is called showAd).
				If false, listen for the Enabler’s PAGE_LOADED event before calling showAd.*/

				// Dynamic Content variables and sample values
				var development = (window.location.href.indexOf('3000') != -1 || window.location.href.indexOf('3002') != -1 || window.location.href.indexOf('3003') != -1 || window.location.href.indexOf('3004') != -1) ? true : false;

				adds(development);
			}

	    }
	    move(distanceInMeters: number = 0) {
	        console.log(`${this.name} moved ${distanceInMeters}m.`);
	    }
	}






	class Banner extends BaseBanner {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 5) {
	        console.log("Slithering...");
	        super.move(distanceInMeters);
	        console.log(super.bannerWidth('300x250'))
	        console.log(super.bannerHeight('300x250'))
	    }

	}

	class Horse extends BaseBanner {
	    constructor(name: string) { super(name); }
	    move(distanceInMeters = 45) {
	        console.log("Galloping...");
	        super.move(distanceInMeters);
	    }
	}

	let rec300x250: BaseBanner = new Banner("300x250");
	let tom: BaseBanner = new Horse("Tommy the Palomino");

	rec300x250.move();
	tom.move(34);

	/*-----------------------------------------------------------------*/

    /*---------------------------start origin--------------------------------------*/
	let creative = {};
	let bannerWidth;
	let bannerHeight;
	var run = 1;

	// If true, start function. If false, listen for INIT.
	window.onload = function() {

		if (Enabler.isInitialized()) {
			enablerInitHandler();
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
		}
	};

	function enablerInitHandler() {
	  // Start polite loading, or start animation,
	  // load in your image assets, call Enabler methods,
	  // and/or include other Studio modules.

	  setupDom();

	  if (Enabler.isPageLoaded()) {
	    politeInit();
	  } else {
	    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
	  }
	}

	// Runs when the page is completely loaded.
	function politeInit(){
		/*console.log('polite init')*/
		showAd();
		// Add your code to hide any loading image or animation and load creative
		// assets or begin creative animation.
	};

	function showAd() {
		/*This code checks if the page is loaded using the Enabler’s isPageLoaded method, which returns true or false.
		If true, call a custom function that loads your creative (in this example, the custom function is called showAd).
		If false, listen for the Enabler’s PAGE_LOADED event before calling showAd.*/

		// Dynamic Content variables and sample values
		var development = (window.location.href.indexOf('3000') != -1 || window.location.href.indexOf('3002') != -1 || window.location.href.indexOf('3003') != -1 || window.location.href.indexOf('3004') != -1) ? true : false;

		adds(development);
	}
	 
	function adds(development) {

		if(development == true) {
			window.envi = 'dev';
			var devDynamicContent:any = {};

			devDynamicContent.NS_BC_TOUCH_AND_TELL = [{}];
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0]._id = 0;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Unique_ID = 1;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Reporting_Label = "touch1";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Start_Date = {};
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Start_Date.RawValue = "1/1/2019";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Start_Date.UtcValue = 1546329600000;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].End_Date = {};
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].End_Date.RawValue = "12/31/2019";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].End_Date.UtcValue = 1577779200000;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Active = true;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Default = true;
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Title1 = "Elke dag|is anders";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Title2 = "De zakelijke|kaart voor|al het OV";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Title3 = "Gratis|NS-Business Card";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Title_Color = "#ffffff";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Subtitle = "Ideaal voor ZZP'ers";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Subtitle_Color = "#ffffff";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].CTA_Text = "Ontdek meer";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].CTA_Text_Color = "#003083";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Background_image1 = {};
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Background_image1.Type = "file";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Background_image1.Url = "https://s0.2mdn.net/ads/richmedia/studio/60007963/60007963_20190517015937455_ns-zakelijk1.jpg";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].CTA_Background_Color = "#ffc917";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Background_Color = "#003083";
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Exit_URL = {};
			devDynamicContent.NS_BC_TOUCH_AND_TELL[0].Exit_URL.Url = "https://www.ns.nl/zakelijk/ns-business-card";
			
			Enabler.setDevDynamicContent(devDynamicContent);

		    startAds(devDynamicContent.NS_BC_TOUCH_AND_TELL[0]);

		    creative.body.style.backgroundColor = '#1e272e';


		}else {
			window.envi = 'live';
			startAds(dynamicContent.NS_BC_TOUCH_AND_TELL[0]);
		}

	}

	/*custom dom elements*/
	function setupDom() {
		creative.dom = {};
		//spinner and banner content STANDARD!
		creative.dom.spinner = document.querySelector('#spinner');
		creative.dom.banner = document.querySelector('#content');
		creative.dombuttonHelper = document.getElementById('buttons-helper');
		creative.body = document.body;

		bannerWidth = creative.dom.banner.offsetWidth;
		bannerHeight = creative.dom.banner.offsetHeight;

	}

	function show() {
		creative.dom.banner.style.display = 'block';
	/*	creative.dom.spinner.style.display = 'none';*/
	}

	/*
	==========================
	start everything 
	==========================
	*/
	function startAds(prefix) {
		/*
		==========================
		set the prefix to the window 
		==========================
		*/
		window.prefix = prefix;

		show();
		
		setupDynamicContent();
		animate();
	}

	function animate() {
	    let content = document.getElementById('content');
	    let firstSlide = document.querySelector('#txtA').querySelectorAll('.text-stagger');
	    let secondSlide = document.querySelector('#txtB').querySelectorAll('.text-stagger');
	    let lastSlide = document.querySelector('#txtC').querySelectorAll('.text-stagger');
	    
	    const MAX_RUNS = 1;

	    TweenMax.fromTo(document.querySelector('#imgA'), 10, {scale:1, x:0, y:0}, {scale: 1, ease: Quint.easeOut});
	    TweenMax.fromTo(document.querySelector('#imgB'), 10, {scale:1, x:0, y:0}, {scale: 1, delay: 1, ease: Quint.easeOut});

	    let tl = new TimelineLite({align:"normal", delay: 0})

	    .to(document.querySelector('#curve'), 0, {autoAlpha:1, delay:0.2 })
	    .to(document.querySelector('#imgA'), 2, {autoAlpha:0, ease: Expo.easeInOut}, "+=0")

	    // TXT
	    //loop slide one
		for (var i = 0; i < firstSlide.length; i++) {

			tl
			.to(firstSlide[i].children, 0.5, {autoAlpha:0, ease: Expo.easeInOut}, 1,5)
		}

		tl
	    .to(document.querySelector('#gradient'), 2, {x: document.querySelector('#gradient').offsetWidth, ease: Expo.easeInOut}, "-=1.5")

	    for (var i = 0; i < secondSlide.length; i++) {
				tl
				.staggerTo(secondSlide[i].children, 2, {autoAlpha: 1 , ease: Expo.easeInOut}, 0.1, 1.2)
			}
		tl
	    .fromTo(document.querySelector("#end"), 3, {
	            attr: {
	                "offset": "0%"
	            },
	        }, {
	            attr: {
	                "offset": "100%"
	            },
	        }
	    )
	    .fromTo(document.querySelector("#third"), 3, {
	            attr: {
	                "offset": "0%"
	            },
	        }, {
	            attr: {
	                "offset": "100%"
	            },
	        }, "-=2"
	    )
	    .fromTo(document.querySelector("#sec"), 3, {
	            attr: {
	                "offset": "0%"
	            },
	        }, {
	            attr: {
	                "offset": "100%"
	            },
	        }, "-=2"
	    )
	    .fromTo(document.querySelector("#begin"), 3, {
	            attr: {
	                "offset": "0%"
	            },
	        }, {
	            attr: {
	                "offset": "100%"
	            },
	        }, "-=2"
	    )	
	    .to(document.querySelector('#txtB'), 1, {autoAlpha:0, ease: Expo.easeInOut}, "-=4")

	    // loop last slide
		for (var i = 0; i < lastSlide.length; i++) {

			tl
			.staggerTo(lastSlide[i].children, 1.0, {autoAlpha: 1, ease: Quint.easeInOut}, 0.1, 6.5)
		}

		tl
	    .to(document.querySelector('#txtD'), 1, {autoAlpha:1, ease: Quint.easeInOut}, "-=4")

	    // BTN
	    .fromTo(document.querySelector('#btn'),0.5, {y: "+=10", autoAlpha:0}, {y: 0, autoAlpha:1, onComplete: function() {
	        if (run < MAX_RUNS) {
	            run++;

	            tl.to(document.querySelector('#btn'),0.4, {scaleX:1.1, scaleY:1.1, repeat: 2, yoyo: true, force3D: false, rotation: .01})
	            tl.to(document.querySelector('#btn'),0.4, {scaleX:1, scaleY:1, onComplete: function() {
	                    
	                var tlRew = new TimelineLite({align:"normal", delay: 1, onComplete: function() {
	                    animate();
	                }});

	                tlRew.to(document.querySelector('#content'), 0.5, {autoAlpha:0})

	                .to(document.querySelector('#imgA'), 0, {autoAlpha:1, scale:1, x:0, y:0, ease: Expo.easeOut})
	                .to(document.querySelector('#imgB'), 0, {autoAlpha:1, scale:1, x:0, y:0, ease: Expo.easeOut})
	                .to(document.querySelector('#txtA'), 0, {autoAlpha:1, ease: Expo.easeInOut})
	                .to([document.querySelector('#btn'), document.querySelector('#txtD'), document.querySelector('#txtC'), document.querySelector('#txtB')], 0, {autoAlpha:0, ease: Expo.easeInOut})
	                .to(document.querySelector('#content'), 0.5, {autoAlpha:1}, "+=0.1");
	                
	            }});
	        } else {
	            TweenMax.to(document.querySelector('#btn'),0.4, {scaleX:1.1, scaleY:1.1, repeat: 3, yoyo: true});
	        }
	    }, ease: Sine.easeIn }, "-=3");

		content.addEventListener("mouseenter", function() {

		    TweenMax.to(document.querySelector('#btn'),0.4, {scale:1.2, ease: Bounce.easeOut});
		});

		content.addEventListener("mouseleave", function() {
		    TweenMax.to(document.querySelector('#btn'),0.4, {scale:1, ease: Bounce.easeOut})
		});

	}

	function appendRowsforTitle(rowChar, containerElm) {
		for (var i = 0; i < rowChar.length; i++) {
			var li = document.createElement("li");
			var node;
			if(rowChar[i] == ' ') {
				li.innerHTML = '&nbsp;';
				//if is IE dont append style wordSpacing
				if(isIE()) {
					li.style.letterSpacing = '0px';
				}else if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
					li.style.letterSpacing = '0px';
				}else {
					li.style.letterSpacing = '-10px';
				}
				
			}else {
				node = document.createTextNode(rowChar[i]);
				li.appendChild(node);
			}

			containerElm.appendChild(li);
		}
	}

	function setupDynamicContent() {

		setTitle1();
		setTitle2();
		setTitle3();
		setSubtitle();
		setCTA();

		setBackgroundImg();
		setExitUrl();
	}

	/*
	==========================
	setTitle1
	==========================
	*/
	function setTitle1() {

		let title1Str = prefix.Title1.split('|');
		let title1ContainerElm = document.querySelector('.first-container');
		let bannerCat = detectBannerSize();

		//loop trough text and make it a row
		for (let i = 0; i < title1Str.length; i++) {
			let rowsText = title1Str[i].split(''); 

			let ul = document.createElement('ul');
			ul.setAttribute('class', 'text-stagger')
			title1ContainerElm.appendChild(ul);

			appendRowsforTitle(rowsText, ul);
		}

		//set color
		title1ContainerElm.style.color = prefix.Title_Color;

	}
	/*
	==========================
	setTitle2
	==========================
	*/
	function setTitle2() {
		let title2Str = prefix.Title2.split('|');
		let title2ContainerElm = document.querySelector('.second-container');
		//loop trough text and make it a row
		for (let i = 0; i < title2Str.length; i++) {
			let rowsText = title2Str[i].split(''); 

			let ul = document.createElement('ul');
			ul.setAttribute('class', 'text-stagger')
			title2ContainerElm.appendChild(ul);

			appendRowsforTitle(rowsText, ul);
		}

		//set color
		title2ContainerElm.style.color = prefix.Title_Color;
	}

	/*
	==========================
	setTitle3
	==========================
	*/

	function setTitle3() {
		let title3Str = prefix.Title3.split('|');
		let parent = document.querySelector("#p3");
		let text = parent.querySelector('.title-wrapper');
		let title3ContainerElm = parent.querySelector('.first-container');

		if(title3Str.length < 2) {

			for (var i = 0; i < title3Str.length; i++) {
				let rowText = title3Str[i].split('');

				let ul = document.createElement('ul');
				ul.setAttribute('class', 'text-stagger');
				title3ContainerElm.appendChild(ul);

				appendRowsforTitle(rowText, ul);
			}

		}else {

			for (var i = 0; i < title3Str.length; i++) {
				let rowText = title3Str[i].split('');

				let ul = document.createElement('ul');
				ul.setAttribute('class', 'text-stagger');
				title3ContainerElm.appendChild(ul);

				appendRowsforTitle(rowText, ul);

			}
			//exception when title has one row css
			parent.querySelector('.sub-text').style.paddingTop = '32px';

		}
		//set color
		title3ContainerElm.style.color = prefix.Title_Color;

		//set color
		title3ContainerElm.style.color = prefix.Title_Color;

		//dynamic font size
		dynamicFontsize(text, parent);
	}

	function setSubtitle() {
		let subtitleContainerElm = document.querySelector('.sub-text');

		let subtitleStr = prefix.Subtitle.split('|');

		for (var i = 0; i < subtitleStr.length; i++) {
			let span = document.createElement('span');
			let node = document.createTextNode(subtitleStr[i]);
			span.appendChild(node);

			subtitleContainerElm.appendChild(span);
		}

		//set color
		subtitleContainerElm.style.color = prefix.Subtitle_Color;
	}

	function setCTA() {
		let ctaContainerElm = document.querySelector('.button');
		let ctaStr = prefix.CTA_Text;
		let span = document.createElement('span');
		let node = document.createTextNode(ctaStr);

		span.appendChild(node);

		ctaContainerElm.appendChild(span);

		//set color
		ctaContainerElm.style.color = prefix.CTA_Text_Color;

		//set backgroundColor
		ctaContainerElm.style.backgroundColor = prefix.CTA_Background_Color;

		
	}

	function setBackgroundImg() {
		let imageStr = prefix.Background_image1.Url;
		let backgroundElmB = document.querySelector('#imgB');
		let backgroundElmA = document.querySelector('#imgA');

		backgroundElmB.style.backgroundImage = "url(" + imageStr + ")";
		backgroundElmA.style.backgroundImage = "url(" + imageStr + ")";
	}


	function setExitUrl() {
		let exitUrl = prefix.Exit_URL.Url;
		creative.dom.banner.addEventListener('click', function(){
		    Enabler.exitOverride('Exit', exitUrl);
		});
	}

	function setupButtonTimeline(tlmain) {
		/*
		==========================
		setupButtonTimeline
		==========================
		*/
		let buttons = document.getElementsByTagName('button');
		let buttonPause = document.getElementById('pause');
		let buttonResume = document.getElementById('resume');
		let buttonReverse = document.getElementById('reverse');
		let buttonSpeedUp = document.getElementById('speedUp');
		let buttonSlowDown = document.getElementById('slowDown');
		let buttonRestart = document.getElementById('restart');
		let buttonResetSpeed = document.getElementById('reset-speed');

		let tlbutton = new TimelineMax();

		tlbutton.staggerTo(buttons, 0.2, {x:-200, autoAlpha:1, ease:Power1.easeOut}, 0.1);

		buttonPause.addEventListener('click', function(e) {

			if(tlmain._paused == true) {
				e.target.innerHTML = 'pause'
				tlmain.resume();

			}else {
				e.target.innerHTML = 'resume'
				tlmain.pause();

			}
		});

		buttonReverse.addEventListener('click', function(e) {

			if(tlmain._reversed == true) {
				console.log('play');
				console.log(e.target.innerHTML = 'reverse')
				tlmain.play()
			}else {
				console.log('reverse');
				console.log(tlmain)
				console.log(e.target.innerHTML = 'play')
				tlmain.reverse()
			}
		});

		buttonSpeedUp.addEventListener('click', function() {
		
			var timeScale = tlmain._timeScale * 2;
			console.log('speed up ' + timeScale);
			tlmain.timeScale(timeScale);
		});

		buttonSlowDown.addEventListener('click', function() {
		
			var timeScale = tlmain._timeScale / 2;
			console.log('slow down ' + timeScale);
			tlmain.timeScale(timeScale);
		});

		buttonRestart.addEventListener('click', function() {
			console.log('restart');
			tlmain.restart()
		});

		buttonResetSpeed.addEventListener('click', function() {
			console.log('reset speed');
			tlmain.timeScale(1)
		});
	}

	function dynamicFontsize(target, parentContainer) {
		/*
		==========================
		dynamicFontsize
		==========================
		*/
		while(target.offsetWidth > parentContainer.offsetWidth) {

		target.style.fontSize = (parseInt(window.getComputedStyle(target, null).getPropertyValue("font-size")) -1) + 'px';

		}  
	}

	function detectBannerSize() {

		if(bannerWidth == 300 && bannerHeight == 250 ) {
			return 'rec'
		}else {
			return 'other banner'

		}
	}

	 function isIE() {
	    var myNav = navigator.userAgent.toLowerCase();
	    return (myNav.indexOf('msie') != -1 || myNav.indexOf('trident') != -1) ? true : false;
	}



}