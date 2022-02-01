
const MLFURI = process.env.REACT_APP_MLF_API;

let token = window.localStorage.getItem('token') || '';

const headerPost = {
    'Content-Type': 'application/json'
}
const headerGet = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

export const MyLittleFriendAPI = {
    /* USER REQUESTS */
    async signIn({ email, password }) {
        const data = { email, password };
        const response = await fetch(`${process.env.REACT_APP_MLF_API}/auth/login`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });

        const user = await response.json();
        // Esta línea sobreescribe el headerGet Authorization con el objetivo
        // de que lo renombre al hacer el sign in directamente
        // Si no se coloca esta línea, el token seguirá como una cadena vacía al
        // primer render, debido a esta línea = window.localStorage.getItem('token') || ''
        // a menos que se refresque la página ya que allí ya existe el token en el
        // localStorage.
        headerGet.Authorization = `Bearer ${user.data.token}`;
        return user;
    },

    async getPetsByUserId(userId) {
        const response = await fetch(`${MLFURI}/customers/${userId}/pets`, {
            method: 'GET',
            headers: headerGet
        });
        const pets = await response.json();
        return pets;
    },

    /* PETS REQUESTS */
    async getPetById(petId) {
        const response = await fetch(`${MLFURI}/pets/${petId}`, {
            method: 'GET',
            headers: headerGet
        });
        const pet = await response.json();
        return pet;
    }
}