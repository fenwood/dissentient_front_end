import {
  createHotContext
} from "/build/_shared/chunk-AXWZE5KF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/AboutCard/AboutCard.jsx
var import_react2 = __toESM(require_react(), 1);

// app/components/Faq/Faq.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Faq/Faq.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Faq/Faq.jsx"
  );
}
var Faq = ({
  title,
  content
}) => {
  _s();
  const [isActive, setIsActive] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "accordion", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "accordion-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "accordion-title", onClick: () => setIsActive(!isActive), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: title }, void 0, false, {
        fileName: "app/components/Faq/Faq.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: isActive ? "-" : "+" }, void 0, false, {
        fileName: "app/components/Faq/Faq.jsx",
        lineNumber: 34,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Faq/Faq.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this),
    isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "accordion-content", children: content }, void 0, false, {
      fileName: "app/components/Faq/Faq.jsx",
      lineNumber: 38,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Faq/Faq.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Faq/Faq.jsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Faq/Faq.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(Faq, "OFRYOMGmWDzfQ4dzLF00ag1mHo0=");
_c = Faq;
var Faq_default = Faq;
var _c;
$RefreshReg$(_c, "Faq");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/AboutCard/AboutCard.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AboutCard/AboutCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AboutCard/AboutCard.jsx"
  );
}
var AboutCard = () => {
  const faqData = [{
    title: "What is with your name?",
    content: `According to the dictionary, Dissentient means in opposition to a majority or official opinion. "dissentient voices were castigated as \u201Chopeless bureaucrats.\u201D While we love the term 'hopeless bureaucrats', it applies to our mindset. We don't chase the latest language or platform, we stick to the basics and focus on what matters instead of going with the most popular trendy option.`
  }, {
    title: "Why use us over Wix or goDaddy?",
    content: "The TLDR is, it depends. There are countless website creating and web hosting platforms, and with a little curiosity and patience just about anyone can create their own website today. If you are creating a simple landing page or save the date website, the do-it-yourself website creaters do just fine. And if you prefer to get your hands dirty and manage your own server using godaddy or another host, you can certainly save money doing it that way. Our value proposition is expertise in building websites that rank and achieve results, we build custom dependency-free websites, assist with content and image generation, and handle the domain and hosting management for you while you can focus on your business."
  }, {
    title: "What is your pricing?",
    content: "We start at $50 per month, which includes a 5-page static website, hosting and domain management and that includes unlimited (within reason) updates to the website. All our websites come with Google Analytics, a contact form and 24/7 support. Other plans are $150 and $300, see services page for more details."
  }, {
    title: "How does the subscription website service work?",
    content: "We charge you a monthly fee that includes full management of your website, we can either update the website for you or provide a content management system to allow you to update the website on your own. We can purchase the domain on your behalf or point your current servers to our content distrubution network and let us handle the rest."
  }, {
    title: "Can you create content and images?",
    content: "Yes, all of our websites include content and images, if you have your own that is even better!"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "about-us", id: "about", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "about-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Dissentient Digital" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "World class design for local businesses." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 43,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "About Dissentient Digital" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "We are a full service web development agency that focuses on helping small and medium businesses compete on a global scale. Our deep experience in analytics, digital media, crm and modern website creation." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "We are from the era of letter to the better and have been building websites since then, and have been along for the entire ride, from hard coding javascript and css within HTML files to where we are now with AI generated websites and content.  " }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Whether you have no idea what you want in a website or you have detailed branding guidelines in place we can work with you." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 48,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Who we are" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Dissentient Digital was founded by a small team of passionate developers and technologists with a mission to help small businesses succeed online. Our team have deep backgrounds from both client and agency site in building websites for large corporations, running multi-million dollar ad campaigns and building complex data solutions for businesses of all sizes. We decided to leverage our experience and expertise to be able to empower small businesses to gain an edge over their competition." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 54,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "What we do" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Our focus is on three main areas. First, we build websites. We offer a full-service subscription based service that includes website design, hosting, domain management, monthly updates and assistance with content and image generation. Our plans start at $50 a month with no commitment. We can also do one-off builds, mobile apps, and e-commerce websites." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Second, we specialize in end-to-end analytics. What does that mean? A few things:" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "Digital analytics" }, void 0, false, {
            fileName: "app/components/AboutCard/AboutCard.jsx",
            lineNumber: 63,
            columnNumber: 17
          }, this),
          ": setting up Google/Adobe Analytics or tag manager, website audit, setting up dashboards and anything to do with measuring website behavior or media campaigns."
        ] }, void 0, true, {
          fileName: "app/components/AboutCard/AboutCard.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "Data management" }, void 0, false, {
            fileName: "app/components/AboutCard/AboutCard.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          ": we can build out custom data marts, ETL pipelines, create api endpoints, setup Google Big Query and database optimization."
        ] }, void 0, true, {
          fileName: "app/components/AboutCard/AboutCard.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "Web scraping / data extraction" }, void 0, false, {
            fileName: "app/components/AboutCard/AboutCard.jsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          ": we can pull data from anywhere and provide it to you in any format, assist with data clean up and fuzzy matching."
        ] }, void 0, true, {
          fileName: "app/components/AboutCard/AboutCard.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Finally, we offer full service digital marketing. We are a data driven shop with years of experience optimizing paid media campaigns. We first understand your audience and find the right platform, creative and messaging to create campaigns to meet your budget. From paid search like Google and Bing to social platforms like Facebook and TikTok, we can get you up can running in no time." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Why we do it" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "After working on creating digital experiences and media campaigns for media agencies and large corporations, we all came to the realization that having an impact becomes more challenging the larger the organization is. Our lightbulb moment came while working with friends and colleagues that were getting started with their own businesses and being able to help them start and grow their digital footprints, we realized we have all this knowledge and skills we take for granted and people without a technical background often get frustrated or intimidated by the process." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "So we do it to have an impact, and we can help you move faster than your competition and reach your business goals." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 69,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Why choose us?" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "For many people, building a website is one of the first things you do, and once you get that out of the way the website tends to be forgotten. This is not the movies, just because you build it does not mean they will come. This is where we add value. Creating a website is the last step in our process." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "All our websites will focus on what matters most, to you and to the search engines. You can have the greatest website and offering but if nobody can find your website then what good is it? All of our sites will have a strong focus on content, accessiblity, performance and most importantly, your business goals." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Our process starts with a full analysis of your competition to look for opportunities for your website to stand out. We then conduct keyword research to find the best opportunities for you to rank quickly on the search results page and develop a content strategy that will ensure your website is SEO friendly and content build around where people are searching." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 74,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "But anyone can build a website" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 81,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "We live in an era where chat GPT can build you a website with a few commands, not to mention the countless free and paid website generators out there. If you need a save the date or quick landing page to announce something these are great for basic websites that do not require gaining organic search traffic. But these are not serious options for a business, as the website generators tend to create heavy, bloated websites that are not friendly to the search engines." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Building a basic website is easy, but once you require additional functionality such as a contact form or saving something in a database then you need a server and database, which is usually beyond the scope of the Wix's of the world. Or if you want to track visitors to your website, you need to setup analytics. " }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Our websites are build from the ground up with only the essentials and no bloatware. All our websites are highly performant, fully accessible, includes analytics, contact forms, hosting and content management system where applicable, so you can focus on your business." }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 80,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "section-title", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Frequently Asked Questions" }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      faqData.map(({
        title,
        content
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Faq_default, { title, content }, void 0, false, {
        fileName: "app/components/AboutCard/AboutCard.jsx",
        lineNumber: 91,
        columnNumber: 15
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/AboutCard/AboutCard.jsx",
      lineNumber: 86,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AboutCard/AboutCard.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AboutCard/AboutCard.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_c2 = AboutCard;
var AboutCard_default = AboutCard;
var _c2;
$RefreshReg$(_c2, "AboutCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/about.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.jsx"
  );
  import.meta.hot.lastModified = "1705085692000";
}
var about = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "about-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AboutCard_default, {}, void 0, false, {
    fileName: "app/routes/about.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/about.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var about_default = about;
export {
  about_default as default
};
//# sourceMappingURL=/build/routes/about-PIJN6VFE.js.map
