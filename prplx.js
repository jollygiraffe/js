// prplx.js

let obj = {
  "request_date_ms": Date.now(),
  "request_date": new Date().toISOString(),
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
        "expires_date": "2099-12-31T23:59:59Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2025-06-02T07:52:55Z"
      }
    },
    "entitlements": {
      "Perplexity Pro": {
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "is_sandbox": false,
        "expires_date": "2099-12-31T23:59:59Z",
        "original_purchase_date": "2025-06-02T07:52:55Z",
        "purchase_date": "2025-06-02T07:52:55Z",
        "product_identifier": "7S8W4W365S.ai.perplexity.mac"
      }
    },
    "original_purchase_date": "2025-06-02T07:52:55Z",
    "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
    "last_seen": new Date().toISOString()
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
  "current_offering_id": "pro_2023-09-22",
  "subscription_source": "PRO",
  "subscription_status": "PRO"
};

$done({ body: JSON.stringify(obj) });

