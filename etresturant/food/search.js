// Get the elements
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Sample data to search through (replace with actual drink names and descriptions)
const data = [
  { title: 'በያይነት', description: 'A traditional dish with rich flavors and spices.' },
  { title: 'ተጋቢኖ', description: 'A savory meal with a perfect blend of ingredients.' },
  { title: 'ምስር ወጥ', description: 'A delicious lentil stew that is full of nutrients.' },
  { title: 'አተር ወጥ', description: 'A spicy and aromatic stew made with meat and vegetables.' },
  { title: 'ሽሮ ወጥ', description: 'A flavorful dish served with a mix of spices and herbs.' },
  { title: 'አልጫ ድንች', description: 'Crispy and delicious fried potatoes.' },
  { title: 'ፍርፍር', description: 'A fried dough snack, crispy and perfect for sharing.' },
  { title: 'ቲማቲም', description: 'A fresh and vibrant tomato salad with spices.' },
  { title: 'ፓስታ', description: 'Tasty pasta dishes served with different sauces.' },
  { title: 'መኮሮኒ', description: 'Macaroni served with a creamy sauce and other ingredients.' },
  { title: 'ሩዝ', description: 'Fluffy rice, a perfect side dish for any meal.' },
  { title: 'ሶያ', description: 'A dish made with soybeans, rich in protein.' },
  { title: 'ፉል', description: 'A popular Ethiopian dish made from fava beans.' },
  { title: 'እንቁላል', description: 'Eggs prepared in various styles, a staple meal.' },
  { title: 'ቀይ ወጥ', description: 'Spicy and flavorful red stew with meat and vegetables.' },
  { title: 'ምንቸት', description: 'A hearty dish with a variety of spices and flavors.' },
  { title: 'ጥብስ', description: 'A savory beef dish with rich flavors.' },
  { title: 'ዱለት', description: 'A dish featuring minced meat and various seasonings.' },
  { title: 'ዶናት', description: 'A sweet, deep-fried dough pastry.' },
  { title: 'ፍላፍል', description: 'A delightful and crispy snack.' },
  { title: 'ሳንቡሳ', description: 'Fried pastry filled with meat or lentils.' },
  { title: 'እርጥብ', description: 'A traditional Ethiopian snack with a savory taste.' }
];

// Show the search bar when the search icon is clicked
searchIcon.addEventListener('click', (event) => {
  event.preventDefault();
  searchBar.style.display = 'block'; // Show the search bar
  searchInput.focus(); // Automatically focus the input field
});

// Search functionality triggered when the user types
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim(); // Get the input query
  const filteredResults = data.filter(item =>
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query)
  );

  // Display the search results
  displaySearchResults(filteredResults);
});

// Function to display search results
function displaySearchResults(results) {
  searchResults.innerHTML = ''; // Clear previous results

  if (results.length > 0) {
    results.forEach(result => {
      const div = document.createElement('div');
      div.className = 'search-result-item'; // Add a class for styling
      div.innerHTML = `<strong>${result.title}</strong><p>${result.description}</p>`;
      searchResults.appendChild(div);
    });
  } else {
    searchResults.innerHTML = '<p>No results found.</p>';
  }
}

// Close search bar when clicking outside
window.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && event.target !== searchIcon) {
    searchBar.style.display = 'none'; // Hide the search bar
  }
});
