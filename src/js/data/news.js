import * as redux from "redux";

/**
 * ACTIONTYPES
 */

/**
 * ACTION CREATORS
 */

/**
 * INITIAL DATA
 */

export const initialState = [
  {
    name: "democracy",
    date: "16 09 2021",
    title:
      "Poll Finds Most Americans Would Swap Democracy For $100 Best Buy Gift Card",
    intro:
      "According to the results of a new poll released Thursday by the Pew Research Center, the majority of Americans would swap democracy for a $100 Best Buy gift card.",
    href: "https://www.theonion.com/poll-finds-most-americans-would-swap-democracy-for-100-1847682668",
  },
  {
    name: "luchtbalonnen",
    date: "03 10 2021",
    title: "Honderden luchtballonnen stijgen op tijdens festival in VS",
    intro:
      "Honderden ballonnen stegen zaterdag op in Albuquerque, in alle denkbare kleuren, vormen en maten. In de Amerikaanse stad is zaterdag het internationale luchtballonfestival van start gegaan.",
    href: "https://www.standaard.be/cnt/dmf20211003_93538427",
  },
  {
    name: "alligator",
    date: "02 10 2021",
    title: "Man ziet alligator in tuin en grijpt op hoogst originele wijze in",
    intro:
      "Een man in Florida heeft op spectaculaire wijze een alligator kunnen vangen. Het reptiel verschool zich in de tuin van de buren, maar Abdul Gene Malik vond een oplossing om het dier te vangen. ",
    href: "https://www.standaard.be/cnt/dmf20211002_93599532",
  },
  {
    name: "klimaat",
    date: "24 10 2021",
    title:
      "Nog één week voor de klimaattop: hoe zit het nu eigenlijk met onze planeet?",
    intro:
      "Na de zomer van 2021 stellen we ons de vraag: valt het klimaat nog te redden, of komen alle beloftes van de wereldleiders rijkelijk te laat?",
    href: "https://www.standaard.be/cnt/dmf20211022_94506296",
  },
  {
    name: "zeespiegel",
    date: "15 10 2021",
    title: "Dreiging voor steden als zeespiegel jaren blijft stijgen",
    intro:
      "Als de opwarming van de aarde in het huidige tempo doorgaat, moeten zo’n vijftig steden ‘ongekende aanpassingsmaatregelen’ nemen om te voorkomen dat ze door stijgend waterpeil onder water komen te staan.",
    href: "https://www.standaard.be/cnt/dmf20211015_93918618",
  },
];

/**
 * REDUCER
 */
export const newsReducer = (state = initialState, { type }) => state;

/**
 * STORE
 */
export const newsStore = redux.createStore(newsReducer);
