import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { format, differenceInMonths } from "date-fns";

export default async function Home() {
  const profile = await fetchQuery(api.queries.getProfile, {});
  const portfolioItems = (await fetchQuery(api.queries.getPortfolio, {}))?.slice(0, 3);
  const updates = await fetchQuery(api.queries.getUpdates, {});
  const workExperiences = await fetchQuery(api.queries.getWorkExperiences, {});

  if (!profile) return null;

  const totalMonths = workExperiences?.reduce((acc, exp) => {
    if (!exp.start_date) return acc;
    const start = new Date(exp.start_date);
    const end = exp.end_date ? new Date(exp.end_date) : new Date();
    return acc + differenceInMonths(end, start);
  }, 0) || 0;

  const totalYears = (totalMonths / 12).toFixed(1);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <div className="flex flex-col gap-6">
        <h1 className="font-manrope text-[42px] font-extrabold capitalize" dangerouslySetInnerHTML={{ __html: profile.titles || "" }} />
        <p className="font-jetbrains-mono text-white/70 leading-[30px] text-[16px] font-light">
          {profile.bio} Contact me at <a href={`mailto:${profile.email}`} className="text-white hover:underline">{profile.email}</a> for collaborations.
        </p>
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

      {/* What's New */}
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="font-manrope text-[32px] font-extrabold">What&apos;s New?</h1>
          <p className="font-jetbrains-mono text-white/70 leading-7.5 text-[16px] font-light">Aenean eu justo sed elit congue ultricies eu eget leo, aenean semper orci eu pulvinar.</p>
        </div>

        <div className="flex flex-row gap-6">
          {/* Updates Log */}
          <div className="flex flex-col justify-between w-full md:w-1/2 gap-6 md:gap-0">
            {updates?.map((update) => (
              <div key={update._id} className="flex flex-col gap-1.5 p-6 border-l border-[#ffffff]/10 h-fit">
                <p className="font-jetbrains-mono text-white/70 leading-5.5 text-[14px] font-light uppercase">
                  {update.created_at ? format(new Date(update.created_at), "MMMM dd, yyyy") : ""}
                </p>
                <h1 className="font-manrope text-[18px] font-medium">{update.title}</h1>
                <p className="font-jetbrains-mono text-white/70 leading-5.5 text-[14px] font-light">
                  {update.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-1.5 p-6 bg-[#111214] rounded-[24px]">
              <h1 className="font-manrope text-[18px] font-medium">Stay up to date</h1>
              <p className="font-jetbrains-mono text-white/70 leading-5.5 text-[14px] font-light">Get notified when I publish something new, and unsubscribe at any time.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-[#111214] rounded-[24px]">
              <div className="flex flex-row gap-1.5 items-center justify-between">
                <h1 className="font-manrope text-[18px] font-medium">Work Experience</h1>
                <p className="font-jetbrains-mono uppercase text-white/70 text-[14px] font-light">{totalYears} Years</p>
              </div>
              {/* List Work Experience */}
              <div className="flex flex-col gap-2.5">
                {workExperiences?.map((exp) => {
                  if (!exp.start_date) return null;
                  const start = format(new Date(exp.start_date), "MMM yy");
                  const end = exp.end_date ? format(new Date(exp.end_date), "MMM yy") : "Present";
                  const dateDisplay = `${start} - ${end}`;
                  return (
                    <div key={exp._id} className="flex flex-row gap-4">
                      <div className="w-12.5 h-12.5 bg-[#151618] rounded-[10px] flex items-center justify-center overflow-hidden">
                        {exp.icon_url && <img src={exp.icon_url} alt={exp.company} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="text-[14px] font-medium leading-none">{exp.job_title}</div>
                          <div className="text-[10px] text-white/40 leading-none">•</div>
                          <div className="font-jetbrains-mono uppercase text-white/40 text-[12px] font-light leading-none">{dateDisplay}</div>
                        </div>
                        <p className="font-jetbrains-mono mt-1.5 text-white/70 text-[12px] font-light">{exp.company}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a href={profile.resume_url || "#"} className="font-manrope text-white/70 bg-[#151618] text-center text-[14px] font-medium w-full p-2.5 rounded-[10px] block hover:bg-[#1a1b1d] transition-colors">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
