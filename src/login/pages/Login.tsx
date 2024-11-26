import { useState, useEffect, useReducer } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { assert } from "keycloakify/tools/assert";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { styles } from "../../useClasses.tsx";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("loginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            socialProvidersNode={
                <div className={styles.kcCard} onClick={() => {
                    window.location.href = social!.providers![0].loginUrl;
                }}>
                    <div className={styles.kcSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M29.76 16.3376C29.76 15.2843 29.6655 14.2715 29.4899 13.2993H15.5V19.0451H23.4942C23.1499 20.9019 22.1034 22.4751 20.5302 23.5284V27.2554H25.3308C28.1395 24.6694 29.76 20.8614 29.76 16.3376Z"
                                fill="#4285F4"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.4998 30.854C19.5104 30.854 22.8729 29.5238 25.3306 27.2552L20.53 23.5282C19.1998 24.4194 17.4984 24.946 15.4998 24.946C11.631 24.946 8.35631 22.3331 7.18823 18.8221H2.22559V22.6707C4.66977 27.5253 9.69318 30.854 15.4998 30.854Z"
                                fill="#34A853"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.18834 18.8224C6.89125 17.9311 6.72246 16.9791 6.72246 16.0001C6.72246 15.0211 6.89125 14.0691 7.18834 13.1778V9.32922H2.2257C1.21966 11.3345 0.645752 13.6032 0.645752 16.0001C0.645752 18.397 1.21966 20.6657 2.2257 22.671L7.18834 18.8224Z"
                                fill="#FBBC05"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.4998 7.05375C17.6807 7.05375 19.6387 7.80321 21.1782 9.27512L25.4386 5.01468C22.8661 2.61776 19.5037 1.14584 15.4998 1.14584C9.69318 1.14584 4.66977 4.47453 2.22559 9.32914L7.18823 13.1777C8.35631 9.66673 11.631 7.05375 15.4998 7.05375Z"
                                fill="#EA4335"
                            />
                        </svg>
                    </div>
                    <div className={styles.kcCardSocial}>
                        <div className={styles.kcCardTitle}>Company account</div>
                        <div className={styles.kcCardSubTitle}>Login with google-company account as @diveedi.com</div>
                        <div className={styles.kcCardMiniBox}>
                            Get access to our world
                        </div>
                    </div>
                    <div className={styles.kcArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M1 1L7 7L1 13" stroke="#989896" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            }
        >
            <button
                className={styles.kcButtonBack}
            >
                Back
            </button>
            <div id="kc-form">
                <div className={styles.kcFormWrapper}>
                    {realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                        >
                            {!usernameHidden && (
                                <div className={styles.kcFormGroupClass}>
                                    <label htmlFor="username" className={styles.kcLabelClass}>
                                        {!realm.loginWithEmailAllowed
                                            ? msg("username")
                                            : !realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("email")}
                                    </label>
                                    <input
                                        tabIndex={2}
                                        id="username"
                                        className={styles.kcInputClass}
                                        name="username"
                                        defaultValue={login.username ?? ""}
                                        type="text"
                                        autoFocus
                                        autoComplete="username"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                    />
                                    {messagesPerField.existsError("username", "password") && (
                                        <span
                                            id="input-error"
                                            className={styles.kcInputErrorMessageClass}
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                            }}
                                        />
                                    )}
                                </div>
                            )}

                            <div className={styles.kcFormGroupClass}>
                                <label htmlFor="password" className={styles.kcLabelClass}>
                                    {msg("password")}
                                </label>
                                <PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">
                                    <input
                                        tabIndex={3}
                                        id="password"
                                        className={styles.kcInputClass}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                    />
                                </PasswordWrapper>
                                {usernameHidden && messagesPerField.existsError("username", "password") && (
                                    <span
                                        id="input-error"
                                        className={styles.kcInputErrorMessageClass}
                                        aria-live="polite"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                        }}
                                    />
                                )}
                            </div>

                            <div className={styles.kcFormGroupClass + " " + styles.kcFormSettingClass}>
                                <div id="kc-form-options">
                                    {realm.rememberMe && !usernameHidden && (
                                        <div className="checkbox">
                                            <label className={styles.checkbox}>
                                                <input
                                                    tabIndex={5}
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                    type="checkbox"
                                                    defaultChecked={!!login.rememberMe}
                                                />{" "}
                                                {msg("rememberMe")}
                                            </label>
                                        </div>
                                    )}
                                </div>
                                <div className={styles.kcFormOptionsWrapperClass}>
                                    {realm.resetPasswordAllowed && (
                                        <span>
                                <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                                    {msg("doForgotPassword")}
                                </a>
                            </span>
                                    )}
                                </div>
                            </div>

                            <div id="kc-form-buttons" className={styles.kcFormGroupClass}>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                    value={auth.selectedCredential}
                                />
                                <input
                                    tabIndex={7}
                                    disabled={isLoginButtonDisabled}
                                    className={`${styles.kcButtonClass} ${styles.kcButtonPrimaryClass} ${styles.kcButtonBlockClass} ${styles.kcButtonLargeClass}`}
                                    name="login"
                                    id="kc-login"
                                    type="submit"
                                    value={msgStr("doLogIn")}
                                />
                            </div>
                        </form>
                    )}
                </div>
            </div>

        </Template>
    );
}

function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
    const { kcClsx, i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer((isPasswordRevealed: boolean) => !isPasswordRevealed, false);

    useEffect(() => {
        const passwordInputElement = document.getElementById(passwordInputId);

        assert(passwordInputElement instanceof HTMLInputElement);

        passwordInputElement.type = isPasswordRevealed ? "text" : "password";
    }, [isPasswordRevealed]);

    return (
        <div className={kcClsx("kcInputGroup")}>
            {children}
            <button
                type="button"
                className={kcClsx("kcFormPasswordVisibilityButtonClass")}
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                <i className={kcClsx(isPasswordRevealed ? "kcFormPasswordVisibilityIconHide" : "kcFormPasswordVisibilityIconShow")}
                   aria-hidden />
            </button>
        </div>
    );
}