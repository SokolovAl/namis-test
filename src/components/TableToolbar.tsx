import {Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip,} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";

export function TableToolbar() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.25,
                p: 1.5,
            }}
        >
            {/* Поиск */}
            <TextField
                size="small"
                label="Поиск"
                placeholder="№ заявки / Наименование / ИНН"
                sx={{minWidth: 280}}
            />

            <FormControl size="small" sx={{minWidth: 170}}>
                <InputLabel id="filter-direction-label">Направление</InputLabel>
                <Select labelId="filter-direction-label" label="Направление" value="">
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="cfo">ЦФО</MenuItem>
                    <MenuItem value="sfo">СФО</MenuItem>
                    <MenuItem value="ugs">УГС</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{minWidth: 170}}>
                <InputLabel id="filter-status-label">Статус</InputLabel>
                <Select labelId="filter-status-label" label="Статус" value="">
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="in_review">Направлено на проверку</MenuItem>
                    <MenuItem value="in_work">В работе</MenuItem>
                    <MenuItem value="with_notes">С замечаниями</MenuItem>
                    <MenuItem value="returned">Возврат на доработку</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{minWidth: 190}}>
                <InputLabel id="filter-doc-label">Тип документов</InputLabel>
                <Select labelId="filter-doc-label" label="Тип документов" value="">
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="scans">Сканы</MenuItem>
                    <MenuItem value="scans_with_notes">Сканы с замечаниями</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{flex: 1}}/>

            <Tooltip title="Плотность (заглушка)" arrow>
                <IconButton
                    size="small"
                    sx={{
                        borderRadius: 1,
                        transition: "background-color 0.15s ease",
                        "&:hover": {backgroundColor: "rgba(0,0,0,0.06)"},
                    }}
                    aria-label="Плотность"
                >
                    <ViewCompactOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>

            <Tooltip title="Сбросить фильтры (заглушка)" arrow>
                <IconButton
                    size="small"
                    sx={{
                        borderRadius: 1,
                        transition: "background-color 0.15s ease",
                        "&:hover": {backgroundColor: "rgba(0,0,0,0.06)"},
                    }}
                    aria-label="Сбросить фильтры"
                >
                    <RestartAltOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>

            <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon/>}
                sx={{textTransform: "none"}}
            >
                Создать заявку
            </Button>

            <Button
                variant="outlined"
                startIcon={<DownloadOutlinedIcon/>}
                sx={{textTransform: "none"}}
            >
                Скачать Excel
            </Button>
        </Box>
    );
}
