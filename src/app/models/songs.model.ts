export class Songs {
  constructor(public ID: number,
              public numero: number,
              public titulo: string,
              public letra: {
                estrofes: string[],
                coro: boolean
              },
              public cifra: string,
              public notes: string,
              public comments: string,
              public favorit: boolean,
              public tags: Array<string>) {
  }
}
