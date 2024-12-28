export class Session {
    public get categories(): string[] {
        return this._categories;
    }
    public set categories(value: string[]) {
        this._categories = value;
    }
    public get tags(): string[] {
        return this._tags;
    }
    public set tags(value: string[]) {
        this._tags = value;
    }
    public get niveau(): string {
        return this._niveau;
    }
    public set niveau(value: string) {
        this._niveau = value;
    }
    public get programme(): string {
        return this._programme;
    }
    public set programme(value: string) {
        this._programme = value;
    }
    public get duree(): number {
        return this._duree;
    }
    public set duree(value: number) {
        this._duree = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(
      private _id: number,
      private _titre: string,
      private _description: string,
      private _duree: number, 
      private _programme: string,  
      private _niveau: string,  
      private _tags: string[],  
      private _categories: string[]  
    ) {}
  }
  