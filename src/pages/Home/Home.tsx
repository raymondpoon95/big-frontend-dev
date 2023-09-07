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
      {pathname === "/" && (
        <p className="home-description">
          This is a website created to hold solutions to the React problems that
          can be found on bigfrontend.dev. The purpose is to create solutions to
          these problems and have these answers on a single platform.
        </p>
      )}
      <div className="code-container">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
