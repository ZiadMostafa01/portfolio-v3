import React from "react";

const SectionHeader = ({ title, subtitle, id }) => {
  return (
    <div
      id={id}
      data-aos="fade-up"
      className="relative mx-auto mt-16 max-w-full pt-10 lg:px-8"
    >
      {/* LightEffect - الطبقة المضيئة */}
      <div
        aria-hidden="true"
        className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(139,92,246,0.8)_50%,rgba(0,0,0,0)_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-10 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,transparent_50%,transparent_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"
      ></div>

      <div className="relative isolate">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
