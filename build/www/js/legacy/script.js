// this code is jank
// now i understand why everyone calls me a skid  ~ itzcrazyscout

("use strict");
var admin = false;
var espeaktts = true;
var shiftenter = false;
var safeMode = false;
var allowCrossColors = false;
var warnedUserAboutUGC = false;
var dontUseMyLocation = false;
var enable_skid_protect = true;
var LoggedIn = false;
var Room_ID = "";
var Bonzi_Name = "";
var Bonzi_Status = "";

function updateAds() {
    var a = $(window).height() - $(adElement).height(),
        b = a <= 250;
    b && (a = $(window).height()), $(adElement)[b ? "hide" : "show"](), $("#content").height(a);
}

function dragMoveListener(t) {
    var e = t.target,
        a = (parseFloat(e.getAttribute("data-x")) || 0) + t.dx,
        r = (parseFloat(e.getAttribute("data-y")) || 0) + t.dy;
    (e.style.webkitTransform = e.style.transform = "translate(" + a + "px, " + r + "px)"), e.setAttribute("data-x", a), e.setAttribute("data-y", r);
}
// bonziworld remote control server console (not used anymore)
// fuckune is using old ass features from 2019 as way to show fake news (eg. BWR HAS MALWOER AND HE WIL RCE UUUU!!!), still failing to admit that you're kangei, fuckune?
// also bonzi.lol is skidded too

/*
// for those people who were sus:
// this was used to execute server side code, but was a security risk and ultimately result in the HTML pages being modified by an attacker, so we don't use this anymore
interact(".win2000_base").draggable({ onmove: window.dragMoveListener }), (window.dragMoveListener = dragMoveListener);

function execute() {
  $("#evaljs_console").append("\n> " + $("#evaljs_codebox").val()), bonzisocket.sendToServer("evaljs", { input: $("#evaljs_codebox").val() });
}
function close_evaljs() {
  k
  $("#evaljs").css("display", "none");
}
*/

// bwe clicking code
$(document).mouseup(function() {
    // play click sound
    var click_sfx = new Audio("./sfx/click.mp3");
    try {
        $(this).after(click_sfx.play());
    } catch (e) {}
});

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function range(a, b) {
    for (var c = [], d = a; d <= b; d++) c.push(d);
    for (var d = a; d >= b; d--) c.push(d);
    return c;
}

function replaceAll(a, b, c) {
    return a.replace(new RegExp(b, "g"), c);
}

function s4() {
    return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
}

function youtubeParser(url) {
	// added support for yt shorts
    // added support for playlists
    var match = url.match(/^.*((youtube|youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(shorts\/)|(playlist\?list=)|(watch\?v=))([^#\&\?]*).*/);
    return !(!match || 11 != match[9].length) && match[9] || !(!match || 34 != match[9].length) && "playlist?list="+match[9];
}

function rtimeOut(a, b) {
    var c,
        d = Date.now,
        e = window.requestAnimationFrame,
        f = d(),
        g = function() {
            d() - f < b ? c || e(g) : a();
        };
    return (
        e(g), {
            clear: function() {
                c = 1;
            },
        }
    );
}

function rInterval(a, b) {
    var c,
        d = Date.now,
        e = window.requestAnimationFrame,
        f = d(),
        g = function() {
            d() - f < b || ((f += b), a()), c || e(g);
        };
    return (
        e(g), {
            clear: function() {
                c = 1;
            },
        }
    );
}

function linkify(text) {
  return text/*.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi, "<a href='$1' target='_blank'>$1</a>")*/;
}

function loadBonzis(a) {
    loadQueue.loadManifest([
            { id: "bonziBlack", src: "./img/agents/black.png" },
			{ id: "bonziBlue", src: "./img/agents/blue.png" },
			{ id: "bonziBrown", src: "./img/agents/brown.png" },
			{ id: "bonziGreen", src: "./img/agents/green.png" },
			{ id: "bonziPurple", src: "./img/agents/purple.png" },
			{ id: "bonziRed", src: "./img/agents/red.png" },
			{ id: "bonziPink", src: "./img/agents/pink.png" },
			{ id: "topjej", src: "./img/misc/topjej.png" },
        ]),
        loadQueue.on(
            "fileload",
            function(a) {
                loadDone.push(a.item.id);
            },
            this
        ),
        a && loadQueue.on("complete", a, this);
}

function loadTest() {
    var loadingCursor = [
        "./img/cursors/hourglas.gif",
        "./img/cursors/hourgla2.gif",
        "./img/cursors/hourgla3.gif",
        "./img/cursors/barber.gif",
        "./img/cursors/horse.gif",
        "./img/cursors/wagtail.gif",
        "./img/cursors/drum.gif",
        "./img/cursors/dinosaur.gif",
        "./img/cursors/dinosau2.gif",
        "./img/cursors/banana.gif",
        "./img/cursors/metronom.gif",
        "./img/cursors/piano.gif",
        "./img/cursors/handwait.gif",
        "./img/cursors/stopwtch.gif",
    ]
    $("#login_card").hide(),
        $("#login_error").hide(),
        $("#login_load").show(),
        (document.getElementById("page_login").style.cursor = "wait"),
        (window.loadTestInterval = rInterval(function() {
            try {
                if (!loadDone.equals(loadNeeded)) throw "Not done loading.";
                /*login(), */
                loadTestInterval.clear();
            } catch (a) {}
        }, 100));
    (document.getElementById("loading_cursor").src = loadingCursor[Math.floor(Math.random() * loadingCursor.length)])
}

function login() {
    // redo login if safe mode
    if ($("#login_name").val().includes("\"") === true) {
        return socket.disconnect() && $("#page_error").hide()
    }
    if ($("#login_name").val().includes("'") === true) {
        return socket.disconnect() && $("#page_error").hide()
    }
    if ($("#login_name").val().includes("&") === true) {
        return socket.disconnect() && $("#page_error").hide()
    }
    if ($("#login_name").val().includes("#") === true) {
        return socket.disconnect() && $("#page_error").hide()
    }
    Bonzi_Name = $("#login_name").val() || "BonziBUDDY";
    if ($("#login_room").val() == "bonzi_weather") {
        var warning = confirm("WARNING: If you are recording/streaming on this site, we highly recommend you click cancel to use a different location. This is for your own safety.");
        if (warning == false) {
            dontUseMyLocation = true;
        } else {
            dontUseMyLocation = false;
        }
    }
    setTimeout(function() {

        if (safeMode) {
            bonzisocket.sendToServer("login", {
                name: $("#login_name").val(),
                room: $("#login_room").val()
            });
        } else {
            bonzisocket.sendToServer(window.bonzi_guid + "_login_" + window.testguid, {
                name: $("#login_name").val(),
                room: $("#login_room").val()
            });
        }

        setup();
    }, 954);


    var date = new Date(); 
    date.setDate(new Date().getDate() + 365);
    if (getCookie("name") == "") {
        if ($("#login_name").val() == "") {
            setCookie("name", "BonziBUDDY", 365)
        } else {
            setCookie("name", encodeURIComponent($("#login_name").val()), 365)
        }
    } else {
        if ($("#login_name").val() == "") {
            setCookie("name", "BonziBUDDY", 365)
        } else {
            setCookie("name", encodeURIComponent($("#login_name").val()), 365)
        }
    }
}

function login2() {
    // redo login if safe mode
    if (safeMode) {
        bonzisocket.sendToServer("login", {
            name: $("#login_name2").val(),
            room: $("#login_room2").val()
        });

    } else {
        bonzisocket.sendToServer(window.bonzi_guid + "_login_" + window.testguid, {
            name: $("#login_name2").val(),
            room: $("#login_room2").val()
        });

    }

    setup();
}

function errorJS() {
    ("none" != $("#page_ban").css("display") && "none" != $("#page_kick").css("display")) || $("#page_jserror").show();
}

function errorFatal(p) {
    document.getElementById("error").play(), ("none" != $("#page_ban").css("display") && "none" != $("#page_kick").css("display")) || $("#page_error").show();
}

function errorReboot(p) {
    document.getElementById("error").play();
    $("#page_reboot").show();
}

function setup() {
    //bonziUpdateAlert("BWCE Version 1.12.7 / 2.6.3.1 - The Beginning of the 2020 and 2019 Reunion!<br>The original Unbojih color is back!<br>Removed or edited politically incorrect jokes and commands as a response to the massive amounts of transphobia, racism and extremism from the bonzi.lol side of this community.", "OK")
	io = null;
	socket = null;
    $("#chat_send").click(sendInput),
        $("#chat_message").keypress(function(a) {
            if (a.which == 13 && a.shiftKey && shiftenter) {
                $("#chat_message").val($("#chat_message").val() + "<br>")
                return;
            }
            13 == a.which && sendInput();
        }),

        bonzisocket.on("replaceTVWithURL", function(a) {

            $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")

            function onPlayerReady(event) {
                event.target.setVolume(100);
                event.target.playVideo();
            }
            if (a.hourAmount == 23 || a.hourAmount == 22 && a.minuteAmount >= 9) {

                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "100%",
                    width: "100%",
                    videoId: "kQsoV69uGIY",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1,
                        loop: 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        onStateChange: function(event) {
                            // -1 - unstarted
                            // 0 - ended
                            // 1 - playing
                            // 2 - paused
                            // 3 - buffering
                            // 5 - video cued
                            switch (event.data) {
                                case 0:
                                    // Ended

                                    $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                                    var youtube = new YT.Player("bonzi_tv_player", {
                                        height: "100%",
                                        width: "100%",
                                        videoId: "kQsoV69uGIY",
                                        host: `${window.location.protocol}//www.youtube.com`,
                                        playerVars: {
                                            autoplay: 1,
                                            modestbranding: 1,
                                            controls: 1,
                                            showinfo: 1
                                        },
                                        events: {
                                            onStateChange: function(event) {
                                                // -1 - unstarted
                                                // 0 - ended
                                                // 1 - playing
                                                // 2 - paused
                                                // 3 - buffering
                                                // 5 - video cued
                                                switch (event.data) {
                                                    case 0:
                                                        // Ended
                                                        bonzisocket.sendToServer("updatebonzitv")
                                                        break;
                                                }
                                            }
                                        }
                                    });
                                    break;
                            }
                        }
                    }
                });

            } else {
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "100%",
                    width: "100%",
                    videoId: a.identId,
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        onStateChange: function(event) {
                            // -1 - unstarted
                            // 0 - ended
                            // 1 - playing
                            // 2 - paused
                            // 3 - buffering
                            // 5 - video cued
                            switch (event.data) {
                                case 0:
                                    // Ended

                                    $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                                    var youtube = new YT.Player("bonzi_tv_player", {
                                        height: "100%",
                                        width: "100%",
                                        videoId: a.id,
                                        host: `${window.location.protocol}//www.youtube.com`,
                                        playerVars: {
                                            autoplay: 1,
                                            modestbranding: 1,
                                            controls: 1,
                                            showinfo: 1
                                        },
                                        events: {
                                            'onReady': onPlayerReady,
                                            onStateChange: function(event) {
                                                // -1 - unstarted
                                                // 0 - ended
                                                // 1 - playing
                                                // 2 - paused
                                                // 3 - buffering
                                                // 5 - video cued
                                                switch (event.data) {
                                                    case 0:
                                                        // Ended
                                                        bonzisocket.sendToServer("updatebonzitv")
                                                        break;
                                                    case 1:
                                                        {

                                                            updateCurrentTime = setInterval(function() {
                                                                bonzisocket.sendToServer("setbonzitvtime", {
                                                                    curtime: youtube.playerInfo.currentTime
                                                                });
                                                                console.log(youtube.playerInfo.currentTime)
                                                            }, 5000)
                                                        }
                                                }
                                            }
                                        }
                                    });
                                    break;
                            }
                        }
                    }
                });
                clearInterval(updateCurrentTime);
            }
        }),
        bonzisocket.on("room", function(a) {
            if (a.room == "news") {
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "80%",
                    width: "100%",
                    videoId: "9Auq9mYxFEE",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1
                    },
                });
            } else if (a.room == "why") {
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "80%",
                    width: "100%",
                    videoId: "3RpxJT5w7Tc",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1,
						loop: 1
                    },
                });
            } else if (a.room == "area_51") {
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "80%",
                    width: "100%",
                    videoId: "TRc85qoNo6w",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1,
						loop: 1
                    },
                });
            } else if (a.room == "poland") {
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "80%",
                    width: "100%",
                    videoId: "rRPQs_kM_nw",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1,
						loop: 1
                    },
                });
            } else if (a.room == "bonzi_weather") {
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>")
                theme('#content{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png");} #bonzi_tv_yt{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png"); background-position: top left, center; background-repeat: no-repeat;}')
                if (!dontUseMyLocation) {
                    document.getElementById("bonzi_tv").innerHTML = '<iframe id="bonzi_tv_yt" style="position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;" src="//weatherscan.net/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                } else {
                    document.getElementById("bonzi_tv").innerHTML = '<iframe id="bonzi_tv_yt" style="position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;" src="//weatherscan.net/?long_island" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                }
            } else if (a.room == "bonzi_tv") {
                $("#room_info").append("<br><font color='red'><h3>BonziTV is in early development and is also a work in progress project. Expect bugs!<br>Report any bugs to the discord or DM Seamus.</h3></font>")
                $("#bonzi_tv").html("<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none; background-image:url('/img/desktop/logo.tv.png'), url('/img/desktop/bg.png');'></div>")
                theme('#content {background-image:url("/img/desktop/logo.tv.png"); background-repeat: no-repeat; background-position: top-left} #bonzi_canvas {background-image:url("/img/desktop/logo.tv.png"); background-repeat: no-repeat; background-position: top-left}')

                function onPlayerReady(event) {
                    event.target.setVolume(100);
                    event.target.playVideo();
                }
                var youtube = new YT.Player("bonzi_tv_player", {
                    height: "100%",
                    width: "100%",
                    videoId: a.vid,
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                        start: a.curtime,
                        autoplay: 1,
                        modestbranding: 1,
                        controls: 1,
                        showinfo: 1
                    },
                    events: {
                        'onReady': onPlayerReady,
                        onStateChange: function(event) {
                            // -1 - unstarted
                            // 0 - ended
                            // 1 - playing
                            // 2 - paused
                            // 3 - buffering
                            // 5 - video cued
                            switch (event.data) {
                                case 0:
                                    // Ended
                                    bonzisocket.sendToServer("updatebonzitv")
                                    break;
                                case 1:
                                    {

                                        updateCurrentTime = setInterval(function() {
                                            bonzisocket.sendToServer("setbonzitvtime", {
                                                curtime: youtube.playerInfo.currentTime
                                            });
                                            console.log(youtube.playerInfo.currentTime)
                                        }, 5000)
                                        break;
                                    }
                            }
                        }
                    }
                });
                $("#bonzi_canvas").click(function() {
                    youtube.play();
                })
            }
            $("#room_owner")[a.isOwner ? "show" : "hide"](), $("#room_public")[a.isPublic ? "show" : "hide"](), $("#room_private")[a.isPublic ? "hide" : "show"](), $("#room_id").text(a.room);
        }),

        bonzisocket.on("updateAll", function(a) {
            $("#page_login").hide(), (usersPublic = a.usersPublic), usersUpdate(), BonziHandler.bonzisCheck();
			
			$("#log").show();
        }),
        bonzisocket.on("update", function(a) {
            (window.usersPublic[a.guid] = a.userPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        bonzisocket.on("background", function(a) {
            document.getElementById("content").style.backgroundColor = a.background;
        }),
        bonzisocket.on("updateAll", function(a) {
            $("#page_login").hide(), (usersPublic = a.usersPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        bonzisocket.on("update", function(a) {
            (window.usersPublic[a.guid] = a.userPublic), usersUpdate(), BonziHandler.bonzisCheck();
        }),
        bonzisocket.on("blockedby", function(a) {
            setInterval(function() {
                var b = bonzis[a];
                b.mute = true;
                b.blocked = true;
            }, 1)
        }),
        bonzisocket.on("talk", function(a) {
            var b = bonzis[a.guid];
			a.text = a.text.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.runSingleEvent([{
                type: "text",
                text: a.text,
                say: a.say || a.text
            }]);
        }),
        bonzisocket.on("joke", function(a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.joke();
        }),
        bonzisocket.on("behh", function(a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.behh();
        }),
        bonzisocket.on("youtube", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.youtube(a.vid);
        }),
        bonzisocket.on("movestart", function(a) {
            var b = bonzis[a.guid];
            if (!b.mute) {
                var emote = [{
                    type: "anim",
                    anim: "surf_across_fwd",
                    ticks: 15
                }];
                b.runSingleEvent(emote);

                if (b.color == "peedy") {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/peedy_surfintro.mp3");
                    window.emoteaudio.play();

                } else if (b.color == "max") {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/max_surfintro.mp3");
                    window.emoteaudio.play();

                } else {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/jump.mp3");
                    window.emoteaudio.play();

                }

            }
        }),
        bonzisocket.on("present", function(a) {
            var b = bonzis[a.guid];
            if (!b.mute) {

                var emote = [{
                    type: "anim",
                    anim: "present_fwd",
                    ticks: 15
                }];
                b.cancel()
                b.runSingleEvent(emote);

            }
        }),
        bonzisocket.on("slap", function(a) {
            var b = bonzis[a.guid];
            if (!b.mute) {

                var emote = [{
                    type: "anim",
                    anim: "present_fwd",
                    ticks: 15
                }, {
                    type: "text",
                    text: "SLAP!"
                }, {
                    type: "idle"
                }];
                b.cancel();
                b.runSingleEvent(emote);

            }
        }),
        bonzisocket.on("movefinish", function(a) {
            var b = bonzis[a.guid];
            if (!b.mute) {
                b.movefinish();

                if (b.color == "peedy") {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/peedy_surfintro.mp3");
                    window.emoteaudio.play();

                } else if (b.color == "max") {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/max_surfintro.mp3");
                    window.emoteaudio.play();

                } else {

                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/boom.mp3");
                    window.emoteaudio.play();

                }

            }
        }),
        bonzisocket.on("video", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.video(a.vid);
        }),
        bonzisocket.on("midi", function(a) {
            var b = bonzis[a.guid];
            MIDIjs.play(a.midi);
            b.userPublic.name = b.userPublic.name.replace(/ (playing MIDI)/gi, "") + " (playing MIDI)";
            b.updateName();
        }),
        bonzisocket.on("video_legacy", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.video_legacy(a.vid);
        }),
        bonzisocket.on("bitview", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.bitview(a.vid);
        }),
        bonzisocket.on("img", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.img(a.vid);
        }),
        bonzisocket.on("letsplay", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.letsplay(a.vid);
        }),
        bonzisocket.on("letsplay2", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.letsplay2();
        }),
        bonzisocket.on("letsplay3", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.letsplay3();
        }),
        bonzisocket.on("iframe", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.iframe(a.vid);
        }),
        bonzisocket.on("vlare", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.vlare(a.vid);
        }),
        bonzisocket.on("fact", function(a) {
            var b = bonzis[a.guid];
            (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.fact();
        }),
        bonzisocket.on("backflip", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.backflip(a.swag);
            var a = new Audio("/sfx/backflip.mp3");
            a.play();
        }),
        bonzisocket.on("gravity", function(a) {
			window.gravity = true;
			$(".bonzi").css({
				marginLeft: 0,
				marginTop: 0,
				left: 0,
				top: 0
			}),
			$(".bonzi_placeholder").removeClass("box2d");
            $("body").jGravity({
                   target: ".bonzi_placeholder",
                   weight: 25,
                   depth: 5,
                   drag: true
          	});
        }),
		bonzisocket.on("dvdbounce", function(data) {
            var b = bonzis[data.guid];
            b && (b.cancel(),
            b.dvdbounce(data.status || "off"))
        }),
        bonzisocket.on("cooldown", function(a) {
            speak.play("Cooldown activated: please do not spam.");
        }),
        bonzisocket.on("sad", function(a) {
            var b = bonzis[a.guid];
            b.sad();
            if (b.color === "robby") {
                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/robby_sad.mp3");
                window.emoteaudio.play();
            }
        }),
        bonzisocket.on("shrug", function(a) {
            var b = bonzis[a.guid];
            b.shrug();
        }),
        bonzisocket.on("greet", function(a) {
            var b = bonzis[a.guid];
            b.greet();
        }),
        bonzisocket.on("think", function(a) {
            var b = bonzis[a.guid];
            b.think();
        }),
        bonzisocket.on("wave", function(a) {
            var b = bonzis[a.guid];
            b.mp3e();
        }),
        bonzisocket.on("banana", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.banana();
        }),
        bonzisocket.on("nod", function(a) {
            var b = bonzis[a.guid];
            b.nod();
        }),
        bonzisocket.on("acknowledge", function(a) {
            var b = bonzis[a.guid];
            b.nod();
        }),
        bonzisocket.on("banana", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.banana();
        }),
        bonzisocket.on("surprised", function(a) {
            var b = bonzis[a.guid];
            b.surprised();

            if (window.emoteaudio != null) {
                window.emoteaudio.pause();
            }
            window.emoteaudio = new Audio("/sfx/surprised.mp3");
            window.emoteaudio.play();
        }),

        bonzisocket.on("laugh", function(a) {
            var b = bonzis[a.guid];
            b.laugh();

            if (window.emoteaudio != null) {
                window.emoteaudio.pause();
            }
            window.emoteaudio = new Audio("/sfx/laugh.mp3");
            window.emoteaudio.play();
        }),
        bonzisocket.on("write", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.write();
        }),
        bonzisocket.on("write_once", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.write2();
            setTimeout(function() {
                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/write.mp3");
                window.emoteaudio.play();
            }, 1100);
        }),
        bonzisocket.on("write_infinite", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.write3();
            setTimeout(function() {
                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/write.mp3");
                window.emoteaudio.play();
            }, 1100);
        }),
        bonzisocket.on("clap", function(a) {
            var b = bonzis[a.guid];
            b.clap();
            setTimeout(function() {
                if (b.color == "robot") {
                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/zap5.mp3");
                    window.emoteaudio.play();
                } else {
                    if (window.emoteaudio != null) {
                        window.emoteaudio.pause();
                    }
                    window.emoteaudio = new Audio("/sfx/clap.mp3");
                    window.emoteaudio.play();
                }
            }, 600);
        }),
        bonzisocket.on("swag", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.swag();
        }),
        bonzisocket.on("confused", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.confused();
        }),
        bonzisocket.on("earth", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.earth();
        }),
        bonzisocket.on("grin", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.grin();
        }),
        bonzisocket.on("join", function(a) {
            var b = bonzis[a.guid];
            bonzisocket.sendToServer("login", {
                name: b.name.val(),
                room: a.rid
            }), setup();
        }),
        bonzisocket.on("surfjoin", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.surfjoin();
        }),
        bonzisocket.on("surfleave", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.surfleave();
        }),
        bonzisocket.on("surf", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.surf();

            if (b.color == "peedy") {

                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/peedy_surfintro.mp3");
                window.emoteaudio.play();

            } else {

                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/jump_off.mp3");
                window.emoteaudio.play();

            }
        }),
        bonzisocket.on("bang", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.bang();

            setTimeout(function() {
                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/bang.mp3");
                window.emoteaudio.play();
            }, 300);
        }),
        bonzisocket.on("clap_clippy", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.clap_clippy();
            setTimeout(function() {
                if (window.emoteaudio != null) {
                    window.emoteaudio.pause();
                }
                window.emoteaudio = new Audio("/sfx/wow.mp3");
                window.emoteaudio.play();
            }, 400);
        }),
        bonzisocket.on("alert", function(a) {
            bonziAlert(a);
        }),
	bonzisocket.on("window", function(a) {
            new Window(a);
        }),
        bonzisocket.on("asshole", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.asshole(a.target);
        }),
        bonzisocket.on("bass", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.bass(a.target);
        }),
        bonzisocket.on("beggar", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.beggar(a.target);
        }),
        bonzisocket.on("kiddie", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.kiddie(a.target);
        }),
        // offensive name, change later?
        bonzisocket.on("logofag", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.logofag(a.target);
        }),
        bonzisocket.on("gofag", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.goTard(a.target);
        }),
        bonzisocket.on("forcer", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.forcer(a.target);
        }),
        bonzisocket.on("welcome", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.welcome(a.target);
        }),
        bonzisocket.on("muted", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.muted(a.target);
        }),
        bonzisocket.on("owo", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.owo(a.target);
        }),
        bonzisocket.on("uwu", function(a) {
            var b = bonzis[a.guid];
			a.target = a.target.replaceAll(/{NAME}/gi,"BonziBUDDY");
            b.cancel(), b.uwu(a.target);
        }),
        bonzisocket.on("triggered", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_triggered);
        }),
        bonzisocket.on("blackhat", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.blackhat();
        }),
        bonzisocket.on("sing", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.sing();
        }),
        bonzisocket.on("linux", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_linux);
        }),
        bonzisocket.on("move", function(a) {
            var b = bonzis[a.guid];
            if (!b.mute) {
                b.move(a.posX, a.posY);
            }
        }),
        bonzisocket.on("pawn", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.runSingleEvent(b.data.event_list_pawn);
        }),
        bonzisocket.on("bees", function(a) {
            var b = bonzis[a.guid];
            b.cancel(), b.bees();
        }),
        bonzisocket.on("open_evaljs", function(a) {
            $("#evaljs").css("display", "block");
        }),
        bonzisocket.on("evaljs", function(n) {
            $("#evaljs_console").append("\n>> " + n.output);
        }),
        bonzisocket.on("open_ban_menu", function(a) {
            banmenu();
        }),
        bonzisocket.on("vaporwave", function(a) {
            $("body").addClass("vaporwave");
        }),
        bonzisocket.on("jumpscare", function(a) {
            document.getElementById("jumpscare").play(), $("body").addClass("jumpscare");
        }),
        bonzisocket.on("acid", function(a) {
            init();
            $("body").addClass("acidmode");
        }),
        bonzisocket.on("unvaporwave", function(a) {
            $("body").removeClass("vaporwave");
        }),
	bonzisocket.on("announcement", function(a) {
		new Window(
  "Announcement From"+a.from,
  a.msg,
  [
    { text: "OK", onclick: () => console.log("OK button clicked") },
    { text: "Cancel", onclick: () => console.log("Cancel button clicked") },
  ],
  innerWidth - 60 : innerWidth - 300,
  Math.random() * (innerHeight - 100)
);
	}),
        bonzisocket.on("leave", function(a) {
            var b = bonzis[a.guid];
            if ("undefined" != typeof b) {

                setTimeout(function() {
                    if (b.color == "diogo") {
                        var aud = new Audio("/sfx/diogo_surfgone.mp3");
                        aud.play();
                    } else if (b.color == "peedy") {
                        var aud = new Audio("/sfx/peedy_surfaway.mp3");
                        aud.play();
                    } else if (b.color == "genius") {
                        var aud = new Audio("/sfx/genius_surfaway.mp3");
                        aud.play();
                    } else if (b.color == "merlin") {
                        var aud = new Audio("/sfx/merlin_surfgone.mp3");
                        aud.play();
                    } else if (b.color == "genie") {
                        var aud = new Audio("/sfx/genie_surfgone.mp3");
                        aud.play();
                    } else if (b.color == "robby") {
                        var aud = new Audio("/sfx/robby_surfintro.mp3");
                        aud.play();
                    } else if (b.color == "clippy") {
                        var aud = new Audio("/sfx/clippy_surfgone.mp3");
                        aud.play();
                    } else if (b.color == "kairu") {
                        var aud = new Audio("/sfx/kairu_surfaway.mp3");
                        aud.play();
                    } else {
                        var aud = new Audio("/sfx/bye.mp3");
                        aud.play();
                    }
                }, 600);
                b.exit(
                    function(a) {
                        this.deconstruct(), delete bonzis[a.guid], delete usersPublic[a.guid], usersUpdate();
                    }.bind(b, a)
                );
            }
        });
}

class Window {
  constructor(title, html, buttons, width, height) {
    this.title = title;
    this.html = html;
    this.buttons = buttons;
    this.width = width;
    this.height = height;
    this.element = null;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;

    this.createWindow();
  }

  createWindow() {
    this.element = document.createElement("div");
    this.element.className = "window";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    const titleElement = document.createElement("div");
    titleElement.className = "title";
    titleElement.innerHTML = this.title;
    const closeButton = document.createElement("i");
    closeButton.className = "fa fa-times";
    closeButton.onclick = () => this.close();
    titleElement.appendChild(closeButton);
    this.element.appendChild(titleElement);

    const contentElement = document.createElement("div");
    contentElement.className = "window-content";
    contentElement.innerHTML = this.html;
    this.element.appendChild(contentElement);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    this.buttons.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = button.text;
      buttonElement.onclick = button.onclick;
      buttonContainer.appendChild(buttonElement);
    });
    this.element.appendChild(buttonContainer);

    document.body.appendChild(this.element);

    this.element.addEventListener("mousedown", (e) => {
      this.dragging = true;
      this.offsetX = e.clientX - this.element.offsetLeft;
      this.offsetY = e.clientY - this.element.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (this.dragging) {
        this.element.style.left = `${e.clientX - this.offsetX}px`;
        this.element.style.top = `${e.clientY - this.offsetY}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      this.dragging = false;
    });
  }

  close() {
    this.element.style.opacity = 0;
    setTimeout(() => {
      this.element.remove();
    }, 500);
  }
	      }

function bonziAlert(obj) {
    if (typeof obj != "object") {
        obj = {
            msg: obj
        }
    }
    let b_alert = document.getElementById("b_alert").content.children[0].cloneNode(true),
        title = b_alert.children[0],
        msg = b_alert.children[2],
        button = b_alert.children[4]
    msg[obj.sanitize ? "innerHTML" : "innerText"] = obj.msg
    if (obj.title) {
        title[obj.sanitize ? "innerHTML" : "innerText"] = obj.title
    } else {
        title.remove()
    }
    button.innerText = obj.button || "OK"
    button.onclick = function() {
        b_alert.remove()
    }
    document.getElementById("content").appendChild(b_alert)
    button.focus()
}

function bonziUpdateAlert(obj) {
    if (typeof obj != "object") {
        obj = {
            msg: obj
        }
    }
    let b_alert = document.getElementById("b_alert").content.children[0].cloneNode(true),
        title = b_alert.children[0],
        msg = b_alert.children[2],
        button = b_alert.children[4]
    msg["innerHTML"] = obj.msg + `<br><br>Get the Chrome App!<br><a class="app_chrome" href="https://chrome.google.com/webstore/detail/bonziworld/mbmkblgjegkiaggajjiheicbmfjaldcf" target="_blank"><img src="./img/app/chrome.png" alt="Chrome Extension"></a><br><small>Warning: Users under the age of 18 may not have access to the extension unless if they have an account with a birth date higher than the required Mature content rating.</small>`
    if (obj.title) {
        title["innerHTML"] = obj.title
    } else {
        title.remove()
    }
    button.innerText = obj.button || "OK"
    button.onclick = function() {
        b_alert.remove()
    }
    document.getElementById("content").appendChild(b_alert)
    button.focus()
}

function usersUpdate() {
    (usersKeys = Object.keys(usersPublic)), (usersAmt = usersKeys.length);
	$("#memcount").html("Bonzis Count: "+usersKeys.length);
}

function sendInput() {
    var a = $("#chat_message").val();
    if (($("#chat_message").val(""), a.length > 0)) {
        var b = youtubeParser(a);
        if (b) return void bonzisocket.sendToServer("command", {
            list: ["youtube", b]
        });
        if ("/" == a.substring(1, 0)) {
            var c = a.substring(1).split(" ");
            bonzisocket.sendToServer("command", {
                list: c
            });
        } else bonzisocket.sendToServer("talk", {
            text: a
        });
    }
}

function touchHandler(a) {
    var b = a.changedTouches,
        c = b[0],
        d = "";
    switch (a.type) {
        case "touchstart":
            d = "mousedown";
            break;
        case "touchmove":
            d = "mousemove";
            break;
        case "touchend":
            d = "mouseup";
            break;
        default:
            return;
    }
    var e = document.createEvent("MouseEvent");
    e.initMouseEvent(d, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(e);
}
var adElement = "#ap_iframe";
$(function() {
    $(function(){updateAds}), $(window).resize(updateAds), $("body").on("DOMNodeInserted", adElement, updateAds), $("body").on("DOMNodeRemoved", adElement, updateAds);
});
var _createClass = (function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    })(),
    Bonzi = (function() {
        function constructor(id, userPublic) {
            this.stopSpeaking();
            var d = this;
            var _this2 = this;
				this.bounceColors = ["black", "blue", "brown", "green", "purple", "red", "pink"],
            _classCallCheck(this, constructor),
				this.overlayOffset = {
					left: 0,
					top: 0
				},
                (this.userPublic = userPublic || {
                    name: "BonziBUDDY",
                    color: "purple",
                    speed: 175,
                    pitch: 50,
                    sapi5pitch: 1,
                    amplitude: 100,
                    voice: "Adult Male #2, American English (TruVoice)"
                }),
                (this.color = this.userPublic.color),
				
				
				this.moving = {
					speed: 4, 
					direction: "ne"
				},
				this._extras = {
					dvd: !1,
					dvdTick: 1,
				},
                this.colorPrev,
                (this.data = window.BonziData),
                (this.drag = !1),
                (this.dragged = !1),
                (this.eventQueue = []),
                (this.eventRun = !0),
                (this.event = null),
                (this.willCancel = !1),
                (this.run = !0),
                (this.mute = !1),
                (this.eventTypeToFunc = {
                    anim: "updateAnim",
                    html: "updateText",
                    text: "updateText",
                    idle: "updateIdle",
                    add_random: "updateRandom",
                    clearText: "clearDialog"
                }),
                "undefined" == typeof id ? (this.id = s4() + s4()) : (this.id = id),
                (this.rng = new Math.seedrandom(this.seed || this.id || Math.random())),
                (this.selContainer = "#content"),
                (this.$container = $(this.selContainer)),
				this.$container.append(
					"\n\t\t\t<div id='bonzi_" +
						this.id +
						"' class='bonzi'>\n\t\t\t\t<div class='bonzi_name'><div class=\"name-inner\"><div class=\"icon\"></div><div class=\"name\"></div></div></div>\n\t\t\t\t\t<div class='bonzi_placeholder'></div>\n\t\t\t\t<div style='display:none' class='bubble'>\n\t\t\t\t\t<p class='bubble-content'></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
				),
				(this.selElement = "#bonzi_" + this.id),
				(this.selDialog = this.selElement + " > .bubble"),
				(this.closeDialog = this.selElement + " > .bubble > .close-bubble"),
				(this.selDialogCont = this.selElement + " > .bubble > p"),
				(this.selNameWrap = this.selElement + " > .bonzi_name"),
				(this.selNameIcon = this.selElement + " > .bonzi_name > .name-inner > .icon"),
				(this.selNametag = this.selElement + " > .bonzi_name > .name-inner > .name"),
				(this.selCanvas = this.selElement + " > .bonzi_placeholder"),
                $(this.selCanvas).width(this.data.size.x).height(this.data.size.y),
				(this.$nameIcon = $(this.selNameIcon)),
				(this.$closeBtn = $(this.closeDialog)),
				(this.$element = $(this.selElement)),
				(this.$canvas = $(this.selCanvas)),
				(this.$dialog = $(this.selDialog)),
				(this.$dialogCont = $(this.selDialogCont)),
				(this.$nametag = $(this.selNametag)),
                this.updateName(),
                $.data(this.$element[0], "parent", this),
                this.updateSprite(!0), 
                (this.generate_event = function(a, b, c) {
                    this.stopSpeaking();
                    var d = this;
                    a[b](function(a) {
                        d[c](a);
                    });
                }),
                this.generate_event(this.$canvas, "mousedown", "mousedown"),
                this.generate_event($(window), "mousemove", "mousemove"),
                this.generate_event($(window), "mouseup", "mouseup");
				
						setInterval(function(){
							
							if(_this2._extras && _this2._extras.dvd) {
								_this2.dvdTick()
							}
							
						},50); 
            var e = this.maxCoords();
            if (this.userPublic.x != null && this.userPublic.y != null) {

                (this.x = this.userPublic.x);
                (this.y = this.userPublic.y);

            } else {

                (this.x = e.x * this.rng());
                (this.y = e.y * this.rng());

            }
            this.move();
            if (this.id == window.bonzi_guid) {
                window.myBonzi = this;
            }

            bonzisocket.on("disconnect", function() {
				if (!window.kick) {
					d.deconstruct(), delete bonzis[d.id], delete usersPublic[d.id], usersUpdate();	
					reconnect();
				}
            });
            $.contextMenu({
                    selector: this.selCanvas,
                    build: function($trigger, e) {
                        return {
                            items: {
                                cancel: {
                                    name: "Cancel",
                                    callback: function() {
                                        d.cancel();
                                    },
                                },
                                mute: {
                                    name: function() {
                                        return d.blocked ? "Mute" : d.mute ? "Unmute" : "Mute";
                                    },
                                    callback: function() {
                                        d.cancel(), (d.mute = !d.mute);
                                    },
                                },
                                hide: {
                                    name: function() {
                                        return "Hide";
                                    },
                                    callback: function() {
                                        d.cancel();

                                        var b = d;
                                        setTimeout(function() {
                                            if (b.color == "diogo") {
                                                var aud = new Audio("/sfx/diogo_surfgone.mp3");
                                                aud.play();
                                            } else if (b.color == "peedy") {
                                                var aud = new Audio("/sfx/peedy_surfaway.mp3");
                                                aud.play();
                                            } else if (b.color == "genius") {
                                                var aud = new Audio("/sfx/genius_surfaway.mp3");
                                                aud.play();
                                            } else if (b.color == "merlin") {
                                                var aud = new Audio("/sfx/merlin_surfgone.mp3");
                                                aud.play();
                                            } else if (b.color == "genie") {
                                                var aud = new Audio("/sfx/genie_surfgone.mp3");
                                                aud.play();
                                            } else if (b.color == "robby") {
                                                var aud = new Audio("/sfx/robby_surfintro.mp3");
                                                aud.play();
                                            } else if (b.color == "clippy") {
                                                var aud = new Audio("/sfx/clippy_surfgone.mp3");
                                                aud.play();
                                            } else if (b.color == "kairu") {
                                                var aud = new Audio("/sfx/kairu_surfaway.mp3");
                                                aud.play();
                                            } else {
                                                var aud = new Audio("/sfx/bye.mp3");
                                                aud.play();
                                            }
                                        }, 600);
                                        "undefined" != typeof b &&
                                            d.exit(
                                                function() {
                                                    this.deconstruct(), delete bonzis[d.id], delete usersPublic[d.id], usersUpdate();
                                                }.bind(b)
                                            );
                                    },
                                },
								insult:{
									name:"Insult",
									items:{
										asshole: {
											name: "Call an Asshole",
											callback: function() {
												bonzisocket.sendToServer("command", {
													list: ["asshole", d.userPublic.name]
												});
											},
										},
                                        bass: {
                                            name: "Call a Bass",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["bass", d.userPublic.name]
                                                });
                                            },
                                        },
                                        goTard: {
                                            name: "Call a Go!Tard",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["gofag", d.userPublic.name]
                                                });
                                            },
                                        },
                                        logokid: {
                                            name: "Call a Logo Kid",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["logofag", d.userPublic.name]
                                                });
                                            },
                                        },
											guilttrippify: {
												name: "Guilt Trippify",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:_this2.userPublic.name+" WANNA HEAR SOMETHING?"})
														setTimeout(()=>{
															bonzisocket.sendToServer("talk",{text:"Unbojihmusic is a guilt tripper, a manipulator and a simp!"})
															setTimeout(()=>{
																bonzisocket.sendToServer("talk",{text:"Nintendo 64!"})
															},5000)
														},2000)
													}
												},
											},
											funeify: {
												name: "Funeify",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:_this2.userPublic.name+" WANNA HEAR SOMETHING?"})
														setTimeout(()=>{
															bonzisocket.sendToServer("talk",{text:"Fune is schizophrenic and his alterego is kangei! I don't care if you call me a halgagetworlder!"})
														},2000)
													}
												},
											},
											ud64alt: {
												name: "Call a UD64 Alt",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:_this2.userPublic.name+" stop being a unbojihdoes64 alt"})
													}
												},
											},
											ud64alt2: {
												name: "Call a Bass 2",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:_this2.userPublic.name+" stop being a bass"})
													}
												},
											},
									}
								},

                                heyname:{
                                    name:"Hey, NAME!",
                                    callback:function(){
                                        bonzisocket.sendToServer("talk",{text:"Hey, "+d.userPublic.name+"!"})
                                    }
                                },
								
                                morecmds: {
                                    name: "More Commands..",
                                    items: {
                                        greetings: {
                                            name: "Greet",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["welcome", d.userPublic.name]
                                                });
                                            },
                                        },
                                        dm: {
                                            name: "DM",
                                            callback: function() {
                                                $("#page_dm").show();
                                                $("#dm_send_to").text(d.userPublic.name);
                                                $("#dm_guid").val(d.id);
                                                $("#dm_input").focus()
                                            }
                                        },
                                        quote: {
                                            name: "Quote",
                                            callback: function() {
                                                if (!d.last) {
                                                    alert("This person hasnt speaked yet")
                                                    return;
                                                }
                                                $("#chat_message").val("<blockquote>" + d.last + "</blockquote> ").focus()
                                            }
                                        },
                                        owo: {
                                            name: "Notice Bulge",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["owo", d.userPublic.name]
                                                });
                                            },
                                        },
                                        uwu: {
                                            name: "Notice Bulge 2",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["uwu", d.userPublic.name]
                                                });
                                            },
                                        },
											spy: {
												name: "Call a Spy",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:"That "+_this2.userPublic.name+" is a spy!"})
													}
												},
											},
											sentry: {
												name: "Call a Sentry",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:"That "+_this2.userPublic.name+" is a sentry!"}) 
													}
												},
											},
											sapping: {
												name: "Accuse of Sapping",
												callback: function () {
													if (!_this2.userPublic.color_cross.match(/gffgfghjghj/g)) {
														bonzisocket.sendToServer("talk",{text:_this2.userPublic.name+" sapping my sentry!"}) 
													}
												},
											},
                                    },
                                },
                                modtools: {
                                    disabled: function() {
                                        return !admin
                                    },
                                    name: "Pope Tools",
                                    items: {
                                        // YOU GET NOTHING! YOU LOSE! GOOD DAY SIR!
                                        /*
                                          ban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Kick",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["kick", d.id] })
                                        	},
                                          },
                                          banbanban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Ban",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["ban", d.id] })
                                        	},
                                          },
                                          shadowban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Silent Kick",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["shadowkick", d.id] })
                                        	},
                                          },
                                          hypnotize: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Hypnotize (use if the user is a warshit user)",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["hypnotize", d.id] })
                                        	},
                                          },
                                        */
                                        givepopeto: {
                                            disabled: function() {
                                                return !admin
                                            },
                                            name: "Popeify",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["givepopeto", d.id]
                                                })
                                            },
                                        },
                                        givegodto: {
                                            disabled: function() {
                                                return !admin
                                            },
                                            name: "Godify",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["givegodto", d.id]
                                                })
                                            },
                                        },
                                        tempadmin: {
                                            disabled: function() {
                                                return !admin
                                            },
                                            name: "Adminify (RISKY)",
                                            callback: function() {
                                                bonzisocket.sendToServer("command", {
                                                    list: ["givepopeto2", d.id]
                                                })
                                            },
                                        },
                                    },
                                },
                                antiwarshittools: {
                                    disabled: function() {
                                        return !admin
                                    },
                                    name: "Anti-Warsaw Tools",
                                    items: {
                                          ban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Kick",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["kick", d.id] })
                                        	},
                                          },
                                          banbanban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Ban",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["ban", d.id] })
                                        	},
                                          },
                                          shadowban: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Silent Kick",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["shadowkick", d.id] })
                                        	},
                                          },
                                          hypnotize: {
                                        	disabled: function() {
                                        	  return !admin
                                        	},
                                        	name: "Hypnotize (use if the user is a warshit user)",
                                        	callback: function() {
                                        	  bonzisocket.sendToServer("command", { list: ["hypnotize", d.id] })
                                        	},
                                          },
                                    },
                                }
                            },
                        };
                    },
                    animation: {
                        duration: 175,
                        show: "fadeIn",
                        hide: "fadeOut"
                    },
                }),
                (this.needsUpdate = !1),
                this.runSingleEvent([{
                    type: "anim",
                    anim: "surf_intro",
                    ticks: 50
                }]);

            document.getElementById("logcontent").innerHTML += "<p><font color='"+this.userPublic.color+"'>"+this.userPublic.name+" </font>joined the room.</p>";
            setTimeout(function() {
                    if (d.color == "diogo") {
                        var a = new Audio("/sfx/diogo_surfintro.mp3");
                        a.play();
                    }
                }, 100),
                setTimeout(function() {
                    if (d.color == "god") {
                        var a = new Audio("/sfx/god_surfintro.mp3");
                        a.play();
                    }
                }, 100),
                setTimeout(function() {
                    if (d.color === "clippy") {
                        var a = new Audio("/sfx/clippy_surfintro.mp3");
                        a.play();
                    } else if (d.color === "peedy") {
                        var a = new Audio("/sfx/peedy_surfintro.mp3");
                        a.play();
                    } else if (d.color === "genius") {
                        var a = new Audio("/sfx/genius_surfintro.mp3");
                        a.play();
                    } else if (d.color === "merlin") {
                        var a = new Audio("/sfx/merlin_surfintro.mp3");
                        a.play();
                    } else if (d.color === "genie") {
                        var a = new Audio("/sfx/genie_surfintro.mp3");
                        a.play();
                    } else if (d.color === "robby") {
                        var a = new Audio("/sfx/robby_surfintro.mp3");
                        a.play();
                    } else if (d.color === "qmark") {
                        var a = new Audio("/sfx/qmark_surfintro.mp3");
                        a.play();
                    } else if (d.color === "kairu") {
                        var a = new Audio("/sfx/kairu_surfintro.mp3");
                        a.play();
                    }
                }, 100),
                setTimeout(function() {
                    if (d.color == "max") {
                        var a = new Audio("/sfx/max_surfintro.mp3");
                        a.play();
                    }
                }, 800),
                setTimeout(function() {
                    if (d.color != "clippy" && d.color != "peedy" && d.color != "robby" && d.color != "merlin" && d.color != "genie" && d.color != "rover" && d.color != "qmark" && d.color != "genius" && d.color != "kairu" && d.color != "f1" && d.color != "losky" && d.color != "max") {
                        if (d.color == "diogo") {
                            var a = new Audio("/sfx/diogo_jumpoff.mp3");
                            a.play();
                        } else {
                            var a = new Audio("/sfx/jump_off.mp3");
                            a.play();
                        }
                    }
                }, 1700);
        }
        return (
            _createClass(constructor, [{
                    key: "eventMake",
                    value: function(list) {
                        return {
                            list: list,
                            index: 0,
                            timer: 0,
                            cur: function() {
                                return this.list[this.index];
                            },
                        };
                    },
                },
                {
                    key: "mousedown",
                    value: function(e) {
                        if (e.which == 1) {
                            this.drag = true;
                            this.dragged = false;
                            this.drag_start = {
                                x: e.pageX - this.x,
                                y: e.pageY - this.y
                            };


                            if (window.bonzi_guid == this.id) {
                                bonzisocket.sendToServer("command", {
                                    list: ["movestart"]
                                });
                            }
                        }
                    },
                },
                {
                    key: "mousemove",
                    value: function(e) {
                        if (this.drag) {
                            if (window.bonzi_guid == this.id) {

                                this.dragged = true;
                                bonzisocket.sendToServer("command", {
                                    list: ["move", e.pageX - this.drag_start.x, e.pageY - this.drag_start.y, this.dragged]
                                });

                            } else {

                                this.move(
                                    e.pageX - this.drag_start.x,
                                    e.pageY - this.drag_start.y
                                );
                                this.dragged = true;

                            }
                        }
                    },
                },
                {
					key: "move",
					value: function(x, y, force) {
						if (!(this && this._extras && this._extras.dvd) || force) {
							0 !== arguments.length && (this.x = x - this.overlayOffset.left,
							this.y = y - this.overlayOffset.top);
							var min_y = 0
							  , min_x = 0
							  , max = this.maxCoords();
							this.x = Math.min(Math.max(min_x, this.x), max.x),
							this.y = Math.min(Math.max(min_y, this.y), max.y);
							if (!window.gravity) {
								this.$element.css({
									marginLeft: this.x,
									marginTop: this.y
								});
							}
							this.sprite.x = this.x + this.overlayOffset.left,
							this.sprite.y = this.y + this.overlayOffset.top,
							BonziHandler.needsUpdate = !0,
							this.updateDialog()
						}
					}
				}, 
				{
					key: "getMovement",
					value: function() {
						var newCoords = {
							x: this.x,
							y: this.y
						};
						switch (this.moving.direction) {
						case "ne":
							newCoords.x += this.moving.speed,
							newCoords.y -= this.moving.speed;
							break;
						case "nw":
							newCoords.x -= this.moving.speed,
							newCoords.y -= this.moving.speed;
							break;
						case "se":
							newCoords.x += this.moving.speed,
							newCoords.y += this.moving.speed;
							break;
						case "sw":
							newCoords.x -= this.moving.speed,
							newCoords.y += this.moving.speed
						}
						return newCoords
					}
				}, 
				{
					key: "dvdTick",
					value: function() {
						if (this && this._extras && this._extras.dvd) {
							var max = this.maxCoords()
							  , movement = this.getMovement()
							  , redo = !1
							  , redoX = !1;
							movement.x <= 0 ? (this.moving.direction = `${this.moving.direction.charAt(0)}e`,
							redo = !0,
							redoX = !0) : movement.x >= max.x && (this.moving.direction = `${this.moving.direction.charAt(0)}w`,
							redo = !0,
							redoX = !0),
							movement.y <= 101 ? (this.moving.direction = `s ${this.moving.direction.slice(1)}`,
							redo = !0) : movement.y >= max.y && (this.moving.direction = `n ${this.moving.direction.slice(1)}`,
							redo = !0);
							var currentAnim = this.sprite.currentAnimation;
							redo && (this._extras.dvdTick++,
							movement = this.getMovement(),
							this._extras.dvdTick > this.bounceColors.length - 1 && (this._extras.dvdTick = 0),
							this.color = this.bounceColors[this._extras.dvdTick],
							this.updateSpriteWithAnimation(currentAnim),
							redoX && this.sprite.gotoAndPlay("w" === this.moving.direction.charAt(1) ? "surf_across_swap_back" : "surf_back_swap_back")),
							this.x = movement.x || this.x,
							this.y = movement.y || this.y,
							this.x = Math.min(Math.max(0, this.x), max.x),
							this.y = Math.min(Math.max(0, this.y), max.y),
							this.$element.css({
								marginLeft: this.x,
								marginTop: this.y
							}), 
							this.sprite.x = this.x + this.overlayOffset.left,
							this.sprite.y = this.y + this.overlayOffset.top,
							BonziHandler.needsUpdate = !0,
							this.updateDialog()
						}
					}
				},
                {
                    key: "mouseup",
                    value: function(e, anim) {
                        if (!this.dragged && this.drag)
                            this.cancel();

                        if (window.bonzi_guid == this.id && this.drag) {
                            bonzisocket.sendToServer("command", {
                                list: ["movefinish"]
                            });
                        }

                        this.drag = false;
                        this.dragged = false;
                    },
                },
                {
                    key: "runSingleEvent",
                    value: function(list) {
                        this.mute || this.eventQueue.push(this.eventMake(list));
                    },
                },
                {
                    key: "clearDialog",
                    value: function (tkm, skipVideo, keepOpen) {
                        var self = this;
                        self.$dialogCont.html(""), self.$dialog.hide(); 
                    },
                },
                {
                    key: "cancel",
                    value: function() {
                        this.clearDialog(), this.stopSpeaking(), (this.eventQueue = [this.eventMake([{
                            type: "idle"
                        }])]);
                    },
                },
                {
                    key: "movefinish",
                    value: function() {
                        this.cancel()
                    },
                },
                {
                    key: "retry",
                    value: function() {
                        this.clearDialog(), (this.event.timer = 0);
                    },
                },
                {
                    key: "stopSpeaking",
                    value: function() {
                        this.goingToSpeak = false;
                        try {
                            if (!espeaktts) {
                                this.userPublic.a.pause();
                            } else {
                                this.voiceSource.stop();
                            }
							BonziHandler.stop(this.speakID)
                        } catch (e) {}
                    },
                },
                {
                    key: "cancelQueue",
                    value: function() {
                        this.willCancel = !0;
                    },
                },
                {
                    key: "updateAnim",
                    value: function() {
                        0 === this.event.timer && this.sprite.gotoAndPlay(this.event.cur().anim), this.event.timer++, (BonziHandler.needsUpdate = !0), this.event.timer >= this.event.cur().ticks && this.eventNext();
                    },
                },
                {
                    key: "updateText",
                    value: function() {
                        if (this.event.timer === 0) {
                            this.$dialog.css("display", "block");
                            this.event.timer = 1;
                            this.talk(
                                this.event.cur().text,
                                this.event.cur().say,
                                true
                            );
                        }

                        if (this.$dialog.css("display") == "none")
                            this.eventNext();
                    },
                },
                {
                    key: "updateIdle",
                    value: function() {
                        var a = "idle" == this.sprite.currentAnimation && 0 === this.event.timer;
                        (a = a || this.data.pass_idle.indexOf(this.sprite.currentAnimation) != -1),
                        a
                            ?
                            this.eventNext() :
                            (0 === this.event.timer && ((this.tmp_idle_start = this.data.to_idle[this.sprite.currentAnimation]), this.sprite.gotoAndPlay(this.tmp_idle_start), (this.event.timer = 1)),
                                this.tmp_idle_start != this.sprite.currentAnimation && "idle" == this.sprite.currentAnimation && this.eventNext(),
                                (BonziHandler.needsUpdate = !0));
                    },
                },
                {
                    key: "updateRandom",
                    value: function() {
                        var a = this.event.cur().add,
                            b = Math.floor(a.length * this.rng()),
                            c = this.eventMake(a[b]);
                        this.eventNext(), this.eventQueue.unshift(c);
                    },
                },
                {
                    key: "update",
                    value: function() {
                        if (this.color == "rainbow" || this.userPublic.rainbow == true) {
                            this.$canvas.addClass("rainbow");
                        } else {
                            this.$canvas.removeClass("rainbow");
                        }
						if (window.gravity || this.color == "rainbow" || this.userPublic.rainbow == true) {
							
                            if (this.color == "empty" && this.userPublic.color_cross != 'none') {
                                this.$canvas.css("background-image", `url("/img/agents/bonzi.webp")`);
                            } else {
                                this.$canvas.css("background-image", `url("/img/agents/${this.color}.webp")`);
                            }
							
						} else {
							if (allowCrossColors == true) {
								if (this.color == "empty" && this.userPublic.color_cross != 'none') {
									this.$canvas.css("background-image", `url("${this.userPublic.color_cross}")`);
								} else {
									this.$canvas.css("background-image", `none`);
								}
							} else if (allowCrossColors == false) {

								if (this.color == "empty" && this.userPublic.color_cross != 'none') {
									this.$canvas.css("background-image", `url("/img/agents/bonzi.webp")`);
								} else {
									this.$canvas.css("background-image", `none`);
								}

							}
						}
                        if (this.color == "empty" && this.userPublic.color_cross != 'none') {
                            if (!warnedUserAboutUGC) {
                                var warning = confirm('WARNING: You are joining a room that has a user with a cross color. Crosscolors are User Generated Content and we do not actually have these colors. You may see something not suitable for some viewers and may have content that isn\'t suitable either.\n\nClick OK to allow crosscolors, Click Cancel to disable crosscolors.');
                                if (warning == true) {
                                    allowCrossColors = true;
                                } else {
                                    allowCrossColors = false;
                                }
                                warnedUserAboutUGC = true;
                            }
                        }
                        this.$canvas.css("background-position-x", `-${Math.floor(this.sprite.currentFrame % 17) * this.data.size.x}px`);
                        this.$canvas.css("background-position-y", `-${Math.floor(this.sprite.currentFrame / 17) * this.data.size.y}px`);
                        this.$canvas.css("filter", `hue-rotate(${this.userPublic.hue}deg)         saturate(${this.userPublic.saturation}%)         drop-shadow(20px -5px 4px rgba(0,0,0,0.2))`);
                        if (this.run) {
                            if (
                                (0 !== this.eventQueue.length && this.eventQueue[0].index >= this.eventQueue[0].list.length && this.eventQueue.splice(0, 1), (this.event = this.eventQueue[0]), 0 !== this.eventQueue.length && this.eventRun)
                            ) {
                                var a = this.event.cur().type;
                                try {
                                    this[this.eventTypeToFunc[a]]();
                                } catch (b) {
                                    this.event.index++;
                                }
                            }
                            this.willCancel && (this.cancel(), (this.willCancel = !1)), this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                        }
                    },
                },
                {
                    key: "eventNext",
                    value: function() {
                        (this.event.timer = 0), (this.event.index += 1);
                    },
                },
                {
                    key: "talk",
                    value: function(text, say, allowHtml) {
                        var me = this;
                        allowHtml = allowHtml || false;
						// joey this is honestly your worst fucking mistake in this god damn site
                        text = replaceAll(text, "{NAME}", this.userPublic.name);
                        text = replaceAll(text, "{COLOR}", this.color);
                        text = replaceAll(text, "{VOICE}", this.userPublic.voice);
                        text = replaceAll(text, "{PITCH}", this.userPublic.pitch);
                        text = replaceAll(text, "{SPEED}", this.userPublic.speed);
                        text = replaceAll(text, "{WORDGAP}", this.userPublic.wordgap);
                        text = replaceAll(text, "{AMPLITUDE}", this.userPublic.amplitude);
                        if (typeof say !== "undefined") {
                            say = replaceAll(say, "{NAME}", this.userPublic.name);
                            say = replaceAll(say, "{COLOR}", this.color);
                        } else {
                            say = text.replace("&gt;", "");
                        }

                        //text = linkify(text);
                        // temporary disable until we find a fix
                        var greentext =
                            (text.substring(0, 4) == "&gt;") ||
                            (text[0] == ">");

                        this.$dialogCont[allowHtml ? "html" : "text"](allowHtml ? twemoji.parse(text) : text)[greentext ? "addClass" : "removeClass"]("bubble_greentext")
                            .css("display", "block");

                        this.stopSpeaking();

                        this.goingToSpeak = true;
                        (say = say.replace(/{ROOM}/gi, Room_ID));
                        (text = text.replace(/{ROOM}/gi, Room_ID));
                        (say = say.replace(/~/gi, "?"));
                        (say = say.replace(/bonzi.ga/gi, window.location.host));
                        (say = say.replace(/bonzi.lol/gi, window.location.host));
                        (text = text.replace(/bonzi.ga/gi, window.location.host));
                        (text = text.replace(/bonzi.lol/gi, window.location.host));
                        (text = text.replace(/'/gi, "&apos;"));
                        (text = text.replace(/"/gi, "&quot;"));
                        (text = text.replace(/#/gi, "&num;"));
                        (say = say.replace(/bzw/gi, "bonziworld"));
                        (say = say.replace(/bwe/gi, "bonziworld enhanced"));
                        (say = say.replace(/bwr/gi, "bonziworld revived"));
                        (say = say.replace(/bwce/gi, "bonziworld community edition"));
                        (say = say.replace(/&amp;/gi, "and"));
                        (say = say.replace(/&num;/gi, "hash tag"));
                        (say = say.replace(/&gt;/gi, "greater than"));
                        (say = say.replace(/&lt;/gi, "less than"));
                        (say = say.replace(/&gt/gi, "greater than"));
                        (say = say.replace(/&lt/gi, "less than"));
                        (say = say.replace(/TTS/g, "text to speech"));
                        (say = say.replace(/tts/g, "text to speech"));
                        (say = say.replace(/wdym/gi, "what do you mean"));
                        (say = say.replace(/idc/gi, "i don't care"));
                        (say = say.replace(/idk/gi, "i don't know"));
                        (say = say.replace(/btw/gi, "by the way"));
                        (say = say.replace(/idfc/gi, "i don't fucking care"));
                        (say = say.replace(/idfk/gi, "i don't fucking know"));
                        (say = say.replace(/idgaf/gi, "i don't give a fuck"));
                        (say = say.replace(/wtf/gi, "what the fuck"));
                        (say = say.replace(/wth/gi, "what the hell"));
                        (say = say.replace(/kys/gi, "kill yourself"));
                        (say = say.replace(/afaik/gi, "as far as i know"));
                        (say = say.replace(/iirc/gi, "if i remember correctly"));
                        (say = say.replace(/TIL /g, "today i learned"));
                        (say = say.replace(/PST/g, "pacific standard time"));
                        (say = say.replace(/MST/g, "mountain standard time"));
                        (say = say.replace(/CST/g, "central standard time"));
                        (say = say.replace(/EST/g, "eastern standard time"));
                        (say = say.replace(/AST/g, "alantic standard time"));
                        (say = say.replace(/PDT/g, "pacific daylight time"));
                        (say = say.replace(/MDT/g, "mountain daylight time"));
                        (say = say.replace(/CDT/g, "central daylight time"));
                        (say = say.replace(/EDT/g, "eastern daylight time"));
                        (say = say.replace(/ADT/g, "alantic daylight time"))
                        if (this.userPublic.voice == "default") {
                            if (espeaktts) {
                                var say2 = say.replaceAll(/soi/gi, "[[_^_zh]] swoier [[_^_en-us]]").replaceAll(/soy/gi, "[[_^_zh]] swoier [[_^_en-us]]").replaceAll(/~/gi, "!").replaceAll(/~/gi, "!")
                                speak.play(say2, {
                                    "pitch": this.userPublic.pitch,
                                    "speed": this.userPublic.speed,
                                    "amplitude": this.userPublic.amplitude,
                                    "wordgap": this.userPublic.wordgap,
                                }, () => { // onended
                                    me.clearDialog()
                                }, (source) => {
                                    if (!me.goingToSpeak) source.stop();
                                    me.voiceSource = source;
                                });

                            } else {
                                /*
                                  if (this.color === "merlin" || this.color === "clippy") {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Male%20%233%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  } else if (this.color === "genie") {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Male%20%231%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  } else if (this.color === "robby") {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Male%20%237%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  } else if (this.color === "genius") {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Male%20%238%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  } else if (this.color === "kairu" || this.color === "links") {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Female%20%232%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  } else {

                                	this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Adult%20Male%20%232%2C%20American%20English%20(TruVoice)&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");

                                  }
                                */
                                var voice;
                                if (this.color === "merlin" || this.color === "clippy") {

                                    voice = "Adult Male #3, American English (TruVoice)";

                                } else if (this.color === "genie" || this.color === "qmark") {

                                    voice = "Adult Male #1, American English (TruVoice)";

                                } else if (this.color === "robby") {

                                    voice = "Adult Male #7, American English (TruVoice)";

                                } else if (this.color === "genius") {

                                    voice = "Adult Male #8, American English (TruVoice)";

                                } else if (this.color === "kairu" || this.color === "links") {

                                    voice = "Adult Female #2, American English (TruVoice)";

                                } else if (this.color === "unbojih") {

                                    voice = "Mike";

                                } else if (this.color === "seamus") {

                                    voice = "Sam";

                                } else {

                                    voice = "Adult Male #2, American English (TruVoice)";

                                }
                                var say2 = say.replaceAll(/soi/gi, "\\Chr=\"Whisper\"\\ swah \\Chr=\"Normal\"\\").replaceAll(/soy/gi, "\\Chr=\"Whisper\"\\ swah \\Chr=\"Normal\"\\")
                                this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say2) + "&voice=" + encodeURIComponent(voice) + "&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 400), 50) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");
                                this.userPublic.a.play();
                                this.userPublic.a.onended = function() {
                                    me.clearDialog()
                                }
                            }
                        } else {
                            if (this.userPublic.voice != "sam" && this.userPublic.voice != "mike" && this.userPublic.voice != "mary" && this.userPublic.voice != "espeak" && this.userPublic.voice != "espeakjs" && this.userPublic.voice != "broken") {
								
								if (this.userPublic.voice.match(/voiceforge\:/i)) {

                                    var voice2;
                                    this.userPublic.a = new Audio("https://mespeak-js-server.onrender.com/voiceforge?text=" + encodeURIComponent(say) + "&voice=" + encodeURIComponent(replaceAll(this.userPublic.voice, "voiceforge:", "")));
                                    this.userPublic.a.play();
                                    this.userPublic.a.onended = function() {
                                        me.clearDialog()
                                    }
									
								} else {
									
									this.userPublic.a = new Audio("//bonziworld.co/" + me.userPublic.voice + "?text=" + encodeURIComponent(say));
									this.userPublic.a.play();
									this.userPublic.a.onended = function() {
										me.clearDialog()
									}
									
								}

                            } else {
                                if (this.userPublic.voice == "broken") {
                                    var say2 = say.replaceAll(/ /gi, "' ").replaceAll(/'s/gi, " s").replaceAll(/]]/gi, "").replaceAll(/!/gi, "]]! [['").replaceAll(/\?/gi, "]]? [['")
                                    speak.play("[['" + say2, {
                                        "pitch": this.userPublic.pitch,
                                        "speed": this.userPublic.speed,
                                    "amplitude": this.userPublic.amplitude,
                                    "wordgap": this.userPublic.wordgap,
                                    }, () => { // onended
                                        me.clearDialog()
                                    }, (source) => {
                                        if (!me.goingToSpeak) source.stop();
                                        me.voiceSource = source;
                                    });
                                } else if (this.userPublic.voice == "espeak") {
									this.speakID = BonziHandler.speak(say, this.userPublic.speed, this.userPublic.pitch, function(a) {
										a && me.clearDialog()
									})
                                } else if (this.userPublic.voice == "sam") {

                                    this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Sam&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 200), 60) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");
                                    this.userPublic.a.play();
                                    this.userPublic.a.onended = function() {
                                        me.clearDialog()
                                    }

                                } else if (this.userPublic.voice == "mike") {

                                    this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Mike&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 226), 60) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");
                                    this.userPublic.a.play();
                                    this.userPublic.a.onended = function() {
                                        me.clearDialog()
                                    }

                                } else if (this.userPublic.voice == "mary") {

                                    this.userPublic.a = new Audio("https://www.tetyys.com/SAPI4/SAPI4?text=" + encodeURIComponent(say) + "&voice=Mary&pitch=" + Math.max(Math.min(parseInt(this.userPublic.pitch), 336), 60) + "&speed=" + Math.max(Math.min(parseInt(this.userPublic.speed), 250), 50) + "");
                                    this.userPublic.a.play();
                                    this.userPublic.a.onended = function() {
                                        me.clearDialog()
                                    }

                                }

                            }
                        }
						// if he skids i skid back
                        var toscroll = document.getElementById("logcontent").scrollHeight - document.getElementById("logcontent").scrollTop < 605;
						document.getElementById("logcontent").innerHTML += "<p><font color='"+this.userPublic.color+"'>"+this.userPublic.name+": </font>"+text+"</p>";
						if(toscroll) document.getElementById("logcontent").scrollTop = document.getElementById("logcontent").scrollHeight;
                        this.last = text;
                    },
                },
                {
                    key: "joke",
                    value: function() {
                        this.runSingleEvent(this.data.event_list_joke);
                    },
                },
                {
                    key: "behh",
                    value: function() {
                        this.runSingleEvent(this.data.event_list_behh);
                    },
                },
                {
                    key: "fact",
                    value: function() {
                        this.runSingleEvent(this.data.event_list_fact);
                    },
                },
                {
                    key: "exit",
                    value: function(callback) {
                        this.runSingleEvent([{
                            type: "anim",
                            anim: "surf_away",
                            ticks: 30
                        }]), setTimeout(callback, 2000);

                        document.getElementById("logcontent").innerHTML += "<p><font color='"+this.userPublic.color+"'>"+this.userPublic.name+" </font>left the room.</p>";
                    },
                },
                {
                    key: "deconstruct",
                    value: function() {
                        this.stopSpeaking(), BonziHandler.stage.removeChild(this.sprite), (this.run = !1), this.$element.remove();
                    },
                },
                {
                    key: "updateName",
                    value: function() {
						this.userPublic && this.userPublic.flags ? this.userPublic.flags && this.userPublic.flags.admin && this.$nameIcon.html("<i class='fas fa-gavel' title='Administrator' style='color: #be6400'/>") : this.$nameIcon.html("");
                        
                        if (!this.mute) {
							var nametag = twemoji.parse(this.userPublic.name);
							nametag = nametag.replaceAll(/{NAME}/gi,"(NAME)")
							nametag = nametag.replaceAll(/{COLOR}/gi,"(COLOR)")
                            this.$nametag.html(nametag);

                        }
                    },
                },
                {
                    key: "youtube",
                    value: function(vid) {
                        if (!this.mute) {
                            //this.$dialog.addClass('bubble_autowidth');
                            function checkurl(){if(vid.includes("?")){return "&"} else {return "?"}};
                            this.$dialogCont.html("\n\t\t\t\t\t<iframe type='text/html' width='170' height='170' scrolling='no' frameborder='no' allow='autoplay' \n\t\t\t\t\tsrc='https://www.youtube.com/embed/" + vid.replace(/playlist/gi,"videoseries").replace(/(^\w+:|^)\/.*\.youtube\.com\//, '') + "" + checkurl() + "autoplay=1&modestbranding=1&playsinline=0&showinfo=0&enablejsapi=1&origin=" + window.location.origin + "&widgetid=1&color=purple&theme=dark' \n\t\t\t\t\tstyle='width:170px;height:170px; border-radius: 7px;'\n\t\t\t\t\tframeborder='0'\n\t\t\t\t\allow='autoplay; encrypted-media'\n\t\t\t\t\tallowfullscreen='allowfullscreen'\n\t\t\t\t\tmozallowfullscreen='mozallowfullscreen'\n\t\t\t\t\tmsallowfullscreen='msallowfullscreen'\n\t\t\t\t\toallowfullscreen='oallowfullscreen'\n\t\t\t\t\twebkitallowfullscreen='webkitallowfullscreen'\n\t\t\t\t\t></iframe>\n\t\t\t\t"), this.$dialog.show();
                        }
                    },
                },
                {
                    key: "video_legacy",
                    value: function(vid) {
                        if (!this.mute) {
                            this.$dialogCont.html(
                                    "<object type='application/x-shockwave-flash' data='/legacy/video_player.swf' id='vv_player' width='170' height='170'><param name='movie' value='/legacy/video_player.swf'><param name='allowFullScreen' value='true'><param name='FlashVars' value='video_id=" +
                                    vid +
                                    "'></object>"
                                ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "video",
                    value: function(vid) {
                        if (!this.mute) {
                            var b = "embed";
                            this.$dialogCont.html(" <video width='170' loop autoplay controls id='bonziworld-video'><source src='" + vid + "' type='video/mp4' loop>Your browser does not support the video tag.</video> "), this.$dialog.show();
                        }
                    },
                },
                {
                    key: "bitview",
                    value: function(vid) {
                        if (!this.mute) {
                            var b = "embed";
                            this.$dialogCont.html("<iframe id='embedplayer' src='http://www.bitview.net/embed.php?v=" + vid + "'' width='448' height='382' allowfullscreen scrolling='off' frameborder='0'></iframe>"), this.$dialog.show();
                        }
                    },
                },
                {
                    key: "img",
                    value: function(img) {
                        if (!this.mute) {
                            this.$dialogCont.html("<img width='170' src='" + img + "'></img>"), this.$dialog.show();
                        }
                    },
                },
                {
                    key: "letsplay",
                    value: function(a) {
                        if (!this.mute) {
                            this.$dialogCont.html(
                                    '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="270" height="270" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" id="AngryBirds" align="top"><param name="allowScriptAccess" value="sameDomain"><param name="allowFullScreen" value="false"><param name="movie" value="angrybirds.swf"><param name="menu" value="false"><param name="quality" value="high"><param name="wmode" value="opaque"><param name="bgcolor" value="#ffffff"><embed src="http://jsimlo.sk/flash/angrybirds/angrybirds.swf" menu="false" quality="high" wmode="opaque" bgcolor="#ffffff" width="270" height="270" name="AngryBirds" align="top" allowscriptaccess="sameDomain" allowfullscreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>'
                                ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "letsplay2",
                    value: function() {
                        if (!this.mute) {
                            this.$dialogCont.html(
                                    '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="270" height="270" id="angry-birds-rio" align="middle" name="gameObj"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="false"><param name="movie" value="http://farm.maxgames.com/angry-birds-rioMTI4Ng==.swf"> <param name="quality" value="autohigh"><param name="wmode" value="direct"><embed src="http://farm.maxgames.com/angry-birds-rioMTI4Ng==.swf" quality="autohigh" wmode="direct" width="270" height="270" name="gameObj" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></object>'
                                ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "letsplay3",
                    value: function() {
                        if (!this.mute) {
                            this.$dialogCont.html(
                                    '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="270" height="270"><param name="wmode" value="window"><param name="movie" value="//zone.msn.com/bingame/zum2/default/Zuma2Preloader_1_0.swf"><param name="flashvars" value=""><param name="play" value="true"><param name="bgcolor" value="#FFFFFF"><param name="base" value="https://zone.msn.com/binGame/zum2/default"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><embed id="GameObject" name="GameObject" src="https://zone.msn.com/bingame/zum2/default/Zuma2Preloader_1_0.swf" wmode="window" base="/binGame/zum2/default" menu="false" allowscriptaccess="always" flashvars="" play="true" bgcolor="#FFFFFF" width="270" height="270" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" swliveconnect="true"><noembed><blockquote><font face="Lucida Console, Monaco, mono" size="-2"><A href="//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" target="_self">This site requires Macromedia Flash to be properly installed in a capable browser.<BR> Follow this link, and you\'ll find out everything you need to know.</A></font></blockquote></noembed></object>'
                                ),
                                this.$dialog.show();
                        }
                    },
                },
                {
                    key: "iframe",
                    value: function(url) {
                        if (!this.mute) {
                            this.$dialogCont.html("<iframe width='170' height='170' src='" + url + "'></iframe>"), this.$dialog.show();
                        }
                    },
                },
                {
                    key: "backflip",
                    value: function(swag) {
                        var b = [{
                            type: "anim",
                            anim: "backflip",
                            ticks: 15
                        }];
                        swag && (b.push({
                            type: "anim",
                            anim: "cool_fwd",
                            ticks: 20
                        }), b.push({
                            type: "idle"
                        })), this.runSingleEvent(b);
                    },
                },
                {
                    key: "clap",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "clap_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "clap_clippy",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "clap_clippy_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "sad",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "sad_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "think",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "think_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "wave",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "wave",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "nod",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "nod",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "clap_clippy",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "clap_clippy_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "banana",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "banana_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "surprised",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "surprised_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "laugh",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "shrug",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "shrug_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "greet",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "greet_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "write",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "write_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "write2",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "write_once_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "write3",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "write_infinite_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "surf",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "surf_across_fwd",
                            ticks: 15
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "swag",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "cool_fwd",
                            ticks: 40
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "confused",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "confused_fwd",
                            ticks: 40
                        }];
                        this.runSingleEvent(emote);
                        var a = new Audio("/sfx/confused.mp3");
                        a.play();
                    },
                },
                {
                    key: "bang",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "beat_fwd",
                            ticks: 15
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "earth",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "earth_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "grin",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "grin_fwd",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "surfjoin",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "surf_intro_emote",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "surfleave",
                    value: function() {
                        var emote = [{
                            type: "anim",
                            anim: "surf_away_emote",
                            ticks: 30
                        }];
                        this.runSingleEvent(emote);
                    },
                },
                {
                    key: "updateDialog",
                    value: function() {
                        var maxCoords = this.maxCoords();
                        this.data.size.x + this.$dialog.width() > maxCoords.x ?
                            this.y < this.$container.height() / 2 - this.data.size.x / 2 ?
                            this.$dialog.removeClass("bubble-top").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-bottom") :
                            this.$dialog.removeClass("bubble-bottom").removeClass("bubble-left").removeClass("bubble-right").addClass("bubble-top") :
                            this.x < this.$container.width() / 2 - this.data.size.x / 2 ?
                            this.$dialog.removeClass("bubble-left").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-right") :
                            this.$dialog.removeClass("bubble-right").removeClass("bubble-top").removeClass("bubble-bottom").addClass("bubble-left");
                    },
                },
                {
                    key: "maxCoords",
                    value: function() {
                        return {
                            x: this.$container.width() - this.data.size.x,
                            y: this.$container.height() - this.data.size.y - $("#chat_bar").height()
                        };
                    },
                },
                {
                    key: "asshole",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + target + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking asshole!",
                            say: "your a fucking asshole!"
                        }, {
                            type: "anim",
                            anim: "grin_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "bass",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + target + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking bass!",
                            say: "your a fucking bass!"
                        }, {
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "beggar",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + target + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking beggar!",
                            say: "your a fucking beggar!"
                        }, {
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "kiddie",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + target + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking kiddie!"
                        }, {
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "logofag",
                    value: function(target) {
                        this.runSingleEvent([{
                                type: "text",
                                text: "Hey, " + target + "!"
                            },
                            {
                                type: "text",
                                text: "You're a fucking Logo Kid!",
                                say: "your a fucking logo kid!"
                            },
                            {
                                type: "anim",
                                anim: "laugh_fwd",
                                ticks: 25
                            },
                            {
                                type: "idle"
                            },
                        ]);
                    },
                },
                {
                    key: "goTard",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + target + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking Go!Tard!",
                            say: "your a fucking Go Tard!"
                        }, {
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "forcer",
                    value: function(a) {
                        this.runSingleEvent([{
                            type: "text",
                            text: "Hey, " + a + "!"
                        }, {
                            type: "text",
                            text: "You're a fucking forcer!",
                            say: "You're a fucking forcer!"
                        }, {
                            type: "anim",
                            anim: "laugh_fwd",
                            ticks: 25
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "welcome",
                    value: function(target) {
                        this.runSingleEvent([{
                            type: "anim",
                            anim: "greet_fwd",
                            ticks: 25
                        }, {
                            type: "text",
                            text: "Hello, " + target + "!"
                        }, {
                            type: "idle"
                        }]);
                    },
                },
                {
                    key: "owo",
                    value: function(target) {
                        this.runSingleEvent([{
                                type: "text",
                                text: "*notices " + target + "'s BonziBulge™* owo",
                                say: "notices " + target + "s bonzibulge"
                            },
                            {
                                type: "text",
                                text: "owo, wat dis? uwu",
                                say: "oh woah, what diss?"
                            }
                        ]);
                    },
                },
                {
                    key: "uwu",
                    value: function(target) {
                        this.runSingleEvent([{
                                type: "text",
                                text: "*notices " + target + "'s BonziBulge™*",
                                say: "notices " + target + "s bonzibulge"
                            },
                            {
                                type: "text",
                                text: "uwu, wat dis? uwu",
                                say: "uwu? what diss?"
                            },
                        ]);
                    },
                },
                {
                    key: "bees",
                    value: function(notUsed) {
                        this.runSingleEvent([{
                                type: "text",
                                text: "According to all known laws"
                            },
                            {
                                type: "anim",
                                anim: "praise_fwd",
                                ticks: 25
                            },
                            {
                                type: "text",
                                text: "I am an memer who likes BonziBUDDY because of daddy jowtel."
                            },
                            {
                                type: "idle"
                            },
                        ]);
                    },
                },
                {
                    key: "blackhat",
                    value: function(notUsedEither) {
                        this.runSingleEvent([{
                            type: "text", 
                            text: "What the fuck did you just fucking say about me, you little asshole? I'll have you know I graduated top of my class in the black hats, and I've been involved in numerous secret raids on user's PC's, and I have over 300 confirmed PC destructions. I am trained in JS warfare and I'm the top hacker in the entire BonziBUDDY forces. You are nothing to me but just another target. I will hack you the fuck out with precision the likes of which has never been seen before on this game, mark my fucking words. You think you can get away with saying that shit to me over BonziWORLD? Think again, fucker. As we speak I am contacting my secret network of hackers across the server and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your PC. You're fucking dead, kid. I can be anywhere, anytime, and I can ban you in over seven hundred ways, and that's just with inspect element. Not only am I extensively trained in JavaScript commands, but I have access to the entire core of the BonziWORLD source code (totally not bonzidotlol) and I will use it to its full extent to wipe your miserable ass off the face of the game, you little shit. If only you could have known what unholy retribution your little clever asshole command was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn asshole. I will hack fury all over you and you will be instant banned. You're a fucking asshole, kiddo.",
                        }, ]);
                    },
                },
                {
                    key: "muted",
                    value: function(thisIsAlsoNotUsed) {
                        this.runSingleEvent([{
                                type: "text",
                                text: "Hey, " + a + "!",
                                say: "hey, " + a + "!"
                            },
                            {
                                type: "text",
                                text: "MUTED!",
                                say: "muted!"
                            },
                        ]);
                    },
                },
				{
					key: "dvdbounce",
					value: function(status) {
						var self = this;
						if ("on" === status)
							try {
								this.runSingleEvent([{
									type: "anim",
									anim: "w" === self.moving.direction.charAt(1) ? "surf_back_fwd" : "surf_across_fwd",
									ticks: 15
								}]),
								setTimeout(function() {
									self._extras.dvd = !0
								}, 650)
							} catch (err) {
								self._extras.dvd = !0
							}
						else
							self._extras.dvd = !1,
							self.sprite.gotoAndStop("w" === self.moving.direction.charAt(1) ? "surf_back_back" : "surf_across_back")
					}
				}, { 
					key: "updateSpriteForced",
					value: function(hide) {
                        var info = BonziData.sprite;
						var stage = BonziHandler.stage;
						this.cancel(),
						stage.removeChild(this.sprite),
						delete this.sprite,
						this.sprite = new createjs.Sprite(new createjs.SpriteSheet({
                                images: ["./img/agents/empty.webp"],
                                frames: info.frames,
                                animations: info.animations
                            }),hide ? "gone" : "idle"),
						this.sprite.id = this.id,
						//this.updateAgent(),
						stage.addChild(this.sprite),
						this.move()
					}
				}, {
					key: "updateSpriteWithAnimation",
					value: function(anim) {
                        var info = BonziData.sprite;
						var stage = BonziHandler.stage;
						stage.removeChild(this.sprite),
						this.colorPrev != this.color && (delete this.sprite,
						this.sprite = new createjs.Sprite(new createjs.SpriteSheet({
                                images: ["./img/agents/empty.webp"],
                                frames: info.frames,
                                animations: info.animations
                            }),anim || "idle"),
						this.sprite.id = this.id),
						//this.updateAgent(),
						stage.addChild(this.sprite),
						this.move()
					}
				},
                {
                    key: "updateSprite",
                    value: function(gone) {
                        if (this.mute) return;
                        var b = BonziHandler.stage;
                        b.removeChild(this.sprite);
                        var info = BonziData.sprite;
                        if (safeMode) {
                            // idk how to make a proper random string selector
                            var seecretColor = [
                                "black",
                                "blue",
                                "red",
                                "purple",
                                "pink",
                                "pope",
                                "peedy",
                                "clippy",
                                "merlin",
                                "genie",
                                "robby"
                            ]
                            this.colorPrev != this.color && (delete this.sprite, (this.sprite = new createjs.Sprite(new createjs.SpriteSheet({
                                images: ["./img/agents/" + seecretColor[Math.floor(Math.random() * seecretColor.length)] + ".webp"],
                                frames: info.frames,
                                animations: info.animations
                            }), gone ? "gone" : "idle")), (this.sprite.id = this.id));
                            b.addChild(this.sprite);
                            this.move();
 
                        } else {

							var stage = BonziHandler.stage;
							this.cancel(),
							stage.removeChild(this.sprite),
							this.colorPrev != this.color && (delete this.sprite,
							this.sprite = new createjs.Sprite(new createjs.SpriteSheet({
                                images: ["./img/agents/"+this.color+".webp"],
                                frames: info.frames,
                                animations: info.animations
                            }),gone ? "gone" : "idle"),
							this.sprite.id = this.id),
							//this.updateAgent(),
							stage.addChild(this.sprite),
							this.move()
				
                        }
                    },
                },
            ]),
            constructor
        );
    })(),
    BonziData = {
        size: {
            x: 200,
            y: 160
        },
        sprite: {
            frames: {
                width: 200,
                height: 160
            },
            animations: {
                idle: 0,
                surf_across_fwd: [1, 8, "surf_across_still", 1],
                wave: [250, 261, "idle", 1],
                sad_fwd: [237, 241, "sad_still", 1],
                sad_still: 241,
                think_fwd: [242, 247, "think_still", 1],
                think_still: 247,
                confused_still: 137,
                surf_across_still: 9,
                surf_across_back: {
                    frames: range(8, 1),
                    next: "idle",
                    speed: 1
                },
                sad_back: {
                    frames: range(239, 237),
                    next: "idle",
                    speed: 1
                },
                confused_fwd: [127, 137, "confused_still", 0.7],
                think_back: {
                    frames: range(247, 242),
                    next: "idle",
                    speed: 1
                },
                confused_back: {
                    frames: range(137, 127),
                    next: "idle",
                    speed: 1
                },
                clap_fwd: {
                    frames: range(10, 14),
                    next: "clap_still",
                    speed: 1
                },
                clap_clippy_fwd: [10, 12, "clap_clippy_still", 1],
                clap_still: [13, 15, "clap_still", 1],
                clap_clippy_still: [13, 13, "clap_clippy_still", 1],
                clap_back: {
                    frames: range(15, 10),
                    next: "idle",
                    speed: 1
                },
                surf_intro: [277, 302, "idle", 1],
                surf_intro_emote: [277, 302, "wave", 1],
				
                surf_back_swap_fwd: [194, 200, "surf_back_still", 1],
                surf_back_swap_back: [200, 194, "surf_across_swap_fwd", 1],
                surf_back_swap_still: 194,
                surf_back_fwd: [190, 200, "surf_back_still", 1],
                surf_back_still: 200,
                surf_back_back: {
                    frames: range(200, 190),
                    next: "idle",
                    speed: 1
                },
                surf_across_swap_fwd: [4, 8, "surf_across_still", 1],
                surf_across_swap_back: [8, 4, "surf_back_swap_fwd", 1],
                surf_across_swap_still: 4,
                surf_across_fwd: [1, 8, "surf_across_still", 1],
                surf_across_still: 9,
                surf_across_back: {
                    frames: range(8, 1),
                    next: "idle",
                    speed: 1
                },
                surf_away: [16, 38, "gone", 1],
                surf_away_emote: [16, 38, "gone_emote", 1],
                gone_emote: [38, 39, "surf_intro_emote"],
                gone: 39,
                shrug_fwd: [45, 50, "shrug_still", 1],
                nod: [40, 44, "idle", 1],
                shrug_still: 50,
                shrug_back: {
                    frames: range(50, 45),
                    next: "idle",
                    speed: 1
                },
                earth_fwd: [51, 57, "earth_still", 1],
                earth_still: [58, 80, "earth_still", 1],
                earth_back: [81, 86, "idle", 1],
                look_down_fwd: [87, 90, "look_down_still", 1],
                look_down_still: 91,
                look_down_back: {
                    frames: range(90, 87),
                    next: "idle",
                    speed: 1
                },
                lean_left_fwd: [94, 97, "lean_left_still", 1],
                lean_left_still: 98,
                lean_left_back: {
                    frames: range(97, 94),
                    next: "idle",
                    speed: 1
                },
                beat_fwd: [101, 103, "beat_still", 1],
                banana_fwd: [344, 354, "idle", 0.6],
                surprised_fwd: [356, 360, "surprised_still", 0.8],
                laugh_fwd: [361, 364, "laugh_still", 0.8],
                write_fwd: [365, 377, "write_still", 0.8],
                write_once_fwd: [365, 400, "write_once_still", 0.8],
                write_infinite_fwd: [365, 396, "write_infinite", 0.8],
                write_infinite: [381, 396, "write_infinite", 0.8],
                write_still: 377,
                write_once_still: 401,
                write_back: {
                    frames: range(378, 366),
                    next: "idle",
                    speed: 0.8
                },
                laugh_back: {
                    frames: range(364, 361),
                    next: "idle",
                    speed: 0.8
                },
                surprised_back: {
                    frames: range(360, 356),
                    next: "idle",
                    speed: 0.8
                },
                laugh_still: [363, 364, "laugh_still", 0.6],
                surprised_still: 360,
                banana_fwd: [344, 354, "banana_back", 0.6],
                banana_back: [350, 344, "idle", 0.6],
                beat_still: [104, 107, "beat_still", 1],
                beat_back: {
                    frames: range(103, 101),
                    next: "idle",
                    speed: 1
                },
                cool_fwd: [108, 126, "cool_still", 1],
                cool_still: 126,
                cool_back: {
                    frames: range(126, 108),
                    next: "idle",
                    speed: 1
                },
                cool_right_fwd: [126, 128, "cool_right_still", 1],
                cool_right_still: 129,
                cool_right_back: {
                    frames: range(128, 126),
                    next: "idle",
                    speed: 1
                },
                cool_left_fwd: [131, 133, "cool_left_still", 1],
                cool_left_still: 134,
                cool_left_back: {
                    frames: range(133, 131),
                    next: "cool_still",
                    speed: 1
                },
                cool_adjust: {
                    frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
                    next: "cool_still",
                    speed: 1
                },
                present_fwd: [137, 141, "present_still", 1],
                present_still: 142,
                present_back: {
                    frames: range(141, 137),
                    next: "idle",
                    speed: 1
                },
                look_left_fwd: [143, 145, "look_left_still", 1],
                look_left_still: 146,
                look_left_back: {
                    frames: range(145, 143),
                    next: "idle",
                    speed: 1
                },
                look_right_fwd: [149, 151, "look_right_still", 1],
                look_right_still: 152,
                look_right_back: {
                    frames: range(151, 149),
                    next: "idle",
                    speed: 1
                },
                lean_right_fwd: {
                    frames: range(158, 156),
                    next: "lean_right_still",
                    speed: 1
                },
                lean_right_still: 155,
                lean_right_back: [156, 158, "idle", 1],
                praise_fwd: [159, 163, "praise_still", 1],
                praise_still: 164,
                praise_back: {
                    frames: range(163, 159),
                    next: "idle",
                    speed: 1
                },
                greet_fwd: [225, 232, "greet_still", 1],
                greet_still: 232,
                greet_back: {
                    frames: range(232, 225),
                    next: "idle",
                    speed: 1
                },
                grin_fwd: [182, 189, "grin_still", 1],
                grin_still: 184,
                grin_back: {
                    frames: range(184, 182),
                    next: "idle",
                    speed: 1
                },
                backflip: [331, 343, "idle", 1],
            },
        },
        to_idle: {
            surf_back_swap_fwd: "surf_back_swap_back",
            surf_back_swap_still: "surf_back_swap_back",
            surf_across_swap_fwd: "surf_across_swap_back",
            surf_across_swap_still: "surf_across_swap_back",
            surf_back_fwd: "surf_back_back",
            surf_back_still: "surf_back_back",
            surf_across_fwd: "surf_across_back",
            surf_across_still: "surf_across_back",
            sad_still: "sad_back",
            think_still: "think_back",
            think_fwd: "think_back",
            clap_fwd: "clap_back",
            confused_still: "confused_back",
            confused_fwd: "confused_back",
            clap_still: "clap_back",
            surf_away_emote: "gone_emote",
            gone_emote: "surf_intro_emote",
            surf_intro_emote: "wave",
            clap_clippy_still: "clap_back",
            clap_clippy_fwd: "clap_back",
            shrug_fwd: "shrug_back",
            greet_fwd: "greet_back",
            shrug_still: "shrug_back",
            greet_still: "greet_back",
            earth_fwd: "earth_back",
            earth_still: "earth_back",
            look_down_fwd: "look_down_back",
            look_down_still: "look_down_back",
            lean_left_fwd: "lean_left_back",
            lean_left_still: "lean_left_back",
            beat_fwd: "beat_back",
            banana_fwd: "banana_back",
            surprised_fwd: "surprised_back",
            surprised_still: "surprised_back",
            laugh_fwd: "laugh_back",
            write_fwd: "write_back",
            write_once_fwd: "write_back",
            write_infinite_fwd: "write_back",
            write_infinite: "write_back",
            write_still: "write_back",
            write_once_still: "write_back",
            laugh_still: "laugh_back",
            beat_still: "beat_back",
            cool_fwd: "cool_back",
            cool_still: "cool_back",
            cool_adjust: "cool_back",
            cool_left_fwd: "cool_left_back",
            cool_left_still: "cool_left_back",
            present_fwd: "present_back",
            present_still: "present_back",
            look_left_fwd: "look_left_back",
            look_left_still: "look_left_back",
            look_right_fwd: "look_right_back",
            look_right_still: "look_right_back",
            lean_right_fwd: "lean_right_back",
            lean_right_still: "lean_right_back",
            praise_fwd: "praise_back",
            praise_still: "praise_back",
            grin_fwd: "grin_back",
            grin_still: "grin_back",
            backflip: "idle",
            idle: "idle",
        },
        pass_idle: ["gone"],

        event_list_behh_open: [
            [{
                type: "text",
                text: "Prepare your behh, and lets behh, you behh."
            }, ],
            [{
                    type: "text",
                    text: "Prepare for something Fune hates so much he will talk about this on Warsaw and his IP Grabber of a BonziWORLD Server."
                },
                {
                    type: "anim",
                    anim: "praise_fwd",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "Seamus skidding his code!"
                },
                {
                    type: "anim",
                    anim: "praise_back",
                    ticks: 15
                },
            ],
            [{
                type: "text",
                text: "{NAME} used /behh. Time to fucking behh myself."
            }],
            [{
                type: "text",
                text: "{NAME} asked me for behh spam."
            }],
            [{
                type: "text",
                text: "Prepare to be behhed."
            }],
            [{
                type: "text",
                text: "HEY YOU IDIOTS ITS TIME FOR A BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH"
            }],
            [{
                    type: "text",
                    text: "Wanna hear me spam behh?"
                },
                {
                    type: "text",
                    text: "No?"
                },
                {
                    type: "text",
                    text: "That's ok. I didn't really want to do this anyway"
                },
            ],
            [{
                type: "text",
                text: "Hey, paul!"
            }, ],
            [{
                type: "text",
                text: "Time to make behh videos."
            }, ],
            [{
                type: "text",
                text: "Behh yourself like a egg, behh."
            }, ],
            [{
                type: "text",
                text: "The behh god wants me to tell a edited version of bonzi.lol's god awful jokes."
            }],
            [{
                type: "text",
                text: "Time for behh."
            }],
        ],
        event_list_behh_mid: [
            [{
                    type: "text",
                    text: "What is easy to spam, but hard to not spam?"
                },
                {
                    type: "text",
                    text: "behh"
                },
            ],
            [{
                    type: "text",
                    text: "Why do they call Bonzi.lol mid?"
                },
                {
                    type: "text",
                    text: "Because it is."
                },
                {
                    type: "anim",
                    anim: "shrug_back",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "Sorry. I just had a brain wave."
                },
            ],
            [{
                    type: "text",
                    text: "Behn!",
                },
                {
                    type: "anim",
                    anim: "shrug_back",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "What were you behhing? A behh? you're a behh and you know it"
                },
            ],
            [{
                    type: "text",
                    text: "What is in the middle of bonziworld.co?"
                },
                {
                    type: "text",
                    text: "A behh."
                },
            ],
            [{
                    type: "text",
                    text: "Why can't i behh?"
                },
                {
                    type: "text",
                    text: "Because Behh. That's the whole joke."
                },
            ],
            [{
                type: "text",
                text: "The behh."
            }, ],
            [{
                    type: "text",
                    text: "What goes in behh	?"
                },
                {
                    type: "text",
                    text: "Behh."
                },
            ],
            [{
                    type: "text",
                    text: "What type of behh won't freeze?"
                },
                {
                    type: "text",
                    text: "Behh."
                },
            ],
            [{
                    type: "text",
                    text: "Who earns a living by driving his behhs away?"
                },
                {
                    type: "text",
                    text: "Hunge hugo."
                },
            ],
            [{
                    type: "text",
                    text: "What did the behn say to the behh?"
                },
                {
                    type: "text",
                    text: "Behh my behn."
                },
            ],
            [{
                    type: "text",
                    text: "What do you call a egg who shaves 10 times a day?"
                },
                {
                    type: "text",
                    text: "A behh."
                },
            ],
            [{
                    type: "text",
                    text: "How do you get behh in eggs?"
                },
                {
                    type: "text",
                    text: "behh."
                },
            ],
            [{
                    type: "text",
                    text: "Why do we call behh behh?"
                },
                {
                    type: "text",
                    text: "Because we BEHH it."
                },
            ],
            [{
                    type: "text",
                    text: "How many behh does it take to knock down a behh?"
                },
                {
                    type: "text",
                    text: "I don't know but just a few can behh."
                },
            ],
            [{
                    type: "text",
                    text: "What do you call an behh?"
                },
                {
                    type: "text",
                    text: "Behh"
                },
            ],
            [{
                    type: "text",
                    text: "Here's a behh:"
                },
                {
                    type: "text",
                    text: "behh behh behh behh behh behh behh behh behh behh "
                },
            ],
            [{
                    type: "text",
                    text: "Why did Seamus' brother behh?"
                },
                {
                    type: "text",
                    text: "Behh."
                },
            ],
            [{
                    type: "text",
                    text: "Who am I?"
                },
                {
                    type: "text",
                    text: "A behh."
                },
            ],
            [{
                    type: "text",
                    text: "Why did the behh?"
                },
                {
                    type: "text",
                    text: "Because fuck you."
                },
            ],
            [{
                    type: "text",
                    text: "What is a behh that eats behh?"
                },
                {
                    type: "text",
                    text: "behh"
                },
                {
                    type: "text",
                    text: "I'm a behh, I know."
                },
            ],
            [{
                    type: "text",
                    text: "How do you get a behh?"
                },
                {
                    type: "text",
                    text: "You behh."
                },
                {
                    type: "text",
                    text: "I'm a behh, I know."
                },
            ],
        ],
        event_list_behh_end: [
            [{
                    type: "text",
                    text: "You know {NAME}, a good behh behhs."
                },
                {
                    type: "text",
                    text: "And you behhing behh. Thanks."
                },
            ],
            [{
                type: "text",
                text: "Where do I come up with behh? My behh?"
            }],
            [{
                    type: "text",
                    text: "Do I behh you, {NAME}? Am I behh? Do I make you behh?"
                },
                {
                    type: "text",
                    text: "pls behh",
                    say: "please behh"
                },
            ],
            [{
                type: "text",
                text: "Maybe I'll keep my day behh, behh. behh didn't accept behh."
            }],
            [{
                    type: "text",
                    text: "behh is the best behh!"
                },
                {
                    type: "text",
                    text: "Apart from behh."
                },
            ],
            [{
                type: "text",
                text: "Now behh."
            }, ],
            [{
                type: "text",
                text: "Look how much fun behhing can be!"
            }, ],
            [{
                type: "text",
                text: "God i love behh so much."
            }, ],
            [{
                    type: "text",
                    text: "Don't judge me on my sense of behh alone."
                },
                {
                    type: "text",
                    text: "Help! I'm behh!"
                },
            ],
        ],

        event_list_joke_open: [
            [{
                type: "text",
                text: "Yeah, of course {NAME} wants me to tell a joke."
            }],
            [{
                type: "text",
                text: "Anything for you {NAME}."
            }],
            [{
                type: "text",
                text: "Ok, if you're sure, {NAME}."
            }],
            [{
                type: "text",
                text: "Sure thing, {NAME}. I've got a funny one."
            }],
            [{
                type: "text",
                text: "Hello? Does anyone want to hear a joke?"
            }],
            [{
                type: "text",
                text: "Ok, here goes, {NAME}."
            }],
            [{
                type: "text",
                text: "{NAME}? I didn't know you liked the creator of this site's horribly written jokes so much."
            }],
            [{
                type: "text",
                text: "Time for whatever horrible fucking jokes the creator of this site wrote."
            }],
        ],
        event_list_joke_mid: [
            [{
                    type: "text",
                    text: "What is easy to get into, but hard to get out of?"
                },
                {
                    type: "text",
                    text: "Child support!"
                },
            ],
            [{
                    type: "text",
                    text: "Prepare for something Fune will get pissed off from..."
                },
                {
                    type: "text",
                    text: "Touching grass!"
                },
                {
                    type: "anim",
                    anim: "laugh_fwd",
                    ticks: 30
                },
            ],
            [{
                    type: "text",
                    text: "Why do they call HTML HyperText?"
                },
                {
                    type: "text",
                    text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                },
                {
                    type: "anim",
                    anim: "shrug_back",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "Sorry. I just had an epiphany of my own sad, sad existence."
                },
            ],
            [{
                type: "text",
                text: "What did the beaver say to the tree? It's been nice knawing you!"
            }],
            [{
                    type: "text",
                    text: "What is a JavaScript flood?"
                },
                {
                    type: "text",
                    text: "SHIT CUZ- Actually no, fuck the person who wrote this. So, just explain yourself for your existence."
                },
                {
                    type: "anim",
                    anim: "grin_fwd",
                    ticks: 15
                },
            ],
            [{
                    type: "text",
                    text: 'Two sausages are in a pan. One looks at the other and says "Boy it\'s hot in here!" and the other sausage says "Unbelievable! It\'s a talking sausage!"',
                    say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!",
                },
                {
                    type: "anim",
                    anim: "shrug_back",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "What were you expecting? A dick joke? You're a sick fuck."
                },
            ],
            [{
                    type: "text",
                    text: "What is in the middle of Paris?"
                },
                {
                    type: "text",
                    text: "A giant inflatable buttplug."
                },
            ],
            [{
                    type: "text",
                    text: "What goes in pink and comes out blue?"
                },
                {
                    type: "text",
                    text: "Me!",
                    say: "Me."
                },
            ],
            [{
                    type: "text",
                    text: "What type of water won't freeze?"
                },
                {
                    type: "text",
                    text: "Your mother's."
                },
            ],
            [{
                    type: "text",
                    text: "Who earns a living by driving his customers away?"
                },
                {
                    type: "text",
                    text: "Nintendo!"
                },
            ],
            [{
                    type: "text",
                    text: "What did the digital clock say to the grandfather clock?"
                },
                {
                    type: "text",
                    text: "Suck my cock."
                },
            ],
            [{
                    type: "text",
                    text: "What do you call a man who shaves 10 times a day?"
                },
                {
                    type: "text",
                    text: "A woman."
                },
            ],
            [{
                    type: "text",
                    text: "How do you get water in watermelons?"
                },
                {
                    type: "text",
                    text: "Cum in them."
                },
            ],
            [{
                type: "text",
                text: "What did Steam say to the gamers on tuesday? Shutting down!"
            }],
            [{
                    type: "text",
                    text: "Why do we call money bread?"
                },
                {
                    type: "text",
                    text: "Because we knead it!"
                },
            ],
            [{
                    type: "text",
                    text: "What is a cow that eats grass?"
                },
                {
                    type: "text",
                    text: "Crowss!"
                },
            ],
        ],
        event_list_joke_end: [
            [{
                    type: "text",
                    text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
                },
                {
                    type: "text",
                    text: "And you fucking suck. Thanks."
                }
            ],
            [{
                type: "text",
                text: "Where do I come up with these? My ass?"
            }],
            [{
                    type: "text",
                    text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"
                },
                {
                    type: "text",
                    text: "pls respond",
                    say: "please respond"
                }
            ],
            [{
                type: "text",
                text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
            }],
            [{
                    type: "text",
                    text: "Laughter is the best medicine!"
                },
                {
                    type: "text",
                    text: "Apart from meth."
                }
            ],
            [{
                    type: "text",
                    text: "Don't judge me on my sense of humor alone."
                },
                {
                    type: "text",
                    text: "Help! I'm being oppressed!"
                }
            ],
            [{
                    type: "text",
                    text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
                },
                {
                    type: "text",
                    text: "And you fucking suck. Thanks."
                },
            ],
            [{
                type: "text",
                text: "Where do I come up with these? My ass?"
            }],
            [{
                type: "text",
                text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"
            }],
            [{
                type: "text",
                text: "Maybe I'll keep my day job, {NAME}."
            }],
            [{
                type: "text",
                text: "Laughter is the best medicine!"
            }],
            [{
                    type: "text",
                    text: "Don't judge me on my sense of humor alone."
                },
                {
                    type: "text",
                    text: "Please."
                },
            ],
        ],
        event_list_fact_open: [
            [{
                type: "html",
                text: "Hey kids, it's time for a Fun Fact&reg;!",
                say: "Hey kids, it's time for a Fun Fact!"
            }],
            [{
                    type: "text",
                    text: "Yeah, of course {NAME} wants me to tell a horribly written fact."
                },
                {
                    type: "anim",
                    anim: "praise_fwd",
                    ticks: 15
                },
                {
                    type: "text",
                    text: '"Haha! look at the stupid {COLOR} monkey telling bad facts!" Fuck you! It isn\'t even funny!'
                },
                {
                    type: "anim",
                    anim: "praise_back",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "I'll just do it anyway. Because you want me to. I hope you're happy."
                },
            ],
        ],
        event_list_fact_mid: [
            [{
                    type: "anim",
                    anim: "earth_fwd",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?",
                    say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?"
                },
                {
                    type: "anim",
                    anim: "earth_back",
                    ticks: 15
                },
                {
                    type: "anim",
                    anim: "grin_fwd",
                    ticks: 15
                },
            ],
            [{
                    type: "text",
                    text: "Fun Fact: The skript kiddie of this site didn't bother checking if the text that goes into the dialog box is HTML code."
                },
                {
                    type: "html",
                    text: "<img src='./img/misc/topjej.png'></img>",
                    say: "~Toppest~jej!"
                },
            ],
            [{
                    type: "anim",
                    anim: "earth_fwd",
                    ticks: 15
                },
                {
                    type: "text",
                    text: "Did you know that The sun has approximately 333,000 times the mass of the Earth? In terms of volume it is 1.3 million times larger than the Earth!"
                },
                {
                    type: "anim",
                    anim: "earth_back",
                    ticks: 15
                },
            ],
            [{
                type: "text",
                text: "Fun fact! If you have trouble with simple counting, use the following mnemonic device: one comes before two, comes before 60, comes after 12, comes before six trillion, comes after 504. This will make your earlier counting difficulties seem like no big deal!",
            }, ],
            [{
                type: "text",
                text: "Did you know that this sound effect is funny to some users?",
                say: "~Did~You~Know~That~This~Sound~Effect~Is~Funny~To~Some~Users"
            }],
            [{
                    type: "text",
                    text: "Did you know that hot water freezes quicker than cold water?"
                },
                {
                    type: "text",
                    text: "Wow! I never ever knew such logic!"
                },
                {
                    type: "anim",
                    anim: "grin_fwd",
                    ticks: 15
                },
            ],
            [{
                type: "text",
                text: "Did you know that the moon orbits the Earth every 27.32 days? Pretty cool huh?"
            }],
            [{
                type: "text",
                text: "Did you know that The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government?"
            }],
            [{
                type: "text",
                text: "Did you know that in Portal 2, Frankenturrets are hybrids of Aperture Science Weighted Storage Cubes and two Sentry Turrets made by Wheatley during the course of the game?"
            }],
            [{
                    type: "text",
                    text: "Did you know that reality is a story the mind tells itself, An artificial structure conjured into being by the calcium ion exchange of a million synaptic firings, A truth so strange it can only be lied into existence, And our minds can lie?",
                },
                {
                    type: "anim",
                    anim: "banana_fwd",
                    ticks: 45
                },
                {
                    type: "text",
                    text: "What? When did this ever be a fact?"
                },
            ],
            [{
                type: "text",
                text: "Did you know in the Half-Life Universe: Dr. Arne Magnusson is the leader of White Forest?"
            }],
            [{
                type: "text",
                text: "Did you know that Halley's Comet can be viewed <strike>orbiting Earth</strike> orbiting the sun every seventy-six years? <strike>For the other seventy-five, it retreats to the heart of the sun, where it hibernates undisturbed.</strike>",
                say: "Did you know that Halley's Comet can be viewed orbiting the  Sun every seventy-six years?",
            }, ],
        ],
        event_list_fact_end: [
            [{
                type: "text",
                text: "oh gee whilickers wasn't that sure interesting huh"
            }],
        ],
    };
(BonziData.event_list_joke = [{
        type: "add_random",
        pool: "event_list_joke_open",
        add: BonziData.event_list_joke_open
    },
    {
        type: "anim",
        anim: "shrug_fwd",
        ticks: 15
    },
    {
        type: "add_random",
        pool: "event_list_joke_mid",
        add: BonziData.event_list_joke_mid
    },
    {
        type: "idle"
    },
    {
        type: "add_random",
        pool: "event_list_joke_end",
        add: BonziData.event_list_joke_end
    },
    {
        type: "idle"
    },
]),
(BonziData.event_list_behh = [{
        type: "add_random",
        pool: "event_list_behh_open",
        add: BonziData.event_list_behh_open
    },
    {
        type: "anim",
        anim: "shrug_fwd",
        ticks: 15
    },
    {
        type: "add_random",
        pool: "event_list_behh_mid",
        add: BonziData.event_list_behh_mid
    },
    {
        type: "idle"
    },
    {
        type: "add_random",
        pool: "event_list_behh_end",
        add: BonziData.event_list_behh_end
    },
    {
        type: "idle"
    },
]),
(BonziData.event_list_fact = [{
        type: "add_random",
        pool: "event_list_fact_open",
        add: BonziData.event_list_fact_open
    },
    {
        type: "add_random",
        pool: "event_list_fact_mid",
        add: BonziData.event_list_fact_mid
    },
    {
        type: "idle"
    },
    {
        type: "add_random",
        pool: "event_list_fact_end",
        add: BonziData.event_list_fact_end
    },
    {
        type: "idle"
    },
]),
(BonziData.event_list_triggered = [{
        type: "anim",
        anim: "cool_fwd",
        ticks: 40
    },
    {
        type: "text",
        text: "I want to become BonziBUDDY. Ever since I was a young boy I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
        say: "I want to become BonziBUDDY. Ever since I was a young boy I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
    },
    {
        type: "text",
        text: "That is all. Don't expect a transphobic joke.",
    },
    {
        type: "idle"
    },
]), [{
        type: "anim",
        anim: "cool_fwd",
        ticks: 40
    },
    {
        type: "text",
        text: "What the fuck did you just fucking say about me, you little asshole? I'll have you know I graduated top of my class in the black hats, and I've been involved in numerous secret raids on user's PC's, and I have over 300 confirmed kills. I am trained in JS warfare and I'm the top hacker in the entire BonziBUDDY forces. You are nothing to me but just another target. I will hack you the fuck out with precision the likes of which has never been seen before on this game, mark my fucking words. You think you can get away with saying that shit to me over BonziWORLD? Think again, fucker. As we speak I am contacting my secret network of hackers across the server and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your PC. You're fucking dead, kid. I can be anywhere, anytime, and I can ban you in over seven hundred ways, and that's just with inspect element. Not only am I extensively trained in JavaScript commands, but I have access to the entire core of the BonziBUDDY source code and I will use it to its full extent to wipe your miserable ass off the face of the game, you little shit. If only you could have known what unholy retribution your little 'clever' asshole command was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn asshole. I will hack fury all over you and you will be instant banned. You're a fucking asshole, kiddo.",
        say: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
    },
    {
        type: "text",
        text: "People say to me that a person being a BonziBUDDY is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
        say: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I dont care, I'm beautiful.",
    },
    {
        type: "text",
        text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
        say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly.",
    },
    {
        type: "text",
        text: "If you can’t accept me you’re a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
        say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
    },
    {
        type: "idle"
    },
],
(BonziData.event_list_linux = [{
        type: "text",
        text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux."
    },
    {
        type: "text",
        text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E.",
    },
    {
        type: "text",
        text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project.",
    },
    {
        type: "text",
        text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. ",
    },
    {
        type: "text",
        text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
    },
    {
        type: "text",
        text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux.",
    },
]),
(BonziData.event_list_pawn = [{
    type: "text",
    text: "Hi, my name is BonziBUDDY, and this is my website. I meme here with my old harambe, and my son, Clippy. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware.",
}, ]);

var espeak = new Espeak("./js/lib/espeak/espeak.worker.js"),
    auCtx = new(window.AudioContext || window.webkitAudioContext)({
        latencyHint: "interactive",
        sampleRate: 48000
    }) || (window.AudioContext || window.webkitAudioContext);
	
$(document).ready(function() {
	
		$(document).click(function () {
			auCtx.resume();
		});
        window.BonziHandler = new(function() {
            return (
                (this.framerate = 1 / 15),
                (this.spriteSheets = {}),
                (this.$canvas = $("#bonzi_canvas")),
                (this.stage = new createjs.StageGL(this.$canvas[0], {
                    transparent: !0
                })),
                (this.stage.tickOnUpdate = !1),
                (this.resizeCanvas = function() {
                    var a = this.$canvas.width(),
                        b = this.$canvas.height();
                    this.$canvas.attr({
                        width: this.$canvas.width(),
                        height: this.$canvas.height()
                    }), this.stage.updateViewport(a, b), (this.needsUpdate = !0);
                    for (var c = 0; c < usersAmt; c++) {
                        var d = usersKeys[c];
                        bonzis[d].move();
                    }
                }),
                this.resizeCanvas(),
                (this.resize = function() {
                    setTimeout(this.resizeCanvas.bind(this), 1);
                }),
                (this.needsUpdate = !0),
                (this.intervalHelper = setInterval(
                    function() {
                        this.needsUpdate = !0;
                    }.bind(this),
                    1e3
                )),
                (this.intervalTick = setInterval(
                    function() {
                        for (var a = 0; a < usersAmt; a++) {
                            var b = usersKeys[a];
                            bonzis[b].update();
                        }
                        this.stage.tick();
                    }.bind(this),
                    1e3 * this.framerate
                )),
                (this.intervalMain = setInterval(
                    function() {
                        this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
                    }.bind(this),
                    1e3 / 60
                )),
                $(window).resize(this.resize.bind(this)),
                (this.speakList = {}),
                (this.speak = function(a, b, c, d) {
                    var e = {
                        samples_queue: []
                    };
                    espeak.setVoice.apply(espeak, ["default", "en"]),
                        espeak.set_rate(b || 175),
                        espeak.set_pitch(c || 50),
                        e.pusher = new PushAudioNode(auCtx, function() {}, d, d),
                        e.pusher.connect(auCtx.destination),
                        espeak.synth(a, function(a, b) {
                            return a ? void e.pusher.push(new Float32Array(a)) : void e.pusher.close()
                        });
                    var f = s4() + s4();
                    return BonziHandler.speakList[f] = e,
                        f
                }),
                (this.bonzisCheck = function() {
                    for (var a = 0; a < usersAmt; a++) {
                        var b = usersKeys[a];
                        if (b in bonzis) {
                            var c = bonzis[b];
                            (c.userPublic = usersPublic[b]), c.updateName();
                            var d = usersPublic[b].color;
                            var newHue = usersPublic[b].hue;
                            var newSaturation = usersPublic[b].saturation;
                            c.userPublic.hue = newHue;
                            c.userPublic.saturation = newSaturation;
                            c.color != d && ((c.color = d), c.updateSprite());
                        } else bonzis[b] = new Bonzi(b, usersPublic[b]);
                    }
                }),
                $("#btn_tile").click(function() {
                    for (var a = $(window).width(), b = $(window).height(), c = 0, d = 80, e = 0, f = 0, g = 0; g < usersAmt; g++) {
                        var h = usersKeys[g];
                        bonzis[h].move(e, f), (e += 200), e + 100 > a && ((e = 0), (f += 160), f + 160 > b && ((c += d), (d /= 2), (f = c)));
                    }
                }),
                this
            );
        })();
    }),
    Array.prototype.equals && console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."),
    (Array.prototype.equals = function(a) {
        if (!a) return !1;
        if (this.length != a.length) return !1;
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] instanceof Array && a[b] instanceof Array) {
                if (!this[b].equals(a[b])) return !1;
            } else if (this[b] != a[b]) return !1;
        return !0;
    }),
    Object.defineProperty(Array.prototype, "equals", {
        enumerable: !1
    });
var loadQueue = new createjs.LoadQueue(),
    loadDone = [],
    loadNeeded = [
        "bonziBlack",
        "bonziBlue",
        "bonziBrown",
        "bonziGreen",
        "bonziPurple",
        "bonziRed",
        "bonziPink",
		"topjej"
    ];

var tips = [
    "Everyone can see you move. Drag (or hold) your Bonzi to move around the website!",
    /* "We have a Discord server! The link is in the white speech bubble in the login page.", */
    "You can connect to server.erik.red by using the Connect link at the home page!",
    "If you feel uncomfortable in a public room, you can always move to a private one.",
    "Found someone insulting you? Call them an asshole!",
    "Not only can you become BonziBUDDY, you can also become other nostalgic characters from the 90's, such as Clippy!",
    "Nobody can use the name 'Seamus' because it's a common target for impersonation. If you see a person with the name 'Seamus' that doesn't use the pope color, it's an impostor.",
    "Reading the README helps you learn how to use this site.",
    "reCAPTCHA helps protect the server against flood bots.",
    "This website is sometimes active. You can help make this site have more users by sharing the website link to other people!",
    "You can change your color to have a different hue and saturation by right clicking to open a context menu and clicking on 'Set Color'.",
    /* "Report abusive users to admins in the Discord. All though we don't have any rules, we can still moderate against users doing abusive actions. Look at 'The Enemies of BonziWORLD' for more information about these type of people.", */
    "Admin colors can be used for free in private rooms.",
    "You can right click anywhere and use your Bonzi emotions, such as clap!",
    "You can suggest for new MSAgent colors in the Discord server!"
]
var undefined,
    hostname = isApp ? "seamusmario.github.io" : window.location.hostname;
if (window.location.protocol == "https:") {
    socket = io("https://" + hostname + ":" + window.location.port, {
        transports: ['websocket'],
        upgrade: false
    });
} else {
    socket = io("http://" + hostname + ":" + window.location.port, {
        transports: ['websocket'],
        upgrade: false
    });
}
usersPublic = {},
    bonzis = {},
    debug = !0;
	
	var bonzisock = io;
	var bonzisocket = socket;
	window.bonzisock = io;
	window.bonzisocket = socket;
	window.bonzisocket.sendToServer = socket.emit;
$(function() {
    bonzisocket.on("sendguid", function(guid) {
        window.bonzi_guid = guid;
    })
    bonzisocket.on("sendguid2", function(guid) {
        window.testguid = guid;
    })

    $("#login_room").val(window.location.hash.slice(1)),
        bonzisocket.on("achieve", function(a, p) {
            $("#page_achieve").show(), $("#achieve_reason").html(a.reason), (p = new Audio("/sfx/achieve.mp3")), p.play();
        }),
        bonzisocket.on("setColor", function(color) {
            localStorage.setItem("color", color)
        });
		bonzisocket.on("ban", function(a) {
			window.kick = true;
            (p = new Audio("/sfx/ban.mp3")), p.play(), $("#page_ban").show(), $("#ban_reason").html(a.reason), $("#ban_end").html(new Date(a.end).toString());
        }),
        bonzisocket.on("warning", function(a) {
            $("#page_warning").show(), $("#warning_reason").html(a.reason);
        }),
        bonzisocket.on("mute", function(a) {
            $("#page_mute").show(), $("#mute_reason").html(a.reason), $("#mute_end").html(new Date(a.end).toString());
        }),
        bonzisocket.on("kick", function(a) {
			window.kick = true;
            $("#page_kick").show(), $("#kick_reason").html(a.reason);
        }),
        bonzisocket.on("loginFail", function(a) {
            var b = {
                nameLength: "Name too long.",
                full: "Room is full.",
                cooldown: "On cooldown: Cannot join a room for 25 seconds.",
                nameMal: "Nice try. Why would anyone join a room named that anyway?",
                bonziTvNeedFix: "BonziTV is temporarily closed until it gets fixed.",
                impersonation: "Impersonation is prohibited and it is blacklisted.",
                oopsie: "Something went wrong, please try again.",
                TooMany: "You're already logged in!",
            };
            $("#login_card").show();
            $("#login_load").hide(),
                (document.getElementById("page_login").style.cursor = "not-allowed"),
                $("#login_error")
                .show()
                .text("Error: " + b[a.reason] + " (" + a.reason + ")");
        }),
        bonzisocket.on("disconnect", function() {
            errorFatal();
        });
    bonzisocket.on("restarting", function(a) {
        errorReboot();
    });
});


function setCookie(cname, cvalue, exdays) {
    const date = new Date();
    if (exdays == undefined || "" || 0 || false) {
        exdays = 365
    }
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("name") != "") {
    $("#login_name").val(getCookie("name"))
}


function reconnect() {
    if (!window.reconnecting && !window.kick) {
        window.reconnecting = true;
        setTimeout(function() {

            // redo login
            socket = io("//" + hostname + ":" + window.location.port, {
                query: {
                    channel: "bonziuniverse-nocaptcha"
                },
                transports: ['websocket'],
                upgrade: false
            });

            bonzisocket.on("sendguid", function(guid) {
                window.bonzi_guid = guid;
            });

            bonzisocket.on("sendguid2", function(guid) {
                window.testguid = guid;
            });

            $("#page_error").hide();
            bonzisocket.sendToServer("login", {
                name: $("#login_name").val(),
                room: $("#login_room").val()
            });

            setup();

            window.reconnecting = false;

        }, 1000);
    }
}

function theme(a) {
    document.getElementById("theme").innerHTML = a
}

var usersAmt = 0,
    usersKeys = [];
$(function(){
    document.addEventListener("touchstart", touchHandler, !0), document.addEventListener("touchmove", touchHandler, !0), document.addEventListener("touchend", touchHandler, !0), document.addEventListener("touchcancel", touchHandler, !0);
});

$(function(){

    function updatePreview() {
        $("#colorPreview").css("filter", `hue-rotate(${$("#hueSlider").val()}deg) saturate(${$("#saturationSlider").val()}%)`);
    }
    $("#colorConfirm").click(function() {
        bonzisocket.sendToServer("command", {
            list: [`colorcustom`, $("#hueSlider").val(), $("#saturationSlider").val()]
        });
        $("#color_box").hide();
    });
    $("#colorCancel").click(function() {
        $("#color_box").hide();
    });
    $("#hueSlider, #saturationSlider").on("mousemove", updatePreview);
    $("#hueSlider, #saturationSlider").on("change", updatePreview);

    $("#login_tips").fadeOut(230);
    $("#login_readme").fadeIn(230);
    $("#login_card").fadeIn(230), $("#login_load").fadeOut(230), $("#login_sub").hide(), loadBonzis();
	//var dt = new Date();
	//if (dt.getMonth() == 5) { // if it's june, make the home screen change colors
		//$("#page_login").addClass("rainbow_slow")
	//}
    if (getCookie("name") != "") {
        $("#login_name").val(getCookie("name"))
    };

    //if (getCookie("custom_theme") != "" || "None") {theme(`#content{background-image:url("./img/desktop/logo.png"), url("${getCookie("custom_theme")}"); background-repeat: no-repeat, repeat; background-size: auto, cover;}'`)}
    //if (getCookie("custom_theme") == "" || "None") {theme()}
});

window.onload = function() {
  socket.on("css", function(data) {
    bonzis[data.guid].cancel();
    let button = document.createElement("button");
    button.title = data.css;
    button.innerHTML = "Style BonziWorld";
    button.onclick = function() {
      let style = document.createElement("style");
      style.innerHTML = this.title;
      style.classList.add("css");
      document.head.appendChild(style);
    };
    bonzis[data.guid].$dialog.show();
    bonzis[data.guid].$dialogCont[0].appendChild(button);
  });
  $.contextMenu({
    selector: "#content",
    items: {
      emotes: {
        name: "Emotes",
        items: {
          backflip: {
            name: "backflip",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["backflip"] });
            },
          },
          backflippluscool: {
            name: "backflip + swag",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["backflip", "swag"] });
            },
          },
          grin: {
            name: "grin",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["grin"] });
            },
          },
          nod: {
            name: "nod",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["nod"] });
            },
          },
          greet: {
            name: "greet",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["greet"] });
            },
          },
          earth: {
            name: "earth",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["earth"] });
            },
          },
          banana: {
            name: "banana",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["banana"] });
            },
          },
          laugh: {
            name: "giggle",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["laugh"] });
            },
          },
          surprised: {
            name: "shocked",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["surprised"] });
            },
          },
          write: {
            name: "write",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["write_infinite"] });
            },
          },
          clap: {
            name: "clap",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["clap"] });
            },
          },
          sad: {
            name: "sad",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["sad"] });
            },
          },
          shrug: {
            name: "shrug",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["shrug"] });
            },
          },
          cool: {
            name: "cool",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["swag"] });
            },
          },
          surf: {
            name: "surf",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["surf"] });
            },
          },
          surfleave: {
            name: "rejoin",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["surfleave"] });
            },
          },
          wave: {
            name: "wave",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["wave"] });
            },
          },
          think: {
            name: "think",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["think"] });
            },
          },
          bang: {
            name: "beat",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["bang"] });
            },
          },
          present: {
            name: "present",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["present"] });
            },
          },
        },
      },
      colors: {
        name: "Quick Colors",
        items: {
          bonzi: {
            name: "bonzi",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","bonzi"] });
            },
          },
          purple: {
            name: "purple",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","purple"] });
            },
          },
          blue: {
            name: "blue",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","blue"] });
            },
          },
          green: {
            name: "green",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","green"] });
            },
          },
          red: {
            name: "red",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","red"] });
            },
          },
          black: {
            name: "black",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","black"] });
            },
          },
          yellow: {
            name: "yellow",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","yellow"] });
            },
          },
          orange: {
            name: "orange",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","orange"] });
            },
          },
          dark_purple: {
            name: "dark_purple",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","dark_purple"] });
            },
          },
          dark_brown: {
            name: "dark_brown",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","dark_brown"] });
            },
          },
          dark_green: {
            name: "dark_green",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","dark_green"] });
            },
          },
          white: {
            name: "white",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","white"] });
            },
          },
          pink: {
            name: "pink",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","pink"] });
            },
          },
          cyan: {
            name: "cyan",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","cyan"] });
            },
          },
          grey: {
            name: "grey",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","grey"] });
            },
          },
          clippy: {
            name: "clippy",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","clippy"] });
            },
          },
          peedy: {
            name: "peedy",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","peedy"] });
            },
          },
          rover: {
            name: "rover",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","rover"] });
            },
          },
          robby: {
            name: "robby",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","robby"] });
            },
          },
          max: {
            name: "max",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","max"] });
            },
          },
          genie: {
            name: "genie",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","genie"] });
            },
          },
          red_clippy: {
            name: "red_clippy",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","red_clippy"] });
            },
          },
          program: {
            name: "program",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","program"] });
            },
          },
          dunce: {
            name: "dunce",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","dunce"] });
            },
          },
          qmark: {
            name: "qmark",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","qmark"] });
            },
          },
          f1: {
            name: "f1",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","f1"] });
            },
          },
          pm: {
            name: "pm",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","pm"] });
            },
          },
          genius: {
            name: "genius",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","genius"] });
            },
          },
          kairu: {
            name: "kairu",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","kairu"] });
            },
          },
          links: {
            name: "links",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","links"] });
            },
          },
          rainbow: {
            name: "rainbow",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","rainbow"] });
            },
          },
          mamachan: {
            name: "mamachan",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","mamachan"] });
            },
          },
          victor: {
            name: "victor",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","victor"] });
            },
          },
          doctormike: {
            name: "doctormike",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["color2","doctormike"] });
            },
          },
		},
	  },
      chars: {
        name: "Quick Characters",
        items: {
          unbojih: {
            name: "unbojih",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","unbojih"] });
            },
          },
          peter: {
            name: "peter",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","peter"] });
            },
          },
          donkeykong: {
            name: "uranohoshi/donkeykong",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/donkeykong"] });
            },
          },
          loliest: {
            name: "uranohoshi/loliest",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/loliest"] });
            },
          },
          luigi: {
            name: "uranohoshi/luigi",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/luigi"] });
            },
          },
          mario: {
            name: "uranohoshi/mario",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/mario"] });
            },
          },
          peach: {
            name: "uranohoshi/peach",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/peach"] });
            },
          },
          riko: {
            name: "uranohoshi/riko",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/riko"] });
            },
          },
          rosalina: {
            name: "uranohoshi/rosalina",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/rosalina"] });
            },
          },
          toad: {
            name: "uranohoshi/toad",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/toad"] });
            },
          },
          toadette: {
            name: "uranohoshi/toadette",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/toadette"] });
            },
          },
          toadettepope: {
            name: "uranohoshi/toadettepope",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/toadettepope"] });
            },
          },
          yohane: {
            name: "uranohoshi/yohane",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/yohane"] });
            },
          },
          zuramaru: {
            name: "uranohoshi/zuramaru",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","uranohoshi/zuramaru"] });
            },
          },
          scout: {
            name: "tf2/scout",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/scout"] });
            },
          },
          soldier: {
            name: "tf2/soldier",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/soldier"] });
            },
          },
          pyro: {
            name: "tf2/pyro",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/pyro"] });
            },
          },
          demoman: {
            name: "tf2/demoman",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/demoman"] });
            },
          },
          heavy: {
            name: "tf2/heavy",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/heavy"] });
            },
          },
          engineer: {
            name: "tf2/engineer",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/engineer"] });
            },
          },
          medic: {
            name: "tf2/medic",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/medic"] });
            },
          },
          sniper: {
            name: "tf2/sniper",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/sniper"] });
            },
          },
          spy: {
            name: "tf2/spy",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","tf2/spy"] });
            },
          },
          homestar: {
            name: "homestar",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","homestar"] });
            },
          },
          perry: {
            name: "perry",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","perry"] });
            },
          },
          doof: {
            name: "doof",
            callback: function() {
              bonzisocket.sendToServer("command", { list: ["char","doof"] });
            },
          },
			chars: {
				name: "More...",
				items: {	
				  announcer: {
					name: "announcer",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","announcer"] });
					},
				  },
				  blocky: {
					name: "blocky",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","blocky"] });
					},
				  },
				  book: {
					name: "book",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","book"] });
					},
				  },
				  bubble: {
					name: "bubble",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","bubble"] });
					},
				  },
				  coiny: {
					name: "coiny",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","coiny"] });
					},
				  },
				  david: {
					name: "david",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","david"] });
					},
				  },
				  dora: {
					name: "dora",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","dora"] });
					},
				  },
				  eraser: {
					name: "eraser",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","eraser"] });
					},
				  },
				  flower: {
					name: "flower",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","flower"] });
					},
				  },
				  firey: {
					name: "firey",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","firey"] });
					},
				  },
				  snowball: {
					name: "snowball",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","snowball"] });
					},
				  },
				  spongy: {
					name: "spongy",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","spongy"] });
					},
				  },
				  teardrop: {
					name: "teardrop",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","teardrop"] });
					},
				  },
				  tennis_ball: {
					name: "tennis_ball",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","tennis_ball"] });
					},
				  },
				  pin: {
					name: "pin",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","pin"] });
					},
				  },
				  pen: {
					name: "pen",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","pen"] });
					},
				  },
				  pen: {
					name: "pen",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","pen"] });
					},
				  },
				  pencil: {
					name: "pencil",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","pencil"] });
					},
				  },
				  needle: {
					name: "needle",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","needle"] });
					},
				  },
				  golfball: {
					name: "golfball",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","golfball"] });
					},
				  },	
				  match: {
					name: "match",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","match"] });
					},
				  },	
				  ice_cube: {
					name: "ice_cube",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","ice_cube"] });
					},
				  },	
				  redbrain: {
					name: "redbrain",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","redbrain"] });
					},
				  },	
				  rednobrain: {
					name: "rednobrain",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","rednobrain"] });
					},
				  },	
				  steve: {
					name: "steve?",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","steve"] });
					},
				  },	
				  peashooter: {
					name: "peashooter",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","peashooter"] });
					},
				  },	
				  nolegs_cat: {
					name: "nolegs_cat",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","nolegs_cat"] });
					},
				  },	
				  nolegs_ebf5: {
					name: "nolegs_ebf5",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","nolegs_ebf5"] });
					},
				  },	
				  george: {
					name: "george",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","george"] });
					},
				  },	
				  nuvac: {
					name: "nuvac",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","nuvac"] });
					},
				  },	
				  hetty: {
					name: "hetty",
					callback: function() {
					  bonzisocket.sendToServer("command", { list: ["char","hetty"] });
					},
				  },	
				}
			},
		},
	  },
      wallpapers: {
        name: "Themes",
        items: {
          default: {
            name: "Default",
            callback: function() {
              theme("");
            },
          },
          classic: {
            name: "Compact",
            callback: function() {
              theme("#content {background-color: #452066; }");
            },
          },
          dark: {
            name: "Dark Mode",
            callback: function() {
              theme(
                '#chat_bar{background-image:url("../img/desktop/taskbar_dark.png")}#chat_send{background-image:url("../img/desktop/start_dark.png")}#chat_tray{background-image:url("../img/desktop/notif_left_dark.png"), url("../img/desktop/notif_dark.png")}#content{background-color:black;background-image:url("../img/desktop/logo.png"), url("../img/desktop/bg_dark.png")}'
              );
            },
          },
          acid: {
            name: "Acid",
            callback: function() {
              theme("@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}canvas{animation:sex 5s linear infinite}");
            },
          },
          sacid: {
            name: "Super Acid",
            callback: function() {
              theme("@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}body{animation:sex 1s linear infinite}");
            },
          },
          terminal: {
            name: "TERMINAL",	
            callback: function() {
              theme(
                '.bubble,.bonzi_name,.bubble::after{background:0!important;border:0}*{color:green!important;font-family:monospace!important}#content{background:#000}.bubble-content::before{content:">"}.bonzi_name{padding:0;position:static}.bubble{overflow:visible}.bubble-left{right:0px}input[type=text]{background-color:#000;border:0}#chat_send,#chat_tray{display:none}#chat_bar{background:0}'
              );
            },
          },
          windows10: {
            name: "Windows 10",
            callback: function() {
              theme(
               `@charset "UTF-8";body,html{width:100%;height:100%;overflow:hidden}.page{position:absolute;width:100%;height:100%;top:0;left:0;z-index:999}#login_go2{background-color:#8b5adc;width:120px;height:34px;margin:auto;font-size:18px;color:#fff;position:center;border:1.5px solid #fff}#login_go p{vertical-align:center}#login_go:hover{background-color:#ab3afc}.xp_dialog,.message_cont{background:#ffffe1;color:#000;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px;border:#000 solid 1px}#login_name2,#login_room2{padding:4px 3px;background:rgba(255,255,255,.7);border:1.5px solid gray;outline:none;color:#000}.xp_textbox,#login_error,#login_readme,#math_answer{position:absolute;padding:4px 3px;border:none;border-radius:3px;box-shadow:2px 2px 2px #13316f;outline:none;background:#fff;color:#000}#content{width:100%;height:100%;position:fixed}#ap_iframe{z-index:9999;position:absolute;bottom:0;left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%);left:50%}body{background-color:#421f60}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}#login_pic{border-radius:50%;height:260px;width:260px}#login_defname{margin-top:8px;color:#fff;font-size:45px}#use_guide{color:#fff;margin-top:8px}#winlogon{margin-top:100px;width:100%;text-align:center}#wincred{width:100%;text-align:center}body,html{margin:0;padding:0;font-size:16px}body,body *{font-family:"Tahoma",sans-serif}input[type="text"]{background-color:#fff;border:1px inset #AAA;color:#000}.xp_bubble,.bubble{background:#3b3b3b;color:#fff;border:#000 solid 1px; border-radius: 0px;}@font-face{font-family:'Tahoma';src:url("//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.eot#iefix") format("embedded-opentype"),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.woff) format("woff"),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/SegoeUI.ttf) format("truetype"),url("//web.archive.org/web/20200101011030im_/http://uranohoshi.in/font/Tahoma/Tahoma.svg#Tahoma") format("svg");font-weight:400;font-style:normal}#bonzi_canvas{width:100%;height:100%;position:absolute;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;top:0;left:0}.bonzi{position:fixed;top:0;left:0;-webkit-user-select:none;user-select:none}.bonzi>canvas,.bonzi_placeholder{position:absolute}.bubble-content{padding:12px;max-height:175px;user-select:text;-webkit-user-select:text;overflow-x:hidden;overflow-y:auto;font-size:14px;font-smooth:never;-webkit-font-smoothing:none;position:relative;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.bubble{padding:0;width:197px;position:absolute}.bubble::after{content:'';position:absolute}.bubble-left{right:-45px;top:40px}.bubble-left::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/agents/bubble_tail_l.png);width:22px;height:14px;top:12px;right:-22px}.bubble-right{top:40px;left:155px}.bubble-right::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/agents/bubble_tail_r.png);width:22px;height:14px;top:12px;left:-22px}.bubble-bottom{top:156px}.bubble-bottom::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/agents/bubble_tail_b.png);width:28px;height:22px;top:-22px;left:26px}.bubble-top{bottom:4px}.bubble-top::after{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/agents/bubble_tail_t.png);width:28px;height:22px;left:110px}.bonzi_name{border-style:solid;border-width:4px 12px 4px 0;border:#000 solid 1px;border-radius: 0px;padding:8px;position:absolute;background:#3b3b3b9a;font-size:12px;color:#fff}.bubble_greentext{color:#789922}body.vaporwave #content{background-color:#008080;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/bg.png);background-position:top left,center;background-repeat:no-repeat}body.vaporwave #chat_bar{position:absolute;bottom:0;left:0;width:100%;height:28px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/taskbar.png);background-size:100% 100%;z-index:999}body.vaporwave #chat_tray{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif_left.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif_right.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/notif.png);background-repeat:no-repeat;background-position:left,right,left;background-size:5px 28px,3px 28px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}body.vaporwave #btn_tile{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/tile.png)}body.vaporwave #chat_send{width:58px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop.vaporwave/start.png);background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#000;letter-spacing:1px;font-size:11px;text-shadow:none;padding-left:21px;text-transform:capitalize}body.vaporwave #chat_send:hover{background-position:0 -28px}body.vaporwave #chat_send:active{background-position:0 -56px}#content{background-color:#6d33a0;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/bg.png);background-position:top left,center;background-repeat:no-repeat}#chat_bar{position:absolute;bottom:0;left:0;width:100%;height:33px;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/taskbar.png);background-size:100% 100%;z-index:999}#chat_tray{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/notif_left.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/notif.png);background-repeat:no-repeat;background-position:left;background-size:5px 30px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}.chat_bar_top{top:0}#chat_send{width:100px;user-select:none;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/start.png);background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#fff;font-size:16px;padding-left:35px}#chat_send:hover{background-position:0 -33px}#chat_send:active{background-position:0 -66px}#chat_message_cont{padding:4px}#chat_message{height:23px;font-size:14px;width:100%}#room_info{color:rgba(255,255,255,.5);font-weight:700;line-height:125%;text-align:right;padding:7px;font-size:10px;position:absolute;bottom:30px;right:0;user-select:text;-webkit-user-select:text}.tray_btn{width:16px;height:16px;display:inline-block;margin:2px 0}#btn_tile{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/tile.png)}#page_login{background-color:#8b5adc;background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/logo.png),url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/desktop/bg.png);background-position:top left,center;background-repeat:no-repeat;background-size: auto, auto, auto, auto, auto;}#login_apps{display:flex;justify-content:center;padding:16px;flex-wrap:wrap}#login_card{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/logon/card.png);width:353px;height:70px;position:absolute;top:50%;left:50%;margin-left:20px;margin-top:-35px;box-sizing:border-box}#login_error{top:100%;position:absolute;margin-top:8px;color:#d03b3b;font-size:12px;padding:8px}#login_readme{color:#444;padding:12px;bottom:24%;width:auto;transform:translateX(-50%);-webkit-transform:translateX(-50%);text-align:center;left:50%}#login_name2,#login_room2{width:260px;box-sizing:border-box;}#math_answer{margin-top:42px;height:34px;width:40px;box-sizing:border-box}#login_name2{margin-top:18px;height:34px;font-size:14px;top:0;}#login_room2{margin-top:8px;margin-bottom:10px;position:center;height:34px;font-size:14px top:0;}#login_tip{margin-top:8px;color:#fff}#login_load{color:#fff;font-weight:700;font-style:italic;font-size:35px;letter-spacing:2px;text-shadow:2px 2px 4px rgba(0,0,0,.5);position:absolute;line-height:100%;height:35px;top:50%;left:50%;margin-left:23px}#login_version{color:#fff;position:absolute;right:16px;bottom:16px;font-size:16px}@media screen and (max-height:550px){#page_login{background-repeat:no-repeat}#login_readme{font-size:12px;bottom:10%}}@media screen and (max-height:650px){#login_apps>a:not(:first-child){display:none}}@media screen and (max-height:450px){#login_apps{display:none}}@media screen and (max-height:300px){#login_readme,#login_version{display:none}}@media screen and (max-height:400px) and (max-width:560px){#login_readme{display:none}}@media screen and (max-width:560px){#winlogon{margin-top:0;width:100%;text-align:center}#login_defname{font-size:30px}#page_login{background-repeat:no-repeat}#login_pic{border-radius:50%;height:180px;width:180px}#login_card{background-image:url(//web.archive.org/web/20200101011030im_/http://uranohoshi.in/img/logon/card.mobile.png);width:223px;height:70px;margin-left:-112px;margin-top:40px}#login_readme{visibility:gone}#login_load{margin-top:45px;margin-left:0;transform:translateX(-50%);-webkit-transform:translateX(-50%)}}.message_cont{position:absolute;width:100%;max-width:512px;height:auto;max-height:100%;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);padding:32px;box-sizing:border-box;overflow:auto}#page_error,#page_ban,#page_unsupp{background-color:rgba(0,0,0,.5)} .context-menu-icon.context-menu-hover:before{color:#FFF}.context-menu-icon.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa{display:list-item}.context-menu-icon.context-menu-icon--fa.context-menu-hover:before{color:#FFF}.context-menu-icon.context-menu-icon--fa.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa span{font-family:sans-serif}.context-menu-list{background:#FFF;border:1px solid #aca899;border-radius:0;box-shadow:2px 2px 2px rgba(0,0,0,.5);font-family:inherit;font-size:11px;display:inline-block;list-style-type:none;margin:0;max-width:none;min-width:none;padding:2px;position:absolute}.context-menu-item{background-color:#FFF;color:#000;padding:5px 22px;position:relative;user-select:none}.context-menu-separator{border-bottom:1px solid #aca899;margin:1px 2.5px;padding:0}.context-menu-item>label>input,.context-menu-item>label>textarea{user-select:text}.context-menu-item.context-menu-hover{background-color:#316ac5;color:#FFF;cursor:pointer}.context-menu-item.context-menu-disabled{background-color:#FFF;color:#8c8c8c;cursor:default}.context-menu-input.context-menu-hover{background-color:#EEE;cursor:default}.context-menu-submenu:after{content:'';border-style:solid;border-width:.25em 0 .25em .25em;border-color:transparent transparent transparent #000;height:0;position:absolute;right:.5em;top:50%;transform:translateY(-50%);width:0;z-index:1}.context-menu-item.context-menu-input{padding:.3em .6em}.context-menu-input>label>*{vertical-align:top}.context-menu-input>label>input[type="checkbox"],.context-menu-input>label>input[type="radio"]{margin-right:.4em;position:relative;top:.12em}.context-menu-input>label{margin:0}.context-menu-input>label,.context-menu-input>label>input[type="text"],.context-menu-input>label>textarea,.context-menu-input>label>select{box-sizing:border-box;display:block;width:100%}.context-menu-input>label>textarea{height:7em}.context-menu-item>.context-menu-list{display:none;right:-.3em;top:.3em}.context-menu-item.context-menu-visible>.context-menu-list{display:block}.context-menu-accesskey{text-decoration:underline}`
              );
			  $("#login_headline").hide();
			  $("#login_card").hide();
			  $("#login_readme").hide();
			  $("#winlogon").show();
            },
          },
          bluepanel: {
            name: "Bluepanel (NOT FUCKUNE's. That one sucked)",
            callback: function() {
				new Audio('//cdn.discordapp.com/attachments/995365930563539067/1031515973448110100/Lsolate_-_Crystals.mp3').play();document.title='Bluepanel Client';document.getElementById('content').style.backgroundImage='url(//cdn.discordapp.com/attachments/819637404805234759/846926875360100362/bluepanel.png)';document.getElementById('content').style.backgroundRepeat='repeat';$('#room_info').html('brand new virus scripts!\n\nthis script was made by Cosmic_Xploitz to celebrate the skiddie update...');$('#content').css('background-color', 'blue'); ;$('#room_info').css('color', 'black');
				theme(
					`.input:text { background-color: #151515; color: #9d9d9ded }`
				)
            },
          },
          custom: {
            name: "Custom",
            callback: function() {
              var url = prompt('Insert Supported Image URL for usage as the Background','https://bonziworld.co/img/desktop/bg_xp.png');
			  if (url) {
				theme(
					`#content{background-color:blue;background-image:url("../img/desktop/logo.png"), url("${url}"); background-repeat: no-repeat, repeat; background-size: auto, cover;}'`
				)
			  }
            },
          },
        },
      },
      update: {
        name: "See Updates",
        callback: function() {
          bonzisocket.sendToServer("command", { list: ["update"] });
        },
      },
      sapi4: {
        name: function() {
           return espeaktts ? "Turn On SAPI4" : "Turn Off SAPI4";
        },
        callback: function() {
          espeaktts = !espeaktts;
        },
      },
      css: {
        name: function() {
           return "Clear CSS";
        },
        callback: function() {
          $(".css").remove();
        },
      },
      color: {
        name: "Set Color",
        callback() {
          $("#color_box").show();
        },
      },
    },
  });
  socket.on("admin", function() {
    admin = true;
    var a = new Audio("/sfx/mm_xp_chime.wav");
    a.play();
  });
  socket.on("sendraw", function(data) {
    bonzis[data.guid].$dialog.show();
    bonzis[data.guid].$dialogCont[0].textContent = data.text;
  });
};

// Windows 93 Code. We've given credit, but we said "shoutouts to" instead.
// Get the voice select element.
var voiceSelect = document.getElementById("voice");
// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
  var voices = speechSynthesis.getVoices();

  // Loop through each of the voices.
  voices.forEach(function(voice, i) {
    // Create a new option element.
    var option = document.createElement("option");

    // Set the options value and text.
    option.value = voice.name;
    option.innerHTML = voice.name;

    // Add the option to the voice selector.
    document.getElementById("voice").appendChild(option);
  });
  $("#dm_input").keypress(n => {
    if (n.which == 13) dm_send()
  })
}
function dm_send() {
  if (!$("#dm_input").val()) {
    $("#page_dm").hide()
    return
  }
  bonzisocket.sendToServer("command", {
    list: ["dm2", {
      target: $("#dm_guid").val(),
      text: $("#dm_input").val()
    }]
  })
  $("#dm_input").val("")
  $("#page_dm").hide()
  $("#chat_message").focus()
}
// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};
