import axios from 'axios';

export default {
    feed: {
        interesting: () =>
            axios.get('http://localhost:8080/urdu/interesting').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        news: () =>
            axios.get('http://localhost:8080/urdu/news').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        international: () =>
            axios.get('http://localhost:8080/urdu/international').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        science: () =>
            axios.get('http://localhost:8080/urdu/science').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
    }
}
