<script setup lang="ts">
import SearchBook from './components/SearchBook.vue';
import BookList from './components/BookList.vue'


</script>


<template>
  <div class="container">
    <section class="titleWrapper">
      <div class="title">        
        <h1 class="acessibilityTitle">Book shelf</h1>
        <img src="./assets/book-shelf-high-resolution-logo.png" class="heroLogo">
      </div>
      <h2>The place to find the most amazing books</h2>
      <SearchBook/>
    </section>
    <Suspense>
      <BookList />
    </Suspense>
    </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    min-height: 100vh;
    width: 100%;
  }

  .titleWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 100px;

    >h2 {
      font-size: 1.2rem;
      font-weight: 300;
      text-align: center;
    }
  }

  .acessibilityTitle {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    >img {
      object-fit: cover;
      width: 100%;
      height: auto;

      @media screen and (min-width: 768px) {
        max-width: 200px;
      }
    }
  }

  .booksWrapper {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: row;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
  }

</style>