<template>
  <div>
    <v-toolbar/>
    <div class="columns viewport">
      <transition
        enter-active-class="slideInLeft"
        leave-active-class="slideOutLeft">
        <aside
          v-if="showSongList"
          class="column is-3 animated">
          <v-song-list/>
        </aside>
      </transition>
      <section class="column">
        <v-song-editor/>
      </section>
    </div>
  </div>
</template>

<script>
import vToolbar from './Toolbar';
import vSongList from './list/SongList';
import vSongEditor from './editor/SongEditor';

export default {
  name: 'Dashboard',

  components: {
    vToolbar,
    vSongList,
    vSongEditor,
  },

  computed: {
    showSongList() {
      return this.$store.state.ui.showSongList;
    },
  },

  methods: {

  },
};
</script>

<style scoped>
.animated {
  animation-duration: 500ms;
}
</style>
