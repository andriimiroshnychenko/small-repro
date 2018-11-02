import { computed } from 'mobx';

export class TestClass {

  static defaultSorting = {
    sortOrder: 'asc',
    sortField: 'lastTestRun.createdAt'
  };

  static defaultFilters = {
    defaultSorting: TestClass.defaultSorting,
    'author.id': []
  };

  @computed
  get someGetter() {
    return true;
  }

  constructor(text) {
    console.log(text);
  }
}