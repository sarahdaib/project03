const shows = [
    "Amr Diab",
    "Majida El Roumi"
];

const listElement = document.getElementById("Most Listened Artists");

for (let i = 0; i < shows.length; i++) {
    
    const listItem = document.createElement("li");
    
    listItem.textContent = shows[i];
    
    listElement.appendChild(listItem);
}