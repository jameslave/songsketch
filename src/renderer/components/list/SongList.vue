<template>
  <div id="song-list">
    <nav class="panel">
      <div class="panel-block">
        <p class="control has-icons-left">
          <input
            class="input is-small"
            type="text"
            placeholder="search">
          <span class="icon is-small is-left">
            <i
              class="fas fa-search"
              aria-hidden="true"/>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">all</a>
        <a>finished</a>
        <a>unfinished</a>
        <a>ideas</a>
      </p>
      <a class="panel-block is-active">
        bulma
      </a>
      <a class="panel-block">
        marksheet
      </a>
      <a class="panel-block">
        minireset.css
      </a>
      <a class="panel-block">
        jgthms.github.io
      </a>
      <a class="panel-block">
        daniellowtw/infboard
      </a>
      <a class="panel-block">
        mojs
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SongList',
};
</script>

<style scoped>
.panel-block:first-child {
  margin-top: 0.4rem;
}

.panel-block,
.panel-tabs {
  border-top: none;
  border-right: none;
  border-bottom: none;
}

.panel-block.is-active {
  border-left-width: 4px;
}
</style>

