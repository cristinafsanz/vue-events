import Vue from 'vue'
import Router from 'vue-router'
import StepOne from '@/views/StepOne'
import StepTwo from '@/views/StepTwo'
import StepThree from '@/views/StepThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/step1',
      name: 'StepOne',
      component: StepOne
    },
    {
      path: '/step2',
      name: 'StepTwo',
      component: StepTwo
    },
    {
      path: '/step3',
      name: 'StepThree',
      component: StepThree
    }
  ]
})
