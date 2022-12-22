export class TaskItem {
  constructor(public title: string) {
  }

  toggleDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}

