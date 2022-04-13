<template>
  <div id="overrall">
    <nav style="position:fixed">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> |
      <router-link to="/write">Write</router-link>
    </nav>
    <router-view  />
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
