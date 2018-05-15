<template>
  <nav class="navbar toolbar is-white">
    <div class="navbar-start">
      <a
        :class="{'is-active': $store.state.ui.songListIsShown}"
        class="navbar-item"
        @click="$store.dispatch('toggleSongList')">
        <i class="fas fa-bars fa-fw"/>
      </a>
      <a class="navbar-item">
        <i class="fas fa-plus fa-fw"/>
      </a>
      <a class="navbar-item">
        <i class="fas fa-trash fa-fw"/>
      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item">
        <i class="fas fa-cog fa-fw"/>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Toolbar',
};
</script>

<style scoped>
.toolbar {
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
}

.toolbar .navbar-item {
  padding: 1rem;
}
</style>

