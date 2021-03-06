import Newsitem from "../components/newsitem";

/**
 * ACTIONTYPES
 */

const TOGGLE_NEWS = "TOGGLE_NEWS";

/**
 * ACTION CREATORS
 */

export const toggleNews = (obj) => ({
  type: TOGGLE_NEWS,
  payload: obj,
});

/**
 * INITIAL DATA
 */

const initialState = [
  new Newsitem(
    "democracy",
    new Date(2021, 8, 16),
    "Poll Finds Most Americans Would Swap Democracy For $100 Best Buy Gift Card",
    "According to the results of a new poll released Thursday by the Pew Research Center, the majority of Americans would swap democracy for a $100 Best Buy gift card.",
    "https://www.theonion.com/poll-finds-most-americans-would-swap-democracy-for-100-1847682668"
  ),
  new Newsitem(
    "luchtbalonnen",
    new Date(2021, 9, 3),
    "Honderden luchtballonnen stijgen op tijdens festival in VS",
    "Honderden ballonnen stegen zaterdag op in Albuquerque, in alle denkbare kleuren, vormen en maten. In de Amerikaanse stad is zaterdag het internationale luchtballonfestival van start gegaan.",
    "https://www.standaard.be/cnt/dmf20211003_93538427"
  ),
  new Newsitem(
    "alligator",
    new Date(2021, 9, 2),
    "Man ziet alligator in tuin en grijpt op hoogst originele wijze in",
    "Een man in Florida heeft op spectaculaire wijze een alligator kunnen vangen. Het reptiel verschool zich in de tuin van de buren, maar Abdul Gene Malik vond een oplossing om het dier te vangen. ",
    "https://www.standaard.be/cnt/dmf20211002_93599532"
  ),
  new Newsitem(
    "klimaat",
    new Date(2021, 9, 24),
    "Nog één week voor de klimaattop: hoe zit het nu eigenlijk met onze planeet?",
    "Na de zomer van 2021 stellen we ons de vraag: valt het klimaat nog te redden, of komen alle beloftes van de wereldleiders rijkelijk te laat?",
    "https://www.standaard.be/cnt/dmf20211022_94506296"
  ),
  new Newsitem(
    "zeespiegel",
    new Date(2021, 9, 15),
    "Dreiging voor steden als zeespiegel jaren blijft stijgen",
    "Als de opwarming van de aarde in het huidige tempo doorgaat, moeten zo’n vijftig steden ‘ongekende aanpassingsmaatregelen’ nemen om te voorkomen dat ze door stijgend waterpeil onder water komen te staan.",
    "https://www.standaard.be/cnt/dmf20211015_93918618"
  ),
];

/**
 * REDUCER
 */

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NEWS:
      return [...state].map((el) => {
        if (el === payload) {
          el.liked = !el.liked;
        }
        return el;
      });
    default:
      return state;
  }
};

export default newsReducer;
