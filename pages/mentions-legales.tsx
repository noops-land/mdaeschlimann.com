// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/mdaeschlimann_com/PlasmicGlobalVariant__Screen";
import { PlasmicAccueil } from "../components/plasmic/mdaeschlimann_com/PlasmicAccueil";
import { useRouter } from "next/router";

function MentionsLegales() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicAccueil mentionsLegales={true} />
    </ph.PageParamsProvider>
  );
}

export default MentionsLegales;
