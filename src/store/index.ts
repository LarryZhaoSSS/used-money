import Vue from 'vue';
import Vuex from 'vuex';
import { createId } from '@/lib/idCreator';
import router from '@/router';

Vue.use(Vuex);
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
};
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
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
    },
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem('tagList') || '[]'
      );
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.includes(name)) {
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({ id, name: name });
      store.commit('saveTags');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    updateTag(state, payload: { id: string; name: string }) {
      const { id, name } = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.includes(id)) {
        const names = state.tagList.map(item => item.name);
        if (names.includes(name)) {
          window.alert('duplicated tag');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
        router.back();
      } else {
        window.alert('delete success');
      }
    }
  },
  actions: {},
  modules: {}
});
export default store;
