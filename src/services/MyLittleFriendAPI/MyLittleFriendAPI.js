
const MLFURI = 'https://mylittlefriend.herokuapp.com';
let token;

export const MyLittleFriendAPI = {
    async signIn({ email, password }) {
        const data = { email, password };
        const response = await fetch(`${MLFURI}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        token = json.token;
        return json;
    }
}