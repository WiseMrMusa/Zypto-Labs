import { configureServerSideSIWE } from "connectkit-next-siwe";
import * as dotenv from 'dotenv';
dotenv.config()

export const siweServer = configureServerSideSIWE({
    session: {
        cookieName: "connectkit-next-siwe",
        password: process.env.SESSION_SECRET,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    },
});