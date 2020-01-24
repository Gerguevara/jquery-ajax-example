

CargarData = () => {

    fetch('https://randomuser.me/api/')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            let name = `${myJson.results[0].name.first} ${myJson.results[0].name.last}  `
            let foto = `${myJson.results[0].picture.large}` 
                             
                
            document.getElementById("name").innerHTML = name;
            document.getElementById("foto").src = foto;
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("name").innerHTML = "Ocurrio un error al cargar data!!";
          });
}

CargarData();
