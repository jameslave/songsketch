const state = {
  showSongList: true,
};

const mutations = {
  SHOW_SONG_LIST(state) {
    state.showSongList = true;
  },

  HIDE_SONG_LIST(state) {
    state.showSongList = false;
  },
};

const actions = {
  toggleSongList({ commit }) {
    if (state.showSongList === true) commit('HIDE_SONG_LIST');
    else commit('SHOW_SONG_LIST');
  },
};

export default {
  state,
  mutations,
  actions,
};
