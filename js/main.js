const { createApp } = Vue;

//app definition
const myApp = createApp({
  data() {
    return {
      title: 'ciao',
      ciao: 'Sono la proprietà Ciao',
      img: 'https://www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg',
      cssData: 'big',
      isOk: true,
      type: 'C',
      friends: ['Luca', 'Paolo', 'Giulia'],
      nLoop: 34,
      friendsObj: [
        {
          nome: 'Luca',
          age: 25,
        },
        {
          nome: 'Andrea',
          age: 28,
        },
        {
          nome: 'Claudia',
          age: 21,
        },
      ],
    };
  },
  methods: {
    verificaSeVero() {
      return 2 > 5; //return false;
    },
  },
  created() {
    console.log('created');
    console.log(this.title);
  },
  mounted() {
    console.log('mounted');
    this.title = 'Sono nel dom';
    console.log(this.friends);
  },
});

//mounting app
myApp.mount('#app');
