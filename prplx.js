let obj = {
    {
  "request_date_ms": 1704664060864,
  "request_date":"2025-06-03T07:52:55Z",
  "subscriber": {
    "non_subscriptions": {

    },
    "first_seen": "2025-06-02T07:52:55Z",
    "original_application_version": “62”,
    "other_purchases": {

    },
    "management_url": null,
    "subscriptions": {
      "7S8W4W365S.ai.perplexity.mac": {
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "is_sandbox": false,
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z"
      }
    },
    "entitlements": {
      "Perplexity Pro": {
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "is_sandbox": false,
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2020-03-27T07:52:54Z",
        "product_identifier": "7S8W4W365S.ai.perplexity.mac"
      }
    },
    "original_purchase_date": "2025-06-02T07:52:55Z",
    "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "last_seen": "2024-01-07T21:42:02Z"
  }
}

$done({response: {body: JSON.stringify(obj), status: 200}});
