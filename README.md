# avis-ruptures-Ramq

module pour obtenir les avis de ruptures de la RAMQ


```javascript
import { getProduitsAvecInfolettreRupture } from "@chdagenais/avis-ruptures-ramq";

const URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqPUAvg-UDVo7HCZezpbc1BlK17FjA1cohM3duMrjBa_QjLZMgzS-5VGktMdbeQDle8PEui09N2g8P/pubhtml";

getProduitsAvecInfolettreRupture(URL).then((res) => {
  console.log(res);
});
```