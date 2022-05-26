import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes:[
      {
          path:'/',
          name:'home',
          component:Home,
          children:[
              {
                  path:'/index',
                  name:'index',
                  component:Index,
              },
              {
                  path:'/product/:id',
                  name:'product',
                  component:Product,
              },
              {
                  path:'/detail/:id',
                  name:'detail',
                  component:Detail,
              },
              {
                  path:'/order',
                  name:'order',
                  component:Order,
              },
          ]
      },
      {
          path:'/cart',
          name:'cart',
          component:Cart,
          children:[
              {
                  path:'/confirm',
                  name:'order-confirm',
                  component:OrderConfirm,
              },
              {
                  path:'/list',
                  name:'order-list',
                  component:OrderList,
              },
              {
                  path:'/pay',
                  name:'order-pay',
                  component:OrderPay,
              }
          ]
      }
  ]
});
