export class DocumentType {
    private _documentTypeId: number;
    private _description: string;
    private _abbreviation: string;

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    
    public get abbreviation(): string {
        return this._abbreviation;
    }
    public set abbreviation(value: string) {
        this._abbreviation = value;
    }

    public get documentTypeId(): number {
        return this._documentTypeId;
    }
    public set documentTypeId(value: number) {
        this._documentTypeId = value;
    }

    


}