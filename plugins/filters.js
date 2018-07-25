import Vue from "vue";
import moment from "moment";

moment.locale("en-gb");

Vue.filter("score", val => {
  if (val === null) {
    return 0;
  }
  return val;
});
