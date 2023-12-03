<template>
    <div class="card flex align-items-center justify-content-center">
        <PrimeCard>
            <template #header>
                <img alt="user header" class="image" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <PrimeButton icon="pi pi-check" label="Save" />
                <PrimeButton icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </PrimeCard>
    </div>
</template>


<script lang="ts" setup>
defineProps<{
    title?: string
    description?: string
    image?: string
}>()

</script>

<style>
    .image {
        width: 100%;
        object-fit: cover;
    }

    .card {
        width: 100%;
        grid-column: span 1 / span 1;
        word-break: break-word;
    }
</style>