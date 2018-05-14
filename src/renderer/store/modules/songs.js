const state = {
  list: [],
};

const mutations = {
  CLEAR_SONGS(state) {
    state.list = [];
  },

  SET_SONGS(state, songs) {
    state.list = songs;
  },

  ADD_SONG(state, song) {
    state.list = [...state.list, song];
  },

  REMOVE_SONG(state, index) {
    state.list = state.list.filter((song, i) => i !== index);
  },
};

const actions = {
  clearSongs({ commit }) {
    commit('CLEAR_SONGS');
  },

  setSongs({ commit }, songs) {
    commit('SET_SONGS', songs);
  },

  addSongs({ commit }, song) {
    commit('ADD_SONG', song);
  },

  removeSong({ commit }, index) {
    commit('REMOVE_SONG', index);
  },
};

export default {
  state,
  mutations,
  actions,
};
