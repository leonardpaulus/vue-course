function getRandomValue(min, max) {
  Math.floor(Math.random() * (max - min)) + min;
}

var app = new Vue({
  el: "#game",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});
