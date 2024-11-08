// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
                },
            ],
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@prisma/nuxt", "@nuxt/image"],
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
});