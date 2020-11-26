Ext.data.JsonP.App({"tagname":"class","name":"App","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"static":true},"private":null,"id":"static-class-App","members":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":7,"files":[{"filename":"utilities.js","href":"utilities.html#App"}],"html_meta":{"static":null},"statics":{"cfg":[],"property":[{"name":"MAX_FPS","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-MAX_FPS"},{"name":"MIN_FPS","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-MIN_FPS"},{"name":"debugMode","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-debugMode"},{"name":"isSomethingBeingDragged","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-isSomethingBeingDragged"},{"name":"physicsDelta","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-physicsDelta"},{"name":"physicsTimeElapsed","tagname":"property","owner":"App","meta":{"static":true},"id":"static-property-physicsTimeElapsed"}],"method":[{"name":"gameOver","tagname":"method","owner":"App","meta":{"static":true},"id":"static-method-gameOver"},{"name":"isHovered","tagname":"method","owner":"App","meta":{"static":true},"id":"static-method-isHovered"},{"name":"preventDefaultKeyEvents","tagname":"method","owner":"App","meta":{"static":true},"id":"static-method-preventDefaultKeyEvents"},{"name":"setDefaultCanvasSize","tagname":"method","owner":"App","meta":{"static":true},"id":"static-method-setDefaultCanvasSize"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/utilities.html#App' target='_blank'>utilities.js</a></div></pre><div class='doc-contents'><p>The App object holds all the miscellaneous things that don't deserve to be\nglobal.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-MAX_FPS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-MAX_FPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-MAX_FPS' class='name expandable'>MAX_FPS</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The maximum number of physics updates each second. ...</div><div class='long'><p>The maximum number of physics updates each second.</p>\n\n<p>This determines the discrete time-step for physics updates. If the rendering\nframe rate is faster than the resulting time-step, physics changes are not\nupdated every frame.</p>\n\n<p>Higher values cause physics to be updated more times per frame. This\nincreases simulation accuracy, but each physics update takes some time to\ncalculate that is not necessarily proportional to the amount of time being\nsimulated, so ironically having a higher MAX_FPS can actually increase the\ntime required to simulate physics and thereby slow down the frame rate. The\nrecommended value is somewhere between 60 and 100, though if your updates\nare particularly computationally intensive and your simulation can handle\nlarger time steps, you might consider going as low as 30. Most monitors are\ncapped at 60.</p>\n</div></div></div><div id='static-property-MIN_FPS' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-MIN_FPS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-MIN_FPS' class='name expandable'>MIN_FPS</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The minimum number of physics updates each second. ...</div><div class='long'><p>The minimum number of physics updates each second.</p>\n\n<p>If the frame rate goes below this value, the app will appear to slow down;\nless simulated time will be processed per unit of actual time. Specifically,\nthe simulator will never simulate more than <code>1 / App.MIN_FPS</code> seconds of\nphysics during each physics step, even if the time between calculating\nphysics steps is longer than that.</p>\n\n<p>Setting this to zero is allowed, but risks entering a \"spiral of death\"\nwhere the system attempts to calculate more and more simulated physics time\neach frame, which takes longer and longer, which means more simulation must\nbe run...</p>\n\n<p>If the frame rate goes below this value, a\n<a href=\"#!/api/global-event-low_fps\" rel=\"global-event-low_fps\" class=\"docClass\">low_fps</a> event fires, which you can use to\nreduce display quality in order to improve performance.</p>\n</div></div></div><div id='static-property-debugMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-debugMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-debugMode' class='name expandable'>debugMode</a><span> : Boolean</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Whether Debug Mode is on or off (shows or hides debugging information). ...</div><div class='long'><p>Whether Debug Mode is on or off (shows or hides debugging information).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='static-property-isSomethingBeingDragged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-isSomethingBeingDragged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-isSomethingBeingDragged' class='name expandable'>isSomethingBeingDragged</a><span> : Boolean</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Whether an Actor is being dragged. ...</div><div class='long'><p>Whether an <a href=\"#!/api/Actor\" rel=\"Actor\" class=\"docClass\">Actor</a> is being dragged.</p>\n\n<p>Drop targets can change how they look when a draggable object is hovered\nover them by testing <code>this.isHovered() &amp;&amp; <a href=\"#!/api/App-static-property-isSomethingBeingDragged\" rel=\"App-static-property-isSomethingBeingDragged\" class=\"docClass\">App.isSomethingBeingDragged</a></code> in\ntheir <a href=\"#!/api/Box-method-draw\" rel=\"Box-method-draw\" class=\"docClass\">draw()</a> methods.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='static-property-physicsDelta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-physicsDelta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-physicsDelta' class='name expandable'>physicsDelta</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The amount of simulated time in seconds since the last physics update. ...</div><div class='long'><p>The amount of simulated time in seconds since the last physics update.</p>\n\n<p>Use this to smooth animation.</p>\n</div></div></div><div id='static-property-physicsTimeElapsed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-property-physicsTimeElapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-property-physicsTimeElapsed' class='name expandable'>physicsTimeElapsed</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>The total amount of time simulated, in seconds. ...</div><div class='long'><p>The total amount of time simulated, in seconds.</p>\n\n<p>This is the amount of time for which physics has been calculated. Physics\nupdates in discrete chunks of time that are not necessarily synced with the\nrendering speed, so this is potentially different than the amount of time\nelapsed since animation started as well as potentially different than the\namount of time between when animation started and when the current frame was\nrequested.</p>\n\n<p>This is useful for time-based motion like a wave or spring.</p>\n\n<p><code><a href=\"#!/api/App-static-property-physicsTimeElapsed\" rel=\"App-static-property-physicsTimeElapsed\" class=\"docClass\">App.physicsTimeElapsed</a></code> is a useful alternative to <code>performance.now()</code> when\nattempting to measure only time elapsed while animation is running. See also\n<a href=\"#!/api/Timer\" rel=\"Timer\" class=\"docClass\">Timer</a>.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-gameOver' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-method-gameOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-method-gameOver' class='name expandable'>gameOver</a>( <span class='pre'></span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Ends the game, displays \"GAME OVER,\" and allows clicking to restart. ...</div><div class='long'><p>Ends the game, displays \"GAME OVER,\" and allows clicking to restart.</p>\n\n<p>To disable clicking to restart, run <code>$canvas.off('.gameover');</code></p>\n</div></div></div><div id='static-method-isHovered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-method-isHovered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-method-isHovered' class='name expandable'>isHovered</a>( <span class='pre'>obj</span> ) : Boolean<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Determines whether the mouse is hovering over an object. ...</div><div class='long'><p>Determines whether the mouse is hovering over an object.</p>\n\n<p>The object in question must have these properties: <code>x</code>, <code>y</code>, <code>width</code>,\n<code>height</code>. (All <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a>es have these properties.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Box\" rel=\"Box\" class=\"docClass\">Box</a><div class='sub-desc'><p>The object to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the mouse is hovering over the object.</p>\n</div></li></ul></div></div></div><div id='static-method-preventDefaultKeyEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-method-preventDefaultKeyEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-method-preventDefaultKeyEvents' class='name expandable'>preventDefaultKeyEvents</a>( <span class='pre'>combinations</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Prevent the default behavior from occurring when hitting keys. ...</div><div class='long'><p>Prevent the default behavior from occurring when hitting keys.</p>\n\n<p>This won't prevent everything -- for example it won't prevent combinations\nof multiple non-control-character keys -- and if you want to do something\nlike prevent the default effect of hitting Enter but not Shift+Enter then\nyou need to handle that yourself.</p>\n\n<p>Behavior of the keys specified in the <code>keys</code> variable are automatically\nprevented by default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>combinations</span> : String<div class='sub-desc'><p>A string containing key combinations to prevent. See\n  <a href=\"#!/api/jQuery.hotkeys\" rel=\"jQuery.hotkeys\" class=\"docClass\">jQuery.hotkeys</a> for an explanation of what key combinations are\n  acceptable.</p>\n</div></li></ul></div></div></div><div id='static-method-setDefaultCanvasSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='App'>App</span><br/><a href='source/utilities.html#App-static-method-setDefaultCanvasSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/App-static-method-setDefaultCanvasSize' class='name expandable'>setDefaultCanvasSize</a>( <span class='pre'></span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Sets the default size of the canvas as early as possible. ...</div><div class='long'><p>Sets the default size of the canvas as early as possible.</p>\n\n<p>The canvas is resized according to the following rules, in order of\nprecedence:</p>\n\n<ul>\n<li>The browser will first automatically set the canvas to the size specified\nby its <code>width</code> and <code>height</code> attributes. If the canvas element has a\n<code>data-resize</code> attribute set to <code>false</code>, processing stops here and no more\nresizing rules are applied.</li>\n<li>If the canvas element has a <code>data-resize</code> attribute set to <code>full</code>, it will\nbe resized to the maximum size that fits within the browser window.</li>\n<li>If the canvas element has <code>data-minwidth</code> or <code>data-minheight</code> attributes\n(with numeric values in pixels) it will not be scaled smaller than those\ndimensions.</li>\n<li>If the canvas element has <code>data-maxwidth</code> or <code>data-maxheight</code> attributes\n(with numeric values in pixels) it will not be scaled larger than those\ndimensions.</li>\n<li>The canvas will scale to the largest size that fits within both the window\nand the max attributes (if they are present).</li>\n<li>In all cases except when <code>data-resize=\"false\"</code>, the <code>data-aspectratio</code>\nattribute takes effect if present. This causes the canvas to resize to the\nlargest possible size within the boundaries of the size calculated from\nthe other rules, while still maintaining the specified aspect ratio. The\nvalue of this attribute can be any floating point number or one of the\ncommon ratios \"4:3\", \"16:9\", \"16:10\", or \"8:5\". For example, with an\naspect ratio of 4:3, if the width was calculated to be 1024 and the height\nwas calculated to be 800, the height would be adjusted to 768.</li>\n</ul>\n\n\n<p>Note that using CSS to resize the canvas causes it to scale the graphics as\nwell; it changes the size of each virtual \"pixel\" on the canvas rather than\nchanging the number of pixels inside the canvas. Unless you want to stretch\nthe canvas display, using CSS to resize the canvas is not recommended.</p>\n</div></div></div></div></div></div></div>"});