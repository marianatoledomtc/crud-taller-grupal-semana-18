// Muestra el listado de usuarios
     const resultsContainer = document.getElementById('results');

     fetch('https://672ceabffd8979715640b583.mockapi.io/users')
       .then(response => response.json())
       .then(data => {
         resultsContainer.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos elementos
         data.forEach(user => {
           // Crea un elemento HTML para cada usuario
           const userElement = document.createElement('div');
           userElement.innerHTML = `
        <ul> 
        <li><strong>ID:</strong> ${user.id}</li> 
        <li><strong>Nombre:</strong> ${user.name}</li> 
        <li><strong>Apellido:</strong> ${user.lastname}</li> 
        <br>
        </ul>
        `;
           resultsContainer.appendChild(userElement); // Agrega el elemento al contenedor
         });
       })
       .catch(error => console.error('Error al obtener los usuarios:', error));
   
       
// Buscar usuario
document.getElementById('btnGet1').addEventListener('click', buscarUsuario);

function buscarUsuario() {
  const userId = document.getElementById('inputGet1Id').value;
  const resultsContainer = document.getElementById('results');
  if (!userId) { 
    resultsContainer.innerHTML = '<p>Por favor, ingrese un ID válido.</p>'; 
    return; // Detiene la ejecución si no hay ID 
} 

  fetch(`https://672ceabffd8979715640b583.mockapi.io/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }
      return response.json();
    })
    .then(user => {
      resultsContainer.innerHTML = ''; // Limpia el contenedor
      const userElement = document.createElement('div');
      userElement.innerHTML = `
        <ul>
          <li><strong>ID:</strong> ${user.id}</li>
          <li><strong>Nombre:</strong> ${user.name}</li>
          <li><strong>Apellido:</strong> ${user.lastname}</li>
        </ul>
      `;
      resultsContainer.appendChild(userElement);
    })
    .catch(error => {
      resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

