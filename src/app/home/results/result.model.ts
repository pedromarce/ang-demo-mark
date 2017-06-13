

export class Result {

  public type: string;
  public link: string;
  public text: string;
  public id: string;

  constructor(type: string, link: string, text: string, id: string) {
    this.type = type;
    this.link = link;
    this.text = text;
    this.id   = id;
  }

}
