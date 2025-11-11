function Home() {
    return (
        <div className="w-full">
            <div className="flex h-full w-full max-w-5xl flex-col justify-center mx-auto">
                {/* INTRODUCTION */}
                <div className="flex w-2xl flex-col gap-6">
                    <span className="text-5xl font-bold">Empowering PUP-MSC's Future Leaders</span>
                    <span className="text-xl">From workshops to competitions, we cultivate skills, resilience, and leadership excellence in every member.</span>
                    <button className="w-1/4 rounded-full bg-(--color-darkshade1) py-2 text-(--color-background) transition hover:opacity-80">
                        Apply Now!
                    </button>
                </div>

                {/* STATISTICS */}
                <div className="flex w-2xl flex-row gap-6 mt-20">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Members</span>
                        <span className="text-sm">67</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Participated Hackathons</span>
                        <span className="text-sm">67</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Events Joined</span>
                        <span className="text-sm">67</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
