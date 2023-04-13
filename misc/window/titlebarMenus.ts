export type TitlebarMenuItem = {
    name: string;
    action?: string;
    shortcut?: string;
    value?: string | number;
    items?: TitlebarMenuItem[];
};

export type TitlebarMenu = {
    name: string;
    items: TitlebarMenuItem[];
};

const titlebarMenus: TitlebarMenu[] = [
    {
        name: "File",
        items: [{
            name: 'Exit',
            action: 'exit'
        }]
    }
];

export default titlebarMenus;