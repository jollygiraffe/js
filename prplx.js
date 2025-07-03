let obj = {
  "request_date_ms": 1704664060864,
  "request_date": "2025-06-03T07:52:55Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2025-06-02T07:52:55Z",
    "original_application_version": "62",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "7S8W4W365S.ai.perplexity.mac": {
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "is_sandbox": false,
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2025-06-02T07:52:55Z"
      }
    },
    "entitlements": {
      "Perplexity Pro": {
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "is_sandbox": false,
        "expires_date": "2099-03-27T07:52:54Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2025-06-02T07:52:55Z",
        "product_identifier": "7S8W4W365S.ai.perplexity.mac"
      }
    },
    "original_purchase_date": "2025-06-02T07:52:55Z",
    "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "last_seen": "2025-06-02T07:52:55Z"
  },
  "offerings": [
    {
      "metadata": null,
      "identifier": "max_2023-09-22",
      "description": "default max tier offering",
      "packages": [
        {
          "platform_product_identifier": "mac_max_200_m",
          "identifier": "$rc_monthly"
        }
      ]
    }
  ],
  "current_offering_id": "pro_2023-09-22"
};

// Add/overwrite the requested fields at the top level
obj.subscription_source = "PRO";
obj.subscription_status = "PRO";

$done({ response: { body: JSON.stringify(obj), status: 200 } });
