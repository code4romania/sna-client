export class County {
  public nameId: string;

  constructor(public id, public code, public name) {
    this.nameId = name.toLowerCase()
      .replace("ă", "a")
      .replace("ă", "a") // different
      .replace("â", "a")
      .replace("î", "i")
      .replace("ț", "t")
      .replace("ţ", "t")
      .replace("ș", "s")
      .replace("ş", "s") // cedilla
      .replace(" ", "_")
      .replace("-", "_");
  }
}
