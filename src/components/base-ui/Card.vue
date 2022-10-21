<template>
  <div class="card">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem;
    padding: 1rem;
    min-height: 200px;
    min-width: 400px;
    max-height: 400px;
    border: 2px solid black;
    box-shadow: 5px 2.5px 2.5px gray;
    background-color: inherit;
  }
</style>