import {Box, Button, Chip, Divider, Drawer, Stack, Typography} from "@mui/material";
import type {CrmGridRow} from "../pages/crm/crmGrid.types"; // поправь путь под свой src
import {directionChipColor, formatDate, statusChipColor} from "../pages/crm/crmGrid.utils";

type Props = {
    open: boolean;
    row: CrmGridRow | null;
    onClose: () => void;
};

function Field({label, value}: { label: string; value?: string | number | null }) {
    const text = value === null || value === undefined || value === "" ? "—" : String(value);

    return (
        <Box>
            <Typography variant="subtitle2" color="text.secondary">
                {label}
            </Typography>
            <Typography variant="body2" sx={{wordBreak: "break-word"}}>
                {text}
            </Typography>
        </Box>
    );
}

export function CrmRowDetailsDrawer({open, row, onClose}: Props) {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{width: {xs: "100vw", sm: 420}, p: 2}}>
                <Stack spacing={1.5}>
                    <Box>
                        <Typography variant="h6">Заявка № {row?.requestNo ?? "—"}</Typography>
                        <Stack direction="row" spacing={1} sx={{mt: 1, flexWrap: "wrap"}}>
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

                    <Divider/>

                    <Field label="Наименование" value={row?.name}/>
                    <Field label="ИНН" value={row?.inn}/>
                    <Field label="Дата регистрации" value={row ? formatDate(row.registrationDate) : "-"}/>

                    <Divider/>

                    <Field label="Ответственный" value={row?.responsible}/>
                    <Field label="Тип документов" value={row?.documentType}/>
                    <Field label="Тип объектов" value={row?.objectType}/>
                    <Field label="Запрос счетов" value={row ? formatDate(row.invoicesRequest) : "-"}/>
                    <Field label="Счета выставлены" value={row ? formatDate(row.invoicesIssuedAt) : "-"}/>
                    <Field label="Контроль" value={row?.control}/>
                    <Field label="Замечания" value={row?.remarks}/>

                    <Divider/>

                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 1, pt: 0.5}}>
                        <Button variant="contained" sx={{textTransform: "none"}}>
                            Запросить
                        </Button>

                        <Button variant="outlined" sx={{textTransform: "none"}}>
                            Скачать счета
                        </Button>

                        <Button variant="outlined" sx={{textTransform: "none"}}>
                            Скачать замечания
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Drawer>
    );
}
