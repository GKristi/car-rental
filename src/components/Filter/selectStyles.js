const selectStyle = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "#F7F7FB",
        border: "none",
        outline: "none",
        borderRadius: "14px",
        boxShadow: "none",
        cursor: "pointer",
        maxWidth: "224px",
        minWidth: '125px',
        height: "48px",

    }),
    singleValue: (styles) => ({
        ...styles,
        color: "#121417",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "1.11",
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "#121417;",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "1.11",
    }),
    menu: (styles) => ({
        ...styles,
        maxWidth: "224px",
        minWidth: '125px',
        borderRadius: "14px",
        backgroundColor: "#FFF",
        boxShadow: " 0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
        overflow: "hidden",
        color: "rgba(18, 20, 23, 0.20)",
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "1.25",
    }),
    option: (styles, { isFocused, isSelected }) => {
        if (isFocused) {
            return {
                ...styles,
                background: "#FFFFFF1A",
                color: "#121417",
                cursor: "pointer",
            };
        } else if (isSelected) {
            return {
                ...styles,
                background: "#FFF",
                color: "#121417",
                cursor: "pointer",
            };
        } else {
            return {
                ...styles,
            };
        }
    },
    menuList: (base) => ({
        ...base,
        height: "100%",

        "::-webkit-scrollbar": {
            width: "8px",
        },
        "::-webkit-scrollbar-track": {
            background: "#FFF",
            borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb": {
            background: " rgba(18, 20, 23, 0.05)",
            borderRadius: "10px",
        },
    }),
};

export default selectStyle;