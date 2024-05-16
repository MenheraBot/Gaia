<script setup lang="ts">
const headerItems = [
  {
    label: 'Casita',
    redirectTo: 'album',
  },
  {
    label: 'Album',
    redirectTo: 'album',
  },
];
</script>

<template>
  <nav class="flex gap-4 p-4">
    <RouterLink v-for="item of headerItems" :key="item.redirectTo" :to="{ name: item.redirectTo }">
      <p
        class="bg-primary p-2 rounded-lg hover:bg-opacity-85 transition-colors font-semibold w-24 text-center"
      >
        {{ item.label }}
      </p>
    </RouterLink>
  </nav>
</template>
