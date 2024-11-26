import { css } from "@emotion/css";

export const styles = {
    kcBodyClass: css({
        background: "black",
        fontFamily: "DM Sans"
    }),
    logo: css({
        width: "130px",
        margin: "25px"
    }),
    logoContainer: css({
        position: "absolute",
        top: "16px",
        left: "16px",
        cursor: "pointer",
        zIndex: 10
    }),
    kcButtonBack: css({
        backgroundColor: "#44475A",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "4px",
        alignSelf: "start",
        padding: "8px 16px",
        cursor: "pointer",
        fontSize: "14px",
        zIndex: 20,
        "&:hover": {
            backgroundColor: "#6272A4"
        }
    }),
    kcHeaderClass: css({
        color: "#FFF",
        textAlign: "right",
        fontSize: "28px"
    }),
    kcContainer: css({
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        position: "relative",
        overflow: "hidden",
        "&::before": {
            content: "\"\"",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "var(--Gradiente, linear-gradient(90deg, #40C5E4 15.51%, #DE8E8E 91.84%))",
            filter: "blur(80px)",
            zIndex: 0,
            opacity: 0.6
        }
    }),
    kcCard: css({
        cursor: "pointer",
        minWidth: "20vw",
        borderRadius: "8px",
        border: "1px solid #595957",
        background: "#393937",
        color: "#FFF",
        display: "flex",
        padding: "24px",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        alignSelf: "stretch",
        zIndex: 1,
        flexDirection: "row"
    }),
    kcSvg: css({
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }),
    kcArrow: css({
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }),
    kcCardContainer: css({
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        zIndex: 1
    }),
    kcCardSocial: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        flex: "2",
        textAlign: "center",
        width: "100%"
    }),
    kcCardMiniBox: css({
        display: "flex",
        borderRadius: "2px",
        fontSize: "8px",
        padding: "2px 8px",
        alignItems: "flex-start",
        background: "#636360"
    }),
    kcCardTitle: css({
        color: "#FFF",
        fontFamily: "DM Sans",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }),
    kcCardSubTitle: css({
        color: "#FFF",
        fontFamily: "DM Sans",
        textAlign: "left",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: "200",
        lineHeight: "normal"
    }),
    kcFormWrapper: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        background: "#393937",
        borderRadius: "8px",
        padding: "64px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)"
    }),
    kcFormGroupClass: css({
        marginBottom: "16px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "8px"
    }),
    checkbox: css({
       color: "#FFF",
       display: "flex",
        alignSelf: "start"
    }),
    kcLabelClass: css({
        color: "#FFF",
        fontFamily: "DM Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }),
    kcInputClass: css({
        borderRadius: "4px",
        border: "1px solid #ccc",
        padding: "8px",
        fontSize: "14px",
        color: "#333",
        width: "100%"
    }),
    kcInputErrorMessageClass: css({
        color: "red",
        fontSize: "12px",
        marginTop: "4px"
    }),
    kcFormSettingClass: css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px"
    }),
    kcFormOptionsWrapperClass: css({
        textAlign: "right",
    }),
    kcButtonClass: css({
        borderRadius: "4px",
        border: "none",
        padding: "12px 16px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        textAlign: "center"
    }),
    kcButtonPrimaryClass: css({
        backgroundColor: "#44475A",
        color: "#fff",
        "&:disabled": {
            backgroundColor: "#cccccc"
        },
        "&:hover": {
            backgroundColor: "#6272A4"
        }
    }),
    kcButtonBlockClass: css({
        width: "100%"
    }),
    kcButtonLargeClass: css({
        fontSize: "16px"
    })
};
