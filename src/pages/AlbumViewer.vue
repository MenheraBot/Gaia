<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

const availableImages = ref<[string, number][]>([]);
const selectedType = ref<string>('profiles');

const pngTypes = ['humor', 'profiles', 'fodase'];

const imagesIterator = computed(() =>
  Array(availableImages.value.find((a) => a[0] === selectedType.value)![1]),
);

onMounted(async () => {
  const types = await axios.get('https://cdn.menherabot.xyz');

  availableImages.value = Object.entries(types.data).filter((a) => a[0] !== 'event') as [
    string,
    number,
  ][];
});
</script>

<template>
  <div
    v-if="availableImages.length > 0"
    class="container mx-auto rounded-lg flex flex-col gap-8 mb-10"
  >
    <div class="relative inline-block w-64 text-black">
      <select
        v-model="selectedType"
        name="type"
        class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option v-for="[image] of availableImages" :key="image" :value="image">
          {{ image }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg viewBox="0 0 140 140" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-4">
      <img
        v-for="(_, index) of imagesIterator"
        :key="`${selectedType}-${index}`"
        :src="`https://cdn.menherabot.xyz/images/${selectedType}/${index}.${pngTypes.includes(selectedType) ? 'png' : 'gif'}`"
        class="w-full h-auto"
      />
    </div>
  </div>
</template>
