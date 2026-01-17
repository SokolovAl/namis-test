import {Box, Chip, Paper, Stack, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useMemo, useState} from "react";
import {type CrmFiltersState, TableToolbar} from "../components/TableToolbar";
import {crmRows} from "../mocks/data.ts";

import type {CrmGridRow} from "./crm/crmGrid.types";
import {toCrmGridRows} from "./crm/crmGrid.rows";
import {createCrmColumns} from "./crm/crmGrid.columns";
import {CrmRowDetailsDrawer} from "../components/CrmRowDetailsDrawer";

function getSearchableFields(row: CrmGridRow): string[] {
    return [
        String(row.requestNo),
        row.name,
        row.inn
    ]
        .filter(Boolean)
        .map((v) => v.toLowerCase());
}

function EmptyOverlay({title, subtitle}: { title: string; subtitle?: string }) {
    return (
        <Box sx={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center", p: 2}}>
            <Box sx={{maxWidth: 520, textAlign: "center"}}>
                <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                    {title}
                </Typography>
                {subtitle ? (
                    <Typography variant="body2" color="text.secondary" sx={{mt: 0.5}}>
                        {subtitle}
                    </Typography>
                ) : null}
            </Box>
        </Box>
    );
}

export function CRMPage() {
    const rows = toCrmGridRows(crmRows);

    const [detailsRow, setDetailsRow] = useState<CrmGridRow | null>(null);

    const columns = useMemo(
        () => createCrmColumns({onOpenDetails: setDetailsRow}),
        []
    );

    const [filters, setFilters] = useState<CrmFiltersState>({
        search: "",
        direction: "",
        status: "",
        documentType: "",
        objectType: "",
    });

    const hasActiveFilters = Boolean(
        filters.search.trim() ||
        filters.direction ||
        filters.status ||
        filters.documentType ||
        filters.objectType
    );

    const filteredRows = useMemo(() => {
        const search = filters.search.trim().toLowerCase();

        return rows.filter((row) => {
            if (filters.direction && row.direction !== filters.direction) return false;
            if (filters.status && row.status !== filters.status) return false;
            if (filters.documentType && row.documentType !== filters.documentType) return false;
            if (filters.objectType && row.objectType !== filters.objectType) return false;

            if (search) {
                const fields = getSearchableFields(row);
                if (!fields.some((v) => v.startsWith(search))) return false;
            }

            return true;
        });
    }, [rows, filters]);

    const activeFilterChips = useMemo(() => {
        const chips: Array<{ key: string; label: string; onDelete: () => void }> = [];

        if (filters.direction) {
            chips.push({
                key: "direction",
                label: `Направление: ${filters.direction}`,
                onDelete: () => setFilters((p) => ({...p, direction: ""})),
            });
        }

        if (filters.status) {
            chips.push({
                key: "status",
                label: `Статус: ${filters.status}`,
                onDelete: () => setFilters((p) => ({...p, status: ""})),
            });
        }

        if (filters.documentType) {
            chips.push({
                key: "documentType",
                label: `Тип документов: ${filters.documentType}`,
                onDelete: () => setFilters((p) => ({...p, documentType: ""})),
            });
        }

        if (filters.objectType) {
            chips.push({
                key: "objectType",
                label: `Тип объекта: ${filters.objectType}`,
                onDelete: () => setFilters((p) => ({...p, objectType: ""})),
            });
        }

        if (filters.search.trim()) {
            chips.push({
                key: "search",
                label: `Поиск: ${filters.search.trim()}`,
                onDelete: () => setFilters((p) => ({...p, search: ""})),
            });
        }

        return chips;
    }, [filters]);

    return (
        <Box sx={{p: 2, height: "100%", display: "flex", flexDirection: "column", minHeight: 0}}>
            <Paper sx={{overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", minHeight: 0}}>
                <TableToolbar
                    filters={filters}
                    onChange={(patch) => setFilters((prev) => ({...prev, ...patch}))}
                    onReset={() =>
                        setFilters({
                            search: "",
                            direction: "",
                            status: "",
                            documentType: "",
                            objectType: "",
                        })
                    }
                />

                {activeFilterChips.length ? (
                    <Box sx={{px: 1.5, pb: 1}}>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {activeFilterChips.map((chip) => (
                                <Chip
                                    key={chip.key}
                                    size="small"
                                    label={chip.label}
                                    onDelete={chip.onDelete}
                                    sx={{borderRadius: 1}}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}

                <Box sx={{flex: 1, minHeight: 0}}>
                    <DataGrid
                        rows={filteredRows}
                        columns={columns}
                        disableColumnMenu
                        disableRowSelectionOnClick
                        pageSizeOptions={[10, 20, 50]}
                        sortingOrder={["asc", "desc"]}
                        initialState={{
                            pagination: {paginationModel: {pageSize: 20, page: 0}},
                            sorting: {sortModel: [{field: "requestNo", sort: "asc"}]},
                        }}
                        slots={{
                            noRowsOverlay: () =>
                                hasActiveFilters ? (
                                    <EmptyOverlay
                                        title="Ничего не найдено"
                                        subtitle="Попробуйте изменить фильтры или сбросить их."
                                    />
                                ) : (
                                    <EmptyOverlay title="Нет данных"/>
                                ),
                        }}
                        sx={{
                            border: "none",
                            "& .MuiDataGrid-columnHeaders": {backgroundColor: "rgba(0,0,0,0.02)"},
                            "& .MuiDataGrid-columnHeaderTitle": {fontWeight: 700, fontSize: 13},
                            "& .MuiDataGrid-row:hover": {backgroundColor: "rgba(0,0,0,0.03)"},
                            "& .MuiDataGrid-row:nth-of-type(even)": {
                                backgroundColor: "rgba(0,0,0,0.015)",
                            },
                            "& .MuiDataGrid-cell:has(button):hover": {
                                backgroundColor: "rgba(0,0,0,0.04)",
                            },
                        }}
                    />
                </Box>
            </Paper>

            <CrmRowDetailsDrawer
                open={Boolean(detailsRow)}
                row={detailsRow}
                onClose={() => setDetailsRow(null)}
            />
        </Box>
    );
}
