export default async function getIpoTrackerData(
  ipoData: any,
  trackerData: any
) {
  var mainData = [];
  var smeData = [];

  for (let i = 0; i <= 21; i++) {
    // loop on ipo data

    for (let j = 0; j <= 21; j++) {
      // loop on tracker data
      if (ipoData[i].id === trackerData[j].id) {
        const data = {
          id: ipoData[i].id,
          company_name: trackerData[j].company_name,
          issue_price: trackerData[j].issue_price,
          listing_price: trackerData[j].listing_price,
          dayend_price: trackerData[j].dayend_price,
          current_price: trackerData[j].current_price,
          sector: trackerData[j].sector,
          year: trackerData[j].year,
        };

        if (ipoData[i].series === "eq") {
          mainData.push(data);
        } else if (ipoData[i].series === "sme") {
          smeData.push(data);
        }
      }
    }
  }

  return [mainData, smeData];
}
