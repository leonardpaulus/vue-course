var app = new Vue({
  el: "#user-goal",
  data: {
    enteredGoalValue: "",
    goals: [],
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});
