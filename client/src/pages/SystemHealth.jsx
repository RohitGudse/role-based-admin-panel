import React, { useState } from "react";

function SystemHealth() {
  const [lastChecked, setLastChecked] = useState("Just now");

  const handleRefresh = () => {
    setLastChecked("Just now");
  };

  const healthData = [
    {
      id: 1,
      name: "Server Status",
      description: "Main application server",
      status: "Online",
      type: "success",
      icon: "🖥️",
      value: "99.99%",
    },
    {
      id: 2,
      name: "Database",
      description: "Primary database connection",
      status: "Connected",
      type: "success",
      icon: "🗄️",
      value: "12 ms",
    },
    {
      id: 3,
      name: "API Status",
      description: "REST API services",
      status: "Running",
      type: "success",
      icon: "⚡",
      value: "45 ms",
    },
    {
      id: 4,
      name: "Authentication",
      description: "User authentication service",
      status: "Operational",
      type: "success",
      icon: "🔐",
      value: "100%",
    },
  ];

  const systemMetrics = [
    {
      name: "CPU Usage",
      value: 32,
      unit: "%",
      status: "Normal",
    },
    {
      name: "Memory Usage",
      value: 58,
      unit: "%",
      status: "Normal",
    },
    {
      name: "Disk Usage",
      value: 67,
      unit: "%",
      status: "Healthy",
    },
    {
      name: "Network Usage",
      value: 41,
      unit: "%",
      status: "Normal",
    },
  ];

  return (
    <section className="w-full bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>

              <span className="text-sm font-medium text-green-600">
                All Systems Operational
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              System Health
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Monitor your application services and system performance.
            </p>
          </div>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 rounded-lg
                       bg-gray-900 px-5 py-3 text-sm font-semibold text-white
                       transition-all duration-200 hover:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <span className="text-base">↻</span>
            Refresh Status
          </button>
        </div>

        {/* =========================================================
            OVERALL STATUS
        ========================================================= */}
        <div className="mb-6 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl text-green-600">
                  ✓
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  System is Healthy
                </h2>

                <p className="text-sm text-gray-500">
                  All monitored services are operating normally.
                </p>
              </div>
            </div>

            <div className="md:text-right">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Last checked
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-700">
                {lastChecked}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            SERVICE STATUS CARDS
        ========================================================= */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {healthData.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-gray-100 bg-white p-5
                         shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Card Top */}
              <div className="mb-5 flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">
                  {service.icon}
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  {service.status}
                </span>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {service.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 flex items-end justify-between border-t border-gray-100 pt-4">

                <div>
                  <p className="text-xs text-gray-400">
                    Performance
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-800">
                    {service.value}
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            SYSTEM METRICS
        ========================================================= */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Performance Metrics */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                System Performance
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Current resource utilization.
              </p>
            </div>

            <div className="space-y-6">

              {systemMetrics.map((metric) => (
                <div key={metric.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <div>
                      <span className="text-sm font-semibold text-gray-700">
                        {metric.name}
                      </span>

                      <span className="ml-2 text-xs text-gray-400">
                        {metric.status}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-gray-900">
                      {metric.value}
                      {metric.unit}
                    </span>
                  </div>

                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">

                    <div
                      className="h-full rounded-full bg-gray-900 transition-all duration-500"
                      style={{
                        width: `${metric.value}%`,
                      }}
                    ></div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uptime Information */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                Uptime & Reliability
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Service reliability over the current period.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Uptime
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  99.99%
                </p>

                <p className="mt-1 text-xs text-green-600">
                  Excellent
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Response Time
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  42ms
                </p>

                <p className="mt-1 text-xs text-green-600">
                  Very Fast
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Requests
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  24.8K
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Last 24 hours
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium text-gray-500">
                  Errors
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  0.02%
                </p>

                <p className="mt-1 text-xs text-green-600">
                  Within limit
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            SERVICE MONITORING TABLE
        ========================================================= */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="border-b border-gray-100 p-5 sm:p-6">

            <h2 className="text-lg font-bold text-gray-900">
              Service Monitoring
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Detailed status of your application services.
            </p>

          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">

            <table className="w-full border-collapse text-left">

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Service
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Response
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Uptime
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Location
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                <tr className="transition-colors hover:bg-gray-50">

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                        🖥️
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Application Server
                        </p>

                        <p className="text-xs text-gray-400">
                          Production server
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Online
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    24 ms
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-gray-800">
                    99.99%
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    Mumbai
                  </td>

                </tr>

                <tr className="transition-colors hover:bg-gray-50">

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                        🗄️
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          PostgreSQL Database
                        </p>

                        <p className="text-xs text-gray-400">
                          Primary database
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Connected
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    12 ms
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-gray-800">
                    99.98%
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    Mumbai
                  </td>

                </tr>

                <tr className="transition-colors hover:bg-gray-50">

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                        ⚡
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          REST API
                        </p>

                        <p className="text-xs text-gray-400">
                          API gateway
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Running
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    45 ms
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-gray-800">
                    99.97%
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    Mumbai
                  </td>

                </tr>

              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">

            <div className="rounded-xl border border-gray-100 p-4">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    🖥️
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Application Server
                    </p>

                    <p className="text-xs text-gray-400">
                      Production server
                    </p>
                  </div>

                </div>

                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">

                <div>
                  <p className="text-xs text-gray-400">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-green-600">
                    Online
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Response
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    24 ms
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Uptime
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    99.99%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    Mumbai
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-xl border border-gray-100 p-4">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    🗄️
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      PostgreSQL Database
                    </p>

                    <p className="text-xs text-gray-400">
                      Primary database
                    </p>
                  </div>

                </div>

                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">

                <div>
                  <p className="text-xs text-gray-400">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-green-600">
                    Connected
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Response
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    12 ms
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Uptime
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    99.98%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    Mumbai
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-xl border border-gray-100 p-4">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    ⚡
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      REST API
                    </p>

                    <p className="text-xs text-gray-400">
                      API gateway
                    </p>
                  </div>

                </div>

                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">

                <div>
                  <p className="text-xs text-gray-400">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-green-600">
                    Running
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Response
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    45 ms
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Uptime
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    99.97%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    Mumbai
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SystemHealth;