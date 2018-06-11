<template>
  <div>
    <h2>{{ title }}</h2>
    <cat-counter
      :imgCat="imgCat1"
      :nameCat="nameCat1"
      :counter="counter1"
      @addedVote="setCounter1">
    </cat-counter>
    <cat-counter
      :imgCat="imgCat2"
      :nameCat="nameCat2"
      :counter="counter2"
      @addedVote="setCounter2">
    </cat-counter>
  </div>
</template>

<script>
import CatCounter from '@/components/CatCounter'

export default {
  name: 'StepTwo',

  components: {
    CatCounter
  },

  data () {
    return {
      title: 'Step Two',
      imgCat1: require('@/assets/cat1.jpg'),
      nameCat1: 'Rodolfo',
      counter1: 0,
      imgCat2: require('@/assets/cat2.jpg'),
      nameCat2: 'Luna',
      counter2: 0
    }
  },

  methods: {
    setCounter (counterNumber, counter) {
      this[counterNumber] = counter
    },

    setCounter1 (counter) {
      this.setCounter('counter1', counter)
    },

    setCounter2 (counter) {
      this.setCounter('counter2', counter)
    }
  }
}
</script>
