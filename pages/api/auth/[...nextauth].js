import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId:  '78d70a05c18a5b129a52',
            clientSecret: '4d1b1e537a89c00e7553825a4dd617aa08d20af2'
        }),
        AppleProvider({
            
        })
    ],
});