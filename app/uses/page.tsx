import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export default async function Uses() {
    const categories = await fetchQuery(api.queries.getUsesConfig, {});

    return (
        <div className="flex flex-col gap-24">
            {/* Hero */}
            <div className="flex flex-col gap-6">
                <h1 className="font-manrope text-[42px] font-extrabold capitalize">Software I use, gadgets I love, and other things I recommend.</h1>
                <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">
                    I get asked a lot about the things I use to build software, stay  productive, or buy to fool myself  into thinking I&apos;m being productive  when I&apos;m really just procrastinating. Here&apos;s a big list of all of  my  favorite stuff.
                </p>
            </div>

            {categories?.map((category) => (
                <div key={category._id} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 ">
                        <h1 className="font-manrope text-[32px] font-extrabold">{category.name}</h1>
                        {category.description && (
                            <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">
                                {category.description}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                        {category.uses_items?.map((item) => (
                            <div key={item._id} className="flex flex-col gap-1.5 p-6 bg-[#111214] border-l border-[#ffffff]/10 h-fit">
                                <h1 className="font-manrope text-[18px] font-medium">{item.name}</h1>
                                <p className="font-jetbrains-mono text-white/70 leading-5.5 text-[14px] font-light">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
