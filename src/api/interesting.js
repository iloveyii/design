import axios from 'axios';

export default {
    news18 : {
        interesting: () =>
            axios.get('http://localhost:4000/interesting/news18').then(res=>res.data).catch(error => { throw new Error(error); console.dir(error)} ),
        delete: () =>
            null
    }
}
