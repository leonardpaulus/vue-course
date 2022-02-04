var app = new Vue({
  el: "#events",
  data: {
    counter: 0,
    name: "",
    lastName: "",
    // fullname: "",
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Form has been submitted");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //     name(value) {
    //       if (value === "") {
    //         this.fullname = "";
    //       } else {
    //         this.fullname = value + " " + this.lastName;
    //       }
    //     },
    //     lastName(value) {
    //       if (value === "") {
    //         this.fullname = "";
    //       } else {
    //         this.fullname = this.name + " " + value;
    //       }
    //     },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
});
