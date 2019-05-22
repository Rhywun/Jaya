export enum CommandType {
    File,
    Edit,
    View,
    Help,
    Cut,
    Copy,
    Paste,
    CopyPath,
    MoveTo,
    CopyTo,
    Delete,
    Rename,
    SelectAll,
    SelectNone,
    NewFolder,
    Properties,
    Open,
    Exit,
    NavigationPane,
    PreviewPane,
    DetailsPane,
    ItemCheckBoxes,
    FileNameExtensions,
    HiddenItems,
    License,
    PrivacyStatement,
    Update,
    About
}

export interface ICommand {
    readonly Command?: CommandType;
    readonly Label?: string;
    readonly IconClass?: string;
    readonly IsSeparator?: boolean;
    readonly Commands?: ICommand[];
}