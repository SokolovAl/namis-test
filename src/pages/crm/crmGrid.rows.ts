import type { CrmRow } from "../../mocks/mockData";
import type { CrmGridRow } from "./crmGrid.types";

export function toCrmGridRows(rows: CrmRow[]): CrmGridRow[] {
    return rows.map((r) => ({ ...r, id: r.requestNo }));
}
