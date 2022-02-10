
const MLFURI = process.env.REACT_APP_MLF_API;

let token = window.localStorage.getItem('token') || '';

const headerPost = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}
const headerGet = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}
const headerPut = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

const headerDelete = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}

export const MyLittleFriendAPI = {
    //* USER REQUESTS */
    async signUp(data) {
        let url;
        if (data.avatar_url) {
            const uploadImageResponse = await MyLittleFriendAPI.uploadFile(data.avatar_url);
            url = uploadImageResponse;
        }

        const response = await fetch(`${MLFURI}/customers`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify({
                ...data,
                avatar_url: url
            })
        });

        const json = await response.json();
        return json;
    },

    async verifyEmail(tokenVerify) {
        const response = await fetch(`${MLFURI}/auth/verify-email`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify({
                hash: tokenVerify
            })
        });
        const json = await response.json();
        return json;
    },

    async signIn(data) {
        const response = await fetch(`${MLFURI}/auth/login`, {
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
        headerPost.Authorization = `Bearer ${user.data.token}`;
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

    async getUserCardData(userId) {
        const response = await fetch(`${MLFURI}/customers/${userId}/paymentdata`, {
            method: 'GET',
            headers: headerGet
        });
        const userCardData = await response.json();
        return userCardData;
    },

    //* PETS REQUESTS */
    async getPetById(petId) {
        const response = await fetch(`${MLFURI}/pets/${petId}`, {
            method: 'GET',
            headers: headerGet
        });
        const pet = await response.json();
        return pet;
    },

    async registerPet(data) {
        let url;
        if (data.avatar_url) {
            const uploadImageResponse = await MyLittleFriendAPI.uploadFile(data.avatar_url);
            url = uploadImageResponse;
        }

        const response = await fetch(`${MLFURI}/pets`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify({
                ...data,
                avatar_url: url
            })
        });
        const json = await response.json();
        return json;
    },

    async updatePetById(data) {
        let url;
        if (data.newData.avatar_url) {
            const uploadImageResponse = await MyLittleFriendAPI.uploadFile(data.newData.avatar_url);
            url = uploadImageResponse;
        }
        const response = await fetch(`${MLFURI}/pets/${data.petId}`, {
            method: 'PUT',
            headers: headerPut,
            body: JSON.stringify({
                ...data.newData,
                avatar_url: url
            })
        });
        const json = await response.json();
        return json;
    },

    async deletePetById(petId) {
        const response = await fetch(`${MLFURI}/pets/${petId}`, {
            method: 'DELETE',
            headers: headerDelete,
        });
        const petDeleted = await response.json();
        return petDeleted;
    },

    //* VETERINARIES REQUESTS */
    async getVeterinaries() {
        const response = await fetch(`${MLFURI}/veterinaries`, {
            method: 'GET',
            headers: headerGet
        });
        const json = await response.json();
        return json;
    },

    async getVeterinaryById(veterinaryId) {
        const response = await fetch(`${MLFURI}/veterinaries/${veterinaryId}`, {
            method: 'GET',
            headers: headerGet
        });
        const json = await response.json();
        return json;
    },

    //* UPLOAD FILES REQUESTS */
    async uploadFile(file) {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${MLFURI}/upload/file`, {
            method: 'POST',
            body: formData
        });
        const json = await response.json();
        return json.data.url;
    },

    //* PAYMENT REQUESTS */
    async registerCard(data) {
        const response = await fetch(`${MLFURI}/payment/card`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });
        const cardResult = await response.json();
        return cardResult;
    },

    async registerPayment(data) {
        const response = await fetch(`${MLFURI}/payment`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });
        const paymentResult = await response.json();
        return paymentResult;
    },

    //* SERVICE REQUESTS */ 
    async requestService(data) {
        console.log(data)
        const response = await fetch(`${MLFURI}/requestservices`, {
            method: 'POST',
            headers: headerPost,
            body: JSON.stringify(data)
        });
        const requestServiceResult = await response.json();
        return requestServiceResult;
    }
}