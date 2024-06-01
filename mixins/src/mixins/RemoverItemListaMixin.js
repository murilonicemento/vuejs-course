export default {
  methods: {
    removerItem() {
      this.items.pop();
    }
  },
  created() {
    console.log("No remove lista mixin");
  }
};