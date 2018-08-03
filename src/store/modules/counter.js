const state = {
  count: 0,
  info:[],
};

const mutations = {
  decrement (state) {
    state.count--;
  },
  increment (state) {
    state.count++;
  },
  change_info(state, value){
    state.info = value;
  },
};

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
};

export default {
  state,
  mutations,
  actions,
};
