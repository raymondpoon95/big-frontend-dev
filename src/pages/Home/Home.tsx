import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import problemData from "../../Data/Data";

const Home = () => {
  const [selected, setSelected] = useState<number>(0);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setSelected(0);
      return;
    }

    const currentPage = problemData.findIndex(
      (problem) => problem.link === pathname.replace("/", "")
    );
    setSelected(currentPage);
  }, [pathname]);

  return (
    <>
      <div className="links-container">
        {problemData.map(({ link, description }, index) => {
          const isActive = selected === index ? "active" : "";

          return (
            <Link
              to={link}
              key={index}
              className={isActive}
              onClick={() => setSelected(index)}
            >
              {description}
            </Link>
          );
        })}
      </div>
      <div className="code-container">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
