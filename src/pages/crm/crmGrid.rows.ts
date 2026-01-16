import type { CrmGridRow } from "./crmGrid.types";
import type {CrmRow} from "../../mocks/types.ts";

export function toCrmGridRows(rows: CrmRow[]): CrmGridRow[] {
    return rows.map((r) => ({ ...r, id: r.requestNo }));
}
