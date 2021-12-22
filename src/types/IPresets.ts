export interface IPreset {
    complexityLevel: number;
    mainRouteParts: number;
    parts: number;
    virtualParts: number;
}
[];

export interface IPresets {
    [name: string]: IPreset;
}
