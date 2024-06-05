const createMore = (arr) => {
    return `
    <div class="mx-auto max-w-[1536px]">
        <div class=" mt-8 px-4 flex justify-between items-center">
            <h1 class="text-2xl"> More to Explore</h1></div>

        <div class="max-w-full mx-auto mt-8 flex flex-wrap ">
    ${arr.map((item) => {
        return `
      
        <div class="w-full md:w-1/3 px-2">
            <div class="w-full h-[250px] md:h-auto md:flex-col"> <img src="${item.img}" alt=""
                class="w-full h-full object-cover"> </div>
            <h3 class="mt-4 text-[20px]">${item.title}</h3> 
                <a class="underline" href="">${item.btn}</a>
    
        </div>
        `
    }).join('')}

        </div>
    </div>
    ` 
}
const MoreCardArr = [{
    title: "Spring Golf Essentials",
    img: "../images/women-13.png",
    btn:"Shop"
},
{
    title: 'Killshot from Day to Night',
    img: "../images/member-14.jpeg",
    btn:"Shop"
},
{
    title: 'Spring Golf Essentials',
    img: "../images/women15.jpeg",
    btn:"Shop"
},
]
export class MoreCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = createMore(MoreCardArr)
    }
}

customElements.define('more-card',MoreCard);