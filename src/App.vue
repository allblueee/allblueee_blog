<template>
  <div id="overrall">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/write">Write</router-link>
    </nav>
      <router-view />
  </div>
</template>

<style scoped>
#overrall {
  height: 100%;
}
nav {
  position: absolute;
  right: 0;
  width: 320px;
  padding: 15px;
  height: 30px;
}
nav a {
  margin: 0 5px 0 5px;
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  margin: 0 5px 0 5px;
  color: #42b983;
}
</style>
