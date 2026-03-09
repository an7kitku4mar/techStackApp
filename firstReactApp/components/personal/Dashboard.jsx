import { useState } from "react"

const Dashboard = () => {

  const [user] = useState({
    name: "Ankit",
    role: "Member"
  })

  const [stats] = useState([
    { title: "Services Used", value: 5 },
    { title: "Pending Requests", value: 2 },
    { title: "Notifications", value: 3 }
  ])

  return (
    <div className="min-h-screen bg-gray-100 w-full p-8">

      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-500">Role: {user.role}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {stat.value}
            </p>
          </div>
        ))}

      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li className="border-b pb-2">Service request submitted</li>
          <li className="border-b pb-2">Password updated</li>
          <li>New notification received</li>
        </ul>

      </div>

    </div>
  )
}

export default Dashboard