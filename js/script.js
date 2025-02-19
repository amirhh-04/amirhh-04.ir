const lua_data    = { circle: document.querySelector('.lua-circle'), text: document.getElementById('lua-percent'), count: 70 };
const html_data = { circle: document.querySelector('.html-circle'), text: document.getElementById('html-percent'), count: 80 };
const css_data = { circle: document.querySelector('.css-circle'), text: document.getElementById('css-percent'), count: 80 };
const js_data = { circle: document.querySelector('.js-circle'), text: document.getElementById('js-percent'), count: 50 };
const php_data = { circle: document.querySelector('.php-circle'), text: document.getElementById('php-percent'), count: 100 };
const bootstrap_data = { circle: document.querySelector('.bootstrap-circle'), text: document.getElementById('bootstrap-percent'), count: 100 };
const jquary_data = { circle: document.querySelector('.jquary-circle'), text: document.getElementById('jquary-percent'), count: 100 };
const matlab_data = { circle: document.querySelector('.matlab-circle'), text: document.getElementById('matlab-percent'), count: 30 };
const preloader_data = document.querySelector('.preloader');

const mainText  = document.getElementById("cv-big-home-mainText")

let i = 0;
let txt = ' I am a young and passionate programmer who started coding at the age of 14 in 2018. With a focus on both backend and frontend development, I have also dabbled in game development and software programming. Here, you will find all the information you need to know about my skills, experience, and projects.';
let speed = 45;
let load = 0;

typeWriter();
updateLoader();

setTimeout(function() {
    preLoader();  
}, 500);

function typeWriter() {
    if (i < txt.length) {
        if (mainText) {
            mainText.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}

function updateLoader() {
    if (lua_data.circle) {
        lua_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #132883 0%, #001572 ${lua_data.count}%, #101012 ${lua_data.count}%)`;
        html_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #ffa707 0%, #df7c2b ${html_data.count}%, #101012 ${html_data.count}%)`;
        css_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #247fdc 0%, #2a60c4 ${css_data.count}%, #101012 ${css_data.count}%)`;
        js_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #ffdf4c 0%, #ffdf4c ${js_data.count}%, #101012 ${js_data.count}%)`;
        php_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #626997 0%, #838ad8 ${php_data.count}%, #101012 ${php_data.count}%)`;
        bootstrap_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #9652f3 0%, #7131d2 ${bootstrap_data.count}%, #101012 ${bootstrap_data.count}%)`;
        jquary_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #2b8ea5 0%, #045896 ${jquary_data.count}%, #101012 ${jquary_data.count}%)`;
        matlab_data.circle.style.background = `conic-gradient(from 0deg at 50% 50%, #FF8406 0%, #5B0C06 ${matlab_data.count}%, #101012 ${matlab_data.count}%)`;
    }
}

const avatars = document.querySelectorAll('.cv-work-avatar');

avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        const url = avatar.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

const all      = document.getElementById('cv-works-all');
const frontend = document.getElementById('cv-works-frontend');
const backend  = document.getElementById('cv-works-backend');
const fivem    = document.getElementById('cv-works-fivem');

const jasper       = { row: document.getElementById('cv-work-jasper') }
const qxrp = { row: document.getElementById('cv-work-qxrp') }
const cv           = { row: document.getElementById('cv-work-cv') }
const irrp    = { row: document.getElementById('cv-work-irrp') }

function showAllWorks() {
    irrp.row.style.display = "flex";
    jasper.row.style.display = "flex";
    qxrp.row.style.display = "flex";
    cv.row.style.display = "flex";
  
    all.classList.add("cv-works-active");
    frontend.classList.remove("cv-works-active");
    backend.classList.remove("cv-works-active");
    fivem.classList.remove("cv-works-active");
}

function showFrontEnd() {
    jasper.row.style.display = "none";
    cv.row.style.display = "flex";
    irrp.row.style.display = "none";
    qxrp.row.style.display = "none";
  
    all.classList.remove("cv-works-active");
    frontend.classList.add("cv-works-active");
    backend.classList.remove("cv-works-active");
    fivem.classList.remove("cv-works-active");
}

function showBackEnd() {
    irrp.row.style.display = "none";
    qxrp.row.style.display = "none";
    jasper.row.style.display = "none";
    cv.row.style.display = "flex";
  
    all.classList.remove("cv-works-active");
    frontend.classList.remove("cv-works-active");
    backend.classList.add("cv-works-active");
    fivem.classList.remove("cv-works-active");
}

function showFiveM() {
    jasper.row.style.display = "flex";
    cv.row.style.display = "none";
    irrp.row.style.display = "flex";
    qxrp.row.style.display = "flex";
  
    all.classList.remove("cv-works-active");
    frontend.classList.remove("cv-works-active");
    backend.classList.remove("cv-works-active");
    fivem.classList.add("cv-works-active");
}

const imgProfile = document.querySelector('.mb-profile-imgzone');
const cardProfile = document.querySelector('.mb-profile-cardzone');
const avatarProfile = document.querySelector('.mb-profile-avatar')

imgProfile.addEventListener('click', () => {
    cardProfile.classList.toggle('mb-profile-hidden');
    avatarProfile.classList.toggle('mb-profile-active')
});

function preLoader() {
    setTimeout(function() {
        preloader_data.style.opacity = ".8";
    }, 200);

    setTimeout(function() {
        preloader_data.style.opacity = ".6";
    }, 250);

    setTimeout(function() {
        preloader_data.style.opacity = ".4";
    }, 300);
    
    setTimeout(function() {
        preloader_data.style.opacity = ".2";
        preloader_data.style.duration = "300";
    }, 350);
    
    setTimeout(function() {
        preloader_data.style.duration = "500";
        preloader_data.style.opacity = "0";
        preloader_data.style.zIndex  = "-1";
    }, 400);
}

const titleTag = document.title;
window.addEventListener("blur", function() {
    this.document.title = "کجا رفتی؟ برگرد 😐 مینم!";
})
window.addEventListener("focus", function() {
    this.document.title = titleTag;
})