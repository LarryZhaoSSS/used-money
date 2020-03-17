declare type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date | undefined;
};
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
interface Window {
  store: {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    findTag(id: string): Tag;
    updateTag: (
      id: string,
      name: string
    ) => 'success' | 'not_found' | 'duplicated';
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
  };
}
