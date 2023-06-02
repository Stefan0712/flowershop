const productsSection = document.querySelector('.products-parent')
const flowers = [
    {
      name: "Sunflower",
      description: "A tall, bright flower that follows the sun throughout the day.",
      price: Math.floor(Math.random() * 50) + 10, // generates a random price between 10 and 60
      season: "Summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/sunflower.jpg',
      tags: []
    },
    {
      name: "Rose",
      description: "A classic flower with a sweet fragrance.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/rose.jpg',
      tags: []
    },
    {
      name: "Tulip",
      description: "A popular flower known for its colorful, cup-shaped blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Spring",
      categories: ["Bulb", "Cut Flower"],
      url: './public/images/tulip.jpg',
      tags: []
    },
    {
      name: "Lavender",
      description: "A fragrant plant with purple flowers often used in aromatherapy.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Summer",
      categories: ["Perennial", "Herb", "Fragrant"],
      url: './public/images/lavender.jpg',
      tags: []
    },
    {
      name: "Daisy",
      description: "A simple yet cheerful flower often found in meadows.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/daisy.jpg',
      tags: []
    },
    {
      name: "Lily",
      description: "A majestic flower with large, showy blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Summer",
      categories: ["Perennial", "Cut Flower"],
      url: './public/images/lily.jpg',
      tags: []
    },
    {
      name: "Peony",
      description: "A lush flower known for its large, fragrant blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/peony.jpg',
      tags: []
    },
    {
      name: "Chrysanthemum",
      description: "A fall flower with a variety of shapes and colors.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Fall",
      categories: ["Annual", "Perennial", "Cut Flower"],
      url: './public/images/chrysanthemum.jpg',
      tags: []
    },
    {
      name: "Hydrangea",
      description: "A shrub with large, showy blooms that change color based on soil acidity.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Summer",
      categories: ["Shrub", "Cut Flower"],
      url: './public/images/hydrangea.jpg',
      tags: []
    },
    {
      name: "Orchid",
      description: "A delicate flower often found in tropical climates.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "Year-round",
      categories: ["Perennial", "Indoor Plant"],
      url: './public/images/orchid.jpg',
      tags: []
    }
  ];
  


  
  function createProduct(flower) {
    // Get the products container element from the DOM
    const productsContainer = document.getElementById('products-container');
  
    // Create a new product container element
    const product = document.createElement('div');
    product.classList.add('product-container');
  
    // Create an image element for the flower and set its source
    const img = document.createElement('img');
    img.setAttribute('src', flower.url);
    product.appendChild(img);
  
    // Create a product name element and set its text content
    const name = document.createElement('div');
    name.classList.add('product-name');
    name.textContent = flower.name;
    product.appendChild(name);
  
    // Create a product description element and set its text content
    // const description = document.createElement('div');
    // description.classList.add('product-desc');
    // description.textContent = flower.description;
    // product.appendChild(description);
  
    // Create a product categories element and set its text content
    const categories = document.createElement('div');
    categories.classList.add('product-categories');
    categories.textContent = flower.categories.join(', ');
    product.appendChild(categories);
  
    // Create a product price element and set its text content
    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `$${flower.price.toFixed(2)}`;
    product.appendChild(price);
  
    // Append the new product container to the products container
    if (productsContainer) {
      productsContainer.appendChild(product);
    } else {
      console.error('Products container element not found.');
    }
  }
for(let i=0;i<flowers.length;i++){
    createProduct(flowers[i])
}




const filterItems = (filter) =>{
    document.getElementById('products-container').remove();
    createContainer();
    for(let i=0;i<flowers.length;i++){
        if((filter===flowers[i].season.toLowerCase()) || filter==='all')
        createProduct(flowers[i])
    }
    
}
const createContainer = () =>{
    const container = document.createElement('div')
    container.setAttribute('id','products-container')
    productsSection.appendChild(container)

}
const checkIfOpen = () =>{
  const  now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const day = now.getDate()
  const month = now.getMonth() + 1;
  const dayOfTheWeek = now.getDay()
  const weekDays = ['Duminica','Luni','Marti','Miercuri','Joi','Vineri','Sambata']
  let isOpen = false;

  if(dayOfTheWeek > 0 && dayOfTheWeek < 6){
    if(hours>=9 && hours<18){
      isOpen = true
    }
  }else if(dayOfTheWeek===0){
    if(hours>=10 && hours<15){
      isOpen = true
    }
  }else if(dayOfTheWeek===6){
    if(hours>=10 && hours<17){
      isOpen = true
    }
  }
  const openStatus = document.getElementById('open-status')
  if(isOpen){
    openStatus.textContent = 'Open'
    openStatus.classList.add('open')
  }else{
    openStatus.textContent = 'Closed'
    openStatus.classList.add('closed')
  }

}
checkIfOpen()

