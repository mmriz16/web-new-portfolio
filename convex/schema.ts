import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    uses_categories: defineTable({
        name: v.string(),
        description: v.optional(v.string()),
        icon: v.optional(v.string()),
        display_order: v.optional(v.number()),
        supabase_id: v.optional(v.string()),
    }).index("by_display_order", ["display_order"]),

    uses_items: defineTable({
        name: v.string(),
        description: v.optional(v.string()),
        link: v.optional(v.string()),
        image_url: v.optional(v.string()),
        display_order: v.optional(v.number()),
        category_id: v.optional(v.union(v.id("uses_categories"), v.string())),
        supabase_id: v.optional(v.string()),
    }).index("by_category", ["category_id"]),

    portfolio_items: defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        image_url: v.optional(v.string()),
        display_order: v.optional(v.number()),
        supabase_id: v.optional(v.string()),
        link: v.optional(v.string()),
    }).index("by_display_order", ["display_order"]),

    personal_projects: defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        link: v.optional(v.string()),
        image_url: v.optional(v.string()),
        display_order: v.optional(v.number()),
        supabase_id: v.optional(v.string()),
    }).index("by_display_order", ["display_order"]),

    work_experiences: defineTable({
        company: v.string(),
        job_title: v.string(),
        icon_url: v.optional(v.string()),
        start_date: v.optional(v.string()),
        end_date: v.optional(v.string()),
        display_order: v.optional(v.number()),
        supabase_id: v.optional(v.string()),
    }).index("by_start_date", ["start_date"]),

    profiles: defineTable({
        full_name: v.string(),
        email: v.optional(v.string()),
        bio: v.optional(v.string()),
        titles: v.optional(v.string()), // HTML content
        title_status: v.optional(v.string()),
        resume_url: v.optional(v.string()),
        updated_at: v.optional(v.string()),
        supabase_id: v.optional(v.string()),
    }),

    updates: defineTable({
        title: v.string(),
        description: v.optional(v.string()),
        created_at: v.optional(v.string()), // ISO string
        supabase_id: v.optional(v.string()),
    }).index("by_created_at", ["created_at"]),
});
