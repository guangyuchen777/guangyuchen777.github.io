const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'ANIME.js', 'PYTHON', 'REACT.js',
    'PROCESSING', 'ARDUINO',
    'JAVA', 'D3.js', 'UNITY',
    'C4D','THREE.js', 'P5.js', 'IOT', 'DATA VISUALIZATION',
    'ADOBE SUITE',"AGING POPULATION", 
    'CAREGIVER', 'DEMENTIA', 'COMPUTER VISION',
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 315,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#000000';
document.querySelector('.Sphere').style.color = color;