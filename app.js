var app = new Vue({
  el: "#styling",
  data() {
    return {
      boxAselected: false,
      boxBselected: false,
      boxCselected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxAselected = !this.boxAselected;
      } else if (box === "B") {
        this.boxBselected = !this.boxBselected;
      } else if (box === "C") {
        this.boxCselected = !this.boxCselected;
      }
    },
  },
  computed: {
    boxAclasses() {
      return { active: this.boxAselected };
    },
  },
});
