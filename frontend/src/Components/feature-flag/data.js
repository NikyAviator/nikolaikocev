// 1 Skriv först datan
const dummyApiResponse = {
  showStarRating: false,
  showTicTacToe: true,
  showRandomColor: true,
  showQrCodeGenerator: true,
  showTreeView: true,
};

function getFeatureFlags() {
  return new Promise((resolve, reject) => {
    // Simulate API call
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject('Error fetching feature flags.');
  });
}

export default getFeatureFlags;
