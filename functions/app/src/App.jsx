import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cadastro from "./Pages/Cadastro";
import { Footer, MenuComponent } from "./FooterContent-Nav-Side";
import HomePage from "./Pages/HomePage";
import FretPage from "./Pages/FretPage";
import AboutPage from "./Pages/AboutPage";
import {
  Error,
  PrivateRoute,
  Profile,
  UserProfileDisplay,
  VerificationRouter,
  ResetPassword,
  ForgotPassword,
  PrivateCreateFrete,
  DeleteUser,
  AddHistoric,
  HistoricComponent,
  BasicPlan,
  AdvancedPlan,
  PremiumPlan,
  AdminPrivate,
  RemoveDeleteStatus,
  AccountStatusDelete,
  LogoutUserLoaidng,
} from "./component";
import { AdminPage, ClientePage, Support } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  EditFrete,
  CreateFrete,
  Freight,
  FreteHistoric,
  SingleFrete,
  AvailableList,
} from "./Frete";
import TestingThings from "./component/TestingThings";
import {
  PlanUpdateDescriptionAdv,
  PlanUpdateDescriptionBas,
  PlanUpdateDescriptionPre,
  ProductDisplay,
  UpdatePlanComponente,
  UpdateSession,
} from "./payments/stripe_componentes";
import Status from "./payments/Status";
import Plans from "./payments/stripe_componentes/Plans";
import Popup from "./popups/Popup";
import ClienteSubscrition from "./payments/stripe_componentes/ClienteSubscrition";
import AdminMessagesPage from "./Pages/AdminMessagesPage";
import { MessageForm, SingIn } from "./popups/popup-component";
import Future from "./component/Future";
import AboutPageIndexCont from "./component/AboutPageIndexCont";
import Proposals from "./component/Proposals";
import Rules from "./component/Rules";
import AboutCookies from "./component/AboutCookies";
import ScrollToTop from "./component/ScrollToTop";
import { useSelector } from "react-redux";
import { RoleExplainCam, RoleExplainEmp } from "./component/RoleExplain";

function App() {
  const { logoutLoading } = useSelector((store) => store.user);
  return (
    <>
      <Router>
        {logoutLoading && <LogoutUserLoaidng />}
        <ScrollToTop />
        <MenuComponent />
        <MessageForm />
        <SingIn />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="registrar" element={<Popup />} />
          </Route>
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="/user/verify-email" element={<VerificationRouter />} />
          <Route path="/user/reset-password" element={<ResetPassword />} />
          <Route path="/user/forgot-password" element={<ForgotPassword />} />
          <Route path="frete_page" element={<FretPage />}>
            <Route index element={<AvailableList />} />
            <Route path="frete" element={<SingleFrete />} />
          </Route>
          <Route
            path="create-frete"
            element={
              <PrivateCreateFrete>
                <CreateFrete />
              </PrivateCreateFrete>
            }
          />
          <Route path="about_page" element={<AboutPage />}>
            <Route index element={<AboutPageIndexCont />} />
            <Route path="futuro" element={<Future />} />
            <Route path="propostas" element={<Proposals />} />
            <Route path="regras" element={<Rules />} />
            <Route path="sobre-cookie" element={<AboutCookies />} />
            <Route
              path="cancelamento-status"
              element={<AccountStatusDelete />}
            />
            <Route path="empresario" element={<RoleExplainEmp />} />
            <Route path="entregador" element={<RoleExplainCam />} />
          </Route>
          <Route
            path="client_page"
            element={
              <PrivateRoute>
                <ClientePage />
              </PrivateRoute>
            }
          >
            <Route index element={<UserProfileDisplay />} />
            <Route path="profile" element={<Profile />} />
            {/*stripe*/}

            <Route path="inscrição" element={<UpdateSession />} />
            {/**/}
            <Route path="freight" element={<Freight />}>
              <Route path=":id" element={<EditFrete />} />
            </Route>
            <Route path="historico-fretes" element={<FreteHistoric />}>
              {/* all historics */}

              {/* popups */}
              <Route
                path="historicos-adicionados"
                element={<HistoricComponent />}
              />
              <Route path=":id" element={<AddHistoric />} />
              {/*  */}
            </Route>
            {/*  */}
            <Route path="pagamentos" element={<ClienteSubscrition />} />
            <Route path="remover-conta" element={<DeleteUser />} />
            <Route path="abortar-processo" element={<RemoveDeleteStatus />} />
          </Route>
          {/* plan & role description */}
          <Route path="/planos" element={<UpdatePlanComponente />}>
            <Route index element={<Plans />} />
            <Route path="basico" element={<PlanUpdateDescriptionBas />} />
            <Route path="avançado" element={<PlanUpdateDescriptionAdv />} />
            <Route path="premium" element={<PlanUpdateDescriptionPre />} />
            <Route path="basico/:priceId" element={<BasicPlan />} />
            <Route path="avançado/:priceId" element={<AdvancedPlan />} />
            <Route path="premium/:priceId" element={<PremiumPlan />} />
            <Route path="registrar" element={<Popup />} />
          </Route>
          <Route path="/suporte_cliente" element={<Support />}></Route>
          {/*strip*/}
          <Route path="/pagamentos/status" element={<Status />} />
          <Route path="/produto_assinatura" element={<ProductDisplay />}>
            <Route path="registrar" element={<Popup />} />
            <Route path="y" element={<Popup />} />
          </Route>
          {/**/}
          <Route path="/admin-checkout" element={<AdminPrivate />}>
            <Route
              path="admin-page"
              element={
                //vamos remover esse setup de key e deixar a valide session logo depois da senha
                // <AdminCheckKey>
                <AdminPage />
                // </AdminCheckKey>
              }
            />
            <Route path="messages-page" element={<AdminMessagesPage />} />
          </Route>
          <Route path="/testing" element={<TestingThings />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
