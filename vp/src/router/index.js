/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import {createRouter, createWebHistory} from 'vue-router/auto'
import {routes} from 'vue-router/auto-routes'
import dashboard from "@/pages/Dashboard.vue";
import listProjects from "@/pages/ListProjects.vue";
import team from "@/pages/Team.vue";

const manualRoutes = [{
  path: '/',
  name: 'dasboard',
  component: dashboard
},
  {
    path: '/listprojects',
    name: 'listprojects',
    component: listProjects
  },
  {
    path: '/team',
    name: 'team',
    component: team
  }]

const combinedRoutes = [
  ...manualRoutes,

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: combinedRoutes,
})


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
