import {handleSubmit} from "./js/formHandler";
import {getTravelData} from "./js/getTravelData";
import {inputValidate} from "./js/inputValidate";

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("./img/icons", false, /\.png$/));

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import "./img/bg.jpg";
import "./img/logo_pixabay.png";
 

export{
  handleSubmit,
  getTravelData,
  inputValidate
}