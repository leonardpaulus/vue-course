var app = new Vue({
  el: "#events",
  data: {
    counter: 0,
    name: "",
    confirmedName: "",
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Form has been submitted");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});
