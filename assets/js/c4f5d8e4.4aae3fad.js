"use strict";
(self.webpackChunkpooltogether = self.webpackChunkpooltogether || []).push([
  [4195],
  {
    7188: (e, t, l) => {
      l.r(t),
        l.d(t, {
          Guides: () => g,
          actions: () => p,
          default: () => C,
          github: () => h,
        });
      var r = l(7294),
        a = l(863),
        o = l(8746);
      var n,
        i = l(5684);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var r in l)
                    Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      const s = (e) => {
        let { title: t, titleId: l, ...a } = e;
        return r.createElement(
          "svg",
          c(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              width: 24,
              height: 24,
              "aria-labelledby": l,
            },
            a
          ),
          t ? r.createElement("title", { id: l }, t) : null,
          n ||
            (n = r.createElement("path", {
              fill: "#8c9eff",
              d: "M40 12s-4.585-3.588-10-4l-.488.976C34.408 10.174 36.654 11.891 39 14c-4.045-2.065-8.039-4-15-4s-10.955 1.935-15 4c2.346-2.109 5.018-4.015 9.488-5.024L18 8c-5.681.537-10 4-10 4s-5.121 7.425-6 22c5.162 5.953 13 6 13 6l1.639-2.185C13.857 36.848 10.715 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.857 4.848-8.639 5.815L33 40s7.838-.047 13-6c-.879-14.575-6-22-6-22zM17.5 30c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4zm13 0c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4z",
            }))
        );
      };
      var m = l(7002),
        d = l(3801);
      const p = [
          {
            title: "Add Prizes to Your Protocol",
            href: "#",
            icon: d.T$Z,
            to: "./protocol/guides/integrate/",
            text: "Learn how to plug any protocol into a prize pool.",
          },
          {
            title: "Build a Prize Experience",
            href: "#",
            icon: d.tWY,
            to: "./protocol/guides/customize/",
            text: "PoolTogether is 100% Permissionless. Learn how to create a unique prize experience.",
          },
          {
            title: "Run a Bot",
            href: "#",
            icon: d.YGl,
            to: "./protocol/guides/bots",
            text: "Earn rewards by claiming prizes, liquidating yield, and awarding draws with RNG.",
          },
        ],
        h = [
          {
            title: "PoolTogether Code",
            href: "https://github.com/orgs/GenerationSoftware/repositories?q=pooltogether+solidity&type=all&language=&sort=stargazers",
            icon: d.dNJ,
          },
          {
            title: "Cabana Apps Code",
            href: "https://github.com/GenerationSoftware/pooltogether-client-monorepo",
            icon: d.dNJ,
          },
        ],
        g = [
          {
            title: "Protocol Design",
            text: "Dive into the deep end and learn how the protocol works.",
            to: "./protocol/design/",
          },
          {
            title: "Deployments",
            text: "Live chains and contract addresses",
            to: "./protocol/deployments/",
          },
          {
            title: "Guides",
            text: "Learn about what you can do with PoolTogether",
            to: "./protocol/guides/",
          },
          {
            title: "Smart Contracts Reference",
            text: "Learn about the architecture of the PoolTogether protocol smart contracts.",
            to: "./protocol/reference/",
          },
          {
            title: "Subgraphs Overview",
            text: "See what Graph Protocol Subgraphs are available",
            to: "./protocol/subgraphs/",
          },
        ],
        u = i.Z.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,
        x = i.Z.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,
        f = (0, i.Z)(x)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,
        E = i.Z.div`
  display: flex;
  max-height: 250px;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  transition: all 0.2s ease;
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-300);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    color: #65f;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`,
        w = (0, i.Z)(E)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`,
        y = (0, i.Z)(E)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #00000010;
  backdrop-filter: blur(10px);
  min-height: 220px;

  h3 {
    color: var(--ifm-font-color-base);
  }
`,
        v =
          ((0, i.Z)(y)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`,
          i.Z.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`),
        b = i.Z.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`,
        Z = i.Z.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }

  h3 {
    color: var(--ifm-font-color-base);
  }
`,
        z = i.Z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`,
        M = (0, i.Z)(m.Z)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`,
        B =
          ((0, i.Z)(M)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`,
          i.Z.div`
  svg {
    fill: var(--ifm-color-primary);
  }
`);
      i.Z.div`
  @media (max-width: 960px) {
    display: none;
  }
`;
      function C() {
        return r.createElement(
          a.Z,
          {
            title: "PoolTogether Docs",
            description:
              "Technical Documentation For The PoolTogether Protocol",
          },
          r.createElement(
            u,
            null,
            r.createElement(
              z,
              null,
              r.createElement(
                "div",
                {
                  style: {
                    padding: "3rem 0 1rem 0  ",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                },
                r.createElement(
                  "h1",
                  { style: { fontWeight: "600" } },
                  " ",
                  "Build on PoolTogether"
                )
              ),
              r.createElement(
                x,
                null,
                p.map((e) =>
                  r.createElement(
                    o.Z,
                    { style: { textDecoration: "none" }, to: e.to },
                    r.createElement(
                      y,
                      { key: e.title },
                      r.createElement(
                        b,
                        null,
                        r.createElement(
                          v,
                          null,
                          r.createElement(e.icon, {
                            style: { width: "24px" },
                            color: e.color,
                          })
                        ),
                        r.createElement(
                          "svg",
                          {
                            style: { width: "24px", opacity: 0.5 },
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                          },
                          r.createElement("path", {
                            d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z",
                          })
                        )
                      ),
                      r.createElement(
                        "h3",
                        { style: { marginBottom: ".75rem", color: e.color } },
                        e.title
                      ),
                      r.createElement(
                        "p",
                        { style: { marginBottom: "0.5rem" } },
                        e.text
                      )
                    )
                  )
                )
              )
            ),
            r.createElement(
              f,
              null,
              r.createElement(
                "div",
                null,
                r.createElement("h2", null, "Documentation"),
                r.createElement(
                  "div",
                  null,
                  g.map((e) =>
                    r.createElement(
                      o.Z,
                      {
                        style: { textDecoration: "none" },
                        key: e.title,
                        to: e.to,
                      },
                      r.createElement(
                        E,
                        { key: e.title, style: { marginBottom: "1rem" } },
                        r.createElement(
                          Z,
                          null,
                          r.createElement(
                            "div",
                            {
                              style: { display: "flex", alignItems: "center" },
                            },
                            r.createElement(
                              "h3",
                              { style: { marginBottom: "0.25rem" } },
                              e.title
                            )
                          ),
                          r.createElement(
                            "svg",
                            {
                              style: { width: "24px", opacity: 0.5 },
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "currentColor",
                              viewBox: "0 0 24 24",
                            },
                            r.createElement("path", {
                              d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z",
                            })
                          )
                        ),
                        r.createElement(
                          "p",
                          { style: { marginBottom: "0rem" } },
                          e.text
                        )
                      )
                    )
                  )
                )
              ),
              r.createElement(
                "div",
                null,
                r.createElement("h2", null, "Github"),
                r.createElement(
                  "p",
                  null,
                  "PoolTogether is comprised of an ecosystem of open source smart contracts and user interfaces."
                ),
                h.map((e) =>
                  r.createElement(
                    o.Z,
                    { style: { textDecoration: "none" }, href: e.href },
                    r.createElement(
                      E,
                      { key: e.title, style: { marginBottom: "1rem" } },
                      r.createElement(
                        Z,
                        null,
                        r.createElement(
                          B,
                          { style: { display: "flex", alignItems: "center" } },
                          r.createElement(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 120.78 117.79",
                              style: { width: "24px" },
                            },
                            r.createElement("defs", null),
                            r.createElement("title", null, "testlogo"),
                            r.createElement(
                              "g",
                              { id: "Layer_2", "data-name": "Layer 2" },
                              r.createElement(
                                "g",
                                { id: "Layer_1-2", "data-name": "Layer 1" },
                                r.createElement("path", {
                                  class: "cls-1",
                                  d: "M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z",
                                }),
                                r.createElement("path", {
                                  class: "cls-2",
                                  d: "M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z",
                                })
                              )
                            )
                          ),
                          r.createElement(
                            "h3",
                            {
                              style: {
                                marginBottom: "0rem",
                                marginLeft: "16px",
                              },
                            },
                            e.title
                          )
                        ),
                        r.createElement(
                          "svg",
                          {
                            style: {
                              width: "24px",
                              height: "24px",
                              opacity: 0.5,
                            },
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                          },
                          r.createElement("path", {
                            d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.createElement("hr", null),
            r.createElement(
              x,
              null,
              r.createElement(
                o.Z,
                {
                  style: { textDecoration: "none" },
                  href: "https://pooltogether.com/discord",
                },
                r.createElement(
                  w,
                  null,
                  r.createElement(s, {
                    style: { width: "48px", height: "48px" },
                  }),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("h3", null, "Discord"),
                    r.createElement(
                      "p",
                      null,
                      "Hop in to the #dev-chat to get realtime help."
                    )
                  )
                )
              ),
              r.createElement(
                o.Z,
                {
                  style: { textDecoration: "none" },
                  href: "https://gov.pooltogether.com/",
                },
                r.createElement(
                  w,
                  null,
                  r.createElement(d.kBi, {
                    style: { width: "48px", height: "48px" },
                  }),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("h3", null, "Forum"),
                    r.createElement("p", null, "Dicsuss governance and more.")
                  )
                )
              ),
              r.createElement(
                o.Z,
                {
                  style: { textDecoration: "none" },
                  href: "https://github.com/orgs/GenerationSoftware/repositories?q=pooltogether&type=all&language=&sort=stargazers",
                },
                r.createElement(
                  w,
                  null,
                  r.createElement(
                    B,
                    null,
                    r.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 120.78 117.79",
                        style: { width: "48px" },
                      },
                      r.createElement("defs", null),
                      r.createElement(
                        "g",
                        { id: "Layer_2", "data-name": "Layer 2" },
                        r.createElement(
                          "g",
                          { id: "Layer_1-2", "data-name": "Layer 1" },
                          r.createElement("path", {
                            class: "cls-1",
                            d: "M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z",
                          }),
                          r.createElement("path", {
                            class: "cls-2",
                            d: "M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z",
                          })
                        )
                      )
                    ),
                    " "
                  ),
                  r.createElement(
                    "div",
                    null,
                    r.createElement("h3", null, "Github"),
                    r.createElement(
                      "p",
                      null,
                      "View PoolTogether repositories."
                    )
                  )
                )
              )
            )
          )
        );
      }
    },
  },
]);
