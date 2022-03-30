<template>
  <div id="overrall">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#overrall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px;
}
a {
  margin: 0 5px 0 5px;
}
</style>
