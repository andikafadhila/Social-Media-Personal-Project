import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log(user, account);
      return "/";
    },
    async session({ session, user, token }) {
      // console.log(session, user, token);
      // session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // token.accessToken = account.access_token;
      console.log("profile", profile);
      console.log("account", account);
      console.log("token", token);
      console.log("user", user);
      token.userRole = "admin";
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
