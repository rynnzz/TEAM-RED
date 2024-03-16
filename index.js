const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=golden+hour&type=track', {
    headers: {
    'Authorization': 'Bearer BQDJycNxApsyXu6lHOi-wo8Q2QaOssZQLIT7IM92_oQmmC_5ItHR5P9UyAF8D1icEk2C4Yhlcp64MxxcN3lB6vUtXxEbkjRG_vSbP0qoH6RzDsIsbfujwbgsDA-bZ7dhpiBHHFvVtIAAm5VElxTuNbsOX5Sh19iIXVCWgBDFO6eJD6Ha5MKfELp1y09m0XStNG9QZhf56tZj-ljRaYo'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})