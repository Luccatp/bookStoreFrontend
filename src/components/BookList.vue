
<script lang="ts" setup>
interface Book {
    id: string;
    title: string;
    description: string;
    image: string;
}

  const books = await fetch("https://6ksmdup35k.execute-api.us-east-1.amazonaws.com/dev/v1/books", {
    mode: 'no-cors',
    headers: {
        "Content-Type": "application/json"
            },
  });
  const booksJson = await books.json() as Book[];
</script>



<template>
        <section class="booksWrapper">
      <BookCard v-bind:key="book.id" v-for="book in booksJson"/>
    </section>
</template>
