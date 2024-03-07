import "../styles/productGlobal.css"; //운영중인 버전 전역 css 모음
import "../styles/reset.css";
import "../styles/kbank_renew.css";
import "../styles/m_web.css";
import "../styles/swiper.min.css";
import "../styles/font.css";
import "../styles/Card.css";
import "../styles/Modal.css";
import "../styles/styleguide.css";
import "../styles/Account.css";
import "../styles/Content.css";
import "../styles/Ctrl.css";
import "../styles/Info.css";
import "../styles/Solid.css";
import "../styles/Txt.css";
import "../styles/Ico.css";
import "../styles/Header.css";
import "../styles/TagBackgroundDark.css";
import { Layout } from "@/templates/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
