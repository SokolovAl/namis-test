import type {CrmRow} from "../../mocks/types.ts";

export type CrmGridRow = Omit<
    CrmRow,
    "registrationDate" | "invoicesRequest" | "invoicesIssuedAt"
> & {
    id: number;
    registrationDate: Date | null;
    invoicesRequest: Date | null;
    invoicesIssuedAt: Date | null;
};
