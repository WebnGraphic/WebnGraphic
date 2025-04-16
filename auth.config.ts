import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [Google],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const userRole = auth?.user?.role || "user";
      const { pathname } = nextUrl;

      // Restrict `/admin` to admin users only
      if (pathname.startsWith("/admin")) {
        if (!isLoggedIn) {
          return Response.redirect(new URL("/sign-in-admin", nextUrl));
        }

        if (userRole !== "admin" && userRole !== "editor") {
          return Response.redirect(new URL("/403", nextUrl));
        }

        return true; // Allow admins and editors to access
      }

      return true; // Allow access to all other pages
    },
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
      }
      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/sign-in-admin",
  },
} satisfies NextAuthConfig;
