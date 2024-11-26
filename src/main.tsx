import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
import { getKcContextMock } from "./login/KcPageStory";

if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "login.ftl",
        overrides: {
            social: {
                providers: [{ loginUrl: "https://idp.diveedi.dev/realms/diveedi-lab/broker/diveedi-lab/login?client_id=security-admin-console&tab_id=rOOiEHks_GQ&client_data=eyJydSI6Imh0dHBzOi8vaWRwLmRpdmVlZGkuZGV2L2FkbWluL2RpdmVlZGktbGFiL2NvbnNvbGUvIiwicnQiOiJjb2RlIiwicm0iOiJxdWVyeSIsInN0IjoiYmZiYmFiYjItOGJmNS00Y2YyLTg0ODEtZjcxZTY5Y2MxN2U0In0&session_code=ZNMrj5Am1nfCc4loPVqSXkZP8cIm_0vVUcmM8UPsHpo" }]
            }
        }
    });
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <KcPage kcContext={window.kcContext} />
        )}
    </StrictMode>
);
