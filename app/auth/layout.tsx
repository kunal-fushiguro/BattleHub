import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="h-[84.5vh] flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
