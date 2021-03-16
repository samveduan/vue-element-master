<template>
  <div>
    <p>school:{{school}}</p>
    <p>address: {{company}}</p>
    <p><button @click="_changeSchool('北大')">change</button></p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapState('footerStatus', {
      school: (state) => state.school,
      company: 'company'
    })
  },
  methods: {
    ...mapActions('footerStatus', {
      _changeSchool: '_changeSchool'
    })
  }
}
</script>

<style lang="" scoped>

</style>
