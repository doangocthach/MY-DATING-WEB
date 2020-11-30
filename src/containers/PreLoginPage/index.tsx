import React, { useCallback, useState } from "react";
import { Container } from "@material-ui/core";

import Header from "./components/Header";
import WrapperBackground from "./components/WrapperBackground";
interface Iprops {}
const PreLoginPage: React.FC<Iprops> = (props: Iprops) => {
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const handleCloseLoginForm = useCallback(() => {
    setOpenLoginForm(false);
  }, []);
  const handleOpenLoginForm = useCallback(() => {
    setOpenLoginForm(true);
  }, []);
  return (
    <React.Fragment>
      <WrapperBackground></WrapperBackground>
      <Container maxWidth="lg">
        <Header
          openLoginForm={openLoginForm}
          handleCloseLoginForm={handleCloseLoginForm}
          handleOpenLoginForm={handleOpenLoginForm}
        />
      </Container>
    </React.Fragment>
  );
};
export default PreLoginPage;
