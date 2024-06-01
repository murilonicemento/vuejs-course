<template>
  <div>
    <h3>{{ titulo }}</h3>
    <input type="text" placeholder="Nome do video game" v-model="item" />
    <button @click="adicionarItem">Adicionar</button>
    <br />
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <button @click="removerItem">Remover</button>
  </div>
</template>

<script>
import ListaMixin from "@/mixins/ListaMixin";
import RemoverItemListaMixin from "@/mixins/RemoverItemListaMixin";

export default {
  name: "ListaFilmes",
  data: () => ({ titulo: "Lista de Filmes" }),
  mixins: [ListaMixin, RemoverItemListaMixin],
};
</script>
