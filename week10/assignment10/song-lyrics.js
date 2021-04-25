/* eslint-disable indent */
var baseURL = 'https://api.lyrics.ovh/v1/';
const vm = new Vue({
    el: '#songApp',
    data: {
        artist: '',
        title: '',
        lyrics: '',
        showLyrics: false
    },
    computed: {
        lyricQuery: function () {
            return baseURL + this.artist + '/' + this.title
        }
    },
    methods: {
        getLyrics: function () {
            axios.get(vm.lyricQuery)
            .then(response => {
                console.log('response', response);
                vm.lyrics = response.data.lyrics;
        });
      }
    }
})
