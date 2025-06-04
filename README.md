# NineSDK

Nine SDK for Javascript.

## Installation

Install with npm

```bash
  npm install nine-sdk
```

## Usage/Examples

```javascript
import nineSdk from "nine-sdk";

const client = new nineSdk({
  baseUrl: "https://nine-ad9w.onrender.com",
});

const value = await client.createRequest({
  requestInfo: {
    expectedAmount: 10,
    payeeAddress:
      "0xd016bf1caf6f972b42ebf2e5024d449db5dffdbea23b6a18ebc002c79abf7dab",
    payerAddress:
      "0xb45a90018febc4af2c8cd42b0779117f330e7a8ca9a9b66455409c6d64fbb598",
    timestamp: "1723636386510",
  },
  contentData: {
    reason: "Test",
    dueDate: "1823636388510",
  },
  signerAddress:
    "0xb45a90018febc4af2c8cd42b0779117f330e7a8ca9a9b66455409c6d64fbb598",
});

console.log(value);
```

## Authors

- [@mbeka02](https://www.github.com/PatrickOjiambo)
