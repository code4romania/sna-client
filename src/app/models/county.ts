export class County {
  public nameId: string;

  constructor(public id, public code, public name) {
    this.nameId = name.toLowerCase(); // TODO replace diacritics
  }
}
