import {AppBar, Box, IconButton, Tab, Tabs, Toolbar, Tooltip} from "@mui/material";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {useState} from "react";

type TopTab = "plan" | "intro" | "change";

export function TopBar() {
    const [activeTab, setActiveTab] = useState<TopTab>("intro");

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar sx={{gap: 2}}>
                <Tabs
                    value={activeTab}
                    onChange={(_, v: TopTab) => setActiveTab(v)}
                    textColor="inherit"
                    slotProps={{
                        indicator: {
                            sx: {
                                display: "none",
                            },
                        },
                    }}
                    sx={{
                        flex: 1,

                        "& .MuiTab-root.Mui-selected": {
                            opacity: 1,
                            backgroundColor: "rgba(255,255,255,0.15)",
                        },
                        "& .MuiTab-root": {
                            opacity: 0.9,
                            textTransform: "none",
                        },
                    }}
                >
                    <Tab
                        value="plan"
                        label="Плановая проверка"
                        icon={<AssignmentTurnedInOutlinedIcon/>}
                        iconPosition="end"
                    />
                    <Tab
                        value="intro"
                        label="Вступление"
                        icon={<AddBusinessOutlinedIcon/>}
                        iconPosition="end"
                    />
                    <Tab
                        value="change"
                        label="Изменение"
                        icon={<EditOutlinedIcon/>}
                        iconPosition="end"
                    />
                </Tabs>

                <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                    <AccountCircleOutlinedIcon fontSize="large"/>

                    <Tooltip title="Сменить аккаунт" arrow>
                        <IconButton color="inherit" size="medium" aria-label="Сменить аккаунт" sx={{
                            borderRadius: 1,
                            transition: "background-color 0.15s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.15)",
                            }
                        }}>
                            <SwapHorizOutlinedIcon fontSize="medium"/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Выйти" arrow>
                        <IconButton color="inherit" size="medium" aria-label="Выйти из аккаунта" sx={{
                            borderRadius: 1,
                            transition: "background-color 0.15s ease",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.15)",
                            }
                        }}>
                            < LogoutOutlinedIcon fontSize="medium"/>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
