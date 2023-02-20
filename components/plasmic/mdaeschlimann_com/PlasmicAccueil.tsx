// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p4LaNHsjacaypvn2fBdVp1
// Component: SRL_deXEpapHr
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Form from "../../Form"; // plasmic-import: T0fwWsOABjK/component

import { useScreenVariants as useScreenVariants_84TpjeQmcocO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8_4TpjeQmcocO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mdaeschlimann_com.module.css"; // plasmic-import: p4LaNHsjacaypvn2fBdVp1/projectcss
import sty from "./PlasmicAccueil.module.css"; // plasmic-import: SRL_deXEpapHr/css

import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: bS4_04WE0n/icon
import InstagramIcon from "./icons/PlasmicIcon__Instagram"; // plasmic-import: CLNhNHAXHb/icon
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: xNSgQQVONs/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: R0S2wicba9/icon

export type PlasmicAccueil__VariantMembers = {
  merci: "merci";
  mentionsLegales: "mentionsLegales";
};
export type PlasmicAccueil__VariantsArgs = {
  merci?: SingleBooleanChoiceArg<"merci">;
  mentionsLegales?: SingleBooleanChoiceArg<"mentionsLegales">;
};
type VariantPropType = keyof PlasmicAccueil__VariantsArgs;
export const PlasmicAccueil__VariantProps = new Array<VariantPropType>(
  "merci",
  "mentionsLegales"
);

export type PlasmicAccueil__ArgsType = {};
type ArgPropType = keyof PlasmicAccueil__ArgsType;
export const PlasmicAccueil__ArgProps = new Array<ArgPropType>();

export type PlasmicAccueil__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h2?: p.Flex<"h2">;
  form?: p.Flex<typeof Form>;
  h5?: p.Flex<"h5">;
  ul?: p.Flex<"ul">;
};

export interface DefaultAccueilProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicAccueil__RenderFunc(props: {
  variants: PlasmicAccueil__VariantsArgs;
  args: PlasmicAccueil__ArgsType;
  overrides: PlasmicAccueil__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "merci",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.merci : undefined
      },
      {
        path: "mentionsLegales",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.mentionsLegales
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_84TpjeQmcocO()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicAccueil.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAccueil.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAccueil.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicAccueil.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicAccueil.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicAccueil.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicAccueil.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicAccueil.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicAccueil.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root,
            {
              [sty.rootmentionsLegales]: hasVariant(
                $state,
                "mentionsLegales",
                "mentionsLegales"
              ),
              [sty.rootmerci]: hasVariant($state, "merci", "merci")
            }
          )}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__okzgc, {
              [sty.freeBoxmerci__okzgcNshOl]: hasVariant(
                $state,
                "merci",
                "merci"
              )
            })}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={
                "Marie-Do Aeschlimann, Vice-Présidente de la Région Île-de-France, Adjointe au Maire d'Asnières-sur-Seine, Mon action pour Asnières et l'Île-de-France" as const
              }
              className={classNames(sty.img, {
                [sty.imgmerci]: hasVariant($state, "merci", "merci")
              })}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("100%" as const)
                  : ("60%" as const)
              }
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"eager" as const}
              src={{
                src: "/plasmic/mdaeschlimann_com/images/marieDoAeschlimannAction.jpeg",
                fullWidth: 4167,
                fullHeight: 2500,
                aspectRatio: undefined
              }}
            />
          </div>

          <div
            className={classNames(projectcss.all, sty.freeBox__wzPnx, {
              [sty.freeBoxmentionsLegales__wzPnxnW20P]: hasVariant(
                $state,
                "mentionsLegales",
                "mentionsLegales"
              ),
              [sty.freeBoxmerci__wzPnxNshOl]: hasVariant(
                $state,
                "merci",
                "merci"
              )
            })}
          >
            {(
              hasVariant($state, "mentionsLegales", "mentionsLegales")
                ? false
                : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oPb7,
                  {
                    [sty.textmentionsLegales__oPb7NW20P]: hasVariant(
                      $state,
                      "mentionsLegales",
                      "mentionsLegales"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__nwUqy,
                        {
                          [sty.h1merci__nwUqynshOl]: hasVariant(
                            $state,
                            "merci",
                            "merci"
                          )
                        }
                      )}
                    >
                      {hasVariant($state, "merci", "merci")
                        ? "Merci !"
                        : "Inscrivez-vous à ma newsletter\npour rester informé(e) :"}
                    </h1>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ) : null}
            {(hasVariant($state, "merci", "merci") ? true : true) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lbqf0,
                  {
                    [sty.textmerci__lbqf0NshOl]: hasVariant(
                      $state,
                      "merci",
                      "merci"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2,
                        { [sty.h2merci]: hasVariant($state, "merci", "merci") }
                      )}
                    >
                      {hasVariant($state, "merci", "merci")
                        ? "Vous allez bientôt recevoir\nun email de confirmation."
                        : "Vous allez bientôt recevoir un email de confirmation"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ) : null}
            {(
              hasVariant($state, "mentionsLegales", "mentionsLegales")
                ? false
                : hasVariant($state, "merci", "merci")
                ? false
                : true
            ) ? (
              <Form
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                className={classNames("__wab_instance", sty.form, {
                  [sty.formmentionsLegales]: hasVariant(
                    $state,
                    "mentionsLegales",
                    "mentionsLegales"
                  ),
                  [sty.formmerci]: hasVariant($state, "merci", "merci")
                })}
              />
            ) : null}
            {(
              hasVariant($state, "mentionsLegales", "mentionsLegales")
                ? true
                : true
            ) ? (
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__vJ2Kc,
                  {
                    [sty.h1mentionsLegales__vJ2KcnW20P]: hasVariant(
                      $state,
                      "mentionsLegales",
                      "mentionsLegales"
                    )
                  }
                )}
              >
                {"Mentions légales"}
              </h1>
            ) : null}
            {(
              hasVariant($state, "mentionsLegales", "mentionsLegales")
                ? true
                : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yNrfB,
                  {
                    [sty.textmentionsLegales__yNrfBnW20P]: hasVariant(
                      $state,
                      "mentionsLegales",
                      "mentionsLegales"
                    )
                  }
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__d2Okt
                      )}
                    >
                      {"Directeur de la publication"}
                    </h6>
                  }
                  <React.Fragment>
                    {
                      "Marie-Do Aeschlimann\n© Marie-Do Aeschlimann 2023. Tous droits d’auteur réservés.\n"
                    }
                  </React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__jsnM7
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h5
                            data-plasmic-name={"h5"}
                            data-plasmic-override={overrides.h5}
                            className={classNames(
                              projectcss.all,
                              projectcss.h5,
                              projectcss.__wab_text,
                              sty.h5
                            )}
                          >
                            {"Hébergement"}
                          </h5>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </h6>
                  }
                  <React.Fragment>
                    {
                      "OVH\n2 rue Kellermann 59100 Roubaix – France\nwww.ovh.com\nTél : 0899 701 761\n(1,349 € ttc / appel puis 0,337 € ttc / min)\n"
                    }
                  </React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__g887X
                      )}
                    >
                      {"Données personnelles "}
                    </h6>
                  }
                  <React.Fragment>
                    {
                      "Les données personnelles collectées ont pour finalité :\n\n"
                    }
                  </React.Fragment>
                  {
                    <ul
                      data-plasmic-name={"ul"}
                      data-plasmic-override={overrides.ul}
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__jheyx
                        )}
                      >
                        {
                          "de permettre aux visiteurs d’envoyer une correspondance à Mme Marie-Do Aeschlimann via le formulaire de contact. Dans ce cas les données sont conservées dans la limite fixée par la législation et -au plus- celle des mandats électifs de Mme Marie-Do Aeschlimann."
                        }
                      </li>

                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li___0Zh58
                        )}
                      >
                        {
                          "de permettre aux visiteurs de s’abonner à la newsletter de Mme Marie-Do Aeschlimann. Dans ce cas, les données sont conservées dans la limite de la demande de retrait (opt out) que ferait la personne abonnée."
                        }
                      </li>
                    </ul>
                  }
                  <React.Fragment>
                    {
                      "\nCe site web n’utilise pas de cookies collectant des données personnelles.\n"
                    }
                  </React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__esUxD
                      )}
                    >
                      {"Respect des données personnelles"}
                    </h6>
                  }
                  <React.Fragment>
                    {
                      "En vertu de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés (dite \"loi CNIL\"), vos coordonnées ne seront en aucun cas utilisées à d'autres fins ou divulguées à un tiers à l’exception des co-contractants de Mme Marie-Do Aeschlimann qui n’agiront que sur instruction et contrôle de celle-ci et qui seront soumis à une stricte obligation de confidentialité.\n\nConformément à l'article 38 de la loi CNIL, vous pouvez vous opposer à ce que vos données à caractère personnel fassent l'objet d'un traitement. Pour ce faire, il vous suffit de vous désabonner à la newsletter de Mme Marie-Do Aeschlimann en cliquant sur \"se désinscrire\". Vous serez alors immédiatement désinscrit de la liste de diffusion et vos coordonnées seront définitivement effacées de notre traitement.\n\nConformément aux articles 39 et 40 de la loi CNIL, vous disposez à tout moment d'un droit d'information, d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour l'exercer, il vous suffit d'adresser un message à contact@mdaeschlimann.com.\n\nNous utilisons Sendinblue en tant que plateforme marketing. En soumettant le formulaire d'inscription à la newsletter de Marie-Do Aeschlmann, vous reconnaissez que les informations que vous allez fournir seront transmises à Sendinblue en sa qualité de processeur de données; et ce conformément à "
                    }
                  </React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__qm4V
                      )}
                      component={Link}
                      href={
                        "https://fr.sendinblue.com/legal/termsofuse/" as const
                      }
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      {"ses conditions générales d'utilisation"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{"."}</React.Fragment>
                </React.Fragment>
              </div>
            ) : null}
          </div>

          <div
            className={classNames(projectcss.all, sty.freeBox___2Zx4T, {
              [sty.freeBoxmerci___2Zx4TNshOl]: hasVariant(
                $state,
                "merci",
                "merci"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9IJVq
              )}
            >
              {"Suivez mon actualité : "}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__bpy69)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__vfRrI
                )}
                component={Link}
                href={"https://facebook.com/mariedo.aeschlimann" as const}
                platform={"nextjs"}
                target={"_blank" as const}
              >
                <FacebookIcon
                  className={classNames(projectcss.all, sty.svg__swCyq)}
                  role={"img"}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ya6Fi
                )}
                component={Link}
                href={"https://www.instagram.com/mariedoaeschlimann" as const}
                platform={"nextjs"}
                target={"_blank" as const}
              >
                <InstagramIcon
                  className={classNames(projectcss.all, sty.svg__miXy0)}
                  role={"img"}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___5QWeH
                )}
                component={Link}
                href={"https://twitter.com/MDoAeschlimann" as const}
                platform={"nextjs"}
                target={"_blank" as const}
              >
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg___8Uc2N)}
                  role={"img"}
                />
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__osPQ
                )}
                component={Link}
                href={
                  "https://www.linkedin.com/in/marie-do-aeschlimann-36a4b576" as const
                }
                platform={"nextjs"}
                target={"_blank" as const}
              >
                <LinkedinIcon
                  className={classNames(projectcss.all, sty.svg__ys5SU)}
                  role={"img"}
                />
              </p.PlasmicLink>
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h2", "form", "h5", "ul"],
  img: ["img"],
  h2: ["h2"],
  form: ["form"],
  h5: ["h5"],
  ul: ["ul"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h2: "h2";
  form: typeof Form;
  h5: "h5";
  ul: "ul";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccueil__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccueil__VariantsArgs;
    args?: PlasmicAccueil__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccueil__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAccueil__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAccueil__ArgProps,
          internalVariantPropNames: PlasmicAccueil__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAccueil__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccueil";
  } else {
    func.displayName = `PlasmicAccueil.${nodeName}`;
  }
  return func;
}

export const PlasmicAccueil = Object.assign(
  // Top-level PlasmicAccueil renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h2: makeNodeComponent("h2"),
    form: makeNodeComponent("form"),
    h5: makeNodeComponent("h5"),
    ul: makeNodeComponent("ul"),

    // Metadata about props expected for PlasmicAccueil
    internalVariantProps: PlasmicAccueil__VariantProps,
    internalArgProps: PlasmicAccueil__ArgProps,

    // Page metadata
    pageMetadata: {
      title:
        "Marie-Do Aeschlimann - Mon action pour Asnières et l'Île-de-France",
      description:
        "Vice-Présidente de la Région Île-de-France, Adjointe au Maire d'Asnières-sur-Seine",
      ogImageSrc:
        "https://site-assets.plasmic.app/4d1e01689ca77c10adf564790dbd0cd9.jpg",
      canonical: "https://mdaeschlimann.com"
    }
  }
);

export default PlasmicAccueil;
/* prettier-ignore-end */
