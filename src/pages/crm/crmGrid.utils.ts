import type {CrmRow} from "../../mocks/types.ts";

export function formatRub(value: number): string {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
    }).format(value);
}

export function directionChipColor(
    direction: CrmRow["direction"]
): "default" | "primary" | "success" | "warning" {
    switch (direction) {
        case "ЦСО":
            return "warning";
        case "ССП":
            return "primary";
        case "ИГС":
            return "success";
        default:
            return "default";
    }
}

export function statusChipColor(
    status: CrmRow["status"]
): "default" | "primary" | "success" | "warning" {
    switch (status) {
        case "Направлено на проверку":
            return "primary";
        case "В работе":
            return "success";
        case "С замечаниями":
        case "Возврат на доработку повторно":
            return "warning";
        default:
            return "default";
    }
}
