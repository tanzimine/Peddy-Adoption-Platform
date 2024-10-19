// console.log("test done");

const loadAllCategories = () =>{
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    
    // .then((data)=> console.log(data.pets))
    .then((data)=> displayAllCategories(data.pets))
    .catch((error)=> console.log(error))


};
const displayAllCategories = (categories) =>{
    const allCategoryContainer = document.getElementById("categories")
    
    categories.forEach((category) => {
        // console.log(category);

        const {image, pet_name, breed,date_of_birth,gender, price, petId } = category



    // Check
    const displayName = pet_name ? pet_name : "Unknown Pet";
    const displayBreed = breed ? breed : "Breed information not available";
    const displayBirthDate = date_of_birth ? date_of_birth : "Birth date not available";
    const displayGender = gender ? gender : "Gender not specified";
    const displayPrice = price !== undefined && price !== null ? `$${price}` : "Price not available";






        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card rounded-md  bg-base-100 shadow-xl">
                    <figure>
                    <img class="object-cover" src= ${image}alt=" " />
                    </figure>
                    <div class="card-body text-gray-600 p-4">
                    <h2 class="font-bold">${pet_name}</h2>
                    <p>Breed:${breed} </p>
                    <p>Birth:${date_of_birth} </p>
                    <p>Gender:${gender}</p>
                    <p class="mb-3">Price:$ ${price} </p>


                    <!-- Buttons Section -->
                    <div class="card-actions justify-between">
                        <button onclick="addLikeFav('${image}')"  class="btn btn-primary p-3 border-2 rounded-md">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adoptPet(event)" class="btn btn-primary p-3 border-2 rounded-md mb-2">Adopt</button>
                        <button onclick="viewPetDetails('${petId}')" class="btn btn-outline p-3 border-2 rounded-md">Details</button>
                    </div>
                    </div>
                </div>
 
        `;
        allCategoryContainer.appendChild(div)
    });

    
};

const addLikeFav = (image) => {
    const rightGridAdd = document.getElementById("right-grid");
    const div = document.createElement("div");

    div.innerHTML = `
        <div>
            <img class="object-cover w-full h-full rounded-md" src="${image}" alt=" " />
        </div>
    `;
    rightGridAdd.appendChild(div);
};



// DOGSSSS

const dogsSearch = () => {
    // console.log('dogsSearch function isss triggered');
    setActiveButton(event); 
    const spinner = document.getElementById("spinner");
    const categoriesContainer = document.getElementById("categories");

    if (!spinner || !categoriesContainer) {
        console.error("Spinner or categories element not found");
        return;
    }

    categoriesContainer.innerHTML = "";
    
    spinner.classList.remove("hidden");

    setTimeout(function() {
        loadAllDogs();  
    }, 3000); 
};

const loadAllDogs = async () => {
    const spinner = document.getElementById("spinner");

    try {
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/category/dog");
        const data = await response.json();
        
        console.log(data.data);
        displayAllDogs(data.data);  

        spinner.classList.add("hidden");

    } catch (error) {
        console.error("Error fetching dog data:", error);
        spinner.classList.add("hidden");
    }
};

const displayAllDogs = (dogs) => {
    const categoriesContainer = document.getElementById("categories");

    categoriesContainer.innerHTML = "";

    dogs.forEach((dog) => {
        const { image, pet_name, breed, date_of_birth, price, gender, petId } = dog;

        // checking
        const displayName = pet_name ? pet_name : "Unknown Dog";
        const displayBreed = breed ? breed : "Breed information not available";
        const displayBirthDate = date_of_birth ? date_of_birth : "Birth date not available";
        const displayGender = gender ? gender : "Gender not specified";
        const displayPrice = price !== undefined && price !== null ? `$${price}` : "Price not available";



        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card rounded-md bg-base-100 shadow-xl">
                <figure>
                    <img class="object-cover w-full h-48 rounded-lg" src="${image}" alt="${pet_name}" />
                </figure>
                <div class="card-body text-gray-600 p-4">
                    <h2 class="font-bold">${pet_name}</h2>
                    <p>Breed: ${breed}</p>
                    <p>Birth: ${date_of_birth}</p>
                    <p>Gender: ${gender}</p>
                    <p class="mb-3">Price: $${price}</p>
                    <!-- Buttons Section -->
                    <div class="card-actions justify-between">
                        <button onclick="addLikeFav('${image}')"  class="btn btn-primary p-3 border-2 rounded-md">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adoptPet(event)" class="btn btn-primary p-3 border-2 rounded-md mb-2">Adopt</button>
                        <button onclick="viewPetDetails('${petId}')" class="btn btn-outline p-3 border-2 rounded-md">Details</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        categoriesContainer.appendChild(div);
    });
};

// --------------------------------------------------
// CATSSSS
const catsSearch = () => {
    setActiveButton(event); 
    const spinner = document.getElementById("spinner");
    const categoriesContainer = document.getElementById("categories");

    if (!spinner || !categoriesContainer) {
        console.error("Spinner or categories element not found");
        return;
    }

    categoriesContainer.innerHTML = "";
    
    spinner.classList.remove("hidden");

    setTimeout(function() {
        loadAllCats();  
    }, 3000); 
};

const loadAllCats = async () => {
    const spinner = document.getElementById("spinner");

    try {
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/category/cat");
        const data = await response.json();
        
        console.log(data.data);
        displayAllCats(data.data);  

        spinner.classList.add("hidden");

    } catch (error) {
        console.error("Error fetching cat data:", error);
        spinner.classList.add("hidden");
    }
};

const displayAllCats = (cats) => {
    const categoriesContainer = document.getElementById("categories");

    categoriesContainer.innerHTML = "";

    cats.forEach((cat) => {
        const { image, pet_name, breed, date_of_birth, price, gender,petId } = cat;

        // check
        const displayName = pet_name ? pet_name : "Unknown Cat";
        const displayBreed = breed ? breed : "Breed information not available";
        const displayBirthDate = date_of_birth ? date_of_birth : "Birth date not available";
        const displayGender = gender ? gender : "Gender not specified";
        const displayPrice = price !== undefined && price !== null ? `$${price}` : "Price not available";

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card rounded-md bg-base-100 shadow-xl">
                <figure>
                    <img class="object-cover w-full h-48 rounded-lg" src="${image}" alt="${pet_name}" />
                </figure>
                <div class="card-body text-gray-600 p-4">
                    <h2 class="font-bold">${pet_name}</h2>
                    <p>Breed: ${breed}</p>
                    <p>Birth: ${date_of_birth}</p>
                    <p>Gender: ${gender}</p>
                    <p class="mb-3">Price: $${price}</p>
                    <!-- Buttons Section -->
                    <div class="card-actions justify-between">
                        <button onclick="addLikeFav('${image}')"  class="btn btn-primary p-3 border-2 rounded-md">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adoptPet(event)" class="btn btn-primary p-3 border-2 rounded-md mb-2">Adopt</button>
                        <button onclick="viewPetDetails('${petId}')" class="btn btn-outline p-3 border-2 rounded-md">Details</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        categoriesContainer.appendChild(div);
    });
};

// RABBITSSSSS
const rabbitsSearch = () => {
    setActiveButton(event); 
    const spinner = document.getElementById("spinner");
    const categoriesContainer = document.getElementById("categories");

    if (!spinner || !categoriesContainer) {
        console.error("Spinner or categories element not found");
        return;
    }

    categoriesContainer.innerHTML = "";
    
    spinner.classList.remove("hidden");

    setTimeout(function() {
        loadAllRabbits();  
    }, 3000); 
};

const loadAllRabbits = async () => {
    const spinner = document.getElementById("spinner");

    try {
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/category/rabbit");
        const data = await response.json();
        
        console.log(data.data);
        displayAllRabbits(data.data);  

        spinner.classList.add("hidden");

    } catch (error) {
        console.error("Error fetching rabbit data:", error);
        spinner.classList.add("hidden");
    }
};

const displayAllRabbits = (rabbits) => {
    const categoriesContainer = document.getElementById("categories");

    categoriesContainer.innerHTML = "";

    rabbits.forEach((rabbit) => {
        const { image, pet_name, breed, date_of_birth, price, gender,petId } = rabbit;

        // check
        const displayName = pet_name ? pet_name : "Unknown Rabbit";
        const displayBreed = breed ? breed : "Breed information not available";
        const displayBirthDate = date_of_birth ? date_of_birth : "Birth date not available";
        const displayGender = gender ? gender : "Gender not specified";
        const displayPrice = price !== undefined && price !== null ? `$${price}` : "Price not available";
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card rounded-md bg-base-100 shadow-xl">
                <figure>
                    <img class="object-cover w-full h-48 rounded-lg" src="${image}" alt="${pet_name}" />
                </figure>
                <div class="card-body text-gray-600 p-4">
                    <h2 class="font-bold">${pet_name}</h2>
                    <p>Breed: ${breed}</p>
                    <p>Birth: ${date_of_birth}</p>
                    <p>Gender: ${gender}</p>
                    <p class="mb-3">Price: $${price}</p>
                    <!-- Buttons Section -->
                    <div class="card-actions justify-between">
                        <button onclick="addLikeFav('${image}')"  class="btn btn-primary p-3 border-2 rounded-md">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adoptPet(event)" class="btn btn-primary p-3 border-2 rounded-md mb-2">Adopt</button>
                        <button onclick="viewPetDetails('${petId}')" class="btn btn-outline p-3 border-2 rounded-md">Details</button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        categoriesContainer.appendChild(div);
    });
};


// View Pet Details Function
const viewPetDetails = (petId) => {
    // Fetch the pet details based on the petId
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
      .then((res) => res.json())
      .then((data) => showPetModal(data.petData))  
      .catch((error) => console.error('Error fetching pet details:', error));
};

const showPetModal = (pet) => {
    // Populate modal fields with the pet details
    document.getElementById("modal-pet-name").innerText = pet.pet_name;
    document.getElementById("modal-pet-image").src = pet.image;
    document.getElementById("modal-pet-details").innerText = pet.pet_details;

    // Showing the modal
    document.getElementById("pet-modal").classList.remove("hidden");
};

// Closing the modal
const closeModal = () => {
    document.getElementById("pet-modal").classList.add("hidden");
};

//Adopted COUNTDOWN
const adoptPet = (event) => {
    const modal = document.getElementById('adoption-modal');
    const countdownElement = document.getElementById('adoption-countdown');
    
    // Start with countdown 3
    let countdown = 3;
    countdownElement.innerText = countdown;

    modal.classList.remove('hidden');

    // Countdown logic
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            
            countdownElement.innerText = "Adopted!";
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 1500);
        }
    }, 1000); 
};


// --------------others search---------------------
const othersbSearch = () => {
    setActiveButton(event); 
    const categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = ""; 

    const rightGrid = document.getElementById("right-grid");
    rightGrid.innerHTML = ""; 

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("flex", "flex-col", "items-center", "justify-center", "w-full", "h-full");

    errorDiv.innerHTML = `
    
        <img id="error-image" class="w-1/2 h-auto mb-4" src="./images/error.webp" alt="No Information Available">
        <h1 class="text-2xl font-bold text-gray-800">No Information Available</h1>
        <p class="text-gray-600 mt-4 max-w-xl mx-auto">
            The pet you are searching for adoption is not available. Please choose other options.
        </p>
    `;
    
    categoriesContainer.appendChild(errorDiv);
};

// --------------------Sort by price-----------------

const sortPetsByCategory = (categoryName) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
        .then((res) => res.json())
        .then((data) => {
            const sortedPets = data.data.sort((a, b) => b.price - a.price);
            displaySortedPets(sortedPets);
        })
        .catch((error) => console.error(`Error sorting pets by price in ${categoryName} category:`, error));
};

const displaySortedPets = (pets) => {
    const allCategoryContainer = document.getElementById("categories");
    allCategoryContainer.innerHTML = "";

    pets.forEach((pet) => {
        const { image, pet_name, breed, date_of_birth, gender, price, petId } = pet;

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card rounded-md bg-base-100 shadow-xl">
                <figure>
                    <img class="object-cover" src="${image}" alt="${pet_name}" />
                </figure>
                <div class="card-body text-gray-600 p-4">
                    <h2 class="font-bold">${pet_name}</h2>
                    <p>Breed: ${breed}</p>
                    <p>Birth: ${date_of_birth}</p>
                    <p>Gender: ${gender}</p>
                    <p class="mb-3">Price: $${price}</p>
                    <div class="card-actions justify-between">
                        <button onclick="addLikeFav('${image}')" class="btn btn-primary p-3 border-2 rounded-md">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </button>
                        <button onclick="adoptPet(event)" class="btn btn-primary p-3 border-2 rounded-md mb-2">Adopt</button>
                        <button onclick="viewPetDetails('${petId}')" class="btn btn-outline p-3 border-2 rounded-md">Details</button>
                    </div>
                </div>
            </div>
        `;
        allCategoryContainer.appendChild(div);
    });
};

const sortPetsByPrice = () => {
    const activeCategory = document.querySelector('.active-category'); 

    if (activeCategory) {
        const categoryName = activeCategory.dataset.category;
        sortPetsByCategory(categoryName);
    } else {
        fetch("https://openapi.programming-hero.com/api/peddy/pets")
            .then((res) => res.json())
            .then((data) => {
                const sortedPets = data.pets.sort((a, b) => b.price - a.price);
                displaySortedPets(sortedPets);
            })
            .catch((error) => console.error('Error sorting all pets by price:', error));
    }
};


// ---------------------active or no ------------
const setActiveButton = (event) => {
    document.querySelectorAll('.category-button').forEach(button => {
        button.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
};
// ----------------------------------------------------------
function viewMoreAllCategories() {
    document.getElementById('categories-section').scrollIntoView({ behavior: 'smooth' });
    loadAllCategories();
}


loadAllCategories();
