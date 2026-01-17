import {Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip,} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

export type CrmFiltersState = {
    search: string;
    direction: "" | "ЦСО" | "ССП" | "ИГС";
    status:
        | ""
        | "Направлено на проверку"
        | "В работе"
        | "С замечаниями"
        | "Возврат на доработку повторно";
    documentType: "" | "Сканы" | "Сканы с замечаниями";
    objectType: "" | "Обычные" | "Опасные" | "Обычные, опасные и атомные";
};

type Props = {
    filters: CrmFiltersState;
    onChange: (patch: Partial<CrmFiltersState>) => void;
    onReset: () => void;
};

export function TableToolbar({
                                 filters,
                                 onChange,
                                 onReset,
                             }: Props) {
    return (
        <Box sx={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.25, p: 1.5}}>
            <TextField
                size="small"
                label="Поиск"
                value={filters.search}
                onChange={(e) => onChange({search: e.target.value})}
                sx={{minWidth: 280}}
                placeholder={"№ заявки / Наименование / ИНН / Исполнитель"}
            />

            <FormControl size="small" sx={{minWidth: 170}}>
                <InputLabel id="filter-direction-label">Направление</InputLabel>
                <Select
                    labelId="filter-direction-label"
                    label="Направление"
                    value={filters.direction}
                    onChange={(e) =>
                        onChange({direction: e.target.value as CrmFiltersState["direction"]})
                    }
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="ЦСО">ЦСО</MenuItem>
                    <MenuItem value="ССП">ССП</MenuItem>
                    <MenuItem value="ИГС">ИГС</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{minWidth: 170}}>
                <InputLabel id="filter-status-label">Статус</InputLabel>
                <Select
                    labelId="filter-status-label"
                    label="Статус"
                    value={filters.status}
                    onChange={(e) =>
                        onChange({status: e.target.value as CrmFiltersState["status"]})
                    }
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="Направлено на проверку">Направлено на проверку</MenuItem>
                    <MenuItem value="В работе">В работе</MenuItem>
                    <MenuItem value="С замечаниями">С замечаниями</MenuItem>
                    <MenuItem value="Возврат на доработку повторно">Возврат на доработку повторно</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{minWidth: 190}}>
                <InputLabel id="filter-doc-label">Тип документов</InputLabel>
                <Select
                    labelId="filter-doc-label"
                    label="Тип документов"
                    value={filters.documentType}
                    onChange={(e) =>
                        onChange({
                            documentType: e.target.value as CrmFiltersState["documentType"],
                        })
                    }
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="Сканы">Сканы</MenuItem>
                    <MenuItem value="Сканы с замечаниями">Сканы с замечаниями</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small" sx={{minWidth: 170}}>
                <InputLabel id="filter-object-label">Тип объекта</InputLabel>
                <Select
                    labelId="filter-object-label"
                    label="Тип объекта"
                    value={filters.objectType}
                    onChange={(e) =>
                        onChange({
                            objectType: e.target.value as CrmFiltersState["objectType"],
                        })
                    }
                >
                    <MenuItem value="">
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value="Обычные">Обычные</MenuItem>
                    <MenuItem value="Опасные">Опасные</MenuItem>
                    <MenuItem value="Обычные, опасные и атомные">Обычные, опасные и атомные</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{flex: 1}}/>

            <Tooltip title="Сбросить фильтры" arrow>
                <IconButton size="small" onClick={onReset}>
                    <RestartAltOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>

            <Button variant="contained" startIcon={<AddCircleOutlineIcon/>} sx={{textTransform: "none"}}>
                Создать заявку
            </Button>

            <Button variant="outlined" startIcon={<DownloadOutlinedIcon/>} sx={{textTransform: "none"}}>
                Скачать Excel
            </Button>
        </Box>
    );
}
