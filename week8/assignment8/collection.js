var myVue = new Vue({
  el: '#collection',
  // created an array of objects
  data: {
    library: [
      {
        title: 'Storm Front',
        author: 'Jim Butcher',
        genre: 'Urban Fantasy',
        yearPublished: '2002',
        fiction: true
      },
      {
        title: 'Bone Gap',
        author: 'Laura Ruby',
        genre: 'Magical Realism',
        yearPublished: '2015',
        fiction: true
      },
      {
        title: 'Bird by Bird: Some Instructions on Writing and Life',
        author: 'Anne Lamott',
        genre: 'Writing Reference',
        yearPublished: '1995',
        fiction: false
      },
      {
        title: 'A Cold Day In The Sun',
        author: 'Sara Biren',
        genre: 'Contemporary Romance',
        yearPublished: '2019',
        fiction: true
      },
      {
        title: 'Leaders Eat Last: Why Some Teams Pull Together and Others Don\'t',
        author: 'Simon Sinek',
        genre: 'Work Culture',
        yearPublished: '2014',
        fiction: false
      }
    ]
  }
});
