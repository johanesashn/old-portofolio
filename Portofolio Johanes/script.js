function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = "AM";
    m = checkTime(m);
    s = checkTime(s);
    if (h > 12){
      h = h - 12
      session = "PM"
    }
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " " + session;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

const skills = document.querySelector('section.skills');
const content = skills.querySelector("section.skills .note .content");
const button = skills.querySelector('.note button');
const card = skills.querySelector('card')

button.addEventListener("click", function(){
    content.classList.toggle("none");

    if (button.innerHTML == 'See more'){
        button.innerHTML = 'Close'; 
    } else {
        button.innerHTML = 'See more'
    }
  })
  
const colorTheme = document.querySelector('.color-theme');
const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const about = document.querySelector('.about');
const skill = document.querySelector('.skills');
const project = document.querySelector('.projects');
const contact = document.querySelector('.contact-me');
const imgJumbo = document.querySelector('.jumbotron img');
const achievementsButton = document.querySelectorAll(".achievements button");
const projectsDetails = document.querySelectorAll(".project-details a");
const lightButton = document.querySelector('.color-theme .light')
const darkButton = document.querySelector('.color-theme .dark')
const li = document.querySelectorAll('nav ul li')
const aboutFill = document.querySelector('.about .fill')
const skillH6 = document.querySelectorAll('.skills h6')
const skillCard = document.querySelectorAll('.skills .card')
const projecth6 = document.querySelector('.projects h6')
const project_a = document.querySelectorAll('.project-details a')

let light = true;

colorTheme.addEventListener("click", function(){
  colorTheme.classList.toggle("darkButton");
  darkButton.classList.toggle('hide')
  lightButton.classList.toggle('hide')
  
  for (let i = 1; i <= 21; i++){
    document.getElementById(i).classList.toggle('dark');
  }

  if (light) {
    imgJumbo.style.boxShadow =  "0px 5px black"
    
    // for (let i = 0; i < achievementsButton.length; i++){
    //   achievementsButton[i].style.backgroundColor = '#181a1b'
    // }

    
    for (let i = 0; i < projectsDetails.length; i++){
      projectsDetails[i].style.backgroundColor = '#181a1b'
    }
    
    light = false;
  } else {
    imgJumbo.style.boxShadow =  "0px 5px white"
    
    for (let i = 0; i < achievementsButton.length; i++){
      // achievementsButton[i].style.backgroundColor = "pink";
    }
    
    for (let i = 0; i < projectsDetails.length; i++){
      projectsDetails[i].style.backgroundColor = 'white';
    }
    
    light = true;
  }
  
  body.classList.toggle('dark');
  navbar.classList.toggle('dark');
  navbar.classList.toggle('dark-nav');
  navbar.classList.toggle('navbar-dark');
  about.classList.toggle('dark');
  skills.classList.toggle('dark');
  project.classList.toggle('dark');
  contact.classList.toggle('dark');
  aboutFill.classList.toggle('dark-font')
  projecth6.classList.toggle('dark-font')
  
  // body.classList.toggle('dark')
  
  li.forEach(function(l){
    // l.classList.toggle('dark-nav-li')'
    l.style.backgroundColor = "#181a1b"
  }) 

  skillCard.forEach(function(sc){
    sc.classList.toggle('darkCard')
  })

  project_a.forEach(function(pa){
    // pa.style.color = 'black'
    // pa.style.backgroundColor = 'white'
    pa.classList.toggle('dark-font')
  })

  skillH6.forEach(function(s6){
    s6.classList.toggle('dark-font')
  })

})
