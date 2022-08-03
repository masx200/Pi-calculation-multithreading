!(async () => {
    if (process.env.NODE_ENV === "production") {
        //@ts-ignore
        const { registerSW } = await import("virtual:pwa-register");

        registerSW({})().catch(() => {});
    }
})();
