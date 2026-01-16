import { Box, Button, Divider, Drawer, Stack, Typography, Chip } from "@mui/material";
import type { CrmGridRow } from "../pages/crm/crmGrid.types";
import { directionChipColor, formatDate, statusChipColor } from "../pages/crm/crmGrid.utils";

type Props = {
    open: boolean;
    row: CrmGridRow | null;
    onClose: () => void;
};

function normalizeText(value: unknown): string {
    if (value === null || value === undefined) return "-";
    const text = String(value).trim();
    if (!text || text === "-") return "-";
    return text;
}

function hasMeaningfulText(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    const text = String(value).trim();
    return text !== "" && text !== "-";
}

function Field({ label, value }: { label: string; value: unknown }) {
    const text = normalizeText(value);

    return (
        <Box sx={{ py: 0.25 }}>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 700, letterSpacing: 0.2 }}
            >
                {label}
            </Typography>

            <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                {text}
            </Typography>
        </Box>
    );
}

export function CrmRowDetailsDrawer({ open, row, onClose }: Props) {
    const canRequestInvoices = row?.invoicesRequest == null;
    const canDownloadInvoices = row?.invoicesIssuedAt != null;
    const hasRemarks = hasMeaningfulText(row?.remarks);

    const hasAnyAction = Boolean(row) && (canRequestInvoices || canDownloadInvoices || hasRemarks);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: { xs: "100vw", sm: 480 }, p: 2 }}>
                <Stack spacing={1.5}>
                    <Box>
                        <Typography variant="h6">Заявка № {row?.requestNo ?? "—"}</Typography>

                        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
                            <Chip
                                size="small"
                                label={row?.direction ?? "—"}
                                color={row ? directionChipColor(row.direction) : "default"}
                            />
                            <Chip
                                size="small"
                                label={row?.status ?? "—"}
                                color={row ? statusChipColor(row.status) : "default"}
                            />
                        </Stack>
                    </Box>

                    <Divider />

                    <Field label="Наименование" value={row?.name} />
                    <Field label="ИНН" value={row?.inn} />
                    <Field label="Дата регистрации" value={row ? formatDate(row.registrationDate) : "—"} />

                    <Divider />

                    <Field label="Ответственный" value={row?.responsible} />
                    <Field label="Тип документов" value={row?.documentType} />
                    <Field label="Тип объектов" value={row?.objectType} />

                    <Field label="Запрос счетов" value={row ? formatDate(row.invoicesRequest) : "—"} />
                    <Field label="Счета выставлены" value={row ? formatDate(row.invoicesIssuedAt) : "—"} />

                    <Field label="Контроль" value={row?.control} />
                    <Field label="Замечания" value={row?.remarks} />

                    <Divider />

                    {hasAnyAction ? (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 0.5 }}>
                            {canRequestInvoices && (
                                <Button variant="contained" sx={{ textTransform: "none" }}>
                                    Запросить счета
                                </Button>
                            )}

                            {canDownloadInvoices && (
                                <Button variant="outlined" sx={{ textTransform: "none" }}>
                                    Скачать счета
                                </Button>
                            )}

                            {hasRemarks && (
                                <Button variant="outlined" sx={{ textTransform: "none" }}>
                                    Скачать замечания
                                </Button>
                            )}
                        </Box>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Доступных действий нет
                        </Typography>
                    )}
                </Stack>
            </Box>
        </Drawer>
    );
}
