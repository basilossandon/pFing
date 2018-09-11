export class Idea {
  title: string;
  text: string;
  votes: number;

  constructor(title: string, text: string, votes: number) {
    this.title = title;
    this.text = text;
    this.votes = votes;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const text: string = this.text.split('//')[1];
      return text.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}