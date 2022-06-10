import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,  
            clientSecret: process.env.GITHUB_SECRET_ID
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID            
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
});