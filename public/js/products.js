const flowers = [
    {
      name: "Sunflower",
      description: "A tall, bright flower that follows the sun throughout the day.",
      price: Math.floor(Math.random() * 50) + 10, // generates a random price between 10 and 60
      season: "summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/sunflower.jpg',
      size: 'small'
    },
    {
      name: "Rose",
      description: "A classic flower with a sweet fragrance.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/rose.jpg',
      size: 'very-big'
    },
    {
      name: "Tulip",
      description: "A popular flower known for its colorful, cup-shaped blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Bulb", "Cut Flower"],
      url: './public/images/tulip.jpg',
      size: 'medium'
    },
    {
      name: "Lavender",
      description: "A fragrant plant with purple flowers often used in aromatherapy.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Perennial", "Herb", "Fragrant"],
      url: './public/images/lavender.jpg',
      size: 'small'
    },
    {
      name: "Daisy",
      description: "A simple yet cheerful flower often found in meadows.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/daisy.jpg',
      size: 'very-big'
    },
    {
      name: "Lily",
      description: "A majestic flower with large, showy blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Perennial", "Cut Flower"],
      url: './public/images/lily.jpg',
      size: 'big'
    },
    {
      name: "Peony",
      description: "A lush flower known for its large, fragrant blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/peony.jpg',
      size: 'small'
    },
    {
      name: "Chrysanthemum",
      description: "A fall flower with a variety of shapes and colors.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "autumn",
      categories: ["Annual", "Perennial", "Cut Flower"],
      url: './public/images/chrysanthemum.jpg',
      size: 'very-big'
    },
    {
      name: "Hydrangea",
      description: "A shrub with large, showy blooms that change color based on soil acidity.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Shrub", "Cut Flower"],
      url: './public/images/hydrangea.jpg',
      size: 'medium'
    },
    {
      name: "Orchid",
      description: "A delicate flower often found in tropical climates.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "autumn",
      categories: ["Perennial", "Indoor Plant"],
      url: './public/images/orchid.jpg',
      size: 'small'
    },
    {
      name: "Sunflower",
      description: "A tall, bright flower that follows the sun throughout the day.",
      price: Math.floor(Math.random() * 50) + 10, // generates a random price between 10 and 60
      season: "summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/sunflower.jpg',
      size: 'small'
    },
    {
      name: "Rose",
      description: "A classic flower with a sweet fragrance.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/rose.jpg',
      size: 'very-big'
    },
    {
      name: "Tulip",
      description: "A popular flower known for its colorful, cup-shaped blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Bulb", "Cut Flower"],
      url: './public/images/tulip.jpg',
      size: 'medium'
    },
    {
      name: "Lavender",
      description: "A fragrant plant with purple flowers often used in aromatherapy.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Perennial", "Herb", "Fragrant"],
      url: './public/images/lavender.jpg',
      size: 'small'
    },
    {
      name: "Daisy",
      description: "A simple yet cheerful flower often found in meadows.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Annual", "Cut Flower"],
      url: './public/images/daisy.jpg',
      size: 'very-big'
    },
    {
      name: "Lily",
      description: "A majestic flower with large, showy blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Perennial", "Cut Flower"],
      url: './public/images/lily.jpg',
      size: 'big'
    },
    {
      name: "Peony",
      description: "A lush flower known for its large, fragrant blooms.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "spring",
      categories: ["Perennial", "Cut Flower", "Fragrant"],
      url: './public/images/peony.jpg',
      size: 'small'
    },
    {
      name: "Chrysanthemum",
      description: "A fall flower with a variety of shapes and colors.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "autumn",
      categories: ["Annual", "Perennial", "Cut Flower"],
      url: './public/images/chrysanthemum.jpg',
      size: 'very-big'
    },
    {
      name: "Hydrangea",
      description: "A shrub with large, showy blooms that change color based on soil acidity.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "summer",
      categories: ["Shrub", "Cut Flower"],
      url: './public/images/hydrangea.jpg',
      size: 'medium'
    },
    {
      name: "Orchid",
      description: "A delicate flower often found in tropical climates.",
      price: Math.floor(Math.random() * 50) + 10,
      season: "autumn",
      categories: ["Perennial", "Indoor Plant"],
      url: './public/images/orchid.jpg',
      size: 'big'
    }
  ];



  const productsSection = document.querySelector('.products-parent')



  

  function createProduct(flower) {
    const productsContainer = document.getElementById('products-container-id');
    // Get the products container element from the DOM
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





const createContainer = () =>{
    const container = document.createElement('div')
    container.setAttribute('id','products-container-id');
    container.classList.add('products-container')
    productsSection.appendChild(container)

}
let filters = {
    sortBy: 'alphabetic-ascending',
    season: 'summer',
    minPrice: 0,
    maxPrice: 9999,
    size:'small'
}
const updateFilter = (filter,value) =>{
  switch (filter) {
    case 'order':
      filters.sortBy = value;
      break;
    case 'season':
      filters.season = value;
      break;
    case 'min-price':
      filters.minPrice = value;
      break;
    case 'max-price':
      filters.maxPrice = value;
      break;
    case 'size':
      filters.size = value;
      break;
  }
}

function filterFlowers() {
  return flowers.filter(flower => {
    // Filter by season if specified
    if (filters.season && flower.season !== filters.season) {
      return false;
    }

    // Filter by price if specified
    if (filters.minPrice && flower.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && flower.price > filters.maxPrice) {
      return false;
    }

    // Filter by size if specified
    if (filters.size && flower.size !== filters.size) {
      return false;
    }

    // All filters passed, include the flower in the result
    return true;
  });
}



function sortFlowers(items, sortBy) {
  const sortedFlowers = [...items];

  switch (sortBy) {
    case 'price-ascending':
      sortedFlowers.sort((a, b) => a.price - b.price);
      break;
    case 'price-descending':
      sortedFlowers.sort((a, b) => b.price - a.price);
      break;
    case 'alphabetic-ascending':
      sortedFlowers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'alphabetic-descending':
      sortedFlowers.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      console.log('Invalid sorting option');
      break;
  }

  return sortedFlowers;
}



const applyFilters = () =>{
  const filteredItems = filterFlowers();
  const sortedFlowers = sortFlowers(filteredItems,filters.sortBy)
  document.querySelector('.products-container').remove();
  createContainer();
  if(sortedFlowers.length<1){
    document.querySelector('.products-container').innerHTML = "No products found. Try another filter"
  }else{
    for(let i=0;i<sortedFlowers.length;i++){
      createProduct(sortedFlowers[i])
    }
  }
  

}

const toggleFilterMenu = () =>{
  document.querySelector('.left-menu').classList.toggle('show')
  const btn = document.querySelector('.show-filters-btn')
  if(btn.innerHTML =="Show Filters"){
    btn.innerHTML = "Hide Filters"
  }else{
    btn.innerHTML = 'Show Filters'
  }
}