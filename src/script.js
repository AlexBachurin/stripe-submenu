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
      menuLinks = document.querySelector('.nav__menu-link'),
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


