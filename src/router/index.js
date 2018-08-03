import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
//MCREDIT
import m_login from '../components/mcredit/Login';
import m_home from '../components/mcredit/Home';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/mcredit/login',
      component: m_login,
      meta: {
        title: 'Mcredit Login',
      },
    },
    {
      path: '/mcredit/home',
      component: m_home,
      meta: {
        title: 'Mcredit Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {path: '*', redirect: '/mcredit/home'},
  ],
});

router.replace('/mcredit/login');

module.exports = router;
