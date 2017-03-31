<template>
  <div>
    <div>{{ count }} <button @click="addOne">+1</button> <button @click="add10">+10</button></div>
    <div><button @click="loadData">加载数据</button></div>
    <div v-for="u in users">{{u.username}}</div>
  </div>

</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { ADD } from '../constants/mutation-types';

export default {
  name: 'counter',
  computed: mapState(['count', 'users']),
  created() {
    this.loadData();
  },
  /**
   * computed: {
   * count () {
   *   return this.$store.state.count
   *  }
   * }
   **/
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // },
    ...mapMutations({
      addOne: 'increment',
      add: ADD,
    }),
    add10() {
      this.add(10);
    },
    loadData() {
      this.$store.dispatch('loadUsers'/** , some more argurments */);
    },
  },
};
</script>
