//our data
const sublinks = [
    {
      page: 'products',
      links: [
        { label: 'payment', icon: 'fas fa-credit-card', url: 'products.html' },
        { label: 'terminal', icon: 'fas fa-credit-card', url: 'products.html' },
        { label: 'connect', icon: 'fas fa-credit-card', url: 'products.html' },
      ],
    },
    {
      page: 'developers',
      links: [
        { label: 'plugins', icon: 'fas fa-book', url: 'products.html' },
        { label: 'libraries', icon: 'fas fa-book', url: 'products.html' },
        { label: 'plugins', icon: 'fas fa-book', url: 'products.html' },
        { label: 'billing', icon: 'fas fa-book', url: 'products.html' },
      ],
    },
    {
      page: 'company',
      links: [
        { label: 'about', icon: 'fas fa-briefcase', url: 'products.html' },
        { label: 'customers', icon: 'fas fa-briefcase', url: 'products.html' },
      ],
    },
];

//get elements

const toggleBtn = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.sidebar__close'),
      sidebarWrapper = document.querySelector('.sidebar-wrapper'),
      sidebarContainer = document.querySelector('.sidebar__items'),
      menuLinks = document.querySelectorAll('.nav__menu-link'),
      submenu = document.querySelector('.submenu'),    
      promo =  document.querySelector('.promo'),
      nav = document.querySelector('.nav');


//show sidebar

toggleBtn.addEventListener('click', (e) => {
    sidebarWrapper.classList.add('show');
    //prevent scrolling
    document.body.style.overflow = 'hidden';
    //add content to sidebar
    
})
//close sidebar
closeBtn.addEventListener('click', () => {
    sidebarWrapper.classList.remove('show');
    document.body.style.overflow = '';
})

//initialize sidebar
function createLinks() {
    //iterate through data array and put html in sidebar container
    //since links is array aswell, iterate through it with map and return html, dont forget to join()
    sublinks.forEach(item => {
        sidebarContainer.innerHTML += `
        <div class="sidebar__item">
                    <h4 class="sidebar__title">
                        ${item.page}
                    </h4>
                    <div class="sidebar__links">
                    ${item.links.map(({label,icon,url}) => {
                        return `<a href="${url}" class="sidebar__link"><i class="${icon}"></i> ${label}</a>`
                    }).join('')}
                    </div>
                </div>`
    })
}

createLinks();

/*****     HOVER SHOW SUBMENU         ******/


menuLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        //get name of hovered element
        const target = e.currentTarget;
        console.log(target)
        const name = target.textContent;
        //get coordinates of target, sum them, and divide by 2 to get center of the element
        const coords = target.getBoundingClientRect().left + target.getBoundingClientRect().right;
        const center = coords/2;
        //also important to get bottom of the button link, because later we want to remove submenu on nav hover
        //substract a needed amount so it wont be too far away from our button
        const bottom = target.getBoundingClientRect().bottom - 20;


        //only show submenu if we hovered on link that exist in our data array
        sublinks.forEach(({page, links}) => {
            if (name === page) { 
                //add styles to submenu
                submenu.classList.add('show');
                submenu.style.left = `${center}px`  
                submenu.style.top = `${bottom}px`
                
                //create content in submenu
                submenu.innerHTML = `<section class="submenu__content">
                <h4 class="submenu__title">${page}</h4>
                <div class="submenu__links">
                    ${links.map(link => {
                        return `<a href="${link.url}" class="submenu__link"><i class="${link.icon}"></i> ${link.label}</a>`
                    }).join('')}
                </div>
                </section>`
                 //check links length and based on that add classes to links container
                 const submenuLinksContainer = submenu.querySelector('.submenu__links');
                 if (links.length <= 2) {
                    submenuLinksContainer.classList.add('col-2')
                } 
                
            }
        })
       
        
    })
})

//remove submenu if we hovered on promo section
promo.addEventListener('mouseover', () => {
    submenu.classList.remove('show');
})
//remove submenu if we hovered on nav
nav.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('nav__menu-link')) {
        submenu.classList.remove('show');
    }
})

