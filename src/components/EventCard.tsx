interface EventCardProps {
    title: string;
    date: string;
    status: "Finished" | "Upcoming";
    type: string;
    description: string;
}

export default function EventCard({ title, date, status, type, description }: EventCardProps) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg border border-(--color-foreground)">
            {/* Left side: placeholder + title/date/description */}
            <div className="flex items-start gap-4">
                {/* Temporary image placeholder */}
                <div className="w-20 h-20 bg-(--color-shade1) rounded-md"></div>

                {/* Title, Date, Description */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-600 text-sm">{date}</p>
                    <p className="text-gray-500 text-sm mt-1">{description}</p>
                </div>
            </div>

            {/* Right side: status + tag */}
            <div className="flex flex-col items-end gap-2">
                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold self-start ${
                        status === "Finished"
                            ? "bg-green-200 text-green-800"
                            : "bg-yellow-200 text-yellow-800"
                    }`}
                >
                    {status}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs border border-(--color-foreground) text-(--darkshade1)">
                    {type}
                </span>
            </div>
        </div>
    );
}
