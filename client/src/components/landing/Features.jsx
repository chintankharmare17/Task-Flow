import {
    FaTasks,
    FaUsers,
    FaChartPie
} from "react-icons/fa";

const features = [

    {
        icon: <FaTasks />,
        title: "Task Management",
        desc: "Organize your daily workflow easily."
    },

    {
        icon: <FaUsers />,
        title: "Team Collaboration",
        desc: "Invite members and work together."
    },

    {
        icon: <FaChartPie />,
        title: "Analytics",
        desc: "Track productivity using beautiful charts."
    }

];

export default function Features() {

    return (

        <section
            id="features"
            className="py-24 bg-gray-50"
        >

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center">

                    Why TaskFlow?

                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {features.map((item) => (

                        <div
                            key={item.title}
                            className="bg-white rounded-2xl p-10 shadow hover:shadow-xl transition"
                        >

                            <div className="text-blue-600 text-5xl">

                                {item.icon}

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                {item.title}

                            </h3>

                            <p className="text-gray-500 mt-4">

                                {item.desc}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}