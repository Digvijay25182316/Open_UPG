export default function TransactionCard({
    type = "Send", // "Send" or "Receive"
    amount = "₹1,200",
    counterparty = "John Doe",
    date = "23 May",
    avatarUrl = "", // optional image URL
}) {
    const isSend = type.toLowerCase() === "send";

    return (
        <div
            className={`flex items-center justify-between bg-white px-3 py-3 rounded-full shadow-sm max-w-md mx-auto
        hover:shadow-md transition-shadow duration-200`}
            role="group"
            aria-label={`Transaction with ${counterparty}, amount ${amount}, on ${date}`}
        >
            {/* Left: Avatar */}
            <div className="flex-shrink-0">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={counterparty}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-semibold text-lg">
                        {counterparty[0]}
                    </div>
                )}
            </div>

            {/* Middle: Name + Amount */}
            <div className="flex flex-col ml-4 flex-grow">
                <span className="font-semibold text-gray-900 text-lg truncate">
                    {counterparty}
                </span>
                <span
                    className={`mt-1 font-medium ${isSend ? "text-red-600" : "text-green-600"
                        }`}
                >
                    {isSend ? `- ${amount}` : `+ ${amount}`}
                </span>
            </div>

            {/* Right: Date */}
            <div className="flex-shrink-0 text-gray-500 font-medium text-sm ml-4 whitespace-nowrap">
                {date}
            </div>
        </div>
    );
}
