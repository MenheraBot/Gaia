import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/album', name: 'album', component: () => import('../pages/AlbumViewer.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
