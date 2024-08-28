import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <>
      <main className="bg-[#eff1f1] box-border">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
