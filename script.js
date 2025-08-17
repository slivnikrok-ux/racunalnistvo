// Funkcija za odpiranje Google iskanja
function googleSearch(event) {
  event.preventDefault(); // prepreči reload strani
  const query = document.getElementById('searchInput').value;
  if(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank'); // odpre Google v novem zavihku
  }
}

// Poveži form z funkcijo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  if(form) {
    form.addEventListener('submit', googleSearch);
  }
});
