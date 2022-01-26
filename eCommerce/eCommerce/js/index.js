const wrapper = document.querySelector(".slider__wrapper");
// const menuItems
const menuItems = document.querySelectorAll(".menuItem");
console.log(menuItems);

// = Products =
const products = [
  {
    id: 1,
    title: " AIR FORCE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/eCommerce/src/assets/img/air.png",
      },
      {
        code: "darkblue",
        img: "/eCommerce/src/assets/img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air JORDAN",
    price: 149,
    colors: [
      {
        code: " lighgray",
        img: "/eCommerce/src/assets/img/jordan.png",
      },
      {
        code: "green",
        img: " /eCommerce/src/assets/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "AIR BLAZER",
    price: 134,
    colors: [
      {
        code: "lightgray",
        img: "/eCommerce/src/assets/img/blazer.png",
      },
      {
        code: "green",
        img: "/eCommerce/src/assets/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "AIR CREATE",
    price: 125,
    colors: [
      {
        code: "black",
        img: "/eCommerce/src/assets/img/Crater.png",
      },
      {
        code: "lightgray",
        img: "/eCommerce/src/assets/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "AIR WAVES",
    price: 119,
    colors: [
      {
        code: "gray",
        img: "/eCommerce/src/assets/img/hippie.png",
      },
      {
        code: "black",
        img: "/eCommerce/src/assets/img/hippie2.png",
      },
    ],
  },
];

// Products ==>
let choseProducts = products[0];

// Products Current>
const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductDesc = document.querySelector(".product-desc");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Event MenuItem  and Method===>
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choseProducts = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choseProducts.title;
    currentProductPrice.textContent = "$" + choseProducts.price;
    currentProductImg.src = choseProducts.colors[0].img;

    //assing new colors
    currentProductColor.forEach((color, index) => {
      color.style.backgroundColor = choseProducts.colors[index].code;
    });
  });
});

currentProductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choseProducts.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
