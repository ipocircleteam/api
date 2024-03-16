import { dummyIpos, Ipo } from "./dummyData";

export const dummyCalculateIpoStats = (ipoSeries: "main" | "sme") => {
  let totalIPOs = 0;
  let positiveListings = 0;
  let negativeListings = 0;
  let aboveGMP = 0;
  let belowGMP = 0;

  const ipos = dummyIpos.filter((ipo) => ipo.series === ipoSeries);

  for (const ipo of ipos) {
    totalIPOs++;

    if (ipo.ipoTracker?.listing_price && ipo.ipoDates?.listing_date) {
      const { listing_price, issue_price } = ipo.ipoTracker;
      const listingDate = new Date(ipo.ipoDates.listing_date);

      if (
        listing_price > issue_price &&
        ipo.ipoGmp?.instant &&
        ipo.ipoGmp.absolute_value?.length &&
        listingDate >= new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
      ) {
        positiveListings++;
      } else if (
        listing_price < issue_price &&
        ipo.ipoGmp?.instant &&
        ipo.ipoGmp.absolute_value?.length &&
        listingDate >= new Date(ipo.ipoGmp.instant[ipo.ipoGmp.instant.length - 1])
      ) {
        negativeListings++;
      }
    }

    if (ipo.ipoGmp?.absolute_value?.length) {
      const latestGMP = ipo.ipoGmp.absolute_value[ipo.ipoGmp.absolute_value.length - 1];
      if (ipo.ipoTracker?.listing_price && ipo.ipoGmp.instant && ipo.ipoTracker.listing_price > latestGMP) {
        aboveGMP++;
      } else if (ipo.ipoTracker?.listing_price && ipo.ipoGmp.instant && ipo.ipoTracker.listing_price < latestGMP) {
        belowGMP++;
      }
    }
  }

  return {
    totalIPOs,
    positiveListings,
    negativeListings,
    aboveGMP,
    belowGMP,
  };
};
