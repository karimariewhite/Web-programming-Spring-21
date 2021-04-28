/* eslint-disable indent */
var baseURL = 'https://api.lyrics.ovh/v1/';
const vm = new Vue({
    el: '#songApp',
    data: {
        artist: '',
        title: '',
        lyrics: '',
        showLyrics: false,
        formValid: ''
    },
    computed: { // computed property that takes form input and adds it to the base URL for the data search
        lyricQuery: function () {
            return baseURL + this.artist + '/' + this.title
        }
    },
    methods: {
        getLyrics: function () {
            axios.get(vm.lyricQuery)
            .then(response => {
                vm.lyrics = response.data.lyrics;
        })
      }
    }
})
