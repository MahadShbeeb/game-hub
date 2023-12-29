import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ee305e1579674354876de1b4924a00b9'
    }

})