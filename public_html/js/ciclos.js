/* 
    Created on : 31/01/2019, 11:07:30 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

var ejemplo3 = new Vue({
    el: '#ejemplo3',
    data: {        
        Fecha: "01-09-2017",
        Materiales: [
        {idO:1,idM:"AA1",nombre:"Producto 1",marca:"Generico",cantidad:2},
        {idO:1,idM:"ES1",nombre:"Espagueti Ronco",marca:"RONCO",cantidad:3},
        {idO:1,idM:"ES2",nombre:"Espagueti Capri",marca:"CAPRI",cantidad:5}
        ]
    }
});

var ejemplo4 = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
});

var ejemplo5 = new Vue({
  el: '#ejemplo5',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
});

var ejemplo6 = new Vue({
  el: '#ejemplo6',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
});

var ejemplo7 = new Vue({
    el: '#ejemplo7',
    data: {        
        Materiales: [
        {idO:1,idM:"AA1",nombre:"Producto 1",marca:"Generico",cantidad:2},
        {idO:1,idM:"ES1",nombre:"Espagueti Ronco",marca:"RONCO",cantidad:3},
        {idO:1,idM:"ES2",nombre:"Espagueti Capri",marca:"CAPRI",cantidad:5}
        ]
    }
});

var vm = new Vue({
    el: '#ejemplo8',
    data: {
      userProfile: {
        name: 'Anika'
      }
    }
});

var ejemplo9 = new Vue({
    el: '#ejemplo9',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
    }
});

var ejemplo10 = new Vue({
    el: '#ejemplo10',
    data: {
        numbers: [ 1, 2, 3, 4, 5, 6 ]
    },
    methods: {
        even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
    }
});

var ejemplo11 = new Vue({
    el: '#ejemplo11',
    data: {}
});

var ejemplo12 = new Vue({
    el: '#ejemplo12',
    data: {
        items: [
          { message: 'Primero' },
          { message: 'Segundo' },
          { message: 'Tercero' },
        ]
    }
});

var ejemplo13 = new Vue({
    el: '#ejemplo13',
    data: {
        items: [
            {texto: 'Oso', bandera: true},
            {texto: 'Gato', bandera: false},
            {texto: 'Perro', bandera: true},
            {texto: 'Caballo', bandera: false},            
        ]
    }
});

var ejemplo14 = new Vue({
    el: '#ejemplo14',
    data: {
        items: [
            {texto: 'Oso', bandera: true},
            {texto: 'Gato', bandera: false},
            {texto: 'Perro', bandera: true},
            {texto: 'Caballo', bandera: false},            
        ]
    }
});
