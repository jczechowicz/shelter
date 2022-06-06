let pets = [];

  async function loadPets() {
    const response = await fetch('./shelter/assets/data/pets.json');
    pets = await response.json();
    console.log(pets)
  }

  loadPets();
  console.log(pets)

burgerMenu.addEventListener("click", toggleMenu);


  const ourFriendsContainerCards = document.querySelector('#container-class');
