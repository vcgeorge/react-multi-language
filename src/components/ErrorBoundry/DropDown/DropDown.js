import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React from 'react'
import { useTranslation } from "react-i18next";


const languages = [
    { title: "German", value: "de" },
    { title: "English", value: "en" },
    { title: "French", value: "fr" }
];

function DropDown() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label">{t("language")}</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={i18n.language}
                label="Language"
                onChange={handleLanguageChange}
            >
                {languages.map((language, index) => (
                    <MenuItem key={index} value={language.value}>
                        {language.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default DropDown