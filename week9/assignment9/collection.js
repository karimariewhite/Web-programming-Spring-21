Vue.component('book-component', {
  template: `<div class="list-container">
              <div class="col-4-4">
                {{title}}
              </div>
              <div class="col-4-4">
                {{author}}
              </div>
              <div class="col-4-4">
                {{genre}}
              </div>
              <div class="col-4-4">
                {{yearPublished}}
              </div>
            </div>`,
  props: ['title', 'author', 'genre', 'yearPublished', 'fiction']
})

var myVue = new Vue({
  el: '#collection',
  // created an array of objects
  data: {
    titleInput: '',
    authorInput: '',
    genreInput: '',
    yearInput: '',
    fictionInput: '',
    idInput: '',
    library: [
      {
        title: 'Storm Front',
        author: 'Jim Butcher',
        genre: 'Urban Fantasy',
        yearPublished: '2002',
        fiction: true,
        id: '57'
      },
      {
        title: 'Bone Gap',
        author: 'Laura Ruby',
        genre: 'Magical Realism',
        yearPublished: '2015',
        fiction: true,
        id: '254'
      },
      {
        title: 'Bird by Bird: Some Instructions on Writing and Life',
        author: 'Anne Lamott',
        genre: 'Writing Reference',
        yearPublished: '1995',
        fiction: false,
        id: '127'
      },
      {
        title: 'A Cold Day In The Sun',
        author: 'Sara Biren',
        genre: 'Contemporary Romance',
        yearPublished: '2019',
        fiction: true,
        id: '324'
      },
      {
        title: 'Leaders Eat Last: Why Some Teams Pull Together and Others Don\'t',
        author: 'Simon Sinek',
        genre: 'Work Culture',
        yearPublished: '2014',
        fiction: false,
        id: '125'
      }
    ]
  },
  // method to delete items from list -- bookObject is newly assigned
  // this filters makes a new array and compares the ID in the array to the ID of the book Object defined above
  // how could I assign id to book object randomly in future?
  methods: {
    deleteItem: function (bookObject) {
      this.library = this.library.filter(function (books) {
        if (books.id !== bookObject.id) {
          return true;
        } else {
          return false;
        }
      })
    },
    addItem: function () {
      let newItem = {
        title: this.titleInput,
        author: this.authorInput,
        genre: this.genreInput,
        yearPublished: this.yearInput,
        fiction: this.fictionInput,
        id: this.idInput
      };
      this.library.push(newItem);
      this.titleInput = this.authorInput = this.genreInput = this.yearInput = this.fictionInput = this.idInput = '';
    },
    checkForm: function () {
      if (this.idInput !== '') {
        window.alert('thank you');
      } else {
        window.alert('Please add an ID');
      }
    }
  }
});
