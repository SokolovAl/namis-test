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

export function formatDate(value?: Date | null): string {
    if (!value) return "-";

    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(value);
}

export function parseRuDate(value: string): Date | null {
    const v = value.trim();
    if (!v || v === "-") return null;

    const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(v);
    if (!match) return null;

    const [, dd, mm, yyyy] = match;

    const day = Number(dd);
    const monthIndex = Number(mm) - 1;
    const year = Number(yyyy);

    const date = new Date(year, monthIndex, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== monthIndex ||
        date.getDate() !== day
    ) {
        return null;
    }

    return date;
}
