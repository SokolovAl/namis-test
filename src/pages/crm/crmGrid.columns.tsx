import {Box, Chip, IconButton, Tooltip} from "@mui/material";
import type {GridColDef} from "@mui/x-data-grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type {CrmGridRow} from "./crmGrid.types";
import {EllipsisTooltipCell} from "../../components/EllipsisTooltipCell";
import {directionChipColor, formatDate, formatRub, statusChipColor} from "./crmGrid.utils";

type CreateColumnsArgs = {
    onOpenDetails: (row: CrmGridRow) => void;
};

export function createCrmColumns({onOpenDetails}: CreateColumnsArgs): GridColDef<CrmGridRow>[] {
    return [
        {
            field: "requestNo",
            headerName: "№ заявки",
            width: 100,
            sortable: true,
        },
        {
            field: "direction",
            headerName: "Направление",
            width: 110,
            sortable: true,
            renderCell: (params) => (
                <Chip size="small" label={params.value} color={directionChipColor(params.value)}/>
            ),
        },
        {
            field: "name",
            headerName: "Наименование",
            flex: 1,
            minWidth: 120,
            sortable: true,
            renderCell: (params) => <EllipsisTooltipCell value={params.value}/>,
        },
        {
            field: "inn",
            headerName: "ИНН",
            width: 120,
            sortable: true,
            renderCell: (params) => (
                <Box
                    component="span"
                    sx={{fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"}}
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
            width: 150,
            type: "number",
            align: "right",
            headerAlign: "right",
            valueFormatter: (value) => formatRub(Number(value ?? 0)),
        },
        {
            field: "chvPaid",
            headerName: "ЧВ оплачено",
            width: 150,
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
            field: "status",
            headerName: "Статус заявки",
            width: 200,
            sortable: true,
            renderCell: (params) => (
                <Chip size="small" label={params.value} color={statusChipColor(params.value)}/>
            ),
        },
        {
            field: "registrationDate",
            headerName: "Дата регистрации",
            width: 200,
            sortable: true,
            valueFormatter: (value) => formatDate(value as Date | null),
        },
        {
            field: "actions",
            headerName: "Детали",
            width: 80,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            align: "center",
            headerAlign: "center",
            renderCell: (params) => (
                <Tooltip title="Детали" arrow>
                    <IconButton
                        size="small"
                        aria-label="Открыть детали"
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenDetails(params.row);
                        }}
                    >
                        <InfoOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
            ),
        },
    ];
}
