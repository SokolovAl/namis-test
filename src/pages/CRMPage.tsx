import {Box, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {TableToolbar} from "../components/TableToolbar";
import {crmRows} from "../mocks/mockData";

import {crmColumns} from "./crm/crmGrid.columns";
import {toCrmGridRows} from "./crm/crmGrid.rows";

export function CRMPage() {
    const rows = toCrmGridRows(crmRows);

    return (
        <Box sx={{p: 2}}>
            <Paper sx={{overflow: "hidden"}}>
                <TableToolbar/>

                <Box sx={{height: 620}}>
                    <DataGrid
                        rows={rows}
                        columns={crmColumns}
                        disableRowSelectionOnClick
                        pageSizeOptions={[10, 20, 50]}
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
