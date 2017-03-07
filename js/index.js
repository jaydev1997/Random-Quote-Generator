/******Quotes Array******/
var arrQuotes = [{
        text: "\"Life is 10% what happens to you and 90% how you react to it.\"",
        author: "Charles R. Swindoll"
    }, {
        text: "\"Failure will never overtake me if my determination to succeed is strong enough.\"",
        author: "Og Mandino"
    }, {
        text: "\"The pain you feel today is the strength you feel tomorrow.\"",
        author: "Jaydev Shiroya"
    }, {
        text: "\"In order to succeed, we must first believe that we can.\"",
        author: "Nikos Kazantzakis"
    }, {
        text: "\"What you do today can improve all your tomorrows.\"",
        author: "Ralph Marston"
    }, {
        text: "\"Arriving at one goal is the starting point to another.\"",
        author: "John Dewey"
    }, {
        text: "\"Don't watch the clock; do what it does. Keep going.\"",
        author: "Sam Levenson"
    }, {
        text: "\"A creative man is motivated by the desire to achieve, not by the desire to beat others.\"",
        author: "Ayn Rand"
    }, {
        text: "\"It does not matter how slowly you go as long as you do not stop.\"",
        author: "Confucius"
    },

    {
        text: "\"Stay Hungry. Stay Foolish.\"",
        author: "Steve Jobs"
    }, {
        text: "\"Good Artists Copy, Great Artists Steal.\"",
        author: "Pablo Picasso"
    }, {
        text: "\"Argue with idiots, and you become an idiot.\"",
        author: "Paul Graham"
    }, {
        text: "\"Be yourself; everyone else is already taken.\"",
        author: "Oscar Wilde"
    }, {
        text: "\"Simplicity is the ultimate sophistication.\"",
        author: "Leonardo Da Vinci"
    },

    {
        text: "\"If you can dream it, you can do it.\"",
        author: "Walt Disney"
    }
];
/******Quotes Array END******/
var lastIndex = arrQuotes.length - 1;
$("#btn1").click(function() {
    getRandomQuote();
});
$(window).load(function() {
    getRandomQuote();
});

function getRandomQuote() {
    var i = getRandomInt(0, arrQuotes.length - 1);
    $("#quoter").text(arrQuotes[i].text);
    $("#author").text("~ " + arrQuotes[i].author);
};


function getRandomInt(min, max) {
    var curIndex = lastIndex;
    while (curIndex === lastIndex) {
        curIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    lastIndex = curIndex;
    return curIndex;
};

/******Tweet button******/

$(".tweet").click(function() {

    window.open("http://twitter.com/?status=".concat(arrQuotes[lastIndex].text + " " + arrQuotes[lastIndex].author), '_blank');

});


/******Tweet button END******/



var colors = new Array(
    [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient, 0.1);



