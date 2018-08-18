Vue.component('name', {
  props: ['school'],
  template: ' <div class="tr-div"><div class="td-div">{{ school.student }}</div></div>'
});

var app = new Vue({
  el: '#app',
  data: {
    studentList: [
      { id: 0, student: 'James' },
      { id: 1, student: 'John' },
      { id: 2, student: 'Jean' },
      { id: 3, student: 'Mary' },
      { id: 4, student: 'Lyn' },
      { id: 5, student: 'Kayla' },
      { id: 6, student: 'Puth' },
      { id: 7, student: 'Selena' },
      { id: 8, student: 'Greg' },
      { id: 9, student: 'Boris' },
      { id: 10, student: 'Brenda' },
    ],
    heading: "Just my names"
  }
})