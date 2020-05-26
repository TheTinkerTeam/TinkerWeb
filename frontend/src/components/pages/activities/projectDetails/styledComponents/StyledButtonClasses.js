import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const StyledButtonClasses = styled(Button)({
  fontFamily: "Roboto Mono !important",
  fontSize: "1.2rem !important",
  backgroundColor: "#F5514C!important",
  fontWeight: "500!important",
  "&:hover": {
    backgroundColor: "white!important",
    color: "#F5514C!important",
  },
});
