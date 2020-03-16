const localStorageKeyName: string = 'tagList';
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; // success 成功 duplicated 重复
  save: () => void;
  remove: (id: string) => boolean;
  update: (id: string, name: string) => 'success' | 'not_found' | 'duplicated';
};
const tagListModel: TagListModel = {
  data: [],
  fetch(): Tag[] {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    );
    return this.data;
  },
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.includes(name)) {
      return 'duplicated';
    }
    this.data.push({ id: name, name: name });
    this.save();
    return 'success';
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.includes(id)) {
      const names = this.data.map(item => item.name);
      if (names.includes(name)) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not_found';
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      return false;
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export { tagListModel };
