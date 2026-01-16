import {Box, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {TableToolbar} from "../components/TableToolbar";
import {crmRows} from "../mocks/data.ts";

import {crmColumns} from "./crm/crmGrid.columns";
import {toCrmGridRows} from "./crm/crmGrid.rows";

export function CRMPage() {
    const rows = toCrmGridRows(crmRows);

    return (
        <Box
            sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
            }}
        >
            <Paper
                sx={{
                    overflow: "hidden",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                }}
            >
                <TableToolbar/>

                <Box sx={{flex: 1, minHeight: 0}}>
                    <DataGrid
                        rows={rows}
                        columns={crmColumns}
                        disableColumnMenu
                        disableRowSelectionOnClick
                        pageSizeOptions={[10, 20, 50]}
                        sortingOrder={["asc", "desc"]}
                        initialState={{
                            pagination: {paginationModel: {pageSize: 20, page: 0}},
                            sorting: {sortModel: [{field: "requestNo", sort: "desc"}]},
                        }}
                        sx={{
                            border: "none",
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "rgba(0,0,0,0.02)",
                            },
                            "& .MuiDataGrid-row:hover": {
                                backgroundColor: "rgba(0,0,0,0.03)",
                            },
                            "& .MuiDataGrid-row:nth-of-type(even)": {
                                backgroundColor: "rgba(0,0,0,0.015)",
                            },
                        }}
                    />
                </Box>
            </Paper>
        </Box>
    );
}
