import {atom, selector} from 'recoil';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export const usersatom = atom({
    key: "users",
    default: selector({
        key:"usersatomselector",
        get: async () => {
            const {data} = await axios.get('http://localhost:3000/api/v1/user/bulk');
            const temp = data.users.filter((usr) => usr._id !== loggeduser.userId);
            return temp;
        }
    })
});

function getUser() {
    const token = localStorage.getItem('token');
    if(!token) {
        return null;
    }
    else {
        const userData = jwtDecode(token);
        return userData;
    }
}

export const loggeduser = atom({
    key: "loggedUser",
    default: getUser()
});

export const balance = atom({
    key: "balance",
    default: selector({
        key: "balanceSelector",
        get: async () => {
            const token = localStorage.getItem('token');
            const {data} = await axios.get('http://localhost:3000/api/v1/account/balance', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data.balance;
        }
    })
});