import { computed } from 'mobx';

export class TestClass {

  static person = {
    name: 'Bazz',
    familyName: 'Lighter'
  };

  static secondPerson = {
    name: TestClass.person.name,
    familyName: 'Fuzz'
  };

  @computed
  get someGetter() {
    return true;
  }

  constructor(text) {
    console.log(text);
  }
}