import {Routes,Route,BrowserRouter, Navigate} from "react-router-dom";
import App from './containers/App';
import NotFound from "./containers/NotFound";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/questionnaries/1" />} />
        <Route path="/questionnaries/1" element={<App />}  />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  );
}
