export function fetchFruits() {
	return fetch("http://localhost:5050")
	  .then(response => response.json())
	  .then(data => data.slice(0, 10))
	  .catch(error => {
		 console.error('Error fetching fruits:', error);
		 return [];
	  });
 }