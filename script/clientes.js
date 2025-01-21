const button = document.getElementById("loadData");
const tableBody = document.querySelector("#dataTable tbody") ;

const apiurl = "http://localhost:3000"; //8081

async function fetchDataClientes() {
    try {
        const response = await fetch(`${apiurl}/cliente`)
        if (!response.ok) {
            throw new Error (`Erro ao localizar cliente: ${response.status}`)
        }
        const data = await response.json();
        tableBody.innerHTML = "";
        data.forEach((clientes) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${clientes.nome}</td>
            <td>${clientes.contato}</td>
            `
            tableBody.appendChild(row);
        })
    }
    catch(error) {
        console.log(error)
    }
}

button.addEventListener("click", fetchDataClientes);