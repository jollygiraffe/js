let obj = {
  request_date_ms: Date.now(),
  request_date: new Date().toISOString(),
  subscriber: {
    entitlements: {
      "Perplexity Pro": {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "7S8W4W365S.ai.perplexity.mac",
        purchase_date: "2025-06-02T07:52:55Z"
      }
    },
    subscriptions: {
      "7S8W4W365S.ai.perplexity.mac": {
        expires_date: "2099-12-31T23:59:59Z",
        purchase_date: "2025-06-02T07:52:55Z"
      }
    }
  }
};

$done({ body: JSON.stringify(obj) });
