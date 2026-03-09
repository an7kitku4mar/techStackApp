import { Link } from "react-router-dom";

const Claims = () => {

  const forms = [
    { name: "Travel Claim", route: "/forms/travel-claims" },
    { name: "Travel Advance", route: "/forms/travel-advances" },
    { name: "PF Variation", route: "/forms/pf-variation" },
    { name: "Income Tax Declaration", route: "/forms/income-tax" },
    { name: "Other Forms", route: "/forms/other-forms" },
    { name: "Other Applications", route: "/forms/other-applications" }
  ];

  return (

    <div className="p-6 bg-black w-full">

      <h2 className="text-2xl font-bold mb-6">
        Claims & Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        {forms.map((form, index) => (

          <Link
            key={index}
            to={form.route}
            className="border h-30 rounded-lg p-6 shadow hover:shadow-lg hover:bg-gray-900 transition"
          >

            <div className="text-lg font-semibold text-center">
              {form.name}
            </div>

          </Link>

        ))}

      </div>

    </div>

  );

};

export default Claims;