export class NgOrganizationChartNodeModel {
    id: string;
    blockTypeName: string;
    data: any;
    blockType: number;
    name: string;
    idParent: string;
    idRca: string;
    isAndDoor: boolean;
    children: Array<NgOrganizationChartNodeModel>;
}