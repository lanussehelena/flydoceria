const form = document.getElementById('customerForm');
const message = document.getElementById('message');

const apiurl = "http://localhost:3000/cliente"; //8081

// POST CLIENTE

async function createCustomer(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;

    try {
        const response = await fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, contato })
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }

        const data = await response.json();

        message.textContent = `Cliente criado com sucesso! ID: ${data.id}`;
        message.style.color = 'green';

        form.reset();
    } catch (error) {
        message.textContent = `Erro ao criar cliente: ${error.message}`;
        message.style.color = 'red';
        console.log(error)
    }
}

form.addEventListener('submit', createCustomer);