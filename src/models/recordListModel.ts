// type RecordItem = {
//   tags: string[];
//   notes: string;
//   type: string;
//   amount: number;
//   createdAt?: Date | undefined;
// };

const localStorageKeyName: string = 'recordList';
const recordList = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch(): RecordItem[] {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  save(recordList: RecordItem[]) {
    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(recordList)
    );
  }
};

export { recordList };
