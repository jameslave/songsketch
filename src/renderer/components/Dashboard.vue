<template>
  <div>
    <v-toolbar/>
    <div class="columns viewport">
      <aside class="column is-3">
        <v-song-list/>
      </aside>
      <section
        class="column"
        style="padding: 3rem">
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
    songListIsShown() {
      return this.$store.state.ui.songListIsShown;
    },
  },

  mounted() {
    this.$store.dispatch('getAudioDevices');
  },

  methods: {

  },
};
</script>
