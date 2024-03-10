import { login, loginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // secret: "12345678",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await login({ email });

        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '' ,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      // credenstial itu email dan password
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.role = user.role;
        token.fullname = user.fullname;
      }
      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          type: "google",
        }

        await loginWithGoogle(
          data,
          // =>{} d panggil callback
          (result :{status:boolean, data:any}) => {
            if (result.status) {
              token.email = result.data.email;
              token.fullname= result.data.fullname;
              token.role = result.data.role;
              token.type = result.data.type;
            }
          });
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
