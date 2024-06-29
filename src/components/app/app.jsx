import AppHeader from "../app-header/app-header.jsx";
import styles from "./app.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { MainPage } from "../../pages/main/main.jsx";
import { LoginPage } from "../../pages/login/login.jsx";
import { RegisterPage } from "../../pages/register/register.jsx";
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password.jsx";
import { ResetPasswordPage } from "../../pages/reset-password/reset-password.jsx";
import { ProfilePage } from "../../pages/profile/profile.jsx";
import { OrderPage } from "../../pages/order/order.jsx";
import { UserProfilePage } from "../../pages/profile/user-profil-page/user-profil-page.jsx";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { NotFoundPage } from "../../pages/not-found/not-found.jsx";
import { IngredientPage } from "../../pages/ingredient/ingredient";
import Modal from "../modal/modal.jsx";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details.jsx";
//----
import { WelcomePage } from "../../pages/welcome/welcome-page.jsx";
import { TodoPage } from "../../pages/todo/todo-page.tsx";
import { Subconscious } from "../../pages/subconscious/subconscious.jsx";
import { Statistics } from "../../pages/statistics/statistics.jsx";
import { Finance } from "../../pages/finance/finance.jsx";
import { Otherworldland } from "../../pages/otherworldland/otherworldland.jsx";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let background = location.state && location.state.background;
  /*
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (state) => state.ingredients
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!ingredients.length) dispatch(getIngredients());
  }, [dispatch, ingredients.length]);
*/
  const closeModal = () => navigate(-1);

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <Routes location={background || location}>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/login"
            element={
              <ProtectedRouteElement element={<LoginPage />} notAuth={true} />
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRouteElement
                element={<RegisterPage />}
                notAuth={true}
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRouteElement
                element={<ForgotPasswordPage />}
                notAuth={true}
              />
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRouteElement
                element={<ResetPasswordPage />}
                notAuth={true}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={<ProfilePage notAuth={false} />}
              />
            }
          >
            <Route path="" element={<UserProfilePage />} />
            <Route path="main-todos" element={<NotFoundPage />} />
            <Route path="subconscious" element={<Subconscious />} />
            <Route path="otherworldland" element={<Otherworldland />} />
          </Route>
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/statistics" element={<Statistics />} />        
          <Route path="/finance" element={<Finance />} />
          <Route path="/*" element={<NotFoundPage />} />
          {/*<Route path="ingredients/:id" element={<IngredientPage />} />*/}
        </Routes>
      </div>

      {/*{background && (  
        <Routes>  
          <Route  
            path="/ingredients/:id"  
            element={  
              <Modal header="Детали ингредиента" onClose={closeModal}>  
                <IngredientDetails />  
              </Modal>  
            }  
          />  
        </Routes>  
      )}*/}
    </>
  );
}

export default App;
