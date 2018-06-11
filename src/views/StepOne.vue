<template>
  <div>
    <h2>{{ title }}</h2>
    <cat-counter
      :imgCat="imgCat"
      :counter="counter"
      @addedVote="setCounter">
    </cat-counter>
  </div>
</template>

<script>
import CatCounter from '@/components/CatCounter'

export default {
  name: 'StepOne',

  components: {
    CatCounter
  },

  data () {
    return {
      title: 'Step One',
      imgCat: require('@/assets/cat1.jpg'),
      counter: 0
    }
  },

  methods: {
    setCounter (counter) {
      this.counter = counter
    }
  }
}
</script>
