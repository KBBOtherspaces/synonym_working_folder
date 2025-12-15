let words = [
    "Ode to Synonyms",
    "I am smitten by excess, ",
    "stimulants stretch the drum skin ",
    "taught, primed for a steady roll ",
    "of consonants, greasing wheels ",
    "of tongue and teeth.",
    " I want to swim in ",
    "the multiples of all the ways ",
    "I can say a thing ",
    "that one word ",
    "will not suffice.",
    "Let it rain down on me",
    "As in: deluge, rain, storm, downpour, monsoon, cloud, burst,",
    " inundation, torrential rain",
    "i.e. she added that meteorological conditions play a role as extreme downpours can flush water through the rocks or put pressure on infrastructure like water main.",
    "Let the excess leave me  soaked ",
    "i.e. dripping, saturated, washed, wet, flooded, drenched, ",
    "waterlogged, flushed, doused,. awash, bedraggled, submerged",
    "As in:, along the way, he soaked in the public baths in Tehran, visited temples in Nepal and smoked marijuana for the first time in Afghanistan. ",
    "Or: we didn't want to get soaked in sweat on the way up, only to freeze on the way down. ",
    "Or: rain that once soaked into aquifers now races across the surface, increasing the risk of flash floods and carrying toxins from burn structures into water systems that serve millions.",
    "All the ways to define flood",
    "1) a great flowing or overflowing of water, especially over land, not usually submerged ",
    "2) any great outpouring or stream as in a flood of emotions, a flood of requests, a flood of patients ",
    "3) The Flood (capital F) a universal deluge recorded in the Bible, believe to have occurred in the days of Noah for The rise are flowing out in of the tide in ( ebb)",
    "5) a floodlight ",
    "6) Archaic: a large body of water",
    "And all the ways to say flood",
    "Deluge, downpour, flow, glut, spate, stream, surge, tide, torrents, tsunami, wave, abundance, alluvion, boar, bounty, cataclysm, current, eager, excess, flux, inundation, multitude, overflow, plenty, perfusion rush super abundance ",
    "ie: The article was met with a flood of malicious comments, many referencing the erroneous suggestion the taxpayers money was used for the fund. Another one: it can purify water and slow down waves protecting coastal areas from flooding as a result. Another one: the flood of executive orders and information is meant to overwhelm you, confuse you, distract you and make you feel helpless.",
    "All the ways to resuscitate",
    "Revive someone from unconsciousness or apparent death ",
    "\"An ambulance crew tried to resuscitate him\" ",
    "make something, such as an idea or enterprise, active or vigorous again ",
    "\"measures to resuscitate the failing Japanese economy\"",
    "In other words, energize, invigorate, rejuvenate, restore, resurrect ,revitalize, awaken ",
    "enkindle, enliven, renovate, save",
    " breathe new life into ",
    "bring back to life ",
    "come to life ",
    "give mouth-to-mouth resuscitation ",
    "perform CPR ",
    "wake up."
];
let current_word;
let next_word;
let clickCount = 0;
let img;
let position;
let offset;
let bgSwitch = true;
let bg1;
let bg2;
async function preload() {
    img = await loadImage('assets/images/metropolis-clock-1.png', 'assets/images/metropolis-clock-2.png');
}
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Get background elements
    bg1 = document.getElementById('bg1');
    bg2 = document.getElementById('bg2');

    // Set background images once
    bg1.style.backgroundImage = 'url("assets/images/metropolis-clock-1.png")';
    bg1.style.backgroundSize = 'cover';
    bg1.style.backgroundPosition = 'center';

    bg2.style.backgroundImage = 'url("assets/images/metropolis-clock-2.png")';
    bg2.style.backgroundSize = 'cover';
    bg2.style.backgroundPosition = 'center';

    // Start the background transition (only once)
    startBackgroundTransition();
}
function mousePressed() {
    clickCount = clickCount + 1;
    current_word = words[clickCount % words.length];
    next_word = words[clickCount + 1];

    textFont('monospace');
    textSize(28);
    fill('black');
    textStyle(BOLD);
    text(current_word, windowWidth * 0.125, 50 * clickCount, windowWidth * 0.9, windowHeight);

}
function draw() {
    if (clickCount > [10] == true) {
    } else {
        text(words[next_word], width / 3, 80);
        textSize(30);
        textStyle('bold');
    }
}
//background(0);

//     if (clickCount < words.length){
//       text(words[current_word], width/2, 180);

//     }

//     if (clickCount < words.length -1){
//       text(words[next_word], width/2, 300);
//     }
//background images shift
function startBackgroundTransition() {
    setInterval(() => {
        if (bgSwitch) {
            bg2.style.opacity = '1';
            bg1.style.opacity = '0';
        } else {
            bg1.style.opacity = '1';
            bg2.style.opacity = '0';
        }
        bgSwitch = !bgSwitch;
    }, 12000); // Switch every 12 sec
}


function windowResized() {
    if (windowWidth != width || windowHeight != height) {
        resizeCanvas(windowWidth, windowHeight);
    }
}




////// BELOW IS THE CODE FOR CAROLANN TV P5JS POEM PIECE
/// let myFont;
// let position;
/// let img;
/// let offset;
//// let words;


///async function setup() {
// //.  createCanvas(740, 880);
//myFont = await loadFont("SUSEMono-VariableFont_wght.ttf");
//img = await loadImage('TVpic.jpg');
//textFont(myFont);
//textAlign(CENTER, CENTER);
////frameRate(random(5, 26));

////words = ['TV talking', 'its going to be ok', 'CarolAnn', 'You saw this one before', 'At a sleepover', 'as a kid', 'you will never forget', 'a mirror', 'was it the pool or the screen', ' am i awake or is this.a dream', 'swimming', 'in static water', 'chlorine burns your nose', 'this photo is your daughters', 'this tv is hers too', 'through the veil she also sees', 'a blue light aglow', 'or just an old tv'];
//// }


////. function draw() {
//// background(img, 720, 867)

//// if (mouseIsPressed === true) {
////   let grayValue = random(130, 245);
////  let transparency = random(70, 152);
//// fill(grayValue, transparency);

//// stroke(random(12, 62));
//// textSize(random(14, 82));

//// let randomWord = random(words);

//// text(randomWord, mouseX, mouseY);
////  }
////}

