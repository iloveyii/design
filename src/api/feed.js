import axios from 'axios';
const server = 'http://be_newsapp.softhem.se';
// const server = 'http://localhost:8080';
export default {
    feed: {
        interesting: () =>
            axios.get(server + '/urdu/interesting').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        news: () =>
            axios.get(server + '/urdu/news').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        international: () =>
            axios.get(server + '/urdu/international').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        science: () =>
            axios.get(server + '/urdu/science').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        mazahia: () =>
            axios.get(server + '/urdu/mazahia').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
    }
}
