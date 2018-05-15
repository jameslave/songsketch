const state = {
  audioDeviceList: [],
  audioDeviceId: '',
  appDirectory: '',
};

const mutations = {
  SET_AUDIO_DEVICE_LIST(state, deviceList) {
    state.audioDeviceList = [...deviceList];
  },

  SET_AUDIO_DEVICE_ID(state, id) {
    state.audioDeviceId = id;
  },

  SET_APP_DIRECTORY(state, directory) {
    state.appDirectory = directory;
  },
};

const actions = {
  async getAudioDevices({ commit }) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = devices.filter(d => d.kind === 'audioinput');
    console.log('Got devices: ', audioDevices);
    commit('SET_AUDIO_DEVICE_LIST', audioDevices);
  },

  setAudioDevice({ commit }, id) {
    commit('SET_AUDIO_DEVICE_ID', id);
  },

  setAppDirectory({ commit }, directory) {
    commit('SET_APP_DIRECTORY', directory);
  },
};

export default {
  state,
  mutations,
  actions,
};
