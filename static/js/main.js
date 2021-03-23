var greeting = ["Hola, this is fofu.", "", "#ffffff"];
var qq = ["570431231", "https://qm.qq.com/cgi-bin/qm/qr?k=hUWxfPBcb9m0Odid24TrVRfi96ULio4M", "#12b7f5"];
var arcamera = ["Fursona in AR", "https://fofu.dispnt.com/AR", "#3f729b"];
var twitter = ["@dispnt", "https://twitter.com/dispnt", "#1DA1F2"];
var character = ["Character Sheet", "https://fofu.dispnt.com/CS", "#f7a082"]

var z = 0;
var wipeId = 0;

function fadeinorout(element, inorout, listname, bindelement) { // 1=in 0=out
    $(element).children(".qr").css({
        "opacity": inorout,
        "transition": "opacity 1s"
    });

    var listname = eval(listname);
    var bgsize = "100% 0%";
    var bgcolor = "linear-gradient(to top, ".concat(listname[2], ",", listname[2], ")");


    if (inorout == "1") {

        $("#text").text(listname[0]);
        $("#text").attr('href', listname[1]);
        qrcode(listname[1], bindelement);
        $("#text").css({
            "color": "white"
        });
        //new div for wipe every hover
        wipeId++;
        var divContent = "<div id='".concat(wipeId, "' ", "class='w-full h-screen bg absolute top-0 left-0'></div>")
        var div = $(divContent);
        $("#app").prepend(div);
        bgsize = "100% 100%";
        z++;
        if (element != ".0") {
            $(".bg#".concat(wipeId)).css({
                "background-image": bgcolor,
                "z-index": z,
            });

        } else {


            var bgwhitewipe = "linear-gradient(to bottom, ".concat("#ffffff", ",", "#ffffff", ")");

            $("#text").css({
                "color": "#ff713f"
            });
            console.log("a");

            $(".bg#".concat(wipeId)).css({
                "background-image": bgwhitewipe,
                "z-index": z,
                "background-position": "top center"
            });

        }


    }
}


$(document).ready(function () {
    $(".1 i").hover(function () {
        fadeinorout(".1", "1", "qq", "qrqq");
    }, function () {
        fadeinorout(".1", "0", "qq", "qrqq");
    })
    $(".2 i").hover(function () {
        fadeinorout(".2", "1", "arcamera", "qrar");
    }, function () {
        fadeinorout(".2", "0", "arcamera", "qrar");
    })

    $(".3 i").hover(function () {
        fadeinorout(".3", "1", "twitter", "qrtwitter");
    }, function () {
        fadeinorout(".3", "0", "twitter", "qrtwitter");
    })
    $(".4 i").hover(function () {
        fadeinorout(".4", "1", "steam", "qrsteam");
    }, function () {
        fadeinorout(".4", "0", "steam", "qrsteam");
    })

    $("#img").hover(function () {
        fadeinorout(".0", "1", "greeting", "greeting");
    }, function () {
        fadeinorout(".0", "0", "greeting", "greeting");
    })

    $("#img").click(function () {
        fadeinorout(".0", "1", "character", "character");
    })
    console.log("Github:https://github.com/Dispnt/fofu.dispnt.com/");
});