import type { CrmGridRow } from "./crmGrid.types";
import type { CrmRow } from "../../mocks/types.ts";
import { parseRuDate } from "./crmGrid.utils";

export function toCrmGridRows(rows: CrmRow[]): CrmGridRow[] {
    return rows.map((r) => ({
        ...r,
        id: r.requestNo,

        registrationDate: parseRuDate(r.registrationDate),
        invoicesRequest: parseRuDate(r.invoicesRequest),
        invoicesIssuedAt: parseRuDate(r.invoicesIssuedAt),
    }));
}
