import { Link } from 'react-router-dom';

function Portal() {
    // Temporary data
    const events = [
        {
            id: "hackathon-1",
            title: "Hackathon 1",
            date: "Nov 15, 2025",
            status: "Upcoming",
            type: "Competition",
            description: "Join us for a 48-hour coding challenge to test your skills."
        },
        {
            id: "leadership-workshop",
            title: "Workshop: Leadership",
            date: "Nov 8, 2025",
            status: "Finished",
            type: "Workshop",
            description: "A hands-on workshop to develop effective leadership skills."
        },
        // ... more events
    ];

    return (
        <div className="w-full">
            <div className="flex h-full w-full max-w-5xl flex-col mx-auto">
                {/* Category Buttons */}
                <div className="flex flex-row gap-5 border-b border-(--color-foreground) py-2 text-lg">
                    <button className="font-bold">All</button>
                    <button>Events</button>
                    <button>Competitions</button>
                    <button>Workshops</button>
                </div>

                {/* Search Bar with Button */}
                <div className="mt-4 w-full flex">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 rounded-l-md border border-(--color-foreground) bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-(--color-darkshade1)"
                    />
                    <button
                        className="rounded-r-md bg-(--color-darkshade1) px-4 py-2 text-white hover:opacity-80 transition"
                    >
                        Search
                    </button>
                </div>

                {/* Cards */}
                <div className="mt-6 flex flex-col gap-4">
                    {events.map((event) => (
                        <Link
                            key={event.id}
                            to={`/event/${event.id}`}
                            className="flex items-center justify-between p-4 rounded-lg border border-(--color-foreground) hover:shadow-md transition"
                        >
                            {/* Left side: placeholder + title/date/description */}
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-(--color-shade1) rounded-md"></div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold">{event.title}</h3>
                                    <p className="text-gray-600 text-sm">{event.date}</p>
                                    <p className="text-gray-500 text-sm mt-1">{event.description}</p>
                                </div>
                            </div>

                            {/* Right side: status + tag */}
                            <div className="flex flex-col items-end gap-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold self-start ${event.status === "Finished"
                                            ? "bg-green-200 text-green-800"
                                            : "bg-yellow-200 text-yellow-800"
                                        }`}
                                >
                                    {event.status}
                                </span>
                                <span className="px-2 py-0.5 rounded-full text-xs border border-(--color-foreground) text-(--darkshade1)">
                                    {event.type}
                                </span>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Portal;
