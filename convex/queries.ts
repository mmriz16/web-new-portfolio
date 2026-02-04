import { query } from "./_generated/server";
import { v } from "convex/values";

export const getUsesConfig = query({
    args: {},
    handler: async (ctx) => {
        const categories = await ctx.db
            .query("uses_categories")
            .withIndex("by_display_order")
            .collect();

        const items = await ctx.db.query("uses_items").collect();

        return categories.map((cat) => ({
            ...cat,
            uses_items: items
                .filter((item) => item.category_id === cat._id)
                .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0)),
        }));
    },
});

export const getPortfolio = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("portfolio_items")
            .withIndex("by_display_order")
            .collect();
    },
});

export const getPersonalProjects = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("personal_projects")
            .withIndex("by_display_order")
            .collect();
    },
});

export const getWorkExperiences = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("work_experiences")
            .withIndex("by_start_date")
            .order("desc")
            .collect();
    },
});

export const getProfile = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("profiles").first();
    },
});

export const getUpdates = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query("updates")
            .withIndex("by_created_at")
            .order("desc")
            .collect();
    },
});
