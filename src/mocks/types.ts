export type Direction = "ЦСО" | "ССП" | "ИГС";

export type ObjectType =
    | "Обычные"
    | "Опасные"
    | "Опасные и атомные"
    | "Обычные, опасные и атомные";

export type RequestStatus =
    | "Направлено на проверку"
    | "В работе"
    | "С замечаниями"
    | "Возврат на доработку повторно";

export type DocumentType = "-" | "Сканы" | "Сканы с замечаниями";

export interface CrmRow {
    requestNo: number;
    direction: Direction;
    invoicesRequest: string;
    invoicesIssuedAt: string;
    responsible: string;
    name: string;
    inn: string;
    kfVvPaid: number;
    kfOdoPaid: number;
    chvPaid: number;
    vstPaid: number;
    objectType: ObjectType;
    status: RequestStatus;
    documentType: DocumentType;
    control: string;
    remarks: string;
    registrationDate: string;
}