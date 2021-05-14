let phonelist = [
  {
    img: "iphone.jpeg",
    heading:
      "Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)",
    rating: 4.6,
    randr: "83,685 Ratings & 7,123 Reviews",
    desc: [
      "64 GB ROM",
      "15.49 cm (6.1 inch) Display",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "iOS 13 Compatible",
    ],
    cprice: "36,999",
    oprice: "47,900",
    precent: "22",
    exchange: "15,150",
  },
  {
    img: "iphone.jpeg",
    heading:
      "Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)",
    rating: 4.6,
    randr: "83,685 Ratings & 7,123 Reviews",
    desc: [
      "64 GB ROM",
      "15.49 cm (6.1 inch) Display",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "iOS 13 Compatible",
    ],
    cprice: "36,999",
    oprice: "47,900",
    precent: "22",
    exchange: "15,150",
  },
  {
    img: "iphone.jpeg",
    heading:
      "Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)",
    rating: 4.6,
    randr: "83,685 Ratings & 7,123 Reviews",
    desc: [
      "64 GB ROM",
      "15.49 cm (6.1 inch) Display",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "iOS 13 Compatible",
    ],
    cprice: "36,999",
    oprice: "47,900",
    precent: "22",
    exchange: "15,150",
  },
  {
    img: "iphone.jpeg",
    heading:
      "Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)",
    rating: 4.6,
    randr: "83,685 Ratings & 7,123 Reviews",
    desc: [
      "64 GB ROM",
      "15.49 cm (6.1 inch) Display",
      "12MP Rear Camera | 7MP Front Camera",
      "A12 Bionic Chip Processor",
      "iOS 13 Compatible",
    ],
    cprice: "36,999",
    oprice: "47,900",
    precent: "22",
    exchange: "15,150",
  },
];

let cardlist = "";
let description = "";

for (let i = 0; i < phonelist.length; i++) {
  for (let j = 0; j < phonelist[i].desc.length; j++) {
    description += `<li>${phonelist[i].desc[j]}</li>`;
  }
  cardlist += `
  <div class="card">
      <img src="images/${phonelist[i].img}"  alt="mobile" class="phone" />
      <div class="desc">
        <h2>
          ${phonelist[i].heading}
        </h2>
        <p class="randr">
          <span class="rating">${phonelist[i].rating} &#9733;</span>${phonelist[i].randr}
        </p>
        <ul>
           ${description}
        </ul>
      </div>
      <div class="price">
        <h2>
          &#8377; ${phonelist[i].cprice}
          <span><img src="images/flipplus.png" alt="fplus" class="fp" /></span>
        </h2>
        <p>
          <span class="mrp"> &#8377; ${phonelist[i].oprice}</span>
          <span class="percentoff">${phonelist[i].precent}% off</span>
        </p>
        <p>No Cost EMI</p>
        <p>Upto<span class="exchange"> &#8377; ${phonelist[i].exchange}</span> Off on Exchange</p>
      </div>
      </div>
    `;
  description = "";
}

document.querySelector(".cardlist").innerHTML = cardlist;
