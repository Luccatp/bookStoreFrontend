<template>
    <span class="p-input-icon-right searchWrapper">
        <i class="pi pi-spin pi-spinner" />
        <PrimeInputText v-model="message" placeholder="find your book"  />
        <PrimeButton label="Search" />
    </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
  
const message = ref('')
</script>

<style scoped>
.searchWrapper {
    display: grid;
    gap: 10px;
    flex-basis: 1;
}
</style>