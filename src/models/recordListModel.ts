// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number;
//   createdAt?: Date | undefined;
// };

const localStorageKeyName: string = 'recordList';
const recordList = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  create(record: RecordItem) {
    const newRecord: RecordItem = this.clone(record);
    newRecord.createdAt = new Date();
    this.data.push(newRecord);
  },
  fetch(): RecordItem[] {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    );
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export { recordList };
