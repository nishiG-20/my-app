import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "n3iebjbcsurq",
  environment: "master", // defaults to 'master' if not set
  accessToken:  "gCB1m_dNhh6sZMG6h_ZY_Ww2evz8yAj8z16QZK5kaY8"
});