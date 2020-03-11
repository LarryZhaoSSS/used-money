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
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export { tagListModel };
