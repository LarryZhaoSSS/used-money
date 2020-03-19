import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem('recordList') || '[]'
      );
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = JSON.parse(JSON.stringify(record));
      record2.createdAt = new Date();
      state.recordList.push(record2);
      console.log(state.recordList);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem(
        'recordList',
        JSON.stringify(state.recordList)
      );
    }
  },
  actions: {},
  modules: {}
});
export default store;
