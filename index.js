function updateImageSrc() {
    const satplanet = document.getElementById('satplanet');
    if (window.innerWidth <= 1100) {
        satplanet.src = 'Group 10.png'; // Image for screens <= 900px
        titan.style.display = "none";
    } else {
        satplanet.src = 'Layer 2 (14).png'; // Default image
        titan.style.display = "";
    }
}


async function getScrollPosition() {
    const h1 = document.querySelector(".box1").offsetHeight;
    const h2 = document.querySelector(".sun").offsetHeight;
    console.log("hello I am Manas");
    console.log(h1 + h2);
    return h1 + h2;
}



function fadeInElement() {
    const mertileElement = document.querySelector('.mertile');
    mertileElement.classList.add('fade-in');
}



const cords = { x: 0, y: 0 };
const circle = document.querySelectorAll(".circles")


const color1 = [
    "#e1d11d", "#e1d11d", "#e8cc19", "#e8cc19", "#f9bf18", "#f9bf18",
    "#ffaa2a", "#ffaa2a", "#ff8e48", "#ff8e48", "#ff706d", "#ff706d",
    "#ff5996", "#ff5996", "#ff55be", "#ff55be", "#e360de", "#e360de",
    "#b66df2", "#b66df2", "#8f74fc", "#8f74fc", "#7e77ff", "#7e77ff"
]



const color2 = [
    "#ebff14", "#ebff14", "#f8e100", "#f8e100", "#ffc300", "#ffc300",
    "#ffa508", "#ffa508", "#fa8822", "#fa8822", "#ef6d32", "#ef6d32",
    "#df533d", "#df533d", "#ca3c45", "#ca3c45", "#b2284b", "#b2284b",
    "#97194d", "#97194d", "#7a0e4c", "#7a0e4c", "#5c0947", "#5c0947"
];

const color3 = [
    "#ffffff", "#ffffff", "#eee8ef", "#eee8ef", "#ddd2e0", "#ddd2e0",
    "#cdbcd0", "#cdbcd0", "#bca6c1", "#bca6c1", "#ac91b2", "#ac91b2",
    "#9b7da3", "#9b7da3", "#8b6895", "#8b6895", "#7b5486", "#7b5486",
    "#6b4178", "#6b4178", "#5b2d6a", "#5b2d6a", "#4b195c", "#4b195c"
];

const color4 = [
    "#36eac7", "#36eac7", "#36eac7", "#36eac7", "#36eac7", "#00dacd", "#00dacd", "#00c9d1", "#00c9d1",
    "#00b7d3", "#00b7d3", "#00a5d2", "#00a5d2", "#0092cd", "#0092cd",
    "#007fc3", "#007fc3", "#006cb5", "#006cb5", "#0b58a4", "#0b58a4",
    "#36448e", "#36448e", "#452f76", "#452f76", "#4b195c", "#4b195c"
]
const color5 = [
    "#8cff00", "#8cff00", "#3bfc4f", "#3bfc4f", "#00f778", "#00f778",
    "#00f19c", "#00f19c", "#00e9bc", "#00e9bc", "#00e0d7", "#00e0d7",
    "#00d6eb", "#00d6eb", "#00cbf9", "#00cbf9", "#00bfff", "#00bfff",
    "#00b2ff", "#00b2ff", "#00a4f8", "#00a4f8", "#0e96ea", "#0e96ea"
]
const color6 = [
    "#fbff14", "#fbff14", "#ffed00", "#ffed00", "#ffdb00", "#ffdb00",
    "#ffc900", "#ffc900", "#ffb700", "#ffb700", "#ffa500", "#ffa500",
    "#ff9200", "#ff9200", "#ff7e00", "#ff7e00", "#fc6a00", "#fc6a00",
    "#f75400", "#f75400", "#f13a00", "#f13a00", "#ea1410", "#ea1410"
]
const color7 = [
    "#ffa221", "#ffa221", "#f9a61e", "#f9a61e", "#eab01b", "#eab01b",
    "#d1bd27", "#d1bd27", "#b2ca42", "#b2ca42", "#8ed667", "#8ed667",
    "#65de8f", "#65de8f", "#34e4b7", "#34e4b7", "#00e7d7", "#00e7d7",
    "#00e9ee", "#00e9ee", "#00e9fb", "#00e9fb", "#11e9ff", "#11e9ff"
]

const color8 = [
    "#b75f00", "#b75f00", "#b96201", "#b96201", "#bf6c06", "#bf6c06",
    "#c77a10", "#c77a10", "#d18c1c", "#d18c1c", "#dba02a", "#dba02a",
    "#e5b539", "#e5b539", "#edc949", "#edc949", "#f5db58", "#f5db58",
    "#faea65", "#faea65", "#fef46e", "#fef46e", "#fff871", "#fff871"
]
const color9 = [
    "#1e3c86", "#1e3c86", "#213f89", "#213f89", "#2a4791", "#2a4791",
    "#37549c", "#37549c", "#4664aa", "#4664aa", "#5777ba", "#5777ba",
    "#698acb", "#698acb", "#7b9ddb", "#7b9ddb", "#8bafe9", "#8bafe9",
    "#99bdf4", "#99bdf4", "#a3c6fc", "#a3c6fc", "#a6caff", "#a6caff"
]
const color10 = [
    "#b361e1", "#b361e1", "#b563e1", "#b563e1", "#bc6ae2", "#bc6ae2",
    "#c575e4", "#c575e4", "#cf81e7", "#cf81e7", "#da90ea", "#da90ea",
    "#e49fed", "#e49fed", "#edaef1", "#edaef1", "#f5bcf5", "#f5bcf5",
    "#fac7f8", "#fac7f8", "#fecefa", "#fecefa", "#ffd1fb", "#ffd1fb"
]


function animateCircle() {
    let x = cords.x;
    let y = cords.y;
    circle.forEach(function (curcle, index) {
        curcle.style.left = x - 12 + "px";
        curcle.style.top = y - 12 + "px";

        curcle.style.scale = (circle.length - index) / circle.length;

        curcle.x = x;
        curcle.y = y;

        const nextcircle = circle[index + 1] || circle[0];
        x += (nextcircle.x - x) * 0.3;
        y += (nextcircle.y - y) * 0.3;
    })

    requestAnimationFrame(animateCircle)
}



function scrollTrailColor(eot) {
    let hero = document.querySelector(".box1").offsetHeight;
    let sun = hero + document.querySelector(".sun").offsetHeight;
    let mer = sun + document.querySelector(".mercury").offsetHeight;
    let ven = mer + document.querySelector(".planet3").offsetHeight;
    let ear = ven + document.querySelector(".planet4").offsetHeight;
    let mar = ear + document.querySelector(".planet5").offsetHeight;
    let jup = mar + document.querySelector(".planet6").offsetHeight;
    let sat = jup + document.querySelector(".planet7").offsetHeight;
    let urr = sat + document.querySelector(".planet8").offsetHeight;
    let length = eot;
    console.log(length, hero)
    if (length > urr) {
        return color10;
    }
    else if (length > sat) {
        return color9;
    }
    else if (length > jup) {
        return color8;
    }
    else if (length > mar) {
        return color7;
    }
    else if (length > ear) {
        return color6
    }
    else if (length > ven) {
        return color5
    }
    else if (length > mer) {
        return color4;
    }
    else if (length > sun) {
        console.log("color2");
        return color3;

    }
    else if (length > hero) {
        return color2;
    }
    else {
        console.log("color1");
        return color1;
    }
}
function prevplanet(eot) {
    let hero = document.querySelector(".box1").offsetHeight;
    let sun = hero + document.querySelector(".sun").offsetHeight;
    let mer = sun + document.querySelector(".mercury").offsetHeight;
    let ven = mer + document.querySelector(".planet3").offsetHeight;
    let ear = ven + document.querySelector(".planet4").offsetHeight;
    let mar = ear + document.querySelector(".planet5").offsetHeight;
    let jup = mar + document.querySelector(".planet6").offsetHeight;
    let sat = jup + document.querySelector(".planet7").offsetHeight;
    let urr = sat + document.querySelector(".planet8").offsetHeight;
    let length = eot;
    console.log(length, hero)
    if (length >= urr) {
        return ["Uranus", "url(Layer 2 (8).png)", ".planet8"];
    }
    else if (length >= sat) {
        return ["Saturn", "linear-gradient(135deg, #f3ff07, #ff9500)", ".planet7"];
    }
    else if (length >= jup) {
        return ["Jupiter", "linear-gradient(135deg, #ff9500, #59a4ff)", ".planet6"];
    }
    else if (length >= mar) {
        return ["Mars", "linear-gradient(135deg, #fbff0f, #ffe500, #ffca00, #ffae00, #ff9000, #ff7100, #ff4b00, #ff0000)", ".planet5"];
    }
    else if (length >= ear) {
        return ["Earth", "linear-gradient(135deg, #337aff, #009cff, #00b8ff, #00cfff, #00e2d6, #00f19d, #54fc5f, #cdff19)", ".planet4"];
    }
    else if (length >= ven) {
        return ["Venus", "linear-gradient(135deg, #4ff0ff, #45f3fb, #3ef5f5, #3bf8ee, #3efae7, #45fcde, #4ffed5, #5bffcb)", ".planet3"];
    }
    else if (length >= mer) {
        return ["Mercury", "linear-gradient(90deg, #ffffff, #f9ebff, #f2d7ff, #ebc3ff, #e3afff, #db9aff, #d286ff, #c870ff)", ".planet2"];
    }
    else if (length >= sun) {
        return ["sun", "linear-gradient(135deg, #fbff0f, #ffe500, #ffca00, #ffae00, #ff9000, #ff7100, #ff4b00, #ff0000)", ".pagee"];

    }
    else if (length >= hero) {
        return ["", "", "", "Mercury"]
    }
    else {
        return ["", ""];
    }
}

let p = "off";

function showSolarSystem() {
    var container = document.querySelector('.dsolar');
    var iframe = document.getElementById('solarSystemIframe');
    iframe.src = 'https://eyes.nasa.gov/apps/orrery/#/home';
    container.style.display = 'flex'; // Show the container
    
}

function closeSolarSystem() {
    var container = document.querySelector('.dsolar');
    var iframe = document.getElementById('solarSystemIframe');
    iframe.src = ''; // Clear the iframe src to stop loading the content
    container.style.display = 'none'; // Hide the container
}

const pla=["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
const view=[".sun",".planet2",".planet3",".planet4",".planet5",".planet6",".planet7",".planet8",".planet9"]

function bringtoview(plan){
    for (let index = 0; index < pla.length; index++) {
        if(plan==pla[index]){
            return view[index];
        }
        
    }
}

async function main() {


    let page =document.getElementById("page");
    page.addEventListener("click",function(){
        let boxes = document.querySelector(".box1");
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    let listItems = document.querySelectorAll('.side');

    // Add click event listener to each <li> element
    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            let pla=this.innerHTML;
            let too=bringtoview(pla);
            let boxes = document.querySelector(too);
            boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector(".slidein").style.left = "-50vw";
    p = "on";
        });
    });



    threedsolar.addEventListener("click", function () {
        showSolarSystem()
    })


    let menu = document.querySelector(".menu");

    menu.addEventListener("click", function () {
        let menubar=document.querySelector(".menubar")
        if (p == "off") {
            menubar.innerHTML="&emsp;  &#10006;"
            document.querySelector(".slidein").style.left = "0";
            p = "on";
        }
        else {
            menubar.innerHTML="&emsp; &#9776;"
            document.querySelector(".slidein").style.left = "-50vw";
            p = "off";
        }
    })

    let plan = document.querySelector(".slidinli")


    circle.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = color1[index % color1.length]
    })
    window.addEventListener("mousemove", function (e) {
        let trail = scrollTrailColor(e.pageY);
        circle.forEach(function (circle, index) {
            circle.style.backgroundColor = trail[index % trail.length];
        })
        cords.x = e.pageX;
        cords.y = e.pageY;
        console.log("planet", prevplanet(e.pageY))
    })
    document.addEventListener('scroll', function () {
        const detail = prevplanet(window.scrollY);
        document.getElementById("prevp").innerHTML = "manas";
        document.querySelector(".previousplanet").style.background = detail[1];
        prevp.addEventListener("click", function () {
            let box = document.querySelector(detail[2])
            console.log(box)
            box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })
    })
    animateCircle();

    const scro = await getScrollPosition();

    document.getElementById('scrollButton').addEventListener('click', function () {
        let boxes = document.querySelector('.sun');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.getElementById("herop1").addEventListener('click', function () {
        let boxes = document.querySelector('.planet9');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop2").addEventListener('click', function () {
        let boxes = document.querySelector('.planet7');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop3").addEventListener('click', function () {
        let boxes = document.querySelector('.planet2');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop4").addEventListener('click', function () {
        let boxes = document.querySelector('.planet8');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop5").addEventListener('click', function () {
        let boxes = document.querySelector('.planet6');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop6").addEventListener('click', function () {
        let boxes = document.querySelector('.planet5');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop7").addEventListener('click', function () {
        let boxes = document.querySelector('.planet4');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.getElementById("herop8").addEventListener('click', function () {
        let boxes = document.querySelector('.planet3');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.querySelector(".gotop").addEventListener('click', function () {
        let boxes = document.querySelector('.box1');
        boxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })

    document.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        let heroHeight = document.querySelector(".box1").offsetHeight;
        let goTopElement = document.querySelector(".gotop");

        if (scrollPosition > (0.5 * heroHeight)) {
            goTopElement.style.opacity = 1;
            prevp.style.opacity = 1;// Corrected typo
        } else {
            goTopElement.style.opacity = 0;
            prevp.style.opacity = 0;// Hide the element when scrolling up
        }
    });






    document.addEventListener('scroll', function () {
        const animatedObject = document.getElementById("merc");
        let scrollPosition = window.scrollY;
        const maxScroll = scro + 100;
        const maxTranslateX = 50; // Maximum distance to move right
        const maxRotate = 360; // Maximum degrees to rotate

        // Calculate the translate value based on scroll position
        const translateX = Math.min((scrollPosition / maxScroll) * maxTranslateX, maxTranslateX);
        const value = (0.8 * scro)
        // Calculate the rotation value based on scroll position
        const rotate = Math.min((scrollPosition / maxScroll) * maxRotate, maxRotate);

        // Apply the transform property to move right and spin the object
        animatedObject.style.transform = ` rotate(${rotate}deg)`;
    });


    document.addEventListener('scroll', function () {
        const animatedObject = document.getElementById("plant3");
        const tile = document.querySelectorAll(".ventile");
        let scrollPosition = window.scrollY;
        const oppps = scro;
        const maxTranslateX = 1; // Maximum distance to move right
        const maxScroll = scro + document.querySelector(".planet3").offsetHeight
        var toop = scrollPosition - oppps
        if (oppps > scrollPosition) {
            console.log("hy")
            toop = 0;
        }
        else {

            tile[0].style.animation = "slidein2 1s linear forwards";
            tile[0].style.opacity = "1";
            tile[1].style.animation = "slidein2 1.5s linear forwards";
            tile[1].style.opacity = "1";
        }
        // console.log("hy manas",scrollPosition,oppps,toop,maxScroll)
        // Calculate the translate value based on scroll position
        const translateX = Math.min((toop / maxScroll) * maxTranslateX, maxTranslateX);
        // console.log("hy manas",translateX)
        // Apply the transform property to move right and spin the object
        animatedObject.style.opacity = `${translateX}`;
    });



    document.addEventListener('scroll', function () {
        const tile = document.querySelectorAll(".diamtile");
        let scrollPosition = window.scrollY;
        const need = scro + document.querySelector(".planet2").offsetHeight + (0.75 * document.querySelector(".planet4").offsetHeight);
        // console.log("hy manas",scrollPosition,need,document.querySelector(".planet4").offsetHeight, scro+document.querySelector(".planet2").offsetHeight)
        if (need < scrollPosition) {
            // console.log("manas good")
            if (document.querySelector(".mars").offsetWidth < 1600) {
                tile[0].style.animation = "slidein2 1s linear forwards";
                tile[0].style.opacity = "1";
                tile[1].style.animation = "slidein2 1.5s linear forwards";
                tile[1].style.opacity = "1";
                tile[2].style.animation = "slidein2 2s linear forwards";
                tile[2].style.opacity = "1";
            }
            else {
                tile[0].style.animation = "slidein1 1s linear forwards";
                tile[0].style.opacity = "1";
                tile[1].style.animation = "slidein1 1.5s linear forwards";
                tile[1].style.opacity = "1";
                tile[2].style.animation = "slidein1 2s linear forwards";
                tile[2].style.opacity = "1";

            }
        }
    })





    document.addEventListener('scroll', function () {
        const tile = document.querySelectorAll(".juptile");
        let scrollPosition = window.scrollY;
        const need = scro + document.querySelector(".planet2").offsetHeight + (document.querySelector(".planet4").offsetHeight) + (0.5 * document.querySelector(".planet5").offsetHeight);
        // console.log("hy manas",scrollPosition,need,document.querySelector(".planet5").offsetHeight)
        if (need < scrollPosition) {
            if (document.querySelector(".jupiter").offsetWidth < 1600) {
                tile[0].style.animation = "slidein2 1s linear forwards";
                tile[0].style.opacity = "1";
                tile[1].style.animation = "slidein2 1.5s linear forwards";
                tile[1].style.opacity = "1";
            }
            else {
                tile[0].style.animation = "slidein2 1s linear forwards";
                tile[0].style.opacity = "1";
                tile[1].style.animation = "slidein2 1.5s linear forwards";
                tile[1].style.opacity = "1";
            }
        }
    })
    document.addEventListener('scroll', function () {
        const tile = document.querySelectorAll(".saattile");
        let scrollPosition = window.scrollY;
        const need = scro + document.querySelector(".planet2").offsetHeight + (document.querySelector(".planet4").offsetHeight) + (document.querySelector(".planet5").offsetHeight) + (0.5 * document.querySelector(".planet5").offsetHeight);
        // console.log("hy manas",scrollPosition,need,document.querySelector(".planet5").offsetHeight)
        if (need < scrollPosition) {
            tile[0].style.animation = "slidein4 1s linear forwards";
            tile[0].style.opacity = "1";
            tile[1].style.animation = "slidein4 1.5s linear forwards";
            tile[1].style.opacity = "1";
        }
    })
    document.addEventListener('scroll', function () {
        const tile = document.querySelector(".nepinfo");
        let scrollPosition = window.scrollY;
        const need = scro + document.querySelector(".planet2").offsetHeight + (document.querySelector(".planet4").offsetHeight) + (document.querySelector(".planet5").offsetHeight) + (document.querySelector(".planet6").offsetHeight) + (document.querySelector(".planet7").offsetHeight) + (0.5 * document.querySelector(".planet8").offsetHeight);
        // console.log("hy manas",scrollPosition,need,document.querySelector(".planet9").offsetHeight)
        if (need < scrollPosition) {
            tile.style.animation = "rotateAndEnlarge 2s linear forwards"
            tile.style.opacity = "1"
        }
    })

    document.addEventListener('scroll', function () {
        const tile = document.querySelector(".nepinfo");
        let scrollPosition = window.scrollY;
        const need = scro + document.querySelector(".planet2").offsetHeight + (document.querySelector(".planet4").offsetHeight) + (document.querySelector(".planet5").offsetHeight) + (document.querySelector(".planet6").offsetHeight) + (document.querySelector(".planet7").offsetHeight) + (document.querySelector(".planet8").offsetHeight) + (0.8 * document.querySelector(".planet9").offsetHeight);
        // console.log("hy manas",scrollPosition,need,document.querySelector(".planet9").offsetHeight)
        if (need < scrollPosition) {
            tile.style.animation = "rotateAndEnlarge 2s linear forwards"
            tile.style.opacity = "1"
        }
    })

    document.addEventListener('scroll', function () {
        const animatedObject = document.getElementsByTagName("footer")[0];
        let scrollPosition = window.scrollY;

        const need = document.querySelector(".box1").offsetHeight +
            document.querySelector(".box2").offsetHeight +
            document.querySelector(".planet2").offsetHeight +
            document.querySelector(".planet4").offsetHeight +
            document.querySelector(".planet5").offsetHeight +
            document.querySelector(".planet6").offsetHeight +
            document.querySelector(".planet7").offsetHeight +
            document.querySelector(".planet8").offsetHeight +
            (0.4 * document.querySelector(".planet9").offsetHeight);

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scaleval = scrollPosition - need;
        const val2 = maxScroll - need;

        if (scaleval > -0.5) {
            // Using transform scale to scale the footer
            const newval = scaleval / val2;
            animatedObject.style.transform = `scale(${newval})`;
            if (newval >= 0.9) {
                document.querySelector(".footer2").classList.add("visible");
            } else {
                document.querySelector(".footer2").classList.remove("visible");
            }
        }

    });

    // Initial check
    updateImageSrc();

    // Update on window resize
    window.addEventListener('resize', updateImageSrc);
}

main();
