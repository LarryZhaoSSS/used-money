const localStorageKeyName: string = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' | 'duplicated'; // success 成功 duplicated 重复
  save: () => void;
};
const tagListModel: TagListModel = {
  data: [],
  fetch(): string[] {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    );
    return this.data;
  },
  create(name) {
    if (this.data.includes(name)) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export { tagListModel };
