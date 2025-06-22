import { Outlet, useLocation } from "react-router-dom";


function StudentViewCommonLayout() {
  const location = useLocation();
  return (
    <div>
         common content
         helllo
      <Outlet />
    </div>
  );
}

export default StudentViewCommonLayout;
