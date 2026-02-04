import { createClient } from "@/utils/supabase/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = await createClient();
    const results: Record<string, number> = {};

    const { data: categories } = await supabase.from("uses_categories").select("*");
    if (categories) {
        await fetchMutation(api.migrate.importUsesCategories, { data: categories });
        results["categories"] = categories.length;
    }

    const { data: items } = await supabase.from("uses_items").select("*");
    if (items) {
        await fetchMutation(api.migrate.importUsesItems, { data: items });
        results["uses_items"] = items.length;
    }

    const { data: portfolio } = await supabase.from("portfolio_items").select("*");
    if (portfolio) {
        await fetchMutation(api.migrate.importPortfolioItems, { data: portfolio });
        results["portfolio"] = portfolio.length;
    }

    const { data: personal } = await supabase.from("personal_projects").select("*");
    if (personal) {
        await fetchMutation(api.migrate.importPersonalProjects, { data: personal });
        results["personal"] = personal.length;
    }

    const { data: work } = await supabase.from("work_experiences").select("*");
    if (work) {
        await fetchMutation(api.migrate.importWorkExperiences, { data: work });
        results["work"] = work.length;
    }

    const { data: profiles } = await supabase.from("profiles").select("*");
    if (profiles) {
        await fetchMutation(api.migrate.importProfiles, { data: profiles });
        results["profiles"] = profiles.length;
    }

    const { data: updates } = await supabase.from("updates").select("*");
    if (updates) {
        await fetchMutation(api.migrate.importUpdates, { data: updates });
        results["updates"] = updates.length;
    }

    return NextResponse.json({ success: true, migrated: results });
}
