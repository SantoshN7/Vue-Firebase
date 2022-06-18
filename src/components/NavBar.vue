<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-ligh">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  nav {
    border: 1px solid black;
  }
</style>