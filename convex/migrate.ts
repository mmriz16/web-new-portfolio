import { mutation } from "./_generated/server";
import { v } from "convex/values";

const clean = (obj: any) => {
    const newObj: any = { ...obj };
    delete newObj.id;
    delete newObj.created_at;
    // Walk through all keys and replace null with undefined
    for (const key in newObj) {
        if (newObj[key] === null) {
            newObj[key] = undefined;
        }
    }
    return newObj;
};

export const importUsesCategories = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            const existing = await ctx.db
                .query("uses_categories")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();

            if (!existing) {
                await ctx.db.insert("uses_categories", {
                    ...clean(item),
                    supabase_id: item.id,
                });
            }
        }
    },
});

export const importUsesItems = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            if (item.category_id) {
                const category = await ctx.db
                    .query("uses_categories")
                    .filter(q => q.eq(q.field("supabase_id"), item.category_id))
                    .first();

                if (category) {
                    const existing = await ctx.db
                        .query("uses_items")
                        .filter(q => q.eq(q.field("supabase_id"), item.id))
                        .first();

                    if (!existing) {
                        await ctx.db.insert("uses_items", {
                            ...clean(item),
                            category_id: category._id,
                            supabase_id: item.id,
                        });
                    }
                }
            }
        }
    },
});

export const importPortfolioItems = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            const existing = await ctx.db
                .query("portfolio_items")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();
            if (!existing) {
                await ctx.db.insert("portfolio_items", {
                    ...clean(item),
                    supabase_id: item.id
                });
            }
        }
    },
});

export const importPersonalProjects = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            const existing = await ctx.db
                .query("personal_projects")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();
            if (!existing) {
                await ctx.db.insert("personal_projects", {
                    ...clean(item),
                    supabase_id: item.id
                });
            }
        }
    },
});

export const importWorkExperiences = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            const existing = await ctx.db
                .query("work_experiences")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();
            if (!existing) {
                await ctx.db.insert("work_experiences", {
                    ...clean(item),
                    supabase_id: item.id
                });
            }
        }
    },
});

export const importProfiles = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        const list = Array.isArray(args.data) ? args.data : [args.data];
        for (const item of list) {
            const existing = await ctx.db
                .query("profiles")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();
            if (!existing) {
                await ctx.db.insert("profiles", {
                    ...clean(item),
                    supabase_id: item.id
                });
            }
        }
    },
});

export const importUpdates = mutation({
    args: { data: v.any() },
    handler: async (ctx, args) => {
        for (const item of args.data) {
            const existing = await ctx.db
                .query("updates")
                .filter((q) => q.eq(q.field("supabase_id"), item.id))
                .first();
            if (!existing) {
                await ctx.db.insert("updates", {
                    ...clean(item),
                    supabase_id: item.id
                });
            }
        }
    },
});
