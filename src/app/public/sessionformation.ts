import { Candidat } from "./candidates";
import { Formateur } from "./formateur";
import { Session } from "./session";

export class Sessionformation {
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get dateFin(): Date {
        return this._dateFin;
    }
    public set dateFin(value: Date) {
        this._dateFin = value;
    }
    public get dateDebut(): Date {
        return this._dateDebut;
    }
    public set dateDebut(value: Date) {
        this._dateDebut = value;
    }
    public get candidats(): Candidat[] {
        return this._candidats;
    }
    public set candidats(value: Candidat[]) {
        this._candidats = value;
    }
    public get formateurs(): Formateur[] {
        return this._formateurs;
    }
    public set formateurs(value: Formateur[]) {
        this._formateurs = value;
    }
    public get formation(): Session {
        return this._formation;
    }
    public set formation(value: Session) {
        this._formation = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(
        private _id: number,
        private _formation: Session,  
        private _formateurs: Formateur[], 
        private _candidats: Candidat[],  
        private _dateDebut: Date,  
        private _dateFin: Date,   
        private _description: string  
      ) {}
}
