export default {
  data: () => ({
    titulo: "Lista Padrão",
    items: [],
    item: "",
  }),
  methods: {
    adicionarItem() {
      this.items.push(this.item);
      this.item = "";
    },
  },
  created() {
    console.log("No lista mixin");
  }
};