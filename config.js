// ==============================================================================
// GIFT OF MADINA (هدية المدينة) - CLIENT CONFIGURATION & DATABASE CONNECTIVITY
// ==============================================================================

window.GOM_CONFIG = {
  // Supabase Live Production Credentials
  SUPABASE_URL: 'https://chzzbrlhbbgtrqwepizv.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_7GzDzFFUnj2L6E5oK86Swg_Q-_kXKtw',

  // Store Brand & Contact Details
  STORE_NAME: 'Gift of Madina',
  STORE_NAME_AR: 'هدية المدينة',
  STORE_WHATSAPP: '03278715873',
  STORE_WHATSAPP_LINK: 'https://wa.me/923278715873',
  STORE_EMAIL: 'Giftofmadina@gmail.com',
  STORE_PHONE: '03278715873',
  DEFAULT_COUNTRY_CODE: '+92',
  DEFAULT_COUNTRY_NAME: 'Pakistan',
  CURRENCY: 'SAR',
  CURRENCY_AR: 'ر.س',
  DEFAULT_FREE_SHIPPING: true,
  LOW_STOCK_THRESHOLD: 3,

  // Saudi Arabia Certified Payment Gateway Configuration
  // STC Bank eCommerce Gateway (https://stcbank.com.sa/ecommerce)
  PAYMENT_GATEWAY: {
    PROVIDER: 'STC Bank eCommerce Gateway',
    ENVIRONMENT: 'TEST', // 'TEST' or 'LIVE'
    MERCHANT_ID: 'STCB-GOM-92881',
    PUBLIC_CLIENT_KEY: 'pk_stcb_test_9a8712bc9e44f1',
    CURRENCY: 'SAR',
    SUPPORTED_METHODS: {
      STC_BANK: { enabled: true, titleEn: 'STC Bank eCommerce', titleAr: 'إس تي سي بنك (STC Bank)', subtitleEn: 'Unified Mada, Visa, Mastercard, AMEX & Apple Pay', subtitleAr: 'بوابة الدفع الشاملة: مدى، فيزا، ماستركارد، أمريكان إكسبريس وأبل باي' },
      MADA: { enabled: true, titleEn: 'Mada Debit Card', titleAr: 'بطاقة مدى البنكية', subtitleEn: 'Zero extra fees • Instant 3DS authentication', subtitleAr: 'بدون رسوم إضافية • توثيق فوري عبر كود البنك' },
      CREDIT_CARD: { enabled: true, titleEn: 'Visa / Mastercard / AMEX', titleAr: 'فيزا / ماستركارد / أمريكان إكسبريس', subtitleEn: 'Secure 256-bit encrypted card payment', subtitleAr: 'دفع مشفر وآمن عبر البوابة المعتمدة' },
      APPLE_PAY: { enabled: true, titleEn: 'Apple Pay', titleAr: 'أبل باي (Apple Pay)', subtitleEn: 'One-touch biometric payment via Safari', subtitleAr: 'دفع فوري بلمسة واحدة لأجهزة آبل' },
      COD: { enabled: true, fee: 15.00, titleEn: 'Cash on Delivery (COD)', titleAr: 'الدفع عند الاستلام', subtitleEn: 'Fixed 15 SAR delivery fee', subtitleAr: 'رسوم توصيل ثابتة ١٥ ر.س' }
    }
  }
};
