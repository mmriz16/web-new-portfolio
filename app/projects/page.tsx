import Link from "next/link";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export default async function Projects() {
    const portfolioItems = await fetchQuery(api.queries.getPortfolio, {});
    const personalProjects = await fetchQuery(api.queries.getPersonalProjects, {});

    return (
        <div className="flex flex-col gap-24">
            {/* Hero */}
            <div className="flex flex-col gap-6">
                <h1 className="font-manrope text-[42px] font-extrabold">Things I’ve made trying to put my dent in the universe.</h1>
                <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">
                    Here are some of my featured projects. Each project includes a detailed case study of the design process, the technologies used, and the results.
                </p>
            </div>

            {/* Personal Projects */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <h1 className="font-manrope text-[32px] font-extrabold">Personal Projects</h1>
                    <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">Aenean eu justo sed elit congue ultricies eu eget leo, aenean semper orci eu pulvinar.</p>
                </div>
                {/* Card Personal Projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {personalProjects?.map((item) => (
                        <Link href={item.link || "#"} key={item._id} className="flex flex-col gap-1.5" target="_blank">
                            <div className="w-full h-[200px] bg-[#111214] rounded-[24px] overflow-hidden">
                                {item.image_url && <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />}
                            </div>
                            <div className="flex flex-col gap-1.5 px-4 h-fit">
                                <h1 className="font-manrope text-[18px] font-medium">{item.title}</h1>
                                <p className="font-jetbrains-mono text-white/70 leading-[22px] text-[14px] font-light line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Portfolio Designs */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <h1 className="font-manrope text-[32px] font-extrabold">Portfolio Design</h1>
                    <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">Aenean eu justo sed elit congue ultricies eu eget leo, aenean semper orci eu pulvinar.</p>
                </div>
                {/* Card Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioItems?.map((item) => (
                        <div key={item._id} className="flex flex-col gap-1.5">
                            <div className="w-full h-[200px] bg-[#111214] rounded-[24px] overflow-hidden">
                                {item.image_url && <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />}
                            </div>
                            <div className="flex flex-col gap-1.5 px-4 h-fit">
                                <h1 className="font-manrope text-[18px] font-medium">{item.title}</h1>
                                <p className="font-jetbrains-mono text-white/70 leading-[22px] text-[14px] font-light line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
