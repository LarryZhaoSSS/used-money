import { tagListModel } from '@/models/tagListModel';
import { recordList as recordListModel } from '@/models/recordListModel';
const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    return recordListModel.create(record);
  },
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string) => {
    if (name) {
      const message = tagListModel.create(name);
      console.log(message);
      if (message === 'duplicated') {
        window.alert('存在了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  },
  removeTag: (id: string) => {
    if (tagListModel.remove(id)) {
      return true;
    } else {
      return false;
    }
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};
export default store;
