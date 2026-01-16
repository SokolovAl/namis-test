import {Box, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useMemo, useState} from "react";
import {TableToolbar} from "../components/TableToolbar";
import {crmRows} from "../mocks/data.ts";

import type {CrmGridRow} from "./crm/crmGrid.types";
import {toCrmGridRows} from "./crm/crmGrid.rows";
import {createCrmColumns} from "./crm/crmGrid.columns";
import {CrmRowDetailsDrawer} from "../components/CrmRowDetailsDrawer";

export function CRMPage() {
    const rows = toCrmGridRows(crmRows);

    const [detailsRow, setDetailsRow] = useState<CrmGridRow | null>(null);

    const columns = useMemo(
        () => createCrmColumns({onOpenDetails: setDetailsRow}),
        []
    );

    return (
        <Box sx={{p: 2, height: "100%", display: "flex", flexDirection: "column", minHeight: 0}}>
            <Paper sx={{overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", minHeight: 0}}>
                <TableToolbar/>

                <Box sx={{flex: 1, minHeight: 0}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        disableColumnMenu
                        disableRowSelectionOnClick
                        pageSizeOptions={[10, 20, 50]}
                        sortingOrder={["asc", "desc"]}
                        onRowClick={(params) => setDetailsRow(params.row)}
                        initialState={{
                            pagination: {paginationModel: {pageSize: 20, page: 0}},
                            sorting: {sortModel: [{field: "requestNo", sort: "asc"}]},
                        }}
                        sx={{
                            border: "none",
                            "& .MuiDataGrid-columnHeaders": {backgroundColor: "rgba(0,0,0,0.02)"},
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontWeight: 700,
                                fontSize: 13,
                            },
                            "& .MuiDataGrid-row:hover": {backgroundColor: "rgba(0,0,0,0.03)"},
                            "& .MuiDataGrid-row:nth-of-type(even)": {backgroundColor: "rgba(0,0,0,0.015)"},
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
