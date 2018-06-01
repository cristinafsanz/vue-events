<template>
  <div>
    <h1>{{ title }}</h1>
    <cat-counter
      :imgCat="imgCat">
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
      imgCat: require('@/assets/cat1.jpg')
    }
  }
}
</script>
