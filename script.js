document.addEventListener("DOMContentLoaded", function () {
  fetchRandomUser();

  async function fetchRandomUser() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const user = data.results[0];

      const projectList = document.getElementById('project-list');
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
        <img src="${user.picture.large}" alt="${user.name.first}'s picture">
      `;

      projectList.appendChild(projectDiv);
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  }
});