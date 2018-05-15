const state = {
  songListIsShown: true,
};

const mutations = {
  SHOW_SONG_LIST(state) {
    state.songListIsShown = true;
  },

  HIDE_SONG_LIST(state) {
    state.songListIsShown = false;
  },
};

const actions = {
  toggleSongList({ commit }) {
    if (state.songListIsShown === true) commit('HIDE_SONG_LIST');
    else commit('SHOW_SONG_LIST');
  },
};

export default {
  state,
  mutations,
  actions,
};
