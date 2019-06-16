const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

//write your code here 
const logoImage = document.querySelector('#logo-img');
logoImage.setAttribute('src','img/logo.png');

const ctaImag = document.querySelector('#cta-img');
ctaImag.setAttribute('src','img/header-img.png');

const midImag = document.querySelector('#middle-img');
midImag.setAttribute('src','img/mid-page.jpg');

 const container = document.querySelector('#container');

const nav=document.querySelector('nav');

const navItems = document.querySelectorAll('a')
console.log(navItems)

//for(var i=0,i<6,i++){
//navItems[i].textContent = 'Services'
//}
navItems[0].textContent = 'Services'
navItems[1].textContent = 'Product'
navItems[2].textContent = 'Vision'
navItems[3].textContent = 'Features'
navItems[4].textContent = 'About'
navItems[5].textContent = 'Contact'

//
const b = document.querySelector('button');
b.textContent='GetStarted';

const h1 = document.querySelector('h1');
h1.textContent='DOM Is Awesome';

//const header4 = document.querySelector('h4');
document.getElementsByTagName('h4');
//for(let i=0; i< document.getElementsByTagName('h4').length; i++){
    
//document.getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"];
//}
//document.getElementsByTagName('h4')[1].textContent = siteContent["main-content"]["about-h4"];
//document.getElementsByTagName('h4')[2].textContent = siteContent["main-content"]["services-h4"];
//document.getElementsByTagName('h4')[3].textContent = siteContent["main-content"]["product-h4"];
//document.getElementsByTagName('h4')[4].textContent = siteContent["main-content"]["vision-h4"];
//document.getElementsByTagName('h4')[5].textContent = siteContent["main-content"]["vision-content"];

//document.getElementsByTagName('h4')[0].textContent =Features

//const navitem1=document.creatElement('a');
//navitem1.textContent='Services';
//nav.appendChild(navitem1);
//
//

//
//const bottom-content=document.creatElement('bottom');
//
//

const  bottomContent= document.querySelector('.bottom-content');
const bottom  = document.getElementsByTagName('h4').item(0);
bottom.textContent=siteContent["main-content"]["features-h4"];

const bottomP  = document.getElementsByTagName('p').item(0);
bottomP.textContent=siteContent["main-content"]["about-content"];

const bottom1  = document.getElementsByTagName('h4').item(1);
bottom1.textContent=siteContent["main-content"]["about-h4"];

const bottomP1  = document.getElementsByTagName('p').item(1);
bottomP1.textContent=siteContent["main-content"]["about-content"];


const bottom2  = document.getElementsByTagName('h4').item(2);
bottom2.textContent=siteContent["main-content"]["services-h4"];
const bottomP2  = document.getElementsByTagName('p').item(2);
bottomP2.textContent=siteContent["main-content"]["about-content"];


const bottom3  = document.getElementsByTagName('h4').item(3);
bottom3.textContent=siteContent["main-content"]["product-h4"];
const bottomP3  = document.getElementsByTagName('p').item(3);
bottomP3.textContent=siteContent["main-content"]["about-content"];


const bottom4  = document.getElementsByTagName('h4').item(4);
bottom4.textContent=siteContent["main-content"]["vision-h4"];
const bottomP4  = document.getElementsByTagName('p').item(4);
bottomP4.textContent=siteContent["main-content"]["about-content"];

/*const bottom5  = document.getElementsByTagName('h4').item(5);
bottom5.textContent=siteContent["main-content"]["vision-content"];
const bottomP5  = document.getElementsByTagName('p').item(5);
bottomP5.textContent=siteContent["main-content"]["about-content"];
*/


//mariaaaaaaaaaaaaaaaammmmmmmmmm


const  bottomContact= document.querySelector('.contact');
const contactText  = document.getElementsByTagName('h4').item(0); contactText.textContent=siteContent["contact"]["contact-h4"];

//const bottomP  = document.getElementsByTagName('p').item(0);
//bottomP.textContent=siteContent["main-content"]["about-content"];


