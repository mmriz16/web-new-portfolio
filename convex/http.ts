import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
    path: "/api/uses",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        const data = await ctx.runQuery(api.queries.getUsesConfig);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }),
});

http.route({
    path: "/api/portfolio",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        const data = await ctx.runQuery(api.queries.getPortfolio);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json", // Corrected content type
                "Access-Control-Allow-Origin": "*",
            },
        });
    }),
});

http.route({
    path: "/api/projects",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        const data = await ctx.runQuery(api.queries.getPersonalProjects);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }),
});

http.route({
    path: "/api/profile",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        const data = await ctx.runQuery(api.queries.getProfile);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }),
});

http.route({
    path: "/api/updates",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        const data = await ctx.runQuery(api.queries.getUpdates);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }),
});

export default http;
