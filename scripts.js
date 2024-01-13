// fetch champions data from the backend
fetch('/api/champions')
    .then(response => response.json())
    .then(champions => {
        const championsList = document.getElementById('champions-list');
        champions.forEach(champion => {
            const championCard = `
                <div>
                    <h2>${champion.name}</h2>
                    <p>${champion.description}</p>
                    <img src="${champion.imageUrl}" alt="${champion.name}" />
                </div>
            `;
            championsList.innerHTML += championCard;
        });
    })
    .catch(error => console.error('Error fetching champions:', error));
