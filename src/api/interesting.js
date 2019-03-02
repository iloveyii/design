import axios from 'axios';

export default {
    feed: {
        interesting: () =>
            axios.get('http://localhost:8080/urdup/interesting').then(res => res.data).catch(error => {
                throw new Error(error);
                console.dir(error);
            }),
        interesting2: () =>
            2
    }
}
