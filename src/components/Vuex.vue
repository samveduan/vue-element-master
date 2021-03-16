<template>
  <div>
    <p>name: {{name}}</p>
    <p>school: {{school}}</p>
    <p>address: {{address}}</p>
    <p>field: {{field}}</p>
    <p>arrList: {{arrList}}</p>
    <div><button @click="changeSchool()">改变值</button></div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    data(){
      return {
        use: 'vuex高级使用方法'
      }
    },
    computed: {
      ...mapState({
        name: state => state.footerStatus.name,
        address(state){
          return state.footerStatus.address;
        }
      }),
      ...mapState('footerStatus', {
        school: 'school'
      }),
      ...mapState('collection', ['field']),
      _use(){
        this.use;
      },
      ...mapGetters('collection', {
        arrList: 'renderCollects'
      })
    },
    methods: {
      changeSchool(){
        this.$store.dispatch("footerStatus/_changeSchool", '北大');
      }
    }
  }
</script>

<style scoped>

</style>
