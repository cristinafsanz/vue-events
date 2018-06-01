<template>
  <div>
    <h2>{{ title }}</h2>
    <cat-counter
      :imgCat="imgCat1"
      :nameCat="nameCat1">
    </cat-counter>
    <cat-counter
      :imgCat="imgCat2"
      :nameCat="nameCat2">
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
      imgCat2: require('@/assets/cat2.jpg'),
      nameCat2: 'Luna'
    }
  }
}
</script>
