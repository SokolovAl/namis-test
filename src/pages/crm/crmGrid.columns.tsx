import {Box, Chip} from "@mui/material";
import type {GridColDef} from "@mui/x-data-grid";
import type {CrmGridRow} from "./crmGrid.types";
import {EllipsisTooltipCell} from "../../components/EllipsisTooltipCell";
import {directionChipColor, formatRub, statusChipColor} from "./crmGrid.utils";

export const crmColumns: GridColDef<CrmGridRow>[] = [
    {
        field: "requestNo",
        headerName: "№ заявки",
        width: 90,
        sortable: true,
    },
    {
        field: "direction",
        headerName: "Направление",
        width: 130,
        sortable: true,
        renderCell: (params) => (
            <Chip size="small" label={params.value} color={directionChipColor(params.value)}/>
        ),
    },
    {
        field: "name",
        headerName: "Наименование",
        flex: 1,
        minWidth: 280,
        sortable: true,
        renderCell: (params) => <EllipsisTooltipCell value={params.value}/>,
    },
    {
        field: "inn",
        headerName: "ИНН",
        width: 140,
        sortable: true,
        renderCell: (params) => (
            <Box
                component="span"
                sx={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                }}
            >
                {params.value}
            </Box>
        ),
    },
    {
        field: "kfVvPaid",
        headerName: "КФ ВВ оплачено",
        width: 150,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueFormatter: (value) => formatRub(Number(value ?? 0)),
    },
    {
        field: "kfOdoPaid",
        headerName: "КФ ОДО оплачено",
        width: 170,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueFormatter: (value) => formatRub(Number(value ?? 0)),
    },
    {
        field: "chvPaid",
        headerName: "ЧВ оплачено",
        width: 140,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueFormatter: (value) => formatRub(Number(value ?? 0)),
    },
    {
        field: "vstPaid",
        headerName: "ВСТ оплачено",
        width: 140,
        type: "number",
        align: "right",
        headerAlign: "right",
        valueFormatter: (value) => formatRub(Number(value ?? 0)),
    },
    {
        field: "objectType",
        headerName: "Тип объектов",
        width: 200,
        sortable: true,
    },
    {
        field: "status",
        headerName: "Статус заявки",
        width: 230,
        sortable: true,
        renderCell: (params) => (
            <Chip size="small" label={params.value} color={statusChipColor(params.value)}/>
        ),
    },
    {
        field: "remarks",
        headerName: "Замечания",
        flex: 0.8,
        minWidth: 220,
        sortable: false,
        renderCell: (params) => <EllipsisTooltipCell value={params.value} mutedIfDash/>,
    },
    {
        field: "registrationDate",
        headerName: "Дата регистрации",
        width: 150,
        sortable: true,
    },
];
