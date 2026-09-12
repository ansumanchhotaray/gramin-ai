/**
 * GraminAI • ग्रामीण साथी — Comprehensive 10-Language Indian Localization Engine
 * Supported Languages:
 * English (en), Hindi (hi), Bengali (bn), Marathi (mr), Telugu (te),
 * Tamil (ta), Gujarati (gu), Urdu (ur), Kannada (kn), Odia (or)
 */

window.GRAMIN_I18N = (function() {

  const SUPPORTED_LANGUAGES = [
  {
    "code": "en",
    "label": "English",
    "native": "English",
    "speechLocale": "en-IN"
  },
  {
    "code": "hi",
    "label": "Hindi",
    "native": "हिंदी",
    "speechLocale": "hi-IN"
  },
  {
    "code": "bn",
    "label": "Bengali",
    "native": "বাংলা",
    "speechLocale": "bn-IN"
  },
  {
    "code": "mr",
    "label": "Marathi",
    "native": "मराठी",
    "speechLocale": "mr-IN"
  },
  {
    "code": "te",
    "label": "Telugu",
    "native": "తెలుగు",
    "speechLocale": "te-IN"
  },
  {
    "code": "ta",
    "label": "Tamil",
    "native": "தமிழ்",
    "speechLocale": "ta-IN"
  },
  {
    "code": "gu",
    "label": "Gujarati",
    "native": "ગુજરાતી",
    "speechLocale": "gu-IN"
  },
  {
    "code": "ur",
    "label": "Urdu",
    "native": "اردو",
    "speechLocale": "ur-IN"
  },
  {
    "code": "kn",
    "label": "Kannada",
    "native": "ಕನ್ನಡ",
    "speechLocale": "kn-IN"
  },
  {
    "code": "or",
    "label": "Odia",
    "native": "ଓଡ଼ିଆ",
    "speechLocale": "or-IN"
  }
];

  const SPEECH_LOCALE_MAP = {
  "en": "en-IN",
  "hi": "hi-IN",
  "bn": "bn-IN",
  "mr": "mr-IN",
  "te": "te-IN",
  "ta": "ta-IN",
  "gu": "gu-IN",
  "ur": "ur-IN",
  "kn": "kn-IN",
  "or": "or-IN"
};

  const UI = {
  "en": {
    "headerSubtitle": "Digital Rural Assist Node • Designed for visual clarity & voice input",
    "homeBtn": "Launchpad Home",
    "heroBadge": "AI Voice & Multi-Intent Rural Engine",
    "heroTitle": "How can GraminAI assist you today?",
    "heroSubtitle": "Tap the microphone or type naturally in English or any Indian language to auto-route to any service.",
    "searchListening": "🎙️ Listening... speak now in your regional language...",
    "searchIdle": "e.g. \"hydroponics\", \"no water for 2 days\", \"bijli cut\", \"snake bite\", \"tractor share\"",
    "trySpeaking": "Try speaking:",
    "samplePhrases": [
      "Hydroponics farming setup",
      "No water supply for 2 days in Ward 14",
      "Agricultural power cut problem",
      "Emergency snake bite first aid"
    ],
    "portalsTitle": "Direct Service Portals",
    "portalsSub": "Click any card to launch module",
    "cardClimateTag": "Agro-Hydrology",
    "cardClimateTitle": "Climate & Irrigation",
    "cardClimateSub": "Spatial Agro-Tracker",
    "cardClimateDesc": "Fluid area curve, soil moisture optimization (44% target), spatial tracking, and canal dusk schedule alerts.",
    "cardClimateAction": "Open Spatial Climate Hub",
    "cardGrievanceTag": "Amaravati AMC Portal",
    "cardGrievanceTitle": "Grievance Letter",
    "cardGrievanceSub": "Formal AMC Petitions",
    "cardGrievanceDesc": "Generate formal legal letters addressed to the Municipal Commissioner, Amaravati AP with dynamic Ward jurisdiction & 1-click copy.",
    "cardGrievanceAction": "Draft Formal Letter",
    "cardFirstAidTag": "Emergency Protocols",
    "cardFirstAidTitle": "First-Aid Guide",
    "cardFirstAidSub": "Life-Saving Protocols",
    "cardFirstAidDesc": "GPS hospital finder, WhatsApp SOS broadcast, step-by-step numbered actions, and 'WHAT NOT TO DO' warnings.",
    "cardFirstAidAction": "Access Emergency Care",
    "cardAdlaBadliTag": "Mandi Barter Network",
    "cardAdlaBadliTitle": "Adla-Badli Share",
    "cardAdlaBadliSub": "Asset Exchange Board",
    "cardAdlaBadliDesc": "Community equipment exchange, tractor/pump sharing, mandi barter parity calculation, and peer-to-peer village board.",
    "cardAdlaBadliAction": "View Village Board",
    "futureFarmingTag1": "New Precision Tech",
    "futureFarmingTag2": "NABARD & MIDH Approved",
    "futureFarmingTitle": "Advanced Future Farming",
    "futureFarmingSub": "Precision Soil-less Cultivation",
    "futureFarmingDesc": "Interactive blueprints for Stacked Vertical Towers, NFT Hydroponics, and Aeroponics with direct verified marketplace links (UrbanKisaan, Kryzen, Barton Breeze) and 50%–75% subsidies.",
    "futureFarmingAction": "Explore Setup Blueprints",
    "tabClimate": "Climate & Spatial",
    "tabGrievance": "Grievance Letter",
    "tabFirstAid": "First-Aid & SOS",
    "tabAdlaBadli": "Adla-Badli Share",
    "tabFutureFarming": "Future Farming",
    "satelliteTracker": "Real-Time Spatial Field Tracker",
    "nodeBadge": "Amaravati Node #14",
    "mapsCenter": "Google Maps Center: Amaravati, Andhra Pradesh, India",
    "moistureMatrix": "Optimal Field Moisture Matrix",
    "optimalBadge": "Optimal: 44%",
    "fieldDryness": "Field Dryness:",
    "rainForecast": "Rain Forecast:",
    "advisoryTitle": "Dynamic Irrigation Advisory",
    "activeRainfallBadge": "Active Rainfall / Overcast Detected",
    "activeRainfallText": "Status: Active Rainfall detected in Amaravati area. System Override: Irrigation suspended for today—No extra water required.",
    "highEvapoBadge": "High Field Evapotranspiration",
    "highEvapoText": "Status: Soil moisture critically low (under 30%). System Recommendation: Schedule 45-minute canal / tubewell irrigation pulse before 17:00 IST dusk.",
    "optimalMoistureBadge": "Optimal Moisture Equilibrium",
    "optimalMoistureText": "Status: Soil moisture is optimal at 44–48%. Maintain routine micro-dosing schedule.",
    "waterStatusSufficient": "Sufficient",
    "waterStatusSchedule": "Schedule Irrigation",
    "waterStatusUrgent": "Urgent Irrigation Needed",
    "soilTargetTitle": "Krishna Basin Soil & Nutrient Target",
    "soilVariant": "Black/Alluvial Variant",
    "nitrogen": "Nitrogen (N)",
    "phosphorus": "Phosphorus (P)",
    "potassium": "Potassium (K)",
    "soilMicroSpike": "Micro-Spike Recommendation: Apply 25 kg/ha Zinc Sulphate + 50 kg/ha Gypsum to prevent alkaline salinity lock in Amaravati black clay soils.",
    "pestCalendarTitle": "Tactical Pest Prevention Calendar",
    "pestCycleBadge": "September Cycle",
    "pestStemBorer": "Stem Borer Alert: Install 8 pheromone traps/acre in Paddy nursery blocks.",
    "pestBph": "BPH Warning: Form alleyways of 30cm every 2 meters for aeration in dense foliage.",
    "callOfficerBtn": "Contact Regional Agri-Extension Officer",
    "targetAuthority": "Target Municipal Authority",
    "amcTitle": "Municipal Corporation of Amaravati (AMC)",
    "amcSub": "Government of Andhra Pradesh • Official Grievance Portal",
    "stepPickIssue": "STEP 1: PICK THE ISSUE PROFILE",
    "issueWater": "Water Supply",
    "issueElectricity": "Electricity Cut",
    "issueRoad": "Damaged Road",
    "issueCanal": "Canal Silt",
    "stepPickWard": "Select Municipal Ward / Jurisdiction:",
    "stepPickSignatory": "Your Name / Signatory:",
    "signatoryPlaceholder": "e.g. Rampal Yadav",
    "preparedForm": "Official Prepared Form",
    "copyBtn": "📋 Copy Application Text",
    "copiedBtn": "✅ Copied Application Text!",
    "printBtn": "🖨️ Print",
    "whatsappBtn": "💬 WhatsApp",
    "emergencyNodeBadge": "Emergency Geo-Medical Node • Amaravati",
    "emergencyBarTitle": "1-Tap Medical Emergency SOS & Hospital Finder",
    "locateHospitalBtn": "Locate Nearest Hospital (AIIMS Amaravati)",
    "sosBroadcastBtn": "SOS Family Broadcast",
    "nearestFacilityBadge": "Nearest Facility (2.4 km away • 6 min transit)",
    "aiimsTitle": "AIIMS Mangalagiri & Amaravati Community Health Centre (CHC Thullur)",
    "aiimsDesc": "24x7 Emergency Trauma Care, Anti-Snake Venom (ASV), ICU Beds, and Blood Bank.",
    "callDispatchBtn": "Call AIIMS Dispatch (108 / 102)",
    "symptomPlaceholder": "Type or say any disease, injury, illness, or symptom...",
    "immediateActionsTitle": "Immediate Actions",
    "whatNotToDoTitle": "WHAT NOT TO DO",
    "emergencyFooter": "Toll-Free Emergency Response • GPS Dispatch to Nearest Gram Panchayat & PHC Clinic",
    "surplusItemLabel": "YOUR SURPLUS ITEM:",
    "neededItemLabel": "ITEM YOU WANT INSTEAD:",
    "calcTitle": "PROPOSED SHARE CALCULATION",
    "equalExchange": "Perfect Equal Exchange",
    "fairValueParity": "Fair Value Parity",
    "barterParityNote": "Based on local traditional mandi barter equivalence scores. Match items above to find stable regional parity.",
    "broadcastBtn": "Broadcast to Local Mandi",
    "broadcastSuccess": "✅ Broadcasted to Mandi!",
    "boardTitle": "Village Asset Sharing Board (Adla-Badli)",
    "boardSub": "Community equipment & surplus resources currently available.",
    "activePostsBadge": "Active Posts",
    "connectBtn": "Connect",
    "postSurplusTitle": "Post Surplus Asset / Tool",
    "postItemPlaceholder": "e.g., 5HP Submersible Pump or 20kg Seed",
    "postContactPlaceholder": "e.g., Rampal - Ward 14, Ph: 9876543210",
    "postSubmitBtn": "Post to Board",
    "listingPosted": "Listing posted!",
    "selectSystemTitle": "Select Modern Farming System:",
    "switchBlueprintHint": "Click to switch blueprint",
    "assemblyBlueprintTitle": "Assembly Blueprint",
    "sequentialMilestones": "Sequential Setup Milestones:",
    "criticalMistakeTitle": "CRITICAL MISTAKE TO AVOID",
    "procurementHubTitle": "Unified Procurement & Subsidy Hub",
    "procurementHubSub": "Direct links to vetted setup partners, verified online marketplaces, and state financial aid.",
    "verifiedHubBadge": "Verified Hub",
    "colABadge": "Column A • Vetted Vendors",
    "colAName": "KisanAgro Vertical Tech Ltd.",
    "colADesc": "Certified regional infrastructure partner for turnkey vertical tower & hydroponic channel assembly. Includes 1-year free AMC and nutrient calibration kit.",
    "colACallBtn": "Tap to Call Partner",
    "colBBadge": "Column B • Verified Marketplace",
    "colBDesc": "Direct commercial procurement portal for official systems, LED bars, and automated nutrient pumps.",
    "colBOpenBtn": "Open Store ↗",
    "colCBadge": "Column C • Subsidies & Financial Aid",
    "colCOfficial": "Official Portals",
    "colCTitle": "National Subsidies & Digital Portals",
    "colCReduction": "50% to 75% Cost Reduction Verified",
    "colCDesc": "Direct access to verified national portal applications for agricultural mechanization, state crop incentives, and unified digital land registry:",
    "scheme1Title": "🚜 Agri Mechanization & Infra (SBHS)",
    "scheme1Sub": "Sub-Mission on Agricultural Mechanization • myScheme",
    "scheme2Title": "🌱 State Crop Incentives (JNPEDAK)",
    "scheme2Sub": "Targeted Crop Development Grants • myScheme",
    "scheme3Title": "🏛️ AgriStack Unified Digital Registry",
    "scheme3Sub": "National Farmer Registry & Digital Infra • agristack.gov.in",
    "footerLeft": "Digital Rural Assist Node • Designed for visual clarity, voice-first navigation, and offline access",
    "footerRight": "GraminAI • Amaravati Edition v6.0"
  },
  "hi": {
    "headerSubtitle": "डिजिटल ग्रामीण सहायता केंद्र • स्पष्टता एवं आवाज इनपुट हेतु",
    "homeBtn": "मुख्य पृष्ठ",
    "heroBadge": "आवाज आधारित स्मार्ट ग्रामीण सहायक",
    "heroTitle": "ग्रामीण साथी आपकी क्या सहायता कर सकता है?",
    "heroSubtitle": "माइक दबाएं या बोलें—सिंचाई, शिकायत, आपातकालीन प्राथमिक उपचार, आधुनिक खेती या उपकरण विनिमय के लिए।",
    "searchListening": "🎙️ आवाज सुन रहे हैं... कृपया बोलें...",
    "searchIdle": "उदा. \"हाइड्रोपोनिक्स\", \"दो दिन से पानी नहीं आ रहा\", \"बिजली कट\", \"सांप ने काटा\"",
    "trySpeaking": "बोलकर देखें:",
    "samplePhrases": [
      "मुझे हाइड्रोपोनिक्स लगाना है",
      "वार्ड 14 में दो दिन से पानी नहीं आ रहा",
      "बिजली बार-बार कट रही है",
      "सांप ने काट लिया"
    ],
    "portalsTitle": "मुख्य सेवा पोर्टल",
    "portalsSub": "किसी भी कार्ड पर क्लिक करके मॉड्यूल खोलें",
    "cardClimateTag": "कृषि-जल विज्ञान",
    "cardClimateTitle": "जलवायु व सिंचाई",
    "cardClimateSub": "खेत नमी व उपग्रह ट्रैकर",
    "cardClimateDesc": "गतिशील वक्र, 44% इष्टतम खेत नमी, अमरावती भू-स्थानिक ट्रैकर व सायंकालीन नहर अलर्ट।",
    "cardClimateAction": "जलवायु केंद्र खोलें",
    "cardGrievanceTag": "अमरावती AMC पोर्टल",
    "cardGrievanceTitle": "शिकायत पत्र प्रारूप",
    "cardGrievanceSub": "आधिकारिक नगर निगम पत्र",
    "cardGrievanceDesc": "नगर आयुक्त अमरावती को संबोधित औपचारिक कानूनी पत्र तैयार करें, 1-क्लिक कॉपी व व्हाट्सएप शेयरिंग।",
    "cardGrievanceAction": "औपचारिक पत्र तैयार करें",
    "cardFirstAidTag": "आपातकालीन प्रोटोकॉल",
    "cardFirstAidTitle": "प्राथमिक उपचार गाइड",
    "cardFirstAidSub": "जीवन रक्षक आपात चिकित्सा",
    "cardFirstAidDesc": "जीपीएस अस्पताल खोजक, व्हाट्सएप एसओएस प्रसारण, चरणबद्ध निर्देश और 'क्या बिल्कुल न करें' चेतावनी।",
    "cardFirstAidAction": "आपातकालीन सेवा देखें",
    "cardAdlaBadliTag": "मंडी वस्तु विनिमय",
    "cardAdlaBadliTitle": "अदला-बदली शेयर",
    "cardAdlaBadliSub": "ग्राम संसाधन साझाकरण",
    "cardAdlaBadliDesc": "ग्राम उपकरण विनिमय, ट्रैक्टर/पंप साझाकरण, मंडी विनिमय समता गणना और किसान बोर्ड।",
    "cardAdlaBadliAction": "ग्राम बोर्ड देखें",
    "futureFarmingTag1: ": "नवीनतम कृषि तकनीक",
    "futureFarmingTag1": "नवीनतम कृषि तकनीक",
    "futureFarmingTag2": "नाबार्ड व MIDH स्वीकृत",
    "futureFarmingTitle": "आधुनिक उन्नत कृषि प्रणाली",
    "futureFarmingSub": "मिट्टी-रहित सटीक खेती",
    "futureFarmingDesc": "वर्टिकल टावर, हाइड्रोपोनिक्स और एरोपोनिक्स के असेंबली ब्लूप्रिंट, प्रमाणित वेंडर लिंक्स और 50%–75% सरकारी सब्सिडी।",
    "futureFarmingAction": "ब्लूप्रिंट हब खोलें",
    "tabClimate": "जलवायु व नक्शा",
    "tabGrievance": "शिकायत पत्र (AMC)",
    "tabFirstAid": "प्राथमिक उपचार व SOS",
    "tabAdlaBadli": "अदला-बदली शेयर",
    "tabFutureFarming": "आधुनिक खेती",
    "satelliteTracker": "लाइव सैटेलाइट व भू-स्थानिक ट्रैकर",
    "nodeBadge": "अमरावती नोड #14",
    "mapsCenter": "गूगल मैप्स केंद्र: अमरावती, आंध्र प्रदेश, भारत",
    "moistureMatrix": "खेत नमी निगरानी मैट्रिक्स",
    "optimalBadge": "आदर्श: 44%",
    "fieldDryness": "खेत सूखापन:",
    "rainForecast": "बारिश संभावना:",
    "advisoryTitle": "स्वचालित सिंचाई परामर्श",
    "activeRainfallBadge": "बारिश / बादल सक्रिय",
    "activeRainfallText": "स्थिति: अमरावती क्षेत्र में बारिश का पूर्वानुमान। सिस्टम निर्देश: आज की सिंचाई स्थगित की जाती है—अतिरिक्त जल की आवश्यकता नहीं।",
    "highEvapoBadge": "उच्च वाष्पीकरण / सूखापन",
    "highEvapoText": "स्थिति: मिट्टी की नमी 30% से कम। सिस्टम निर्देश: शाम 17:00 बजे से पहले 45 मिनट की नलकूप/नहर सिंचाई करें।",
    "optimalMoistureBadge": "संतुलित नमी स्तर",
    "optimalMoistureText": "स्थिति: मिट्टी की नमी आदर्श स्तर पर है। सामान्य सूक्ष्म सिंचाई जारी रखें।",
    "waterStatusSufficient": "पर्याप्त",
    "waterStatusSchedule": "सिंचाई की योजना बनाएं",
    "waterStatusUrgent": "तत्काल सिंचाई आवश्यक",
    "soilTargetTitle": "कृष्णा डेल्टा मृदा पोषण ब्लूप्रिंट",
    "soilVariant": "काली / जलोढ़ मृदा प्रकार",
    "nitrogen": "नाइट्रोजन (N)",
    "phosphorus": "फास्फोरस (P)",
    "potassium": "पोटेशियम (K)",
    "soilMicroSpike": "विशेष संस्तुति: अमरावती की काली मिट्टी में क्षारीयता रोकने हेतु 25 किग्रा/हेक्टेयर जिंक सल्फेट + 50 किग्रा जिप्सम डालें।",
    "pestCalendarTitle": "कीट प्रबंधन व रोकथाम कैलेंडर",
    "pestCycleBadge": "सितंबर चक्र",
    "pestStemBorer": "तना छेदक अलर्ट: धान की नर्सरी में प्रति एकड़ 8 फेरोमोन ट्रैप स्थापित करें।",
    "pestBph": "बीपीएच चेतावनी: घने पौधों के बीच वायु संचरण के लिए हर 2 मीटर पर 30 सेमी की गलियां बनाएं।",
    "callOfficerBtn": "क्षेत्रीय कृषि विस्तार अधिकारी को कॉल करें",
    "targetAuthority": "लक्षित नगर निगम प्राधिकरण",
    "amcTitle": "अमरावती नगर निगम (AMC)",
    "amcSub": "आंध्र प्रदेश सरकार • आधिकारिक जन-शिकायत निवारण पोर्टल",
    "stepPickIssue": "चरण 1: समस्या प्रोफ़ाइल चुनें",
    "issueWater": "पानी की आपूर्ति",
    "issueElectricity": "बिजली कटौती",
    "issueRoad": "टूटी सड़क",
    "issueCanal": "नहर गाद सफाई",
    "stepPickWard": "नगर निगम वार्ड / क्षेत्र चुनें:",
    "stepPickSignatory": "आपका नाम / हस्ताक्षरकर्ता:",
    "signatoryPlaceholder": "उदा. रामपाल यादव",
    "preparedForm": "आधिकारिक तैयार आवेदन पत्र",
    "copyBtn": "📋 आवेदन पत्र कॉपी करें",
    "copiedBtn": "✅ आवेदन कॉपी हो गया!",
    "printBtn": "🖨️ प्रिंट करें",
    "whatsappBtn": "💬 व्हाट्सएप",
    "emergencyNodeBadge": "आपातकालीन भू-चिकित्सा नोड • अमरावती",
    "emergencyBarTitle": "1-टैप आपातकालीन SOS एवं अस्पताल खोजक",
    "locateHospitalBtn": "नजदीकी अस्पताल खोजें (AIIMS अमरावती)",
    "sosBroadcastBtn": "परिवार को SOS भेजें",
    "nearestFacilityBadge": "नजदीकी अस्पताल (2.4 किमी दूर • 6 मिनट सफर)",
    "aiimsTitle": "एम्स मंगलगिरि एवं अमरावती सामुदायिक स्वास्थ्य केंद्र (CHC थुल्लूर)",
    "aiimsDesc": "24x7 आपातकालीन ट्रॉमा केयर, एंटी-स्नेक वेनम (ASV), आईसीयू बेड और ब्लड बैंक उपलब्ध।",
    "callDispatchBtn": "एम्स आपातकालीन कॉल (108 / 102)",
    "symptomPlaceholder": "किसी भी बीमारी, चोट या लक्षण का नाम लिखें या बोलें...",
    "immediateActionsTitle": "तत्काल आवश्यक कदम",
    "whatNotToDoTitle": "क्या बिल्कुल न करें",
    "emergencyFooter": "टोल-फ्री आपातकालीन सेवा • नजदीकी ग्राम पंचायत व प्राथमिक स्वास्थ्य केंद्र से तत्काल सहायता",
    "surplusItemLabel": "आपके पास उपलब्ध अतिरिक्त वस्तु:",
    "neededItemLabel": "आपको बदले में क्या चाहिए:",
    "calcTitle": "प्रस्तावित विनिमय गणना",
    "equalExchange": "सटीक समान विनिमय",
    "fairValueParity": "उचित विनिमय अनुपात",
    "barterParityNote": "पारंपरिक मंडी वस्तु विनिमय मूल्यांकन पर आधारित। सटीक समता हेतु वस्तुओं का मिलान करें।",
    "broadcastBtn": "मंडी में प्रसारित करें",
    "broadcastSuccess": "✅ मंडी में प्रसारित किया गया!",
    "boardTitle": "ग्राम उपकरण साझाकरण बोर्ड (अदला-बदली)",
    "boardSub": "समुदाय में उपलब्ध कृषि यंत्र एवं अतिरिक्त वस्तुएं।",
    "activePostsBadge": "सक्रिय सूचियां",
    "connectBtn": "संपर्क करें",
    "postSurplusTitle": "अपनी अतिरिक्त वस्तु / यंत्र साझा करें",
    "postItemPlaceholder": "उदा. 5HP सबमर्सिबल पंप या 20 किग्रा बीज",
    "postContactPlaceholder": "उदा. रामपाल - वार्ड 14, फोन: 9876543210",
    "postSubmitBtn": "बोर्ड पर पोस्ट करें",
    "listingPosted": "सफलतापूर्वक पोस्ट किया गया!",
    "selectSystemTitle": "सटीक कृषि प्रणाली चुनें:",
    "switchBlueprintHint": "ब्लूप्रिंट बदलने हेतु क्लिक करें",
    "assemblyBlueprintTitle": "असेंबली ब्लूप्रिंट",
    "sequentialMilestones": "चरणबद्ध असेंबली चेकलिस्ट:",
    "criticalMistakeTitle": "क्या गलती न करें (गंभीर चेतावनी)",
    "procurementHubTitle": "उपकरण खरीद, वेंडर संपर्क एवं सरकारी सब्सिडी हब",
    "procurementHubSub": "प्रमाणित इंस्टॉलेशन पार्टनर, डिजिटल पार्ट्स खरीद और नाबार्ड सहायता।",
    "verifiedHubBadge": "सत्यापित हब",
    "colABadge": "कॉलम A • प्रमाणित वेंडर",
    "colAName": "किसानएग्रो वर्टिकल टेक प्रा. लि.",
    "colADesc": "वर्टिकल टावर और हाइड्रोपोनिक चैनल असेंबली हेतु प्रमाणित क्षेत्रीय पार्टनर। 1 वर्ष की निःशुल्क वारंटी और पोषण किट शामिल।",
    "colACallBtn": "पार्टनर को कॉल करें",
    "colBBadge": "कॉलम B • सत्यापित ऑनलाइन स्टोर",
    "colBDesc": "आधिकारिक उपकरणों, एलईडी ग्रो-लाइट्स और ऑटोमेटेड पोषक पंप की सीधी खरीद।",
    "colBOpenBtn": "स्टोर खोलें ↗",
    "colCBadge": "कॉलम C • सरकारी सब्सिडी व वित्तीय सहायता",
    "colCOfficial": "सरकारी पोर्टल",
    "colCTitle": "राष्ट्रीय सब्सिडी व डिजिटल कृषि पोर्टल",
    "colCReduction": "50% से 75% लागत अनुदान प्रमाणित",
    "colCDesc": "कृषि यंत्रीकरण, राज्य फसल प्रोत्साहन और एकीकृत डिजिटल किसान रजिस्ट्री हेतु सीधा आवेदन:",
    "scheme1Title": "🚜 कृषि यंत्रीकरण एवं इंफ्रास्ट्रक्चर (SBHS)",
    "scheme1Sub": "कृषि यंत्रीकरण उप-मिशन • myScheme पोर्टल",
    "scheme2Title": "🌱 राज्य फसल प्रोत्साहन अनुदान (JNPEDAK)",
    "scheme2Sub": "लक्षित फसल विकास अनुदान • myScheme पोर्टल",
    "scheme3Title": "🏛️ एग्रीस्टैक एकीकृत डिजिटल रजिस्ट्री",
    "scheme3Sub": "राष्ट्रीय किसान रजिस्ट्री व डिजिटल इंफ्रा • agristack.gov.in",
    "footerLeft": "डिजिटल ग्रामीण सहायता केंद्र • स्पष्टता, आवाज-आधारित नेविगेशन एवं ऑफलाइन सुलभता हेतु निर्मित",
    "footerRight": "ग्रामीण साथी • अमरावती संस्करण v6.0"
  },
  "bn": {
    "headerSubtitle": "ডিজিটাল গ্রামীণ সহায়তা কেন্দ্র • দৃশ্যমান স্পষ্টতা ও ভয়েস ইনপুটের জন্য",
    "homeBtn": "মূল পাতা",
    "heroBadge": "ভয়েস ভিত্তিক স্মার্ট গ্রামীণ সহায়ক",
    "heroTitle": "আজ গ্রামীণ সাথী আপনাকে কীভাবে সহায়তা করতে পারে?",
    "heroSubtitle": "মাইক্রোফোনে স্পর্শ করুন বা আপনার মাতৃভাষায় বলুন—সেচ, অভিযোগ, জরুরি চিকিৎসা বা আধুনিক কৃষির জন্য।",
    "searchListening": "🎙️ শুনছি... অনুগ্রহ করে বাংলায় বলুন...",
    "searchIdle": "যেমন \"হাইড্রোপনিক্স\", \"পানীয় জলের সংকট\", \"বিদ্যুৎ বিভ্রাট\", \"সাপের কামড়\"",
    "trySpeaking": "বলে দেখুন:",
    "samplePhrases": [
      "হাইড্রোপনিক্স চাষের পদ্ধতি",
      "ওয়ার্ড ১৪-এ পানীয় জলের সংকট",
      "কৃষি বিদ্যুৎ বিভ্রাট সমস্যা",
      "সাপের কামড়ে জরুরি প্রাথমিক চিকিৎসা"
    ],
    "portalsTitle": "প্রধান পরিষেবা পোর্টাল",
    "portalsSub": "মডিউল খুলতে যেকোনো কার্ডে ক্লিক করুন",
    "cardClimateTag": "কৃষি-জল বিজ্ঞান",
    "cardClimateTitle": "জলবায়ু ও সেচ",
    "cardClimateSub": "স্যাটেলাইট আর্দ্রতা ট্র্যাকার",
    "cardClimateDesc": "মাটির আর্দ্রতা অপ্টিমাইজেশন (৪৪% লক্ষ্য), স্থানিক ট্র্যাকিং এবং সন্ধ্যার খাল সেচ নির্দেশিকা।",
    "cardClimateAction": "জলবায়ু হাব খুলুন",
    "cardGrievanceTag": "অমরাবতী AMC পোর্টাল",
    "cardGrievanceTitle": "অভিযোগ পত্র",
    "cardGrievanceSub": "সরকারি পৌর আবেদন",
    "cardGrievanceDesc": "পৌর কমিশনারকে উদ্দেশ্য করে আনুষ্ঠানিক আইনি পত্র তৈরি করুন, ১-ক্লিকে কপি ও হোয়াটসঅ্যাপ শেয়ারিং।",
    "cardGrievanceAction": "চিঠি তৈরি করুন",
    "cardFirstAidTag": "জরুরি প্রোটোকল",
    "cardFirstAidTitle": "প্রাথমিক চিকিৎসা",
    "cardFirstAidSub": "জরুরি জীবন রক্ষা গাইড",
    "cardFirstAidDesc": "জিপিএস হাসপাতাল সন্ধান, হোয়াটসঅ্যাপ এসওএস সম্প্রচার, ধাপে ধাপে নির্দেশাবলী এবং 'কী করবেন না' সতর্কতা।",
    "cardFirstAidAction": "জরুরি চিকিৎসা দেখুন",
    "cardAdlaBadliTag": "মণ্ডী বিনিময় নেটওয়ার্ক",
    "cardAdlaBadliTitle": "আদলা-বদলি শেয়ার",
    "cardAdlaBadliSub": "সম্পদ বিনিময় বোর্ড",
    "cardAdlaBadliDesc": "কৃষি সরঞ্জাম বিনিময়, ট্রাক্টর/পাম্প শেয়ারিং, ন্যায্য মূল্য সমতা হিসাব এবং কৃষক বোর্ড।",
    "cardAdlaBadliAction": "গ্রামের বোর্ড দেখুন",
    "futureFarmingTag1": "আধুনিক কৃষি প্রযুক্তি",
    "futureFarmingTag2": "নাবার্ড ও MIDH অনুমোদিত",
    "futureFarmingTitle": "উন্নত আধুনিক কৃষি",
    "futureFarmingSub": "মাটিহীন উন্নত চাষাবাদ",
    "futureFarmingDesc": "ভার্টিক্যাল টাওয়ার, হাইড্রোপনিক্স এবং অ্যারোপনিক্সের সেটআপ ব্লুপ্রিন্ট, যাচাইকৃত বিক্রেতা লিংক এবং ৫০%-৭৫% সরকারি ভর্তুকি।",
    "futureFarmingAction": "ব্লুপ্রিন্ট হাব দেখুন",
    "tabClimate": "জলবায়ু ও মানচিত্র",
    "tabGrievance": "অভিযোগ পত্র (AMC)",
    "tabFirstAid": "প্রাথমিক চিকিৎসা ও SOS",
    "tabAdlaBadli": "আদলা-বদলি শেয়ার",
    "tabFutureFarming": "আধুনিক কৃষি",
    "satelliteTracker": "লাইভ স্যাটেলাইট ও স্থানিক ট্র্যাকার",
    "nodeBadge": "অমরাবতী নোড #১৪",
    "mapsCenter": "গুগল ম্যাপস কেন্দ্র: অমরাবতী, অন্ধ্রপ্রদেশ, ভারত",
    "moistureMatrix": "মাটির আর্দ্রতা পর্যবেক্ষণ ম্যাট্রিক্স",
    "optimalBadge": "আদর্শ: ৪৪%",
    "fieldDryness": "মাঠের শুষ্কতা:",
    "rainForecast": "বৃষ্টির পূর্বাভাস:",
    "advisoryTitle": "স্বয়ংক্রিয় সেচ পরামর্শ",
    "activeRainfallBadge": "সক্রিয় বৃষ্টিপাত / মেঘাচ্ছন্ন",
    "activeRainfallText": "অবস্থা: অমরাবতী এলাকায় সক্রিয় বৃষ্টিপাত শনাক্ত হয়েছে। সিস্টেম নির্দেশ: আজকের সেচ স্থগিত রাখা হয়েছে—অতিরিক্ত জলের প্রয়োজন নেই।",
    "highEvapoBadge": "উচ্চ বাষ্পীভবন / শুষ্কতা",
    "highEvapoText": "অবস্থা: মাটির আর্দ্রতা ৩০% এর নিচে। সিস্টেম পরামর্শ: বিকাল ১৭:০০ টার আগে ৪৫ মিনিটের খাল/নলকূপ সেচ সম্পন্ন করুন।",
    "optimalMoistureBadge": "ভারসাম্যপূর্ণ আর্দ্রতা",
    "optimalMoistureText": "অবস্থা: মাটির আর্দ্রতা ৪৪–৪৮% এ সর্বোত্তম রয়েছে। নিয়মিত সেচ সূচি বজায় রাখুন।",
    "waterStatusSufficient": "পর্যাপ্ত",
    "waterStatusSchedule": "সেচের পরিকল্পনা করুন",
    "waterStatusUrgent": "জরুরি সেচ প্রয়োজন",
    "soilTargetTitle": "কৃষ্ণা অববাহিকা মৃত্তিকা পুষ্টি ব্লুপ্রিন্ট",
    "soilVariant": "কালো / পলিমাটি প্রকার",
    "nitrogen": "নাইট্রোজেন (N)",
    "phosphorus": "ফসফরাস (P)",
    "potassium": "পটাশিয়াম (K)",
    "soilMicroSpike": "বিশেষ পরামর্শ: অমরাবতীর কালো মাটিতে ক্ষারীয়তা রোধ করতে ২৫ কেজি/হেক্টর জিংক সালফেট + ৫০ কেজি জিপসাম প্রয়োগ করুন।",
    "pestCalendarTitle": "কীটপতঙ্গ প্রতিরোধ ক্যালেন্ডার",
    "pestCycleBadge": "সেপ্টেম্বর চক্র",
    "pestStemBorer": "মাজরা পোকা সতর্কতা: ধানের বীজতলায় প্রতি একরে ৮টি ফেরোমন ফাঁদ বসান।",
    "pestBph": "বিপিএইচ সতর্কতা: বায়ু চলাচলের জন্য ঘন ফসলের মাঝে প্রতি ২ মিটারে ৩০ সেমি ফাঁকা রাখুন।",
    "callOfficerBtn": "কৃষি সম্প্রসারণ আধিকারিককে কল করুন",
    "targetAuthority": "নির্দিষ্ট পৌর কর্তৃপক্ষ",
    "amcTitle": "অমরাবতী পৌর নিগম (AMC)",
    "amcSub": "অন্ধ্রপ্রদেশ সরকার • সরকারি অভিযোগ পোর্টাল",
    "stepPickIssue": "ধাপ ১: সমস্যার ধরণ নির্বাচন করুন",
    "issueWater": "জল সরবরাহ",
    "issueElectricity": "বিদ্যুৎ বিভ্রাট",
    "issueRoad": "ভাঙা রাস্তা",
    "issueCanal": "খালের পলি পরিষ্কার",
    "stepPickWard": "পৌর ওয়ার্ড / এলাকা নির্বাচন করুন:",
    "stepPickSignatory": "আপনার নাম / স্বাক্ষরকারী:",
    "signatoryPlaceholder": "যেমন রামপাল যাদব",
    "preparedForm": "প্রস্তুতকৃত আনুষ্ঠানিক আবেদন পত্র",
    "copyBtn": "📋 আবেদন কপি করুন",
    "copiedBtn": "✅ কপি সফল হয়েছে!",
    "printBtn": "🖨️ প্রিন্ট করুন",
    "whatsappBtn": "💬 হোয়াটসঅ্যাপ",
    "emergencyNodeBadge": "জরুরি ভূ-চিকিৎসা নোড • অমরাবতী",
    "emergencyBarTitle": "১-ট্যাপ জরুরি চিকিৎসা SOS ও হাসপাতাল সন্ধান",
    "locateHospitalBtn": "নিকটস্থ হাসপাতাল (AIIMS অমরাবতী)",
    "sosBroadcastBtn": "পরিবারে SOS বার্তা পাঠান",
    "nearestFacilityBadge": "নিকটস্থ স্বাস্থ্যকেন্দ্র (২.৪ কিমি • ৬ মিনিট)",
    "aiimsTitle": "AIIMS মঙ্গলাগিরি ও অমরাবতী কমিউনিটি হেলথ সেন্টার (CHC থুল্লুর)",
    "aiimsDesc": "২৪x৭ জরুরি ট্রমা কেয়ার, অ্যান্টি-স্নেক ভেনম (ASV), আইসিইউ বেড এবং ব্লাড ব্যাংক উপলব্ধ।",
    "callDispatchBtn": "AIIMS ডিসপ্যাচ কল (১০৮ / ১০২)",
    "symptomPlaceholder": "যেকোনো রোগ, আঘাত বা লক্ষণের নাম লিখুন বা বলুন...",
    "immediateActionsTitle": "জরুরি করণীয় পদক্ষেপ",
    "whatNotToDoTitle": "কী করবেন না (কঠোর সতর্কতা)",
    "emergencyFooter": "টোল-ফ্রি জরুরি সেবা • নিকটবর্তী গ্রাম পঞ্চায়েত ও প্রাথমিক স্বাস্থ্যকেন্দ্রে সরাসরি যোগাযোগ",
    "surplusItemLabel": "আপনার কাছে অতিরিক্ত পণ্য:",
    "neededItemLabel": "পরিবর্তে আপনার প্রয়োজনীয় পণ্য:",
    "calcTitle": "প্রস্তাবিত বিনিময় গণনা",
    "equalExchange": "সঠিক সমান বিনিময়",
    "fairValueParity": "ন্যায্য মূল্য সমতা",
    "barterParityNote": "ঐতিহ্যবাহী মণ্ডী পণ্য বিনিময় মূল্যায়নের উপর ভিত্তি করে তৈরি।",
    "broadcastBtn": "স্থানীয় মণ্ডীতে সম্প্রচার করুন",
    "broadcastSuccess": "✅ মণ্ডীতে সম্প্রচারিত হয়েছে!",
    "boardTitle": "গ্রামের সরঞ্জাম বিনিময় বোর্ড (আদলা-বদলি)",
    "boardSub": "সম্প্রদায়ে বর্তমানে উপলব্ধ সরঞ্জাম ও অতিরিক্ত পণ্য।",
    "activePostsBadge": "সক্রিয় তালিকা",
    "connectBtn": "যোগাযোগ করুন",
    "postSurplusTitle": "অতিরিক্ত সরঞ্জাম বা পণ্য তালিকাভুক্ত করুন",
    "postItemPlaceholder": "যেমন, ৫ এইচপি পাম্প বা ২০ কেজি বীজ",
    "postContactPlaceholder": "যেমন, রামপাল - ওয়ার্ড ১৪, ফোন: ৯৮৭৬৫৪৩২১০",
    "postSubmitBtn": "বোর্ডে পোস্ট করুন",
    "listingPosted": "সফলভাবে পোস্ট হয়েছে!",
    "selectSystemTitle": "আধুনিক কৃষি পদ্ধতি নির্বাচন করুন:",
    "switchBlueprintHint": "ব্লুপ্রিন্ট পরিবর্তন করতে ক্লিক করুন",
    "assemblyBlueprintTitle": "সেটআপ ব্লুপ্রিন্ট",
    "sequentialMilestones": "ধারাবাহিক সেটআপ ধাপসমূহ:",
    "criticalMistakeTitle": "মারাত্মক ভুল এড়িয়ে চলুন",
    "procurementHubTitle": "সরঞ্জাম ক্রয় ও সরকারি ভর্তুকি হাব",
    "procurementHubSub": "যাচাইকৃত অংশীদার, অনলাইন মার্কেটপ্লেস এবং সরকারি আর্থিক সহায়তা।",
    "verifiedHubBadge": "যাচাইকৃত হাব",
    "colABadge": "কলাম A • সার্টিফাইড ভেন্ডর",
    "colAName": "কিসানএগ্রো ভার্টিক্যাল টেক লি.",
    "colADesc": "ভার্টিক্যাল টাওয়ার এবং হাইড্রোপনিক চ্যানেল অ্যাসেম্বলির জন্য আঞ্চলিক অংশীদার। ১ বছরের ফ্রি ওয়ারেন্টি ও পুষ্টি কিট অন্তর্ভুক্ত।",
    "colACallBtn": "অংশীদারকে কল করুন",
    "colBBadge": "কলাম B • অনলাইন মার্কেটপ্লেস",
    "colBDesc": "অফিসিয়াল যন্ত্রপাতি, এলইডি লাইট এবং স্বয়ংক্রিয় পাম্প কেনার সরাসরি পোর্টাল।",
    "colBOpenBtn": "স্টোর খুলুন ↗",
    "colCBadge": "কলাম C • সরকারি ভর্তুকি ও আর্থিক সহায়তা",
    "colCOfficial": "সরকারি পোর্টাল",
    "colCTitle": "জাতীয় ভর্তুকি ও ডিজিটাল পোর্টাল",
    "colCReduction": "৫০% থেকে ৭৫% খরচ সাশ্রয় যাচাইকৃত",
    "colCDesc": "কৃষি যান্ত্রিকীকরণ, রাজ্য ফসল প্রণোদনা এবং ডিজিটাল কৃষক রেজিস্ট্রির জন্য সরাসরি আবেদন:",
    "scheme1Title": "🚜 কৃষি যান্ত্রিকীকরণ সাব-মিশন (SBHS)",
    "scheme1Sub": "কৃষি যান্ত্রিকীকরণ সহায়তা • myScheme",
    "scheme2Title": "🌱 রাজ্য ফসল প্রণোদনা অনুদান (JNPEDAK)",
    "scheme2Sub": "নির্দিষ্ট ফসল উন্নয়ন অনুদান • myScheme",
    "scheme3Title": "🏛️ এগ্রিস্ট্যাক ডিজিটাল রেজিস্ট্রি",
    "scheme3Sub": "জাতীয় কৃষক রেজিস্ট্রি ও ডিজিটাল পরিকাঠামো • agristack.gov.in",
    "footerLeft": "ডিজিটাল গ্রামীণ সহায়তা কেন্দ্র • স্পষ্টতা, ভয়েস নেভিগেশন এবং অফলাইন ব্যবহারের জন্য প্রস্তুত",
    "footerRight": "গ্রামীণ এআই • অমরাবতী সংস্করণ v6.0"
  },
  "mr": {
    "headerSubtitle": "डिजिटल ग्रामीण सहाय्य केंद्र • दृश्यमान स्पष्टता व आवाज इनपुटसाठी",
    "homeBtn": "मुख्य पृष्ठ",
    "heroBadge": "आवाज आधारित स्मार्ट ग्रामीण सहाय्यक",
    "heroTitle": "आज ग्रामीण साथी तुमची काय मदत करू शकते?",
    "heroSubtitle": "माइक दाबा किंवा बोला—सिंचन, तक्रार, आपत्कालीन प्रथमोपचार, आधुनिक शेती किंवा साधनसामग्री देवाणघेवाणीसाठी.",
    "searchListening": "🎙️ आवाज ऐकत आहोत... कृपया मराठीत बोला...",
    "searchIdle": "उदा. \"हायड्रोपोनिक्स\", \"पाणीपुरवठा खंडित\", \"वीज कपात\", \"सापाने चावले\"",
    "trySpeaking": "बोलून पहा:",
    "samplePhrases": [
      "हायड्रोपोनिक्स शेती कशी करावी",
      "वॉर्ड १४ मध्ये दोन दिवसांपासून पाणी नाही",
      "शेतीची वीज वारंवार खंडित होते",
      "सर्पदंशावर आपत्कालीन प्रथमोपचार"
    ],
    "portalsTitle": "मुख्य सेवा पोर्टल",
    "portalsSub": "मॉड्यूल उघडण्यासाठी कोणत्याही कार्डवर क्लिक करा",
    "cardClimateTag": "कृषी-जल विज्ञान",
    "cardClimateTitle": "हवामान व सिंचन",
    "cardClimateSub": "भू-स्थानिक आर्द्रता ट्रॅकर",
    "cardClimateDesc": "मातीतील आर्द्रता नियंत्रण (४४% लक्ष्य), उपग्रह ट्रॅकिंग आणि संध्याकाळचे कालवा सिंचन अलर्ट.",
    "cardClimateAction": "हवामान केंद्र उघडा",
    "cardGrievanceTag": "अमरावती AMC पोर्टल",
    "cardGrievanceTitle": "तक्रार अर्ज",
    "cardGrievanceSub": "अधिकृत महानगरपालिका पत्र",
    "cardGrievanceDesc": "महानगरपालिका आयुक्तांना उद्देशून औपचारिक कायदेशीर अर्ज तयार करा, १-क्लिक कॉपी व व्हॉट्सॲप सुविधा.",
    "cardGrievanceAction": "अर्ज तयार करा",
    "cardFirstAidTag": "आपत्कालीन प्रोटोकॉल",
    "cardFirstAidTitle": "प्रथमोपचार मार्गदर्शक",
    "cardFirstAidNative": "तातडीची वैद्यकीय मदत",
    "cardFirstAidSub": "तातडीची वैद्यकीय मदत",
    "cardFirstAidDesc": "जीपीएस रुग्णालय शोधक, व्हॉट्सॲप एसओएस संदेश, टप्प्याटप्प्याने सूचना आणि 'काय करू नये' चेतावणी.",
    "cardFirstAidAction": "वैद्यकीय मदत मिळवा",
    "cardAdlaBadliTag": "बाजार देवाणघेवाण",
    "cardAdlaBadliTitle": "अदलाबदल शेअर्स",
    "cardAdlaBadliSub": "गाव साधनसामग्री फलक",
    "cardAdlaBadliDesc": "शेत अवजारे देवाणघेवाण, ट्रॅक्टर/पंप सामायिकरण, बाजार सममूल्य गणना आणि शेतकरी मंच.",
    "cardAdlaBadliAction": "गाव फलक पहा",
    "futureFarmingTag1": "नवीन कृषी तंत्रज्ञान",
    "futureFarmingTag2": "नाबार्ड व MIDH मान्यताप्राप्त",
    "futureFarmingTitle": "आधुनिक प्रगत शेती",
    "futureFarmingSub": "मातीविना अचूक शेती",
    "futureFarmingDesc": "व्हर्टिकल टॉवर, हायड्रोपोनिक्स आणि ॲरोपोनिक्सच्या उभारणीची ब्लूप्रिंट, अधिकृत विक्रेते आणि ५०%–७५% सरकारी अनुदान.",
    "futureFarmingAction": "ब्लूप्रिंट हब पहा",
    "tabClimate": "हवामान व नकाशा",
    "tabGrievance": "तक्रार अर्ज (AMC)",
    "tabFirstAid": "प्रथमोपचार व SOS",
    "tabAdlaBadli": "अदलाबदल शेअर्स",
    "tabFutureFarming": "आधुनिक शेती",
    "satelliteTracker": "थेट उपग्रह व भू-स्थानिक ट्रॅकर",
    "nodeBadge": "अमरावती नोड #१४",
    "mapsCenter": "गुगल मॅप्स केंद्र: अमरावती, आंध्र प्रदेश, भारत",
    "moistureMatrix": "मातीतील ओलावा देखरेख मॅट्रिक्स",
    "optimalBadge": "आदर्श: ४४%",
    "fieldDryness": "शेतातील कोरडेपणा:",
    "rainForecast": "पावसाचा अंदाज:",
    "advisoryTitle": "स्वयंचलित सिंचन सल्ला",
    "activeRainfallBadge": "पाऊस / ढगाळ वातावरण",
    "activeRainfallText": "स्थिती: अमरावती भागात पावसाची शक्यता. सिंचन स्थगित—अतिरिक्त पाण्याची गरज नाही.",
    "highEvapoBadge": "जास्त बाष्पीभवन / कोरडेपणा",
    "highEvapoText": "स्थिती: मातीतील ओलावा ३०% पेक्षा कमी. संध्याकाळी १७:०० पूर्वी ४५ मिनिटे सिंचन करा.",
    "optimalMoistureBadge": "संतुलित ओलावा",
    "optimalMoistureText": "स्थिती: मातीतील ओलावा आदर्श पातळीवर (४४–४८%) आहे.",
    "waterStatusSufficient": "पुरेसे",
    "waterStatusSchedule": "सिंचनाचे नियोजन करा",
    "waterStatusUrgent": "तातडीने सिंचन आवश्यक",
    "soilTargetTitle": "कृष्णा खोरे मृदा पोषण ब्लूप्रिंट",
    "soilVariant": "काळी / गाळाची माती प्रकार",
    "nitrogen": "नायट्रोजन (N)",
    "phosphorus": "फॉस्फरस (P)",
    "potassium": "पोटॅशियम (K)",
    "soilMicroSpike": "विशेष शिफारस: अमरावतीच्या काळ्या मातीत क्षारता रोखण्यासाठी २५ किलो/हेक्टर झिंक सल्फेट + ५० किलो जिप्सम वापरा.",
    "pestCalendarTitle": "कीड व्यवस्थापन व प्रतिबंध दिनदर्शिका",
    "pestCycleBadge": "सप्टेंबर चक्र",
    "pestItem1": "खोडकिडा अलर्ट: भाताच्या रोपवाटिकेत प्रति एकर ८ कामगंध सापळे लावा.",
    "pestItem2": "मावा/तुडतुडे चेतावणी: हवा खेळती राहण्यासाठी दर २ मीटरवर ३० सेमी अंतर ठेवा.",
    "callOfficerBtn": "कृषी विस्तार अधिकाऱ्यांना संपर्क करा",
    "targetAuthority": "लक्षित पालिका प्राधिकरण",
    "amcTitle": "अमरावती महानगरपालिका (AMC)",
    "amcSub": "आंध्र प्रदेश शासन • अधिकृत तक्रार निवारण पोर्टल",
    "stepPickIssue": "पायरी १: समस्येचा प्रकार निवडा",
    "issueWater": "पाणीपुरवठा",
    "issueElectricity": "वीज कपात",
    "issueRoad": "खराब रस्ता",
    "issueCanal": "कालवा गाळ काढणे",
    "stepPickWard": "प्रभाग / क्षेत्र निवडा:",
    "stepPickSignatory": "आपले नाव / अर्जदार:",
    "signatoryPlaceholder": "उदा. रामपाल यादव",
    "preparedForm": "अधिकृत तयार केलेला अर्ज",
    "copyBtn": "📋 अर्ज कॉपी करा",
    "copiedBtn": "✅ अर्ज कॉपी झाला!",
    "printBtn": "🖨️ प्रिंट करा",
    "whatsappBtn": "💬 व्हॉट्सॲप",
    "emergencyNodeBadge": "आपत्कालीन भू-वैद्यकीय नोड • अमरावती",
    "emergencyBarTitle": "१-टॅप आपत्कालीन SOS आणि रुग्णालय शोधक",
    "locateHospitalBtn": "जवळचे रुग्णालय शोधा (AIIMS अमरावती)",
    "sosBroadcastBtn": "कुटुंबाला SOS पाठवा",
    "nearestFacilityBadge": "जवळचे रुग्णालय (२.४ किमी • ६ मिनिटे)",
    "aiimsTitle": "AIIMS मंगलगिरी व अमरावती समुदाय आरोग्य केंद्र (CHC थुलूर)",
    "aiimsDesc": "२४x७ आपत्कालीन ट्रॉमा केअर, सर्पदंश लस (ASV), आयसीयू बेड्स आणि रक्तपेढी उपलब्ध.",
    "callDispatchBtn": "AIIMS आपत्कालीन कॉल (१०८ / १०२)",
    "symptomPlaceholder": "कोणताही आजार, जखम किंवा लक्षणाचे नाव लिहा किंवा बोला...",
    "immediateActionsTitle": "तातडीने करावयाची कृती",
    "whatNotToDoTitle": "काय करू नये (गंभीर चेतावणी)",
    "emergencyFooter": "टोल-फ्री आपत्कालीन सेवा • जवळच्या ग्रामपंचायत व प्राथमिक आरोग्य केंद्रातून तत्काळ मदत",
    "surplusItemLabel": "आपल्याकडील अतिरिक्त वस्तू:",
    "neededItemLabel": "बदल्यात आवश्यक असलेली वस्तू:",
    "calcTitle": "प्रस्तावित देवाणघेवाण गणना",
    "equalExchange": "तंतोतंत समान देवाणघेवाण",
    "fairValueParity": "रास्त मूल्य सममूल्यता",
    "barterNote": "स्थानिक पारंपरिक बाजार मूल्यांकनावर आधारित. सममूल्यतेसाठी वस्तू जुळवून पहा.",
    "broadcastBtn": "बाजारत प्रसारित करा",
    "broadcastSuccess": "✅ बाजारत प्रसारित झाले!",
    "boardTitle": "गाव साधनसामग्री फलक (अदलाबदल)",
    "boardSub": "गावात सध्या उपलब्ध असलेली शेत अवजारे व अतिरिक्त वस्तू.",
    "activePostsBadge": "सक्रिय यादी",
    "connectBtn": "संपर्क साधा",
    "postSurplusTitle": "आपली अतिरिक्त वस्तू फलकावर नोंदवा",
    "postItemPlaceholder": "उदा. ५ HP पंप किंवा २० किलो बियाणे",
    "postContactPlaceholder": "उदा. रामपाल - प्रभाग १४, फोन: ९८७६५४३२१०",
    "postSubmitBtn": "नोंदणी करा",
    "listingPosted": "नोंदणी यशस्वी झाली!",
    "selectSystemTitle": "आधुनिक शेती पद्धती निवडा:",
    "switchBlueprintHint": "ब्लूप्रिंट बदलण्यासाठी क्लिक करा",
    "assemblyBlueprintTitle": "उभारणी ब्लूप्रिंट",
    "sequentialMilestones": "टप्प्याटप्प्याने उभारणी यादी:",
    "criticalMistakeTitle": "टाळावयाची गंभीर चूक",
    "procurementHubTitle": "साहित्य खरेदी व सरकारी अनुदान केंद्र",
    "procurementHubSub": "प्रमाणित भागीदार, ऑनलाइन बाजारपेठ आणि सरकारी आर्थिक मदत.",
    "verifiedHubBadge": "प्रमाणित केंद्र",
    "colABadge": "कॉलम A • प्रमाणित विक्रेते",
    "colAName": "किसानॲग्रो व्हर्टिकल टेक लि.",
    "colADesc": "व्हर्टिकल टॉवर आणि हायड्रोपोनिक्स उभारणीसाठी स्थानिक भागीदार. १ वर्ष मोफत सेवा आणि पोषक किट समाविष्ट.",
    "colACallBtn": "भागीदाराला कॉल करा",
    "colBBadge": "कॉलम B • ऑनलाइन बाजारपेठ",
    "colBDesc": "अधिकृत यंत्रसामग्री, एलईडी ग्रो-लाइट्स आणि स्वयंचलित पंपांची थेट खरेदी.",
    "colBOpenBtn": "स्टोअर उघडा ↗",
    "colCBadge": "कॉलम C • सरकारी अनुदान व आर्थिक सहाय्य",
    "colCOfficial": "शासकीय पोर्टल",
    "colCTitle": "राष्ट्रीय अनुदान व डिजिटल पोर्टल",
    "colCReduction": "५०% ते ७५% खर्च सवलत प्रमाणित",
    "colCDesc": "कृषी यांत्रिकीकरण, राज्य पीक प्रोत्साहन आणि डिजिटल शेतकरी नोंदणीसाठी थेट अर्ज:",
    "scheme1Title": "🚜 कृषी यांत्रिकीकरण उप-अभियान (SBHS)",
    "scheme1Sub": "कृषी यांत्रिकीकरण सहाय्य • myScheme",
    "scheme2Title": "🌱 राज्य पीक प्रोत्साहन अनुदान (JNPEDAK)",
    "scheme2Sub": "लक्ष्यित पीक विकास अनुदान • myScheme",
    "scheme3Title": "🏛️ ॲग्रीस्टॅक डिजिटल शेतकरी नोंदणी",
    "scheme3Sub": "राष्ट्रीय शेतकरी नोंदणी व डिजिटल सुविधा • agristack.gov.in",
    "footerLeft": "डिजिटल ग्रामीण सहाय्य केंद्र • स्पष्टता, आवाज-आधारित नेव्हिगेशन व ऑफलाइन सुलभतेसाठी",
    "footerRight": "ग्रामीण एआय • अमरावती आवृत्ती v6.0"
  },
  "te": {
    "headerSubtitle": "డిజిటల్ గ్రామీణ సహాయ కేంద్రం • స్పష్టత మరియు వాయిస్ ఇన్‌పుట్ కోసం",
    "homeBtn": "ప్రధాన పేజీ",
    "heroBadge": "వాయిస్ ఆధారిత స్మార్ట్ గ్రామీణ సహాయకుడు",
    "heroTitle": "గ్రామీణ్ AI నేడు మీకు ఎలా సహాయపడగలదు?",
    "heroSubtitle": "మైక్రోఫోన్‌ను నొక్కండి లేదా మాట్లాడండి—నీటిపారుదల, ఫిర్యాదు, అత్యవసర ప్రథమ చికిత్స, ఆధునిక వ్యవసాయం కొరకు.",
    "searchListening": "🎙️ వింటున్నాము... దయచేసి తెలుగులో మాట్లాడండి...",
    "searchIdle": "ఉదా. \"హైడ్రోపోనిక్స్\", \"తాగునీటి సమస్య\", \"కరెంట్ కోత\", \"పాము కాటు\"",
    "trySpeaking": "మాట్లాడి చూడండి:",
    "samplePhrases": [
      "హైడ్రోపోనిక్స్ సాగు విధానం",
      "వార్డు 14 లో రెండు రోజులుగా నీరు రాలేదు",
      "వ్యవసాయ విద్యుత్ కోత సమస్య",
      "పాము కాటుకు అత్యవసర ప్రథమ చికిత్స"
    ],
    "portalsTitle": "ప్రధాన సేవా పోర్టల్స్",
    "portalsSub": "ఏదైనా కార్డుపై క్లిక్ చేసి మాడ్యూల్ తెరవండి",
    "cardClimateTag": "వ్యవసాయ-జల విజ్ఞానం",
    "cardClimateTitle": "వాతావరణం & నీటిపారుదల",
    "cardClimateSub": "ఉపగ్రహ తేమ ట్రాకర్",
    "cardClimateDesc": "నేల తేమ నియంత్రణ (44% లక్ష్యం), అమరావతి ప్రాదేశిక ట్రాకర్ మరియు సాయంత్రం కాలువ నీటి సలహాలు.",
    "cardClimateAction": "వాతావరణ కేంద్రం తెరవండి",
    "cardGrievanceTag": "అమరావతి AMC పోర్టల్",
    "cardGrievanceTitle": "ఫిర్యాదు దరఖాస్తు",
    "cardGrievanceSub": "అధికారిక మున్సిపల్ పత్రం",
    "cardGrievanceDesc": "మున్సిపల్ కమిషనర్‌కు అధికారిక చట్టబద్ధమైన లేఖను రూపొందించండి, 1-క్లిక్ కాపీ మరియు వాట్సాప్ షేరింగ్.",
    "cardGrievanceAction": "దరఖాస్తు సిద్ధం చేయండి",
    "cardFirstAidTag": "అత్యవసర ప్రోటోకాల్స్",
    "cardFirstAidTitle": "ప్రథమ చికిత్స గైడ్",
    "cardFirstAidSub": "ప్రాణ రక్షణ వైద్య సహాయం",
    "cardFirstAidDesc": "GPS ఆసుపత్రి గుర్తింపు, వాట్సాప్ SOS ప్రసారం, దశలవారీ సూచనలు మరియు 'చేయకూడని పనులు' హెచ్చరికలు.",
    "cardFirstAidAction": "వైద్య సహాయం పొందండి",
    "cardAdlaBadliTag": "మార్కెట్ వస్తు మార్పిడి",
    "cardAdlaBadliTitle": "అద్లా-బద్లీ మార్పిడి",
    "cardAdlaBadliSub": "గ్రామ వనరుల పంపిణీ బోర్డు",
    "cardAdlaBadliDesc": "వ్యవసాయ పరికరాల మార్పిడి, ట్రాక్టర్/మోటార్ పంపకం, సరసమైన విలువ లెక్కింపు మరియు రైతు బోర్డు.",
    "cardAdlaBadliAction": "గ్రామ బోర్డు చూడండి",
    "futureFarmingTag1": "నూతన వ్యవసాయ సాంకేతికత",
    "futureFarmingTag2": "నాబార్డ్ & MIDH ఆమోదితం",
    "futureFarmingTitle": "ఆధునిక భవిష్యత్ వ్యవసాయం",
    "futureFarmingSub": "మట్టి లేని ఆధునిక సాగు",
    "futureFarmingDesc": "వర్టికల్ టవర్లు, హైడ్రోపోనిక్స్ మరియు ఏరోపోనిక్స్ బ్లూప్రింట్లు, ధృవీకరించబడిన విక్రేతల లింకులు మరియు 50%–75% సబ్సిడీలు.",
    "futureFarmingAction": "బ్లూప్రింట్ హబ్ చూడండి",
    "tabClimate": "వాతావరణం & మ్యాప్",
    "tabGrievance": "ఫిర్యాదు దరఖాస్తు (AMC)",
    "tabFirstAid": "ప్రథమ చికిత్స & SOS",
    "tabAdlaBadli": "అద్లా-బద్లీ మార్పిడి",
    "tabFutureFarming": "ఆధునిక వ్యవసాయం",
    "satelliteTracker": "లైవ్ శాటిలైట్ & స్పేషియల్ ట్రాకర్",
    "nodeBadge": "అమరావతి నోడ్ #14",
    "mapsCenter": "గూగుల్ మ్యాప్స్ కేంద్రం: అమరావతి, ఆంధ్రప్రదేశ్, భారతదేశం",
    "moistureMatrix": "నేల తేమ పర్యవేక్షణ మ్యాట్రిక్స్",
    "optimalBadge": "ఆదర్శవంతం: 44%",
    "fieldDryness": "నేల పొడిబారడం:",
    "rainForecast": "వర్ష సూచన:",
    "advisoryTitle": "స్వయంచాలక నీటిపారుదల సలహా",
    "activeRainfallBadge": "వర్షం / మేఘావృతం",
    "activeRainfallText": "స్థితి: అమరావతి ప్రాంతంలో వర్షం కురుస్తోంది. నేటి నీటిపారుదల నిలిపివేయబడింది—అదనపు నీరు అవసరం లేదు.",
    "highEvapoBadge": "ఎక్కువ తేమ నష్టం",
    "highEvapoText": "స్థితి: నేలలో తేమ 30% కంటే తక్కువ. సాయంత్రం 17:00 లోపు 45 నిమిషాల పాటు నీటిపారుదల చేయండి.",
    "optimalMoistureBadge": "సమతుల్య తేమ స్థాయి",
    "optimalMoistureText": "స్థితి: నేలలో తేమ ఆదర్శవంతంగా 44–48% వద్ద ఉంది.",
    "waterStatusSufficient": "సరిపడా ఉంది",
    "waterStatusSchedule": "నీటిపారుదల ప్రణాళిక చేయండి",
    "waterStatusUrgent": "తక్షణ నీటిపారుదల అవసరం",
    "soilTargetTitle": "కృష్ణా డెల్టా నేల పోషక బ్లూప్రింట్",
    "soilVariant": "నల్లరేగడి / ఒండ్రు నేల రకం",
    "nitrogen": "నత్రజని (N)",
    "phosphorus": "భాస్వరం (P)",
    "potassium": "పొటాషియం (K)",
    "soilMicroSpike": "ప్రత్యేక సిఫార్సు: అమరావతి నల్లరేగడి నేలలో క్షారత్వాన్ని నివారించడానికి ఎకరాకు 25 కిలోల జింక్ సల్ఫేట్ + 50 కిలోల జిప్సం వేయండి.",
    "pestCalendarTitle": "చీడపీడల నివారణ క్యాలెండర్",
    "pestCycleBadge": "సెప్టెంబర్ చక్రం",
    "pestItem1": "కాండం తొలుచు పురుగు హెచ్చరిక: వరి నారుమళ్ళలో ఎకరాకు 8 లింగాకర్షక బుట్టలను అమర్చండి.",
    "pestItem2": "సుడిదోమ హెచ్చరిక: గాలి ప్రసరణ కోసం దట్టమైన పైరులో ప్రతి 2 మీటర్లకు 30 సెం.మీ కాలిబాటలు తీయండి.",
    "callOfficerBtn": "వ్యవసాయ విస్తరణ అధికారికి కాల్ చేయండి",
    "targetAuthority": "లక్ష్య మున్సిపల్ అథారిటీ",
    "amcTitle": "అమరావతి మున్సిపల్ కార్పొరేషన్ (AMC)",
    "amcSub": "ఆంధ్రప్రదేశ్ ప్రభుత్వం • అధికారిక ప్రజా ఫిర్యాదుల పోర్టల్",
    "stepPickIssue": "దశ 1: సమస్య రకాన్ని ఎంచుకోండి",
    "issueWater": "నీటి సరఫరా",
    "issueElectricity": "విద్యుత్ కోత",
    "issueRoad": "పాడైన రోడ్డు",
    "issueCanal": "కాలువ పూడికతీత",
    "stepPickWard": "వార్డు / ప్రాంతాన్ని ఎంచుకోండి:",
    "stepPickSignatory": "మీ పేరు / దరఖాస్తుదారు:",
    "signatoryPlaceholder": "ఉదా. రాంపాల్ యాదవ్",
    "preparedForm": "అధికారికంగా సిద్ధం చేసిన దరఖాస్తు",
    "copyBtn": "📋 దరఖాస్తును కాపీ చేయండి",
    "copiedBtn": "✅ కాపీ విజయవంతమైంది!",
    "printBtn": "🖨️ ప్రింట్ చేయండి",
    "whatsappBtn": "💬 వాట్సాప్",
    "emergencyNodeBadge": "అత్యవసర జియో-మెడికల్ నోడ్ • అమరావతి",
    "emergencyBarTitle": "1-ట్యాప్ ఎమర్జెన్సీ SOS & ఆసుపత్రి గుర్తింపు",
    "locateHospitalBtn": "సమీప ఆసుపత్రి (AIIMS అమరావతి)",
    "sosBroadcastBtn": "కుటుంబానికి SOS పంపండి",
    "nearestFacilityBadge": "సమీప ఆసుపత్రి (2.4 కి.మీ • 6 నిమిషాలు)",
    "aiimsTitle": "AIIMS మంగళగిరి మరియు అమరావతి కమ్యూనిటీ హెల్త్ సెంటర్ (CHC తుళ్ళూరు)",
    "aiimsDesc": "24x7 ఎమర్జెన్సీ ట్రామా కేర్, యాంటీ-స్నేక్ వీనం (ASV), ICU బెడ్స్ మరియు బ్లడ్ బ్యాంక్ కలవు.",
    "callDispatchBtn": "AIIMS డిస్పాచ్ కాల్ (108 / 102)",
    "symptomPlaceholder": "ఏదైనా వ్యాధి, గాయం లేదా లక్షణాన్ని టైప్ చేయండి లేదా మాట్లాడండి...",
    "immediateActionsTitle": "వెంటనే చేయవలసిన పనులు",
    "whatNotToDoTitle": "చేయకూడని పనులు (హెచ్చరిక)",
    "emergencyFooter": "టోల్-ఫ్రీ అత్యవసర స్పందన • సమీప గ్రామ పంచాయతీ & ప్రాథమిక ఆరోగ్య కేంద్రం నుండి సహాయం",
    "surplusItemLabel": "మీ వద్ద ఉన్న అదనపు వస్తువు:",
    "neededItemLabel": "బదులుగా మీకు కావలసిన వస్తువు:",
    "calcTitle": "ప్రతిపాదిత మార్పిడి లెక్కింపు",
    "equalExchange": "ఖచ్చితమైన సమాన మార్పిడి",
    "fairValueParity": "సమాన విలువ నిష్పత్తి",
    "barterNote": "స్థానిక సాంప్రదాయ మార్కెట్ మార్పిడి విలువల ఆధారంగా లెక్కించబడింది.",
    "broadcastBtn": "మార్కెట్లో ప్రకటించండి",
    "broadcastSuccess": "✅ మార్కెట్లో ప్రకటించబడింది!",
    "boardTitle": "గ్రామ వనరుల భాగస్వామ్య బోర్డు (అద్లా-బద్లీ)",
    "boardSub": "సమాజంలో ప్రస్తుతం అందుబాటులో ఉన్న వ్యవసాయ పనిముట్లు.",
    "activePostsBadge": "సక్రియ జాబితాలు",
    "connectBtn": "సంప్రదించండి",
    "postSurplusTitle": "మీ అదనపు పరికరాన్ని నమోదు చేయండి",
    "postItemPlaceholder": "ఉదా. 5HP పంపు లేదా 20 కిలోల విత్తనాలు",
    "postContactPlaceholder": "ఉదా. రాంపాల్ - వార్డు 14, ఫోన్: 9876543210",
    "postSubmitBtn": "బోర్డులో పోస్ట్ చేయండి",
    "listingPosted": "విజయవంతంగా పోస్ట్ చేయబడింది!",
    "selectSystemTitle": "ఆధునిక వ్యవసాయ పద్ధతిని ఎంచుకోండి:",
    "switchBlueprintHint": "బ్లూప్రింట్ మార్చడానికి క్లిక్ చేయండి",
    "assemblyBlueprintTitle": "అసెంబ్లీ బ్లూప్రింట్",
    "sequentialMilestones": "దశలవారీ అసెంబ్లీ చెక్‌లిస్ట్:",
    "criticalMistakeTitle": "నివారించవలసిన తీవ్రమైన తప్పు",
    "procurementHubTitle": "పరికరాల కొనుగోలు & సబ్సిడీ హబ్",
    "procurementHubSub": "ధృవీకరించబడిన భాగస్వాములు, ఆన్‌లైన్ మార్కెట్ మరియు ప్రభుత్వ ఆర్థిక సహాయం.",
    "verifiedHubBadge": "ధృవీకృత హబ్",
    "colABadge": "కాలమ్ A • ధృవీకృత విక్రేతలు",
    "colAName": "కిసాన్ ఆగ్రో వర్టికల్ టెక్ ప్రైవేట్ లిమిటెడ్",
    "colADesc": "వర్టికల్ టవర్ మరియు హైడ్రోపోనిక్స్ ఏర్పాటుకు ప్రాంతీయ భాగస్వామి. 1 సంవత్సరం ఉచిత సర్వీస్ మరియు పోషకాల కిట్ లభించును.",
    "colACallBtn": "భాగస్వామికి కాల్ చేయండి",
    "colBBadge": "కాలమ్ B • ఆన్‌లైన్ మార్కెట్",
    "colBDesc": "అధికారిక సిస్టమ్స్, LED గ్రో లైట్స్ మరియు ఆటోమేటెడ్ పంపుల ప్రత్యక్ష కొనుగోలు పోర్టల్.",
    "colBOpenBtn": "స్టోర్ తెరవండి ↗",
    "colCBadge": "కాలమ్ C • ప్రభుత్వ సబ్సిడీలు & ఆర్థిక సహాయం",
    "colCOfficial": "ప్రభుత్వ పోర్టల్స్",
    "colCTitle": "జాతీయ సబ్సిడీలు & డిజిటల్ పోర్టల్స్",
    "colCReduction": "50% నుండి 75% ఖర్చు రాయితీ ధృవీకరించబడింది",
    "colCDesc": "వ్యవసాయ యాంత్రీకరణ, రాష్ట్ర పంట ప్రోత్సాహకాలు మరియు డిజిటల్ ల్యాండ్ రిజిస్ట్రీ కోసం ప్రత్యక్ష దరఖాస్తు:",
    "scheme1Title": "🚜 వ్యవసాయ యాంత్రీకరణ సబ్-మిషన్ (SBHS)",
    "scheme1Sub": "వ్యవసాయ యాంత్రీకరణ పథకం • myScheme",
    "scheme2Title": "🌱 రాష్ట్ర పంట ప్రోత్సాహక గ్రాంట్లు (JNPEDAK)",
    "scheme2Sub": "పంట అభివృద్ధి నిధులు • myScheme",
    "scheme3Title": "🏛️ అగ్రిస్టాక్ యూనిఫైడ్ డిజిటల్ రిజిస్ట్రీ",
    "scheme3Sub": "జాతీయ రైతు రిజిస్ట్రీ మరియు డిజిటల్ మౌలిక సదుపాయాలు • agristack.gov.in",
    "footerLeft": "డిజిటల్ గ్రామీణ సహాయ కేంద్రం • స్పష్టత, వాయిస్ నావిగేషన్ మరియు ఆఫ్‌లైన్ ప్రాప్యత కోసం రూపొందించబడింది",
    "footerRight": "గ్రామీణ్ AI • అమరావతి ఎడిషన్ v6.0"
  },
  "ta": {
    "headerSubtitle": "டிஜிட்டல் கிராமப்புற உதவி மையம் • தெளிவு மற்றும் குரல் உள்ளீட்டிற்காக வடிவமைக்கப்பட்டது",
    "homeBtn": "முகப்பு பக்கம்",
    "heroBadge": "குரல் வழி ஸ்மார்ட் கிராமப்புற உதவியாளர்",
    "heroTitle": "இன்று கிராமின்AI உங்களுக்கு எவ்வாறு உதவ முடியும்?",
    "heroSubtitle": "மைக்ரோஃபோனைத் தட்டவும் அல்லது தமிழில் பேசவும்—பாசனம், புகார், முதலுதவி அல்லது நவீன விவசாயத்திற்கு.",
    "searchListening": "🎙️ கேட்கிறது... தமிழில் பேசுங்கள்...",
    "searchIdle": "உதா. \"ஹைட்ரோபோனிக்ஸ்\", \"குடிநீர் தட்டுப்பாடு\", \"மின்தடை\", \"பாம்பு கடி\"",
    "trySpeaking": "பேசிப் பாருங்கள்:",
    "samplePhrases": [
      "ஹைட்ரோபோனிக்ஸ் விவசாய முறைகள்",
      "வார்டு 14ல் குடிநீர் விநியோகம் இல்லை",
      "வேளாண் மின்வெட்டு பிரச்சனை",
      "பாம்பு கடிக்கு அவசர முதலுதவி"
    ],
    "portalsTitle": "முக்கிய சேவை போர்ட்டல்கள்",
    "portalsSub": "தொகுதியைத் திறக்க ஏதேனும் ஒரு அட்டையைக் கிளிக் செய்க",
    "cardClimateTag": "வேளாண்-நீரியல்",
    "cardClimateTitle": "வானிலை & பாசனம்",
    "cardClimateSub": "செயற்கைக்கோள் ஈரப்பத டிராக்கர்",
    "cardClimateDesc": "மண் ஈரப்பத உகப்பாக்கம் (44% இலக்கு), அமராவதி இருப்பிடக் கண்காணிப்பு மற்றும் கால்வாய்ப் பாசன எச்சரிக்கைகள்.",
    "cardClimateAction": "வானிலை மையத்தைத் திறக்க",
    "cardGrievanceTag": "அமராவதி AMC போர்ட்டல்",
    "cardGrievanceTitle": "புகார் மனு",
    "cardGrievanceSub": "அதிகாரப்பூர்வ நகராட்சி கடிதம்",
    "cardGrievanceDesc": "நகராட்சி ஆணையருக்கு உத்தியோகபூர்வ சட்டப்பூர்வ மனுவை உருவாக்கவும், 1-கிளிக் நகல் மற்றும் வாட்ஸ்அப் பகிர்வு.",
    "cardGrievanceAction": "மனுவைத் தயார் செய்ய",
    "cardFirstAidTag": "அவசர நெறிமுறைகள்",
    "cardFirstAidTitle": "முதலுதவி வழிகாட்டி",
    "cardFirstAidSub": "உயிர் காக்கும் அவசர மருத்துவம்",
    "cardFirstAidDesc": "ஜிபிஎஸ் மருத்துவமனை கண்டறிதல், வாட்ஸ்அப் SOS ஒளிபரப்பு, படிப்படியான வழிகாட்டுதல் மற்றும் 'செய்யக்கூடாதவை' எச்சரிக்கைகள்.",
    "cardFirstAidAction": "அவசர சிகிச்சையைப் பெற",
    "cardAdlaBadliTag": "சந்தை பண்டமாற்று",
    "cardAdlaBadliTitle": "பண்டமாற்று பகிர்வு",
    "cardAdlaBadliSub": "கிராம வள பகிர்வு பலகை",
    "cardAdlaBadliDesc": "வேளாண் உபகரணங்கள் பரிமாற்றம், டிராக்டர்/பம்ப் பகிர்வு, நியாய மதிப்பு கணக்கீடு மற்றும் கிராம போர்டு.",
    "cardAdlaBadliAction": "கிராம பலகையைக் காண்க",
    "futureFarmingTag1": "புதிய துல்லிய வேளாண்மை",
    "futureFarmingTag2": "நபார்டு & MIDH அங்கீகரிக்கப்பட்டது",
    "futureFarmingTitle": "நவீன எதிர்கால விவசாயம்",
    "futureFarmingSub": "மண்ணில்லா நவீன சாகுபடி",
    "futureFarmingDesc": "செங்குத்து கோபுரங்கள், ஹைட்ரோபோனிக்ஸ் மற்றும் ஏரோபோனிக்ஸ் அமைப்புகள், சான்றளிக்கப்பட்ட விற்பனையாளர்கள் மற்றும் 50%-75% மானியங்கள்.",
    "futureFarmingAction": "திட்ட மையத்தைத் திறக்க",
    "tabClimate": "வானிலை & வரைபடம்",
    "tabGrievance": "புகார் மனு (AMC)",
    "tabFirstAid": "முதலுதவி & SOS",
    "tabAdlaBadli": "பண்டமாற்று பகிர்வு",
    "tabFutureFarming": "நவீன விவசாயம்",
    "satelliteTracker": "நேரடி செயற்கைக்கோள் & இருப்பிட டிராக்கர்",
    "nodeBadge": "அமராவதி முனை #14",
    "mapsCenter": "கூகிள் மேப்ஸ் மையம்: அமராவதி, ஆந்திரப் பிரதேசம், இந்தியா",
    "moistureMatrix": "மண் ஈரப்பத கண்காணிப்பு மேட்ரிக்ஸ்",
    "optimalBadge": "உகந்தது: 44%",
    "fieldDryness": "நிலத்தின் வறட்சி:",
    "rainForecast": "மழை முன்னறிவிப்பு:",
    "advisoryTitle": "தானியங்கி பாசன ஆலோசனை",
    "activeRainfallBadge": "மழை / மேகமூட்டம்",
    "activeRainfallText": "நிலை: அமராவதி பகுதியில் மழை பெய்கிறது. பாசனம் நிறுத்தப்பட்டது—கூடுதல் நீர் தேவையில்லை.",
    "highEvapoBadge": "அதிக நீர் இழப்பு",
    "highEvapoText": "நிலை: மண் ஈரப்பதம் 30% க்கும் குறைவாக உள்ளது. மாலை 17:00 மணிக்குள் 45 நிமிடங்கள் பாசனம் செய்யவும்.",
    "optimalMoistureBadge": "சமச்சீர் ஈரப்பதம்",
    "optimalMoistureText": "நிலை: மண் ஈரப்பதம் 44-48% உகந்த அளவில் உள்ளது. வழக்கமான பாசனத்தை தொடரவும்.",
    "waterStatusSufficient": "போதுமானது",
    "waterStatusSchedule": "பாசனத்திற்கு திட்டமிடுங்கள்",
    "waterStatusUrgent": "உடனடி பாசனம் தேவை",
    "soilTargetTitle": "கிருஷ்ணா படுகை மண் ஊட்டச்சத்து திட்டம்",
    "soilVariant": "கரிசல் / வண்டல் மண் வகை",
    "nitrogen": "நைட்ரஜன் (N)",
    "phosphorus": "பாஸ்பரஸ் (P)",
    "potassium": "பொட்டாசியம் (K)",
    "soilMicroSpike": "சிறப்புப் பரிந்துரை: அமராவதி கரிசல் மண்ணில் காரத்தன்மையைத் தடுக்க 25 கிலோ/ஹெக்டேர் துத்தநாக சல்பேட் + 50 கிலோ ஜிப்சம் இடவும்.",
    "pestCalendarTitle": "பூச்சி மேலாண்மை காலண்டர்",
    "pestCycleBadge": "செப்டம்பர் சுழற்சி",
    "pestItem1": "தண்டு துளைப்பான் எச்சரிக்கை: நெல் நாற்றங்காலில் ஏக்கருக்கு 8 இனக்கவர்ச்சிப் பொறிகளை வைக்கவும்.",
    "pestItem2": "புகையான் எச்சரிக்கை: காற்றோட்டத்திற்காக அடர்ந்த பயிர்களுக்கு இடையே ஒவ்வொரு 2 மீட்டருக்கும் 30 செ.மீ இடைவெளி விடவும்.",
    "callOfficerBtn": "வேளாண் அலுவலரை அழைக்கவும்",
    "targetAuthority": "இலக்கு நகராட்சி ஆணையம்",
    "amcTitle": "அமராவதி மாநகராட்சி (AMC)",
    "amcSub": "ஆந்திரப் பிரதேச அரசு • அதிகாரப்பூர்வ பொதுமக்கள் குறைதீர்க்கும் தளம்",
    "stepPickIssue": "படி 1: பிரச்சனையின் வகையைத் தேர்ந்தெடுக்கவும்",
    "issueWater": "குடிநீர் விநியோகம்",
    "issueElectricity": "மின்வெட்டு",
    "issueRoad": "சேதமடைந்த சாலை",
    "issueCanal": "கால்வாய் தூர்வாருதல்",
    "stepPickWard": "வார்டு / பகுதியைத் தேர்ந்தெடுக்கவும்:",
    "stepPickSignatory": "உங்கள் பெயர் / கையொப்பமிடுபவர்:",
    "signatoryPlaceholder": "உதா. ராம்பால் யாதவ்",
    "preparedForm": "தயாரிக்கப்பட்ட உத்தியோகபூர்வ மனு",
    "copyBtn": "📋 மனுவை நகலெடு",
    "copiedBtn": "✅ நகலெடுக்கப்பட்டது!",
    "printBtn": "🖨️ அச்சிடுக",
    "whatsappBtn": "💬 வாட்ஸ்அப்",
    "emergencyNodeBadge": "அவசர புவி-மருத்துவ மையம் • அமராவதி",
    "emergencyBarTitle": "1-தட்டல் மருத்துவ அவசர SOS & மருத்துவமனை கண்டறிதல்",
    "locateHospitalBtn": "அருகிலுள்ள மருத்துவமனை (AIIMS அமராவதி)",
    "sosBroadcastBtn": "குடும்பத்திற்கு SOS அனுப்ப",
    "nearestFacilityBadge": "அருகிலுள்ள மருத்துவமனை (2.4 கி.மீ • 6 நிமிடம்)",
    "aiimsTitle": "AIIMS மங்களகிரி மற்றும் அமராவதி சமூக சுகாதார மையம் (CHC துள்ளூர்)",
    "aiimsDesc": "24x7 அவசர அவசர சிகிச்சை, பாம்புக்கடி விஷமுறிவு மருந்து (ASV), ICU படுக்கைகள் மற்றும் ரத்த வங்கி வசதி.",
    "callDispatchBtn": "AIIMS அவசர அழைப்பு (108 / 102)",
    "symptomPlaceholder": "நோய், காயம் அல்லது அறிகுறிகளைத் தட்டச்சு செய்யவும் அல்லது பேசவும்...",
    "immediateActionsTitle": "உடனடி அவசர நடவடிக்கைகள்",
    "whatNotToDoTitle": "செய்யக்கூடாதவை (கடுமையான எச்சரிக்கை)",
    "emergencyFooter": "கட்டணமில்லா அவசர உதவி • அருகிலுள்ள கிராம பஞ்சாயத்து மற்றும் ஆரம்ப சுகாதார நிலையத்திலிருந்து உடனடி உதவி",
    "surplusItemLabel": "உங்களிடம் உள்ள கூடுதல் பொருள்:",
    "neededItemLabel": "உங்களுக்குத் தேவையான மாற்றுப் பொருள்:",
    "calcTitle": "பரிந்துரைக்கப்பட்ட பரிமாற்றக் கணக்கீடு",
    "equalExchange": "துல்லியமான சம பரிமாற்றம்",
    "fairValueParity": "நியாய மதிப்பு சமநிலை",
    "barterNote": "உள்ளூர் பாரம்பரிய சந்தைப் பண்டமாற்று மதிப்புகளின் அடிப்படையில் கணக்கிடப்பட்டது.",
    "broadcastBtn": "சந்தையில் ஒளிபரப்பவும்",
    "broadcastSuccess": "✅ சந்தையில் பகிரப்பட்டது!",
    "boardTitle": "கிராம உபகரணப் பகிர்வுப் பலகை (பண்டமாற்று)",
    "boardSub": "சமூகத்தில் தற்போது கிடைக்கும் விவசாயக் கருவிகள் மற்றும் பொருட்கள்.",
    "activePostsBadge": "செயலில் உள்ள பதிவுகள்",
    "connectBtn": "தொடர்பு கொள்ள",
    "postSurplusTitle": "உங்கள் கூடுதல் கருவியை அறிவிக்கவும்",
    "postItemPlaceholder": "உதா. 5HP பம்ப் அல்லது 20 கிலோ விதை",
    "postContactPlaceholder": "உதா. ராம்பால் - வார்டு 14, போன்: 9876543210",
    "postSubmitBtn": "பலகையில் பதிவிடவும்",
    "listingPosted": "வெற்றிகரமாகப் பதிவிடப்பட்டது!",
    "selectSystemTitle": "நவீன விவசாய முறையைத் தேர்ந்தெடுக்கவும்:",
    "switchBlueprintHint": "திட்டத்தை மாற்ற கிளிக் செய்யவும்",
    "assemblyBlueprintTitle": "அமைப்பு புளூபிரிண்ட்",
    "sequentialMilestones": "படிப்படியான அமைப்பு சரிபார்ப்புப் பட்டியல்:",
    "criticalMistakeTitle": "தவிர்க்க வேண்டிய கடுமையான தவறு",
    "procurementHubTitle": "உபகரணக் கொள்முதல் & மானிய மையம்",
    "procurementHubSub": "சரிபார்க்கப்பட்ட பங்குதாரர்கள், ஆன்லைன் சந்தை மற்றும் அரசு நிதியுதவி.",
    "verifiedHubBadge": "சரிபார்க்கப்பட்ட மையம்",
    "colABadge": "நெடுவரிசை A • சான்றளிக்கப்பட்ட விற்பனையாளர்கள்",
    "colAName": "கிசான் அக்ரோ வெர்டிகல் டெக் லிமிடெட்",
    "colADesc": "செங்குத்து கோபுரம் மற்றும் ஹைட்ரோபோனிக்ஸ் அமைப்பிற்கான பிராந்திய பங்குதாரர். 1 ஆண்டு இலவச பராமரிப்பு மற்றும் ஊட்டச்சத்து கிட் உள்ளடக்கியது.",
    "colACallBtn": "பங்குதாரரை அழைக்கவும்",
    "colBBadge": "நெடுவரிசை B • ஆன்லைன் சந்தை",
    "colBDesc": "அங்கீகரிக்கப்பட்ட கருவிகள், எல்இடி விளக்குகள் மற்றும் தானியங்கி பம்புகளை நேரடியாக வாங்கும் தளம்.",
    "colBOpenBtn": "கடையைத் திறக்க ↗",
    "colCBadge": "நெடுவரிசை C • அரசு மானியங்கள் & நிதியுதவி",
    "colCOfficial": "அரசு இணையதளங்கள்",
    "colCTitle": "தேசிய மானியங்கள் & டிஜிட்டல் தளங்கள்",
    "colCReduction": "50% முதல் 75% வரை செலவு குறைப்பு சரிபார்க்கப்பட்டது",
    "colCDesc": "வேளாண் இயந்திரமயமாக்கல், பயிர் ஊக்கத்தொகை மற்றும் டிஜிட்டல் நிலப் பதிவேடுக்கான நேரடி விண்ணப்பங்கள்:",
    "scheme1Title": "🚜 வேளாண் இயந்திரமயமாக்கல் துணை இயக்கம் (SBHS)",
    "scheme1Sub": "வேளாண் இயந்திரமயமாக்கல் திட்டம் • myScheme",
    "scheme2Title": "🌱 மாநில பயிர் ஊக்கத்தொகை மானியம் (JNPEDAK)",
    "scheme2Sub": "இலக்கு பயிர் மேம்பாட்டு நிதி • myScheme",
    "scheme3Title": "🏛️ அக்ரிஸ்டாக் ஒருங்கிணைந்த டிஜிட்டல் தளம்",
    "scheme3Sub": "தேசிய விவசாயிகள் பதிவேடு மற்றும் டிஜிட்டல் கட்டமைப்பு • agristack.gov.in",
    "footerLeft": "டிஜிட்டல் கிராமப்புற உதவி மையம் • தெளிவு, குரல் வழி வழிசெலுத்தல் மற்றும் ஆஃப்லைன் பயன்பாட்டிற்கு ஏற்றது",
    "footerRight": "கிராமின் AI • அமராவதி பதிப்பு v6.0"
  },
  "gu": {
    "headerSubtitle": "ડિજિટલ ગ્રામીણ સહાય કેન્દ્ર • સ્પષ્ટતા અને વૉઇસ ઇનપુટ માટે",
    "homeBtn": "મુખ્ય પૃષ્ઠ",
    "heroBadge": "વૉઇસ આધારિત સ્માર્ટ ગ્રામીણ સહાયક",
    "heroTitle": "આજે ગ્રામીણAI તમારી શી મદદ કરી શકે છે?",
    "heroSubtitle": "માઇક્રોફોન દબાવો અથવા ગુજરાતીમાં બોલો—સિંચાઈ, ફરિયાદ, તાત્કાલિક પ્રાથમિક સારવાર કે આધુનિક ખેતી માટે.",
    "searchListening": "🎙️ સાંભળી રહ્યા છીએ... કૃપા કરીને ગુજરાતીમાં બોલો...",
    "searchIdle": "દા.ત. \"હાઈડ્રોપોનિક્સ\", \"પાણીની તંગી\", \"વીજ કાપ\", \"સાપ કરડ્યો\"",
    "trySpeaking": "બોલી જુઓ:",
    "samplePhrases": [
      "હાઈડ્રોપોનિક્સ ખેતી પદ્ધતિ",
      "વોર્ડ ૧૪ માં પાણી નથી આવતું",
      "ખેતીમાં વીજળી વારંવાર કપાય છે",
      "સાપ કરડવા પર પ્રાથમિક સારવાર"
    ],
    "portalsTitle": "મુખ્ય સેવા પોર્ટલ",
    "portalsSub": "મોડ્યુલ ખોલવા માટે કોઈપણ કાર્ડ પર ક્લિક કરો",
    "cardClimateTag": "કૃષિ-જળ વિજ્ઞાન",
    "cardClimateTitle": "હવામાન અને સિંચાઈ",
    "cardClimateSub": "સેટેલાઇટ ભેજ ટ્રેકર",
    "cardClimateDesc": "જમીન ભેજ નિયંત્રણ (૪૪% લક્ષ્ય), સેટેલાઇટ ટ્રેકિંગ અને સાંજની નહેર સિંચાઈ ચેતવણી.",
    "cardClimateAction": "હવામાન કેન્દ્ર ખોલો",
    "cardGrievanceTag": "અમરાવતી AMC પોર્ટલ",
    "cardGrievanceTitle": "ફરિયાદ અરજી",
    "cardGrievanceSub": "મ્યુનિસિપલ કમિશનરને અરજી",
    "cardGrievanceDesc": "મ્યુનિસિપલ કમિશનરને ઔપચારિક કાનૂની અરજી તૈયાર કરો, ૧-ક્લિક કૉપિ અને વ્હોટ્સએપ સુવિધા.",
    "cardGrievanceAction": "અરજી તૈયાર કરો",
    "cardFirstAidTag": "ઇમરજન્સી પ્રોટોકોલ",
    "cardFirstAidTitle": "પ્રાથમિક સારવાર ગાઈડ",
    "cardFirstAidSub": "તાત્કાલિક જીવરક્ષક સારવાર",
    "cardFirstAidDesc": "જીપીએસ હોસ્પિટલ શોધક, વ્હોટ્સએપ SOS સંદેશ, તબક્કાવાર સૂચનાઓ અને 'શું ન કરવું' ચેતવણી.",
    "cardFirstAidAction": "સારવાર માહિતી જુઓ",
    "cardAdlaBadliTag": "મંડી વિનિમય નેટવર્ક",
    "cardAdlaBadliTitle": "અદલા-બદલી શેર",
    "cardAdlaBadliSub": "ગામ સાધન બોર્ડ",
    "cardAdlaBadliDesc": "સાધન વિનિમય, ટ્રેક્ટર/પંપ શેરિંગ, સમાન મૂલ્ય ગણતરી અને ખેડૂત બોર્ડ.",
    "cardAdlaBadliAction": "ગામ બોર્ડ જુઓ",
    "futureFarmingTag1": "નવીન કૃષિ ટેકનોલોજી",
    "futureFarmingTag2": "નાબાર્ડ અને MIDH માન્ય",
    "futureFarmingTitle": "આધુનિક પ્રગતિશીલ ખેતી",
    "futureFarmingSub": "માટી વગરની સચોટ ખેતી",
    "futureFarmingDesc": "વર્ટિકલ ટાવર, હાઈડ્રોપોનિક્સ અને એરોપોનિક્સ બ્લૂપ્રિન્ટ્સ, પ્રમાણિત વિક્રેતા લિંક્સ અને ૫૦%–૭૫% સબસિડી.",
    "futureFarmingAction": "બ્લૂપ્રિન્ટ હબ જુઓ",
    "tabClimate": "હવામાન અને નકશો",
    "tabGrievance": "ફરિયાદ અરજી (AMC)",
    "tabFirstAid": "પ્રાથમિક સારવાર અને SOS",
    "tabAdlaBadli": "અદલા-બદલી શેર",
    "tabFutureFarming": "આધુનિક ખેતી",
    "satelliteTracker": "લાઈવ સેટેલાઇટ અને ભૌગોલિક ટ્રેકર",
    "nodeBadge": "અમરાવતી નોડ #૧૪",
    "mapsCenter": "ગૂગલ મેપ્સ સેન્ટર: અમરાવતી, આંધ્ર પ્રદેશ, ભારત",
    "moistureMatrix": "જમીન ભેજ મોનિટરિંગ મેટ્રિક્સ",
    "optimalBadge": "આદર્શ: ૪૪%",
    "fieldDryness": "જમીનનો સૂકાપો:",
    "rainForecast": "વરસાદની આગાહી:",
    "advisoryTitle": "સ્વયંચાલિત સિંચાઈ સલાહ",
    "activeRainfallBadge": "વરસાદ / વાદળછાયું",
    "activeRainfallText": "સ્થિતિ: અમરાવતી વિસ્તારમાં વરસાદ ચાલુ છે. સિંચાઈ સ્થગિત—વધારાના પાણીની જરૂર નથી.",
    "highEvapoBadge": "વધુ ભેજ નુકસાન",
    "highEvapoText": "સ્થિતિ: જમીનમાં ભેજ ૩૦% થી ઓછો છે. સાંજે ૧૭:૦૦ પહેલાં ૪૫ મિનિટ સિંચાઈ કરો.",
    "optimalMoistureBadge": "સંતુલિત ભેજ સ્તર",
    "optimalMoistureText": "સ્થિતિ: જમીનમાં ભેજ ૪૪–૪૮% ના શ્રેષ્ઠ સ્તરે છે. નિયમિત સિંચાઈ ચાલુ રાખો.",
    "waterStatusSufficient": "પૂરતું છે",
    "waterStatusSchedule": "સિંચાઈનું આયોજન કરો",
    "waterStatusUrgent": "તાત્કાલિક સિંચાઈ જરૂરી",
    "soilTargetTitle": "કૃષ્ણા ડેલ્ટા જમીન પોષણ બ્લૂપ્રિન્ટ",
    "soilVariant": "કાળી / કાંપવાળી જમીન",
    "nitrogen": "નાઇટ્રોજન (N)",
    "phosphorus": "ફોસ્ફરસ (P)",
    "potassium": "પોટેશિયમ (K)",
    "soilMicroSpike": "ખાસ ભલામણ: અમરાવતીની કાળી માટીમાં ક્ષાર અટકાવવા માટે હેક્ટર દીઠ ૨૫ કિગ્રા ઝિંક સલ્ફેટ + ૫૦ કિગ્રા જીપ્સમ નાખો.",
    "pestCalendarTitle": "જીવાત નિયંત્રણ કેલેન્ડર",
    "pestCycleBadge": "સપ્ટેમ્બર સાયકલ",
    "pestItem1": "ગાભમારાની ઈયળ એલર્ટ: ડાંગરના ધરૂવાડિયામાં એકર દીઠ ૮ ફેરોમોન ટ્રેપ લગાવો.",
    "pestItem2": "તડતડિયા ચેતવણી: હવાઉજાસ માટે ગાઢ પાકમાં દર ૨ મીટરે ૩૦ સેમીની પાંખી રાખો.",
    "callOfficerBtn": "કૃષિ અધિકારીને કૉલ કરો",
    "targetAuthority": "સંબંધિત મ્યુનિસિપલ ઓથોરિટી",
    "amcTitle": "અમરાવતી મ્યુનિસિપલ કોર્પોરેશન (AMC)",
    "amcSub": "આંધ્ર પ્રદેશ સરકાર • સત્તાવાર ફરિયાદ નિવારણ પોર્ટલ",
    "stepPickIssue": "પગલું ૧: સમસ્યાનો પ્રકાર પસંદ કરો",
    "issueWater": "પાણી પુરવઠો",
    "issueElectricity": "વીજ કાપ",
    "issueRoad": "તૂટેલો રસ્તો",
    "issueCanal": "નહેરમાંથી કાંપ કાઢવો",
    "stepPickWard": "વોર્ડ / વિસ્તાર પસંદ કરો:",
    "stepPickSignatory": "તમારું નામ / અરજદાર:",
    "signatoryPlaceholder": "દા.ત. રામપાલ યાદવ",
    "preparedForm": "તૈયાર થયેલી સત્તાવાર અરજી",
    "copyBtn": "📋 અરજી કૉપિ કરો",
    "copiedBtn": "✅ કૉપિ સફળ થઈ!",
    "printBtn": "🖨️ પ્રિન્ટ કરો",
    "whatsappBtn": "💬 વ્હોટ્સએપ",
    "emergencyNodeBadge": "ઇમરજન્સી જિઓ-મેડિકલ નોડ • અમરાવતી",
    "emergencyBarTitle": "૧-ટેપ ઇમરજન્સી SOS અને હોસ્પિટલ શોધક",
    "locateHospitalBtn": "નજીકની હોસ્પિટલ (AIIMS અમરાવતી)",
    "sosBroadcastBtn": "પરિવારને SOS મોકલો",
    "nearestFacilityBadge": "નજીકની હોસ્પિટલ (૨.૪ કિમી • ૬ મિનિટ)",
    "aiimsTitle": "AIIMS મંગલાગિરિ અને અમરાવતી કમ્યુનિટી હેલ્થ સેન્ટર (CHC થુલ્લૂર)",
    "aiimsDesc": "૨૪x૭ ઇમરજન્સી ટ્રોમા કેર, એન્ટી-સ્નેક વેનમ (ASV), આઈસીયુ બેડ અને બ્લડ બેંક ઉપલબ્ધ.",
    "callDispatchBtn": "AIIMS ડિસ્પેચ કૉલ (૧૦૮ / ૧૦૨)",
    "symptomPlaceholder": "કોઈપણ રોગ, ઈજા કે લક્ષણનું નામ લખો કે બોલો...",
    "immediateActionsTitle": "તાત્કાલિક જરૂરી પગલાં",
    "whatNotToDoTitle": "શું બિલકુલ ન કરવું (ચેતવણી)",
    "emergencyFooter": "ટોલ-ફ્રી ઇમરજન્સી સેવા • નજીકની ગ્રામ પંચાયત અને આરોગ્ય કેન્દ્ર તરફથી તાત્કાલિક સહાય",
    "surplusItemLabel": "તમારી પાસે ઉપલબ્ધ વધારાની વસ્તુ:",
    "neededItemLabel": "બદલામાં જોઈતી વસ્તુ:",
    "calcTitle": "પ્રસ્તાવિત વિનિમય ગણતરી",
    "equalExchange": "ચોક્કસ સમાન વિનિમય",
    "fairValueParity": "વાજબી મૂલ્ય સમાનતા",
    "barterNote": "સ્થાનિક પરંપરાગત મંડી મૂલ્યાંકન પર આધારિત. સમાનતા માટે વસ્તુઓ સરખાવો.",
    "broadcastBtn": "બજારમાં જાહેરાત કરો",
    "broadcastSuccess": "✅ બજારમાં જાહેરાત થઈ ગઈ!",
    "boardTitle": "ગામ સંસાધન શેરિંગ બોર્ડ (અદલા-બદલી)",
    "boardSub": "સમુદાયમાં હાલમાં ઉપલબ્ધ ખેતી સાધનો અને વસ્તુઓ.",
    "activePostsBadge": "સક્રિય યાદી",
    "connectBtn": "સંપર્ક કરો",
    "postSurplusTitle": "તમારું વધારાનું સાધન નોંધાવો",
    "postItemPlaceholder": "દા.ત. ૫ HP પંપ અથવા ૨૦ કિલો બિયારણ",
    "postContactPlaceholder": "દા.ત. રામપાલ - વોર્ડ ૧૪, ફોન: ૯૮૭૬૫૪૩૨૧૦",
    "postSubmitBtn": "બોર્ડ પર મૂકો",
    "listingPosted": "સફળતાપૂર્વક નોંધાઈ ગયું!",
    "selectSystemTitle": "આધુનિક ખેતી પદ્ધતિ પસંદ કરો:",
    "switchBlueprintHint": "બ્લૂપ્રિન્ટ બદલવા ક્લિક કરો",
    "assemblyBlueprintTitle": "સેટઅપ બ્લૂપ્રિન્ટ",
    "sequentialMilestones": "તબક્કાવાર સેટઅપ યાદી:",
    "criticalMistakeTitle": "ટાળવા જેવી ગંભીર ભૂલ",
    "procurementHubTitle": "સાધન ખરીદી અને સરકારી સબસિડી કેન્દ્ર",
    "procurementHubSub": "પ્રમાણિત ભાગીદારો, ઑનલાઇન માર્કેટ અને સરકારી નાણાકીય સહાય.",
    "verifiedHubBadge": "પ્રમાણિત કેન્દ્ર",
    "colABadge": "કૉલમ A • પ્રમાણિત વિક્રેતાઓ",
    "colAName": "કિસાનએગ્રો વર્ટિકલ ટેક લિ.",
    "colADesc": "વર્ટિકલ ટાવર અને હાઈડ્રોપોનિક્સ સેટઅપ માટે પ્રાદેશિક ભાગીદાર. ૧ વર્ષ ફ્રી સર્વિસ અને પોષક કિટ શામેલ.",
    "colACallBtn": "પાર્ટનરને કૉલ કરો",
    "colBBadge": "કૉલમ B • ઑનલાઇન સ્ટોર",
    "colBDesc": "સત્તાવાર સાધનો, એલઇડી ગ્રો-લાઇટ્સ અને ઓટોમેટેડ પંપ ખરીદવા માટેનું પોર્ટલ.",
    "colBOpenBtn": "સ્ટોર ખોલો ↗",
    "colCBadge": "કૉલમ C • સરકારી સબસિડી અને નાણાકીય સહાય",
    "colCOfficial": "સત્તાવાર પોર્ટલ",
    "colCTitle": "રાષ્ટ્રીય સબસિડી અને ડિજિટલ પોર્ટલ",
    "colCReduction": "૫૦% થી ૭૫% ખર્ચ રાહત પ્રમાણિત",
    "colCDesc": "કૃષિ યાંત્રિકીકરણ, પાક પ્રોત્સાહન અને ડિજિટલ જમીન નોંધણી માટે સીધી અરજી:",
    "scheme1Title": "🚜 કૃષિ યાંત્રિકીકરણ સબ-મિશન (SBHS)",
    "scheme1Sub": "કૃષિ યાંત્રિકીકરણ યોજના • myScheme",
    "scheme2Title": "🌱 રાજ્ય પાક પ્રોત્સાહન ગ્રાન્ટ (JNPEDAK)",
    "scheme2Sub": "લક્ષિત પાક વિકાસ ભંડોળ • myScheme",
    "scheme3Title": "🏛️ એગ્રીસ્ટેક સંકલિત ડિજિટલ રજિસ્ટ્રી",
    "scheme3Sub": "રાષ્ટ્રીય ખેડૂત રજિસ્ટ્રી અને ડિજિટલ ઈન્ફ્રા • agristack.gov.in",
    "footerLeft": "ડિજિટલ ગ્રામીણ સહાય કેન્દ્ર • સ્પષ્ટતા, વૉઇસ નેવિગેશન અને ઑફલાઇન ઉપયોગ માટે તૈયાર",
    "footerRight": "ગ્રામીણ AI • અમરાવતી આવૃત્તિ v6.0"
  },
  "ur": {
    "headerSubtitle": "ڈیجیٹل دیہی امدادی مرکز • بصری وضاحت اور صوتی رہنمائی کے لیے تیار کردہ",
    "homeBtn": "مرکزی صفحہ",
    "heroBadge": "صوتی بنیاد پر اسمارٹ دیہی معاون",
    "heroTitle": "آج گرامین اے آئی آپ کی کیا مدد کر سکتا ہے؟",
    "heroSubtitle": "مائیکروفون کو دبائیں یا بولیں—آبپاشی، شکایت، ہنگامی طبی امداد، یا جدید زراعت کے لیے۔",
    "searchListening": "🎙️ سن رہے ہیں... برائے مہربانی اردو میں بولیں...",
    "searchIdle": "مثلاً \"ہائیڈروپونکس\"، \"پانی کی قلت\"، \"بجلی کی کٹوتی\"، \"سانپ کا کاٹنا\"",
    "trySpeaking": "بول کر دیکھیں:",
    "samplePhrases": [
      "ہائیڈروپونکس کاشتکاری کا طریقہ",
      "وارڈ 14 میں دو دن سے پانی نہیں ہے",
      "زرعی بجلی کی بار بار کٹوتی",
      "سانپ کے کاٹنے پر فوری ابتدائی طبی امداد"
    ],
    "portalsTitle": "اہم خدمات کے پورٹلز",
    "portalsSub": "ماڈیول کھولنے کے لیے کسی بھی کارڈ پر کلک کریں",
    "cardClimateTag": "زرعی آبیات",
    "cardClimateTitle": "موسم اور آبپاشی",
    "cardClimateSub": "سیٹلائٹ نمی ٹریکر",
    "cardClimateDesc": "مٹی میں نمی کا تناسب (44% ہدف)، سیٹلائٹ ٹریکنگ اور شام کے وقت نہری آبپاشی کی ہدایات۔",
    "cardClimateAction": "موسمیاتی مرکز کھولیں",
    "cardGrievanceTag": "امراوتی AMC پورٹل",
    "cardGrievanceTitle": "شکایت نامہ",
    "cardGrievanceSub": "میونسپل کارپوریشن کو درخواست",
    "cardGrievanceDesc": "میونسپل کمشنر کے نام باضابطہ قانونی خط تیار کریں، 1-کلک کاپی اور واٹس ایپ شیئرنگ۔",
    "cardGrievanceAction": "درخواست تیار کریں",
    "cardFirstAidTag": "ہنگامی پروٹوکول",
    "cardFirstAidTitle": "ابتدائی طبی امداد",
    "cardFirstAidSub": "جان بچانے والی ہنگامی طبی رہنمائی",
    "cardFirstAidDesc": "جی پی ایس ہسپتال تلاش کنندہ، واٹس ایپ SOS میسج، مرحلہ وار ہدایات اور 'کیا نہ کریں' انتباہ۔",
    "cardFirstAidAction": "طبی امداد دیکھیں",
    "cardAdlaBadliTag": "منڈی تبادلہ نیٹ ورک",
    "cardAdlaBadliTitle": "تبادلہ و اشتراک",
    "cardAdlaBadliSub": "دیہی وسائل کا بورڈ",
    "cardAdlaBadliDesc": "زرعی آلات کا تبادلہ، ٹریکٹر/پمپ کی شراکت داری، منڈی کی منصفانہ قیمت کا حساب اور کسان بورڈ۔",
    "cardAdlaBadliAction": "دیہی بورڈ دیکھیں",
    "futureFarmingTag1": "جدید زرعی ٹیکنالوجی",
    "futureFarmingTag2": "نابارڈ اور MIDH سے منظور شدہ",
    "futureFarmingTitle": "جدید مستقبل کی زراعت",
    "futureFarmingSub": "بغیر مٹی کے جدید کاشتکاری",
    "futureFarmingDesc": "ورٹیکل ٹاور، ہائیڈروپونکس اور ایروپونکس کے خاکے، تصدیق شدہ دکانداروں کے لنکس اور 50% تا 75% سبسڈی۔",
    "futureFarmingAction": "خاکہ مرکز دیکھیں",
    "tabClimate": "موسم اور نقشہ",
    "tabGrievance": "شکایت نامہ (AMC)",
    "tabFirstAid": "طبی امداد اور SOS",
    "tabAdlaBadli": "تبادلہ و اشتراک",
    "tabFutureFarming": "جدید زراعت",
    "satelliteTracker": "لائیو سیٹلائٹ اور جغرافیائی ٹریکر",
    "nodeBadge": "امراوتی نوڈ #14",
    "mapsCenter": "گوگل میپس سینٹر: امراوتی، آندھرا پردیش، بھارت",
    "moistureMatrix": "مٹی کی نمی کا مانیٹرنگ میٹرکس",
    "optimalBadge": "مثالی: 44%",
    "fieldDryness": "کھیت کا سوکھاپن:",
    "rainForecast": "بارش کی پیش گوئی:",
    "advisoryTitle": "خودکار آبپاشی کا مشورہ",
    "activeRainfallBadge": "بارش / ابر آلود",
    "activeRainfallText": "حالت: امراوتی علاقے میں بارش جاری ہے۔ آبپاشی معطل—اضافی پانی کی ضرورت نہیں۔",
    "highEvapoBadge": "زیادہ بخارات کا اخراج",
    "highEvapoText": "حالت: مٹی میں نمی 30% سے کم ہے۔ شام 17:00 بجے سے پہلے 45 منٹ آبپاشی کریں۔",
    "optimalMoistureBadge": "متوازن نمی کی سطح",
    "optimalMoistureText": "حالت: مٹی میں نمی 44 تا 48 فیصد مثالی سطح پر ہے۔ معمول کی آبپاشی جاری رکھیں۔",
    "waterStatusSufficient": "کافی ہے",
    "waterStatusSchedule": "آبپاشی کا منصوبہ بنائیں",
    "waterStatusUrgent": "فوری آبپاشی درکار ہے",
    "soilTargetTitle": "دریائے کرشنا کے طاس کی مٹی کے غذائی اجزاء",
    "soilVariant": "کالی / زرخیز مٹی کی قسم",
    "nitrogen": "نائٹروجن (N)",
    "phosphorus": "فاسفورس (P)",
    "potassium": "پوٹاشیم (K)",
    "soilSpike": "خصوصی مشورہ: امراوتی کی کالی مٹی میں کھار کو روکنے کے لیے فی ہیکٹر 25 کلو زنک سلفیٹ + 50 کلو جپسم ڈالیں۔",
    "pestCalendarTitle": "کیڑوں کی روک تھام کا کیلنڈر",
    "pestCycleBadge": "ستمبر کا چکر",
    "pestItem1": "تنے کے کیڑے کا الرٹ: دھان کی نرسری میں فی ایکڑ 8 فیرومون ٹریپس لگائیں۔",
    "pestItem2": "بی پی ایچ الرٹ: ہوا کی روانی کے لیے گھنی فصل کے درمیان ہر 2 میٹر پر 30 سینٹی میٹر کا فاصلہ رکھیں۔",
    "callOfficerBtn": "زرعی افسر کو کال کریں",
    "targetAuthority": "متعلقہ میونسپل اتھارٹی",
    "amcTitle": "امراوتی میونسپل کارپوریشن (AMC)",
    "amcSub": "حکومت آندھرا پردیش • باضابطہ عوامی شکایات کا پورٹل",
    "stepPickIssue": "مرحلہ 1: مسئلے کی نوعیت منتخب کریں",
    "issueWater": "پانی کی فراہمی",
    "issueElectricity": "بجلی کی کٹوتی",
    "issueRoad": "ٹوٹی ہوئی سڑک",
    "issueCanal": "نہر سے گاد کی صفائی",
    "stepPickWard": "وارڈ / علاقہ منتخب کریں:",
    "stepPickSignatory": "آپ کا نام / درخواست گزار:",
    "signatoryPlaceholder": "مثلاً رامپال یادو",
    "preparedForm": "تیار شدہ باضابطہ درخواست",
    "copyBtn": "📋 درخواست کاپی کریں",
    "copiedBtn": "✅ کاپی کامیاب ہوئی!",
    "printBtn": "🖨️ پرنٹ کریں",
    "whatsappBtn": "💬 واٹس ایپ",
    "emergencyNodeBadge": "ہنگامی طبی نوڈ • امراوتی",
    "emergencyBarTitle": "1-ٹیپ ہنگامی SOS اور ہسپتال تلاش کنندہ",
    "locateHospitalBtn": "قریبی ہسپتال (AIIMS امراوتی)",
    "sosBroadcastBtn": "خاندان کو SOS بھیجیں",
    "nearestFacilityBadge": "قریبی ہسپتال (2.4 کلومیٹر • 6 منٹ)",
    "aiimsTitle": "AIIMS منگلاگری اور امراوتی کمیونٹی ہیلتھ سینٹر (CHC تھلور)",
    "aiimsDesc": "24x7 ہنگامی ٹراما کیئر، سانپ کے زہر کا تریاق (ASV)، آئی سی یو بیڈز اور بلڈ بینک دستیاب۔",
    "callDispatchBtn": "AIIMS ایمرجنسی کال (108 / 102)",
    "symptomPlaceholder": "کسی بھی بیماری، چوٹ یا علامت کا نام لکھیں یا بولیں...",
    "immediateActionsTitle": "فوری ضروری اقدامات",
    "whatNotToDoTitle": "کیا ہرگز نہ کریں (سخت تنبیہ)",
    "emergencyFooter": "ٹول فری ہنگامی سروس • قریبی گرام پنچایت اور پرائمری ہیلتھ سینٹر سے فوری مدد",
    "surplusItemLabel": "آپ کے پاس اضافی چیز:",
    "neededItemLabel": "بدلے میں مطلوبہ چیز:",
    "calcTitle": "تجویز کردہ تبادلے کا حساب",
    "equalExchange": "بالکل برابر تبادلہ",
    "fairValueParity": "منصفانہ قیمت کی برابری",
    "barterNote": "مقامی روایتی منڈی تبادلے کی قیمتوں پر مبنی۔ برابری کے لیے اشیاء کا موازنہ کریں۔",
    "broadcastBtn": "منڈی میں نشر کریں",
    "broadcastSuccess": "✅ منڈی میں نشر کر دیا گیا!",
    "boardTitle": "دیہی وسائل کی شراکت داری کا بورڈ (تبادلہ)",
    "boardSub": "کمیونٹی میں فی الوقت دستیاب زرعی آلات اور اشیاء۔",
    "activePostsBadge": "فعال فہرستیں",
    "connectBtn": "رابطہ کریں",
    "postSurplusTitle": "اپنا اضافی آلہ یا شے درج کریں",
    "postItemPlaceholder": "مثلاً 5 HP پمپ یا 20 کلو بیج",
    "postContactPlaceholder": "مثلاً رامپال - وارڈ 14، فون: 9876543210",
    "postSubmitBtn": "بورڈ پر شائع کریں",
    "listingPosted": "کامیابی سے درج ہو گیا!",
    "selectSystemTitle": "جدید طریقہ کاشت منتخب کریں:",
    "switchBlueprintHint": "خاکہ تبدیل کرنے کے لیے کلک کریں",
    "assemblyBlueprintTitle": "تنصیب کا خاکہ",
    "sequentialMilestones": "مرحلہ وار تنصیب کی جانچ پڑتال:",
    "criticalMistakeTitle": "اس سنگین غلطی سے بچیں",
    "procurementHubTitle": "آلات کی خریداری اور سرکاری سبسڈی کا مرکز",
    "procurementHubSub": "تصدیق شدہ شراکت دار، آن لائن مارکیٹ اور سرکاری مالی امداد۔",
    "verifiedHubBadge": "تصدیق شدہ مرکز",
    "colABadge": "کالم A • تصدیق شدہ دکاندار",
    "colAName": "کسان ایگرو ورٹیکل ٹیک لمیٹڈ",
    "colADesc": "ورٹیکل ٹاور اور ہائیڈروپونکس کی تنصیب کے لیے علاقائی شراکت دار۔ 1 سال مفت سروس اور نیوٹرینٹ کٹ شامل ہے۔",
    "colACallBtn": "پارٹنر کو کال کریں",
    "colBBadge": "کالم B • آن لائن مارکیٹ",
    "colBDesc": "باضابطہ آلات، ایل ای ڈی لائٹس اور خودکار پمپس کی براہ راست خریداری کا پورٹل۔",
    "colBOpenBtn": "اسٹور کھولیں ↗",
    "colCBadge": "کالم C • سرکاری سبسڈی اور مالی امداد",
    "colCOfficial": "سرکاری پورٹلز",
    "colCTitle": "قومی سبسڈی اور ڈیجیٹل پورٹلز",
    "colCReduction": "50% سے 75% لاگت میں رعایت کی تصدیق",
    "colCDesc": "زرعی مشینی کاری، فصلی مراعات اور ڈیجیٹل اراضی کے اندراج کے لیے براہ راست درخواستیں:",
    "scheme1Title": "🚜 زرعی مشینی کاری کا ذیلی مشن (SBHS)",
    "scheme1Sub": "زرعی مشینی کاری اسکیم • myScheme",
    "scheme2Title": "🌱 ریاستی فصلی مراعات کی گرانٹ (JNPEDAK)",
    "scheme2Sub": "فصل کی ترقی کا فنڈ • myScheme",
    "scheme3Title": "🏛️ ایگری اسٹیک ڈیجیٹل رجسٹری",
    "scheme3Sub": "قومی کسان رجسٹری اور ڈیجیٹل ڈھانچہ • agristack.gov.in",
    "footerLeft": "ڈیجیٹل دیہی امدادی مرکز • بصری وضاحت، صوتی رہنمائی اور آف لائن رسائی کے لیے تیار کردہ",
    "footerRight": "گرامین اے آئی • امراوتی ایڈیشن v6.0"
  },
  "kn": {
    "headerSubtitle": "ಡಿಜಿಟಲ್ ಗ್ರಾಮೀಣ ಸಹಾಯಕ ಕೇಂದ್ರ • ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಧ್ವನಿ ಇನ್‌ಪುಟ್‌ಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",
    "homeBtn": "ಮುಖ್ಯ ಪುಟ",
    "heroBadge": "ಧ್ವನಿ ಆಧಾರಿತ ಸ್ಮಾರ್ಟ್ ಗ್ರಾಮೀಣ ಸಹಾಯಕ",
    "heroTitle": "ಗ್ರಾಮೀಣ್ AI ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    "heroSubtitle": "ಮೈಕ್ರೊಫೋನ್ ಒತ್ತಿರಿ ಅಥವಾ ಮಾತನಾಡಿ—ನೀರಾವರಿ, ದೂರು, ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಅಥವಾ ಆಧುನಿಕ ಕೃಷಿಗಾಗಿ.",
    "searchListening": "🎙️ ಆಲಿಸಲಾಗುತ್ತಿದೆ... ದಯವಿಟ್ಟು ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ...",
    "searchIdle": "ಉದಾ. \"ಹೈಡ್ರೋಪೋನಿಕ್ಸ್\", \"ನೀರಿನ ಸಮಸ್ಯೆ\", \"ವಿದ್ಯುತ್ ಕಡಿತ\", \"ಹಾವು ಕಡಿತ\"",
    "trySpeaking": "ಮಾತನಾಡಿ ನೋಡಿ:",
    "samplePhrases": [
      "ಹೈಡ್ರೋಪೋನಿಕ್ಸ್ ಕೃಷಿ ವಿಧಾನಗಳು",
      "ವಾರ್ಡ್ 14 ರಲ್ಲಿ ನೀರಿನ ಕೊರತೆಯಾಗಿದೆ",
      "ಕೃಷಿ ವಿದ್ಯುತ್ ಪದೇ ಪದೇ ಕಡಿತಗೊಳ್ಳುತ್ತಿದೆ",
      "ಹಾವು ಕಡಿತಕ್ಕೆ ತುರ್ತು ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ"
    ],
    "portalsTitle": "ಮುಖ್ಯ ಸೇವಾ ಪೋರ್ಟಲ್‌ಗಳು",
    "portalsSub": "ಮಾಡ್ಯೂಲ್ ತೆರೆಯಲು ಯಾವುದೇ ಕಾರ್ಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
    "cardClimateTag": "ಕೃಷಿ-ಜಲ ವಿಜ್ಞಾನ",
    "cardClimateTitle": "ಹವಾಮಾನ & ನೀರಾವರಿ",
    "cardClimateSub": "ಉಪಗ್ರಹ ತೇವಾಂಶ ಟ್ರ್ಯಾಕರ್",
    "cardClimateDesc": "ಮಣ್ಣಿನ ತೇವಾಂಶ ನಿರ್ವಹಣೆ (44% ಗುರಿ), ಅಮರಾವತಿ ಪ್ರಾದೇಶಿಕ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಸಂಜೆಯ ಕಾಲುವೆ ನೀರಾವರಿ ಎಚ್ಚರಿಕೆಗಳು.",
    "cardClimateAction": "ಹವಾಮಾನ ಕೇಂದ್ರ ತೆರೆಯಿರಿ",
    "cardGrievanceTag": "ಅಮರಾವತಿ AMC ಪೋರ್ಟಲ್",
    "cardGrievanceTitle": "ದೂರು ಅರ್ಜಿ",
    "cardGrievanceSub": "ಅಧಿಕೃತ ಪಾಲಿಕೆ ಅರ್ಜಿ",
    "cardGrievanceDesc": "ಮುನ್ಸಿಪಲ್ ಕಮಿಷನರ್‌ಗೆ ಅಧಿಕೃತ ಕಾನೂನು ಪತ್ರವನ್ನು ಸಿದ್ಧಪಡಿಸಿ, 1-ಕ್ಲಿಕ್ ಕಾಪಿ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಹಂಚಿಕೆ.",
    "cardGrievanceAction": "ಅರ್ಜಿ ಸಿದ್ಧಪಡಿಸಿ",
    "cardFirstAidTag": "ತುರ್ತು ಪ್ರೋಟೋಕಾಲ್",
    "cardFirstAidTitle": "ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಮಾರ್ಗದರ್ಶಿ",
    "cardFirstAidSub": "ಜೀವ ರಕ್ಷಕ ತುರ್ತು ಚಿಕಿತ್ಸೆ",
    "cardFirstAidDesc": "ಜಿಪಿಎಸ್ ಆಸ್ಪತ್ರೆ ಶೋಧಕ, ವಾಟ್ಸಾಪ್ SOS ಸಂದೇಶ, ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳು ಮತ್ತು 'ಮಾಡಬಾರದ ಕೆಲಸಗಳು' ಎಚ್ಚರಿಕೆ.",
    "cardFirstAidAction": "ತುರ್ತು ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ",
    "cardAdlaBadliTag": "ಮಾರುಕಟ್ಟೆ ವಿನಿಮಯ",
    "cardAdlaBadliTitle": "ಅದ್ಲಾ-ಬದ್ಲಿ ವಿನಿಮಯ",
    "cardAdlaBadliSub": "ಗ್ರಾಮ ಸಂಪನ್ಮೂಲ ಮಂಡಳಿ",
    "cardAdlaBadliDesc": "ಕೃಷಿ ಸಲಕರಣೆಗಳ ವಿನಿಮಯ, ಟ್ರ್ಯಾಕ್ಟರ್/ಪಂಪ್ ಹಂಚಿಕೆ, ಮೌಲ್ಯ ಸಮಾನತೆಯ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ರೈತ ಮಂಡಳಿ.",
    "cardAdlaBadliAction": "ಗ್ರಾಮ ಬೋರ್ಡ್ ನೋಡಿ",
    "futureFarmingTag1": "ಹೊಸ ನಿಖರ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ",
    "futureFarmingTag2": "ನಬಾರ್ಡ್ ಮತ್ತು MIDH ಅನುಮೋದಿತ",
    "futureFarmingTitle": "ಆಧುನಿಕ ಭವಿಷ್ಯದ ಕೃಷಿ",
    "futureFarmingSub": "ಮಣ್ಣು ರಹಿತ ಆಧುನಿಕ ಕೃಷಿ",
    "futureFarmingDesc": "ವರ್ಟಿಕಲ್ ಟವರ್, ಹೈಡ್ರೋಪೋನಿಕ್ಸ್ ಮತ್ತು ಏರೋಪೋನಿಕ್ಸ್ ಬ್ಲೂಪ್ರಿಂಟ್‌ಗಳು, ಪರಿಶೀಲಿಸಿದ ಮಾರಾಟಗಾರರ ಲಿಂಕ್‌ಗಳು ಮತ್ತು 50%–75% ಸಬ್ಸಿಡಿ.",
    "futureFarmingAction": "ಬ್ಲೂಪ್ರಿಂಟ್ ಹಬ್ ನೋಡಿ",
    "tabClimate": "ಹವಾಮಾನ & ನಕ್ಷೆ",
    "tabGrievance": "ದೂರು ಅರ್ಜಿ (AMC)",
    "tabFirstAid": "ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ & SOS",
    "tabAdlaBadli": "ಅದ್ಲಾ-ಬದ್ಲಿ ವಿನಿಮಯ",
    "tabFutureFarming": "ಆಧುನಿಕ ಕೃಷಿ",
    "satelliteTracker": "ಲೈವ್ ಸ್ಯಾಟಲೈಟ್ & ಸ್ಥಳೀಯ ಟ್ರ್ಯಾಕರ್",
    "nodeBadge": "ಅಮರಾವತಿ ನೋಡ್ #14",
    "mapsCenter": "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಕೇಂದ್ರ: ಅಮರಾವತಿ, ಆಂಧ್ರಪ್ರದೇಶ, ಭಾರತ",
    "moistureMatrix": "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮಾನಿಟರಿಂಗ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್",
    "optimalBadge": "ಸೂಕ್ತ ಮಟ್ಟ: 44%",
    "fieldDryness": "ಜಮೀನಿನ ಒಣಗುವಿಕೆ:",
    "rainForecast": "ಮಳೆಯ ಮುನ್ಸೂಚನೆ:",
    "advisoryTitle": "ಸ್ವಯಂಚಾಲಿತ ನೀರಾವರಿ ಸಲಹೆ",
    "activeRainfallBadge": "ಮಳೆ / ಮೋಡ ಕವಿದ ವಾತಾವರಣ",
    "activeRainfallText": "ಸ್ಥಿತಿ: ಅಮರಾವತಿ ಪ್ರದೇಶದಲ್ಲಿ ಮಳೆಯಾಗುತ್ತಿದೆ. ನೀರಾವರಿ ಸ್ಥಗಿತ—ಹೆಚ್ಚುವರಿ ನೀರಿನ ಅಗತ್ಯವಿಲ್ಲ.",
    "highEvapoBadge": "ಹೆಚ್ಚು ತೇವಾಂಶ ನಷ್ಟ",
    "highEvapoText": "ಸ್ಥಿತಿ: ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶ 30% ಕ್ಕಿಂತ ಕಡಿಮೆಯಾಗಿದೆ. ಸಂಜೆ 17:00 ರ ಮೊದಲು 45 ನಿಮಿಷಗಳ ಕಾಲ ನೀರಾವರಿ ಮಾಡಿ.",
    "optimalMoistureBadge": "ಸಮತೋಲಿತ ತೇವಾಂಶ ಮಟ್ಟ",
    "optimalMoistureText": "ಸ್ಥಿತಿ: ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶ 44-48% ಸೂಕ್ತ ಮಟ್ಟದಲ್ಲಿದೆ. ನಿಯಮಿತ ನೀರಾವರಿಯನ್ನು ಮುಂದುವರಿಸಿ.",
    "waterStatusSufficient": "ಸಾಕಷ್ಟಿದೆ",
    "waterStatusSchedule": "ನೀರಾವರಿ ಯೋಜಿಸಿ",
    "waterStatusUrgent": "ತುರ್ತು ನೀರಾವರಿ ಅಗತ್ಯವಿದೆ",
    "soilTargetTitle": "ಕೃಷ್ಣಾ ಕಣಿವೆಯ ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳ ಬ್ಲೂಪ್ರಿಂಟ್",
    "soilVariant": "ಕಪ್ಪು / ಮೆಕ್ಕಲು ಮಣ್ಣಿನ ವಿಧ",
    "nitrogen": "ಸಾರಜನಕ (N)",
    "phosphorus": "ರಂಜಕ (P)",
    "potassium": "ಪೊಟ್ಯಾಶಿಯಂ (K)",
    "soilSpike": "ವಿಶೇಷ ಶಿಫಾರಸು: ಅಮರಾವತಿ ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ ಕ್ಷಾರತೆ ತಡೆಯಲು ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ 25 ಕೆಜಿ ಜಿಂಕ್ ಸಲ್ಫೇಟ್ + 50 ಕೆಜಿ ಜಿಪ್ಸಮ್ ಹಾಕಿ.",
    "pestCalendarTitle": "ಕೀಟ ನಿಯಂತ್ರಣ ಕ್ಯಾಲೆಂಡರ್",
    "pestCycleBadge": "ಸೆಪ್ಟೆಂಬರ್ ಸೈಕಲ್",
    "pestItem1": "ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು ಎಚ್ಚರಿಕೆ: ಭತ್ತದ ಮಡಿಗಳಲ್ಲಿ ಪ್ರತಿ ಎಕರೆಗೆ 8 ಮೋಹಕ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.",
    "pestItem2": "ಸುಳಿ ನೊಣ/ಜಿಗಿಹುಳು ಎಚ್ಚರಿಕೆ: ಗಾಳಿಯಾಡಲು ದಟ್ಟವಾದ ಬೆಳೆಯ ನಡುವೆ ಪ್ರತಿ 2 ಮೀಟರ್‌ಗೆ 30 ಸೆಂ.ಮೀ ಅಂತರ ಬಿಡಿ.",
    "callOfficerBtn": "ಕೃಷಿ ವಿಸ್ತರಣಾಧಿಕಾರಿಗೆ ಕರೆ ಮಾಡಿ",
    "targetAuthority": "ಉದ್ದೇಶಿತ ಮುನ್ಸಿಪಲ್ ಪ್ರಾಧಿಕಾರ",
    "amcTitle": "ಅಮರಾವತಿ ಮಹಾನಗರ ಪಾಲಿಕೆ (AMC)",
    "amcSub": "ಆಂಧ್ರಪ್ರದೇಶ ಸರ್ಕಾರ • ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ಕುಂದುಕೊರತೆ ಪೋರ್ಟಲ್",
    "stepPickIssue": "ಹಂತ 1: ಸಮಸ್ಯೆಯ ಪ್ರಕಾರವನ್ನು ಆರಿಸಿ",
    "issueWater": "ನೀರು ಸರಬರಾಜು",
    "issueElectricity": "ವಿದ್ಯುತ್ ಕಡಿತ",
    "issueRoad": "ಹಾಳಾದ ರಸ್ತೆ",
    "issueCanal": "ಕಾಲುವೆ ಹೂಳೆತ್ತುವಿಕೆ",
    "stepPickWard": "ವಾರ್ಡ್ / ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    "stepPickSignatory": "ನಿಮ್ಮ ಹೆಸರು / ಅರ್ಜಿದಾರರು:",
    "signatoryPlaceholder": "ಉದಾ. ರಾಂಪಾಲ್ ಯಾದವ್",
    "preparedForm": "ಅಧಿಕೃತವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಅರ್ಜಿ",
    "copyBtn": "📋 ಅರ್ಜಿ ಕಾಪಿ ಮಾಡಿ",
    "copiedBtn": "✅ ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!",
    "printBtn": "🖨️ ಪ್ರಿಂಟ್ ಮಾಡಿ",
    "whatsappBtn": "💬 ವಾಟ್ಸಾಪ್",
    "emergencyNodeBadge": "ತುರ್ತು ಜಿಯೋ-ಮೆಡಿಕಲ್ ನೋಡ್ • ಅಮರಾವತಿ",
    "emergencyBarTitle": "1-ಟ್ಯಾಪ್ ಎಮರ್ಜೆನ್ಸಿ SOS & ಆಸ್ಪತ್ರೆ ಶೋಧಕ",
    "locateHospitalBtn": "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ (AIIMS ಅಮರಾವತಿ)",
    "sosBroadcastBtn": "ಕುಟುಂಬಕ್ಕೆ SOS ಕಳುಹಿಸಿ",
    "nearestFacilityBadge": "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ (2.4 ಕಿಮೀ • 6 ನಿಮಿಷ)",
    "aiimsTitle": "AIIMS ಮಂಗಳಗಿರಿ ಮತ್ತು ಅಮರಾವತಿ ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ (CHC ತುಳ್ಳೂರು)",
    "aiimsDesc": "24x7 ತುರ್ತು ಟ್ರಾಮಾ ಕೇರ್, ಹಾವು ಕಡಿತದ ಔಷಧ (ASV), ICU ಬೆಡ್‌ಗಳು ಮತ್ತು ರಕ್ತನಿಧಿ ಲಭ್ಯ.",
    "callDispatchBtn": "AIIMS ಎಮರ್ಜೆನ್ಸಿ ಕಾಲ್ (108 / 102)",
    "symptomPlaceholder": "ಯಾವುದೇ ರೋಗ, ಗಾಯ ಅಥವಾ ಲಕ್ಷಣದ ಹೆಸರು ಬರೆಯಿರಿ ಅಥವಾ ಮಾತನಾಡಿ...",
    "immediateActionsTitle": "ತಕ್ಷಣ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಕ್ರಮಗಳು",
    "whatNotToDoTitle": "ಮಾಡಬಾರದ ಕೆಲಸಗಳು (ಎಚ್ಚರಿಕೆ)",
    "emergencyFooter": "ಟೋಲ್-ಫ್ರೀ ತುರ್ತು ಸೇವೆ • ಹತ್ತಿರದ ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಮತ್ತು ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರದಿಂದ ತಕ್ಷಣದ ಸಹಾಯ",
    "surplusItemLabel": "ನಿಮ್ಮಲ್ಲಿರುವ ಹೆಚ್ಚುವರಿ ವಸ್ತು:",
    "neededItemLabel": "ಬದಲಿಗೆ ನಿಮಗೆ ಬೇಕಾದ ವಸ್ತು:",
    "calcTitle": "ಪ್ರಸ್ತಾವಿತ ವಿನಿಮಯ ಲೆಕ್ಕಾಚಾರ",
    "equalExchange": "ಸರಿಯಾದ ಸಮಾನ ವಿನಿಮಯ",
    "fairValueParity": "ಸಮಾನ ಮೌಲ್ಯದ ಅನುಪಾತ",
    "barterNote": "ಸ್ಥಳೀಯ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರುಕಟ್ಟೆ ವಿನಿಮಯ ಮೌಲ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ.",
    "broadcastBtn": "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಪ್ರಕಟಿಸಿ",
    "broadcastSuccess": "✅ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ!",
    "boardTitle": "ಗ್ರಾಮ ಸಂಪನ್ಮೂಲ ಹಂಚಿಕೆ ಮಂಡಳಿ (ಅದ್ಲಾ-ಬದ್ಲಿ)",
    "boardSub": "ಸಮುದಾಯದಲ್ಲಿ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿರುವ ಕೃಷಿ ಸಲಕರಣೆಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳು.",
    "activePostsBadge": "ಸಕ್ರಿಯ ಪಟ್ಟಿಗಳು",
    "connectBtn": "ಸಂಪರ್ಕಿಸಿ",
    "postSurplusTitle": "ನಿಮ್ಮ ಹೆಚ್ಚುವರಿ ಉಪಕರಣವನ್ನು ನಮೂದಿಸಿ",
    "postItemPlaceholder": "ಉದಾ. 5HP ಪಂಪ್ ಅಥವಾ 20 ಕೆಜಿ ಬೀಜ",
    "postContactPlaceholder": "ಉದಾ. ರಾಂಪಾಲ್ - ವಾರ್ಡ್ 14, ಫೋನ್: 9876543210",
    "postSubmitBtn": "ಬೋರ್ಡ್‌ನಲ್ಲಿ ಪೋಸ್ಟ್ ಮಾಡಿ",
    "listingPosted": "ಯಶಸ್ವಿಯಾಗಿ ಪೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ!",
    "selectSystemTitle": "ಆಧುನಿಕ ಕೃಷಿ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    "switchBlueprintHint": "ಬ್ಲೂಪ್ರಿಂಟ್ ಬದಲಾಯಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    "assemblyBlueprintTitle": "ಜೋಡಣೆ ಬ್ಲೂಪ್ರಿಂಟ್",
    "setupMilestones": "ಹಂತ-ಹಂತದ ಜೋಡಣೆ ಪರಿಶೀಲನಾಪಟ್ಟಿ:",
    "criticalMistakeTitle": "ತಪ್ಪಿಸಬೇಕಾದ ಗಂಭೀರ ತಪ್ಪು",
    "procurementHubTitle": "ಉಪಕರಣ ಖರೀದಿ & ಸಬ್ಸಿಡಿ ಕೇಂದ್ರ",
    "procurementHubSub": "ಪರಿಶೀಲಿಸಿದ ಪಾಲುದಾರರು, ಆನ್‌ಲೈನ್ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಸರ್ಕಾರಿ ಆರ್ಥಿಕ ನೆರವು.",
    "verifiedHubBadge": "ಪರಿಶೀಲಿತ ಕೇಂದ್ರ",
    "colABadge": "ಕಾಲಮ್ A • ಪರಿಶೀಲಿತ ಮಾರಾಟಗಾರರು",
    "colAName": "ಕಿಸಾನ್ ಆಗ್ರೋ ವರ್ಟಿಕಲ್ ಟೆಕ್ ಲಿಮಿಟೆಡ್",
    "colADesc": "ವರ್ಟಿಕಲ್ ಟವರ್ ಮತ್ತು ಹೈಡ್ರೋಪೋನಿಕ್ಸ್ ಜೋಡಣೆಗೆ ಪ್ರಾದೇಶಿಕ ಪಾಲುದಾರ. 1 ವರ್ಷ ಉಚಿತ ಸೇವೆ ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಕಿಟ್ ಒಳಗೊಂಡಿದೆ.",
    "colACallBtn": "ಪಾಲುದಾರರಿಗೆ ಕರೆ ಮಾಡಿ",
    "colBBadge": "ಕಾಲಮ್ B • ಆನ್‌ಲೈನ್ ಮಾರುಕಟ್ಟೆ",
    "colBDesc": "ಅಧಿಕೃತ ಉಪಕರಣಗಳು, ಎಲ್‌ಇಡಿ ಲೈಟ್‌ಗಳು ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಪಂಪ್‌ಗಳನ್ನು ನೇರವಾಗಿ ಖರೀದಿಸುವ ಪೋರ್ಟಲ್.",
    "colBOpenBtn": "ಸ್ಟೋರ್ ತೆರೆಯಿರಿ ↗",
    "colCBadge": "ಕಾಲಮ್ C • ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಮತ್ತು ಆರ್ಥಿಕ ನೆರವು",
    "colCOfficial": "ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು",
    "colCTitle": "ರಾಷ್ಟ್ರೀಯ ಸಬ್ಸಿಡಿಗಳು & ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್‌ಗಳು",
    "colCReduction": "50% ರಿಂದ 75% ವೆಚ್ಚ ಕಡಿತ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    "colCDesc": "ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ, ರಾಜ್ಯ ಬೆಳೆ ಪ್ರೋತ್ಸಾಹ ಮತ್ತು ಡಿಜಿಟಲ್ ಭೂ ನೋಂದಣಿಗಾಗಿ ನೇರ ಅರ್ಜಿಗಳು:",
    "scheme1Title": "🚜 ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಉಪ-ಮಿಷನ್ (SBHS)",
    "scheme1Sub": "ಕೃಷಿ ಯಾಂತ್ರೀಕರಣ ಯೋಜನೆ • myScheme",
    "scheme2Title": "🌱 ರಾಜ್ಯ ಬೆಳೆ ಪ್ರೋತ್ಸಾಹ ಧನ ಸಹಾಯ (JNPEDAK)",
    "scheme2Sub": "ಗುರಿತ ಬೆಳೆ ಅಭಿವೃದ್ಧಿ ನಿಧಿ • myScheme",
    "scheme3Title": "🏛️ ಅಗ್ರಿಸ್ಟಾಕ್ ಡಿಜಿಟಲ್ ನೋಂದಣಿ",
    "scheme3Sub": "ರಾಷ್ಟ್ರೀಯ ರೈತ ನೋಂದಣಿ ಮತ್ತು ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯ • agristack.gov.in",
    "footerLeft": "ಡಿಜಿಟಲ್ ಗ್ರಾಮೀಣ ಸಹಾಯಕ ಕೇಂದ್ರ • ಸ್ಪಷ್ಟತೆ, ಧ್ವನಿ ನ್ಯಾವಿಗೇಷನ್ ಮತ್ತು ಆಫ್‌ಲೈನ್ ಬಳಕೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ",
    "footerRight": "ಗ್ರಾಮೀಣ್ AI • ಅಮರಾವತಿ ಆವೃತ್ತಿ v6.0"
  },
  "or": {
    "headerSubtitle": "ଡିଜିଟାଲ ଗ୍ରାମୀଣ ସହାୟତା କେନ୍ଦ୍ର • ସ୍ପଷ୍ଟତା ଏବଂ ଭଏସ୍ ଇନପୁଟ୍ ପାଇଁ ନିର୍ମିତ",
    "homeBtn": "ମୂଳ ପୃଷ୍ଠା",
    "heroBadge": "ଭଏସ୍ ଆଧାରିତ ସ୍ମାର୍ଟ ଗ୍ରାମୀଣ ସହାୟକ",
    "heroTitle": "ଗ୍ରାମୀଣ AI ଆଜି ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବ?",
    "heroSubtitle": "ମାଇକ୍ରୋଫୋନ୍ ଦବାନ୍ତୁ କିମ୍ବା ଓଡ଼ିଆରେ କୁହନ୍ତୁ—ଜଳସେଚନ, ଅଭିଯୋଗ, ଜରୁରୀକାଳୀନ ପ୍ରାଥମିକ ଚିକିତ୍ସା ବା ଆଧୁନିକ କୃଷି ପାଇଁ।",
    "searchListening": "🎙️ ଶୁଣୁଛୁ... ଦୟାକରି ଓଡ଼ିଆରେ କୁହନ୍ତୁ...",
    "searchIdle": "ଯଥା \"ହାଇଡ୍ରୋପୋନିକ୍ସ\", \"ଜଳ ସଙ୍କଟ\", \"ବିଜୁଳି କଟା\", \"ସାପ କାମୁଡ଼ା\"",
    "trySpeaking": "କୁହି ଦେଖନ୍ତୁ:",
    "samplePhrases": [
      "ହାଇଡ୍ରୋପୋନିକ୍ସ ଚାଷ ପ୍ରଣାଳୀ",
      "ୱାର୍ଡ ୧୪ ରେ ପିଇବା ପାଣି ଆସୁନାହିଁ",
      "କୃଷି ବିଦ୍ୟୁତ ବାରମ୍ବାର କଟିବା ସମସ୍ୟା",
      "ସାପ କାମୁଡ଼ାର ଜରୁରୀ ପ୍ରାଥମିକ ଚିକିତ୍ସା"
    ],
    "portalsTitle": "ମୁଖ୍ୟ ସେବା ପୋର୍ଟାଲ",
    "portalsSub": "ମଡ୍ୟୁଲ୍ ଖୋଲିବାକୁ ଯେକୌଣସି କାର୍ଡ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ",
    "cardClimateTag": "କୃଷି-ଜଳ ବିଜ୍ଞାନ",
    "cardClimateTitle": "ପାଣିପାଗ ଓ ଜଳସେଚନ",
    "cardClimateSub": "ଉପଗ୍ରହ ଆର୍ଦ୍ରତା ଟ୍ରାକର୍",
    "cardClimateDesc": "ମାଟିର ଆର୍ଦ୍ରତା ନିୟନ୍ତ୍ରଣ (୪୪% ଲକ୍ଷ୍ୟ), ଉପଗ୍ରହ ଟ୍ରାକିଂ ଏବଂ ସନ୍ଧ୍ୟା କେନାଲ ଜଳସେଚନ ସତର୍କତା।",
    "cardClimateAction": "ପାଣିପାଗ କେନ୍ଦ୍ର ଖୋଲନ୍ତୁ",
    "cardGrievanceTag": "ଅମରାବତୀ AMC ପୋର୍ଟାଲ",
    "cardGrievanceTitle": "ଅଭିଯୋଗ ପତ୍ର",
    "cardGrievanceSub": "ମ୍ୟୁନିସିପାଲ କମିଶନରଙ୍କୁ ଦରଖାସ୍ତ",
    "cardGrievanceDesc": "ମ୍ୟୁନିସିପାଲ କମିଶନରଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ଆନୁଷ୍ଠାନିକ ଆଇନଗତ ପତ୍ର ପ୍ରସ୍ତୁତ କରନ୍ତୁ, ୧-କ୍ଲିକ୍ କପି ଏବଂ ହ୍ୱାଟ୍ସଆପ୍ ସୁବିଧା।",
    "cardGrievanceAction": "ଦରଖାସ୍ତ ପ୍ରସ୍ତୁତ କରନ୍ତୁ",
    "cardFirstAidTag": "ଜରୁରୀକାଳୀନ ପ୍ରୋଟୋକଲ",
    "cardFirstAidTitle": "ପ୍ରାଥମିକ ଚିକିତ୍ସା",
    "cardFirstAidSub": "ଜୀବନ ରକ୍ଷାକାରୀ ଚିକିତ୍ସା",
    "cardFirstAidDesc": "ଜିପିଏସ୍ ଡାକ୍ତରଖାନା ସନ୍ଧାନ, ହ୍ୱାଟ୍ସଆପ୍ SOS ବାର୍ତ୍ତା, ପର୍ଯ୍ୟାୟକ୍ରମିକ ନିର୍ଦ୍ଦେଶାବଳୀ ଏବଂ 'କଣ କରିବେ ନାହିଁ' ଚେତାବନୀ।",
    "cardFirstAidAction": "ଡାକ୍ତରୀ ସହାୟତା ପାଆନ୍ତୁ",
    "cardAdlaBadliTag": "ମଣ୍ଡି ବିନିମୟ ନେଟୱାର୍କ",
    "cardAdlaBadliTitle": "ଅଦଳବଦଳ ଶେୟାର",
    "cardAdlaBadliSub": "ଗ୍ରାମ ସମ୍ବଳ ବୋର୍ଡ",
    "cardAdlaBadliDesc": "କୃଷି ଯନ୍ତ୍ରପାତି ବିନିମୟ, ଟ୍ରାକ୍ଟର/ପମ୍ପ ଅଂଶୀଦାର, ଉଚିତ ମୂଲ୍ୟ ହିସାବ ଏବଂ ଚାଷୀ ମଞ୍ଚ।",
    "cardAdlaBadliAction": "ଗ୍ରାମ ବୋର୍ଡ ଦେଖନ୍ତୁ",
    "futureFarmingTag1": "ନୂତନ କୃଷି ପ୍ରଯୁକ୍ତି",
    "futureFarmingTag2": "ନାବାର୍ଡ ଏବଂ MIDH ଅନୁମୋଦିତ",
    "futureFarmingTitle": "ଆଧୁନିକ ଉନ୍ନତ କୃଷି",
    "futureFarmingSub": "ମାଟି ବିହୀନ ସଠିକ୍ ଚାଷ",
    "futureFarmingDesc": "ଭର୍ଟିକାଲ ଟାୱାର, ହାଇଡ୍ରୋପୋନିକ୍ସ ଏବଂ ଏରୋପୋନିକ୍ସ ବ୍ଲୁପ୍ରିଣ୍ଟ, ଯାଞ୍ଚ ହୋଇଥିବା ବିକ୍ରେତା ଲିଙ୍କ୍ ଏବଂ ୫୦%–୭୫% ସବସିଡି।",
    "futureFarmingAction": "ବ୍ଲୁପ୍ରିଣ୍ଟ ହବ୍ ଦେଖନ୍ତୁ",
    "tabClimate": "ପାଣିପାଗ ଓ ମାନଚିତ୍ର",
    "tabGrievance": "ଅଭିଯୋଗ ପତ୍ର (AMC)",
    "tabFirstAid": "ପ୍ରାଥମିକ ଚିକିତ୍ସା ଓ SOS",
    "tabAdlaBadli": "ଅଦଳବଦଳ ଶେୟାର",
    "tabFutureFarming": "ଆଧୁନିକ କୃଷି",
    "satelliteTracker": "ଲାଇଭ ସାଟେଲାଇଟ୍ ଏବଂ ଭୌଗୋଳିକ ଟ୍ରାକର୍",
    "nodeBadge": "ଅମରାବତୀ ନୋଡ #୧୪",
    "mapsCenter": "ଗୁଗଲ ମ୍ୟାପ୍ସ କେନ୍ଦ୍ର: ଅମରାବତୀ, ଆନ୍ଧ୍ର ପ୍ରଦେଶ, ଭାରତ",
    "moistureMatrix": "ମାଟିର ଆର୍ଦ୍ରତା ମନିଟରିଂ ମ୍ୟାଟ୍ରିକ୍ସ",
    "optimalBadge": "ଆଦର୍ଶ: ୪୪%",
    "fieldDryness": "ଜମିର ଶୁଷ୍କତା:",
    "rainForecast": "ବର୍ଷା ପୂର୍ବାନୁମାନ:",
    "advisoryTitle": "ସ୍ୱୟଂଚାଳିତ ଜଳସେଚନ ପରାମର୍ଶ",
    "activeRainfallBadge": "ବର୍ଷା / ମେଘୁଆ",
    "activeRainfallText": "ସ୍ଥିତି: ଅମରାବତୀ ଅଞ୍ଚଳରେ ବର୍ଷା ଜାରି ରହିଛି। ଜଳସେଚନ ସ୍ଥଗିତ—ଅତିରିକ୍ତ ଜଳର ଆବଶ୍ୟକତା ନାହିଁ।",
    "highEvapoBadge": "ଅଧିକ ଆର୍ଦ୍ରତା ହ୍ରାସ",
    "highEvapoText": "ସ୍ଥିତି: ମାଟିରେ ଆର୍ଦ୍ରତା ୩୦% ରୁ କମ୍ ଅଛି। ସନ୍ଧ୍ୟା ୧୭:୦୦ ପୂର୍ବରୁ ୪୫ ମିନିଟ୍ ଜଳସେଚନ କରନ୍ତୁ।",
    "optimalMoistureBadge": "ସନ୍ତୁଳିତ ଆର୍ଦ୍ରତା ସ୍ତର",
    "optimalMoistureText": "ସ୍ଥିତି: ମାଟିରେ ଆର୍ଦ୍ରତା ୪୪–୪୮% ଆଦର୍ଶ ସ୍ତରରେ ରହିଛି। ନିୟମିତ ଜଳସେଚନ ଜାରି ରଖନ୍ତୁ।",
    "waterStatusSufficient": "ଯଥେଷ୍ଟ ଅଛି",
    "waterStatusSchedule": "ଜଳସେଚନ ଯୋଜନା କରନ୍ତୁ",
    "waterStatusUrgent": "ତୁରନ୍ତ ଜଳସେଚନ ଆବଶ୍ୟକ",
    "soilTargetTitle": "କୃଷ୍ଣା ଅବବାହିକା ମୃତ୍ତିକା ପୋଷକ ତତ୍ତ୍ୱ ବ୍ଲୁପ୍ରିଣ୍ଟ",
    "soilVariant": "କଳା / ପଟୁ ମାଟି ପ୍ରକାର",
    "nitrogen": "ଯବକ୍ଷାରଜାନ (N)",
    "phosphorus": "ଫସଫରସ (P)",
    "potassium": "ପୋଟାସିୟମ (K)",
    "soilSpike": "ବିଶେଷ ପରାମର୍ଶ: ଅମରାବତୀର କଳା ମାଟିରେ କ୍ଷାରୀୟତା ରୋକିବା ପାଇଁ ହେକ୍ଟର ପିଛା ୨୫ କିଗ୍ରା ଜିଙ୍କ ସଲଫେଟ୍ + ୫୦ କିଗ୍ରା ଜିପସମ ପ୍ରୟୋଗ କରନ୍ତୁ।",
    "pestCalendarTitle": "କୀଟ ନିୟନ୍ତ୍ରଣ କ୍ୟାଲେଣ୍ଡର",
    "pestCycleBadge": "ସେପ୍ଟେମ୍ବର ଚକ୍ର",
    "pestItem1": "କାଣ୍ଡବିନ୍ଧା ପୋକ ସତର୍କତା: ଧାନ ତଳିଘରାରେ ଏକର ପିଛା ୮ଟି ଫେରୋମୋନ୍ ଜନ୍ତା ଲଗାନ୍ତୁ।",
    "pestItem2": "ମହିଷା ପୋକ ସତର୍କତା: ବାୟୁ ଚଳାଚଳ ପାଇଁ ଘଞ୍ଚ ଫସଲ ମଝିରେ ପ୍ରତି ୨ ମିଟରରେ ୩୦ ସେମି ବାଟ ଛାଡ଼ନ୍ତୁ।",
    "callOfficerBtn": "କୃଷି ଅଧିକାରୀଙ୍କୁ ଫୋନ୍ କରନ୍ତୁ",
    "targetAuthority": "ସମ୍ପୃକ୍ତ ପୌର କର୍ତ୍ତୃପକ୍ଷ",
    "amcTitle": "ଅମରାବତୀ ମ୍ୟୁନିସିପାଲ କର୍ପୋରେସନ (AMC)",
    "amcSub": "ଆନ୍ଧ୍ର ପ୍ରଦେଶ ସରକାର • ସରକାରୀ ଜନଅଭିଯୋଗ ପୋର୍ଟାଲ",
    "stepPickIssue": "ପର୍ଯ୍ୟାୟ ୧: ସମସ୍ୟାର ପ୍ରକାର ଚୟନ କରନ୍ତୁ",
    "issueWater": "ଜଳ ଯୋଗାଣ",
    "issueElectricity": "ବିଜୁଳି କଟା",
    "issueRoad": "ଭଙ୍ଗା ରାସ୍ତା",
    "issueCanal": "କେନାଲ ପଙ୍କ ଉଦ୍ଧାର",
    "stepPickWard": "ୱାର୍ଡ / ଅଞ୍ଚଳ ବାଛନ୍ତୁ:",
    "stepPickSignatory": "ଆପଣଙ୍କ ନାମ / ଆବେଦନକାରୀ:",
    "signatoryPlaceholder": "ଯଥା ରାମପାଲ ଯାଦବ",
    "preparedForm": "ପ୍ରସ୍ତୁତ ଆନୁଷ୍ଠାନିକ ଦରଖାସ୍ତ",
    "copyBtn": "📋 ଦରଖାସ୍ତ କପି କରନ୍ତୁ",
    "copiedBtn": "✅ କପି ସଫଳ ହେଲା!",
    "printBtn": "🖨️ ପ୍ରିଣ୍ଟ କରନ୍ତୁ",
    "whatsappBtn": "💬 ହ୍ୱାଟ୍ସଆପ୍",
    "emergencyNodeBadge": "ଜରୁରୀକାଳୀନ ଭୌଗୋଳିକ-ଚିକିତ୍ସା ନୋଡ • ଅମରାବତୀ",
    "emergencyBarTitle": "୧-ଟ୍ୟାପ୍ ଜରୁରୀକାଳୀନ SOS ଏବଂ ଡାକ୍ତରଖାନା ସନ୍ଧାନ",
    "locateHospitalBtn": "ନିକଟସ୍ଥ ଡାକ୍ତରଖାନା (AIIMS ଅମରାବତୀ)",
    "sosBroadcastBtn": "ପରିବାରକୁ SOS ପଠାନ୍ତୁ",
    "nearestFacilityBadge": "ନିକଟତମ ଡାକ୍ତରଖାନା (୨.୪ କିମି • ୬ ମିନିଟ୍)",
    "aiimsTitle": "AIIMS ମଙ୍ଗଳାଗିରି ଏବଂ ଅମରାବତୀ ଗୋଷ୍ଠୀ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର (CHC ଥୁଲ୍ଲୁର)",
    "aiimsDesc": "୨୪x୭ ଜରୁରୀ ଟ୍ରମା କେୟାର, ଆଣ୍ଟି-ସ୍ନେକ ଭେନମ (ASV), ଆଇସିୟୁ ବେଡ୍ ଏବଂ ରକ୍ତ ଭଣ୍ଡାର ଉପଲବ୍ଧ।",
    "callDispatchBtn": "AIIMS ଡିସପାଚ୍ କଲ (୧୦୮ / ୧୦୨)",
    "symptomPlaceholder": "ଯେକୌଣସି ରୋଗ, ଆଘାତ ବା ଲକ୍ଷଣର ନାମ ଲେଖନ୍ତୁ କିମ୍ବା କୁହନ୍ତୁ...",
    "immediateActionsTitle": "ତୁରନ୍ତ ଆବଶ୍ୟକ ପଦକ୍ଷେପ",
    "whatNotToDoTitle": "କଣ ଆଦୌ କରିବେ ନାହିଁ (ଚେତାବନୀ)",
    "emergencyFooter": "ଟୋଲ-ଫ୍ରି ଜରୁରୀକାଳୀନ ସେବା • ନିକଟସ୍ଥ ଗ୍ରାମ ପଞ୍ଚାୟତ ଏବଂ ପ୍ରାଥମିକ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ରରୁ ତୁରନ୍ତ ସହାୟତା",
    "surplusItemLabel": "ଆପଣଙ୍କ ପାଖରେ ଥିବା ଅତିରିକ୍ତ ସାମଗ୍ରୀ:",
    "neededItemLabel": "ବଦଳରେ ଆପଣଙ୍କୁ ଦରକାର ଥିବା ସାମଗ୍ରୀ:",
    "calcTitle": "ପ୍ରସ୍ତାବିତ ବିନିମୟ ଗଣନା",
    "equalExchange": "ସଠିକ୍ ସମାନ ବିନିମୟ",
    "fairValueParity": "ଉଚିତ ମୂଲ୍ୟ ସମାନତା",
    "barterNote": "ସ୍ଥାନୀୟ ପାରମ୍ପରିକ ମଣ୍ଡି ବିନିମୟ ମୂଲ୍ୟ ଉପରେ ଆଧାରିତ।",
    "broadcastBtn": "ମଣ୍ଡିରେ ପ୍ରସାରଣ କରନ୍ତୁ",
    "broadcastSuccess": "✅ ମଣ୍ଡିରେ ପ୍ରସାରିତ ହେଲା!",
    "boardTitle": "ଗ୍ରାମ ସମ୍ବଳ ଅଂଶୀଦାର ବୋର୍ଡ (ଅଦଳବଦଳ)",
    "boardSub": "ସମୁଦାୟରେ ବର୍ତ୍ତମାନ ଉପଲବ୍ଧ ଥିବା କୃଷି ଉପକରଣ ଏବଂ ସାମଗ୍ରୀ।",
    "activePostsBadge": "ସକ୍ରିୟ ତାଲିକା",
    "connectBtn": "ଯୋଗାଯୋଗ କରନ୍ତୁ",
    "postSurplusTitle": "ଆପଣଙ୍କ ଅତିରିକ୍ତ ଉପକରଣ ପଞ୍ଜୀକରଣ କରନ୍ତୁ",
    "postItemPlaceholder": "ଯଥା, ୫ HP ପମ୍ପ କିମ୍ବା ୨୦ କେଜି ବିହନ",
    "postContactPlaceholder": "ଯଥା, ରାମପାଲ - ୱାର୍ଡ ୧୪, ଫୋନ୍: ୯୮୭୬୫୪୩୨୧୦",
    "postSubmitBtn": "ବୋର୍ଡରେ ପୋଷ୍ଟ କରନ୍ତୁ",
    "listingPosted": "ସଫଳତାର ସହ ପୋଷ୍ଟ ହେଲା!",
    "selectSystemTitle": "ଆଧୁନିକ କୃଷି ପ୍ରଣାଳୀ ବାଛନ୍ତୁ:",
    "switchBlueprintHint": "ବ୍ଲୁପ୍ରିଣ୍ଟ ପରିବର୍ତ୍ତନ କରିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ",
    "assemblyBlueprintTitle": "ସ୍ଥାପନା ବ୍ଲୁପ୍ରିଣ୍ଟ",
    "setupMilestones": "ପର୍ଯ୍ୟାୟକ୍ରମିକ ସ୍ଥାପନା ଯାଞ୍ଚ ତାଲିକା:",
    "criticalMistakeTitle": "ଭୁଲରୁ ଦୂରେଇ ରୁହନ୍ତୁ (ଗୁରୁତର ଚେତାବନୀ)",
    "procurementHubTitle": "ଉପକରଣ କ୍ରୟ ଏବଂ ସରକାରୀ ସବସିଡି କେନ୍ଦ୍ର",
    "procurementHubSub": "ପ୍ରମାଣିତ ଅଂଶୀଦାର, ଅନଲାଇନ୍ ମାର୍କେଟ ଏବଂ ସରକାରୀ ଆର୍ଥିକ ସହାୟତା।",
    "verifiedHubBadge": "ପ୍ରମାଣିତ ହବ୍",
    "colABadge": "ସ୍ତମ୍ଭ A • ପ୍ରମାଣିତ ବିକ୍ରେତା",
    "colAName": "କିସାନଏଗ୍ରୋ ଭର୍ଟିକାଲ ଟେକ୍ ପ୍ରା. ଲି.",
    "colADesc": "ଭର୍ଟିକାଲ ଟାୱାର ଏବଂ ହାଇଡ୍ରୋପୋନିକ୍ସ ସ୍ଥାପନ ପାଇଁ ଆଞ୍ଚଳିକ ଅଂଶୀଦାର। ୧ ବର୍ଷର ମାଗଣା ସେବା ଏବଂ ପୋଷକ ତତ୍ତ୍ୱ କିଟ୍ ଅନ୍ତର୍ଭୁକ୍ତ।",
    "colACallBtn": "ପାର୍ଟନରଙ୍କୁ କଲ୍ କରନ୍ତୁ",
    "colBBadge": "ସ୍ତମ୍ଭ B • ଅନଲାଇନ୍ ମାର୍କେଟ",
    "colBDesc": "ଅଫିସିଆଲ୍ ଉପକରଣ, ଏଲଇଡି ଲାଇଟ୍ ଏବଂ ସ୍ୱୟଂଚାଳିତ ପମ୍ପ ସିଧାସଳଖ କ୍ରୟ ପାଇଁ ପୋର୍ଟାଲ।",
    "colBOpenBtn": "ଷ୍ଟୋର ଖୋଲନ୍ତୁ ↗",
    "colCBadge": "ସ୍ତମ୍ଭ C • ସରକାରୀ ସବସିଡି ଏବଂ ଆର୍ଥିକ ସହାୟତା",
    "colCOfficial": "ସରକାରୀ ପୋର୍ଟାଲ",
    "colCTitle": "ଜାତୀୟ ସବସିଡି ଏବଂ ଡିଜିଟାଲ୍ ପୋର୍ଟାଲ",
    "colCReduction": "୫୦% ରୁ ୭୫% ଖର୍ଚ୍ଚ ରିହାତି ଯାଞ୍ଚ ହୋଇଛି",
    "colCDesc": "କୃଷି ଯାନ୍ତ୍ରିକୀକରଣ, ଫସଲ ପ୍ରୋତ୍ସାହନ ଏବଂ ଡିଜିଟାଲ୍ ଜମି ପଞ୍ଜୀକରଣ ପାଇଁ ସିଧାସଳଖ ଆବେଦନ:",
    "scheme1Title": "🚜 କୃଷି ଯାନ୍ତ୍ରିକୀକରଣ ଉପ-ମିଶନ (SBHS)",
    "scheme1Sub": "କୃଷି ଯାନ୍ତ୍ରିକୀକରଣ ସହାୟତା • myScheme",
    "scheme2Title": "🌱 ରାଜ୍ୟ ଫସଲ ପ୍ରୋତ୍ସାହନ ଅନୁଦାନ (JNPEDAK)",
    "scheme2Sub": "ଲକ୍ଷ୍ୟଭିତ୍ତିକ ଫସଲ ବିକାଶ ପାଣ୍ଠି • myScheme",
    "scheme3Title": "🏛️ ଏଗ୍ରିଷ୍ଟାକ୍ ଡିଜିଟାଲ୍ ପଞ୍ଜୀକରଣ",
    "scheme3Sub": "ଜାତୀୟ କୃଷକ ପଞ୍ଜୀକରଣ ଓ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି • agristack.gov.in",
    "footerLeft": "ଡିଜିଟାଲ ଗ୍ରାମୀଣ ସହାୟତା କେନ୍ଦ୍ର • ସ୍ପଷ୍ଟତା, ଭଏସ୍ ନେଭିଗେସନ୍ ଏବଂ ଅଫଲାଇନ୍ ବ୍ୟବହାର ପାଇଁ ଉପଯୁକ୍ତ",
    "footerRight": "ଗ୍ରାମୀଣ AI • ଅମରାବତୀ ସଂସ୍କରଣ v6.0"
  }
};

  const FARMING_METHODS = {
  "tower": {
    "id": "tower",
    "icon": "🏢",
    "tag": "Vertical Aeration",
    "vendorName": "UrbanKisaan Vertical Systems",
    "vendorUrl": "https://www.urbankisaan.com/",
    "waterSaving": "95% Water Saved",
    "names": {
      "en": "Stacked Tower Farming (Vertical Layouts)",
      "hi": "वर्टिकल टावर फार्मिंग (कम जगह में 10x उत्पादन)",
      "bn": "উল্লম্ব টাওয়ার চাষ (কম জায়গায় ১০ গুণ ফলন)",
      "mr": "उभी टॉवर शेती (कमी जागेत १० पट उत्पादन)",
      "te": "వర్టికల్ టవర్ ఫార్మింగ్ (తక్కువ స్థలంలో 10 రెట్లు దిగుబడి)",
      "ta": "செங்குத்து கோபுர விவசாயம் (குறைந்த இடத்தில் 10 மடங்கு மகசூல்)",
      "gu": "વર્ટિકલ ટાવર ફાર્મિંગ (ઓછી જગ્યામાં ૧૦ ગણું ઉત્પાદન)",
      "ur": "عمودی ٹاور کاشتکاری (کم جگہ میں 10 گنا پیداوار)",
      "kn": "ವರ್ಟಿಕಲ್ ಟವರ್ ಕೃಷಿ (ಕಡಿಮೆ ಜಾಗದಲ್ಲಿ 10 ಪಟ್ಟು ಇಳುವರಿ)",
      "or": "ଭର୍ଟିକାଲ ଟାୱାର ଚାଷ (କମ୍ ଜାଗାରେ ୧୦ ଗୁଣ ଅଧିକ ଅମଳ)"
    },
    "yields": {
      "en": "10x Yield / sq.ft",
      "hi": "10 गुना अधिक उपज",
      "bn": "১০ গুণ বেশি ফলন",
      "mr": "१० पट अधिक उत्पन्न",
      "te": "10 రెట్లు ఎక్కువ దిగుబడి",
      "ta": "10 மடங்கு கூடுதல் மகசூல்",
      "gu": "૧૦ ગણું વધુ ઉત્પાદન",
      "ur": "10 گنا زیادہ پیداوار",
      "kn": "10 ಪಟ್ಟು ಹೆಚ್ಚಿನ ಇಳುವರಿ",
      "or": "୧୦ ଗୁଣ ଅଧିକ ଉତ୍ପାଦନ"
    },
    "descs": {
      "en": "Nutrient-rich water trickles down cylindrical food-grade aeroponic towers, bathing exposed root systems with zero soil required.",
      "hi": "खाद्य-ग्रेड वर्टिकल टावर के अंदर से पोषक पानी की बूंदें सीधे पौधों की जड़ों पर गिरती हैं। मिट्टी की कोई आवश्यकता नहीं।",
      "bn": "খাদ্য-গ্রেড উল্লম্ব টাওয়ারের ভেতর পুষ্টিসমৃদ্ধ জলের ধারা সরাসরি শিকড়ে পৌঁছায়, কোনো মাটির প্রয়োজন নেই।",
      "mr": "अन्न-दर्जा पीव्हीसी टॉवरमधून पोषक पाण्याची बारीक धार थेट मुळांवर पडते, मातीची अजिबात गरज नाही.",
      "te": "ఫుడ్-గ్రేడ్ వర్టికల్ టవర్ల ద్వారా పోషకాలతో కూడిన నీటి బిందువులు నేరుగా వేర్లకు అందుతాయి. మట్టి అవసరం లేదు.",
      "ta": "உணவு-தர செங்குத்து கோபுரங்களின் வழியாக ஊட்டச்சத்து நிறைந்த நீர் வேர்களில் பாய்கிறது, மண் தேவையில்லை.",
      "gu": "ફૂડ-ગ્રેડ વર્ટિકલ ટાવર દ્વારા પોષક પાણી સીધું ખુલ્લા મૂળ પર છંટકાવ થાય છે, માટીની કોઈ જરૂર નથી.",
      "ur": "فوڈ گریڈ عمودی ٹاور کے اندر سے غذائیت سے بھرپور پانی کی بوندیں جڑوں پر گرتی ہیں، مٹی کی ضرورت نہیں۔",
      "kn": "ಫುಡ್-ಗ್ರೇಡ್ ಲಂಬ ಟವರ್‌ಗಳ ಮೂಲಕ ಪೋಷಕಾಂಶಯುಕ್ತ ನೀರು ನೇರವಾಗಿ ಬೇರುಗಳಿಗೆ ಹರಿಯುತ್ತದೆ, ಮಣ್ಣಿನ ಅಗತ್ಯವಿಲ್ಲ.",
      "or": "ଫୁଡ୍-ଗ୍ରେଡ୍ ଭର୍ଟିକାଲ ଟାୱାର ମଧ୍ୟରେ ପୋଷକ ତତ୍ତ୍ୱ ଯୁକ୍ତ ଜଳ ସିଧାସଳଖ ଚେରରେ ପଡ଼େ, ମାଟିର ଆବଶ୍ୟକତା ନାହିଁ।"
    },
    "steps": {
      "en": [
        {
          "head": "Step 1: Assemble",
          "text": "structural food-grade UV-treated PVC tower columns and mount on a 50-litre heavy-duty base reservoir."
        },
        {
          "head": "Step 2: Install",
          "text": "a submersible 45W low-energy micro-pump inside the tank with a vertical 1/2-inch delivery pipe."
        },
        {
          "head": "Step 3: Insert",
          "text": "rockwool seedling plugs containing leafy greens, strawberries, or herbs into 45-degree angle planting cups."
        },
        {
          "head": "Step 4: Program",
          "text": "an automated digital timer set for 15-minute ON / 15-minute OFF continuous circulation intervals."
        }
      ],
      "hi": [
        {
          "head": "चरण 1: ढांचा जोड़ें:",
          "text": "यूवी-संरक्षित पीवीसी टावर के खानों को जोड़ें और 50 लीटर के निचले पानी के टैंक पर स्थापित करें।"
        },
        {
          "head": "चरण 2: पंप लगाएं:",
          "text": "टैंक के अंदर 45 वॉट का वाटरप्रूफ सबमर्सिबल पंप और ऊपर जाने वाली नली लगाएं।"
        },
        {
          "head": "चरण 3: पौधे लगाएं:",
          "text": "रॉकवूल या कोकोपीट प्लग में तैयार हरी सब्जी या स्ट्रॉबेरी के छोटे पौधों को टावर के खांचों में डालें।"
        },
        {
          "head": "चरण 4: टाइमर सेट करें:",
          "text": "स्वचालित डिजिटल टाइमर को 15 मिनट चालू और 15 मिनट बंद के चक्र पर सेट करें।"
        }
      ],
      "bn": [
        {
          "head": "ধাপ ১: কাঠামো সংযোজন:",
          "text": "ইউভি-প্রতিরোধী পিভিসি টাওয়ার কলামগুলো যুক্ত করে ৫০ লিটার বেস রিজার্ভারে বসান।"
        },
        {
          "head": "ধাপ ২: পাম্প স্থাপন:",
          "text": "ট্যাঙ্কের ভেতরে ৪৫ ওয়াটের সাবমার্সিবل মাইক্রো-পাম্প ও উল্লম্ব পাইপ স্থাপন করুন।"
        },
        {
          "head": "ধাপ ৩: চারা রোপণ:",
          "text": "রকউল বা কোকোপিটে তৈরি শাকসবজি বা স্ট্রবেরির চারা ৪৫ ডিগ্রি রোপণ কাপে বসান।"
        },
        {
          "head": "ধাপ ৪: টাইমার নির্ধারণ:",
          "text": "স্বয়ংক্রিয় টাইমারকে ১৫ মিনিট চালু ও ১৫ মিনিট বন্ধের চক্রে প্রোগ্রাম করুন।"
        }
      ],
      "mr": [
        {
          "head": "पायरी १: रचना जोडा:",
          "text": "यूव्ही-संरक्षित पीव्हीसी टॉवरचे भाग जोडून ५० लिटरच्या पाण्याच्या टाकीवर बसवा."
        },
        {
          "head": "पायरी २: पंप बसवा:",
          "text": "टाकीच्या आत ४५ वॉटचा सबमर्सिबल पंप आणि वर जाणारी नळी जोडा."
        },
        {
          "head": "पायरी ३: रोपे लावा:",
          "text": "रॉकवूल प्लगमधील भाजीपाला किंवा स्ट्रॉबेरीची रोपे ४५ अंशांच्या खाचांमध्ये ठेवा."
        },
        {
          "head": "पायरी ४: टायमर लावा:",
          "text": "डिजिटल टायमर १५ मिनिटे चालू आणि १५ मिनिटे बंद अशा चक्रावर सेट करा."
        }
      ],
      "te": [
        {
          "head": "దశ 1: నిర్మాణం:",
          "text": "UV-రక్షిత PVC టవర్ పైపులను ಜೋಡించి 50 లీటర్ల బేస్ ట్యాంక్ పై అమర్చండి."
        },
        {
          "head": "దశ 2: పంపు అమరిక:",
          "text": "ట్యాంక్ లోపల 45W సబ్‌మెర్సిబుల్ మైక్రో-పంప్ మరియు నిలువు పైపును అమర్చండి."
        },
        {
          "head": "దశ 3: మొక్కలు నాటడం:",
          "text": "రాక్‌ವೂల్ ప్లగ్స్‌లోని ఆకుకూరలు లేదా స్ట్రాబెర్రీ నారును 45 డిగ్రీల కప్పులలో ఉంచండి."
        },
        {
          "head": "దశ 4: టైమర్ సెట్టింగ్:",
          "text": "ఆటోమేటిక్ టైమర్‌ను 15 నిమిషాలు ఆన్ / 15 నిమిషాలు ఆఫ్ చక్రానికి సెట్ చేయండి."
        }
      ],
      "ta": [
        {
          "head": "படி 1: கட்டமைப்பு:",
          "text": "UV-பாதுகாக்கப்பட்ட PVC கோபுரப் பகுதிகளை இணைத்து 50 லிட்டர் தொட்டியின் மீது பொருத்தவும்."
        },
        {
          "head": "படி 2: பம்ப் பொருத்துதல்:",
          "text": "தொட்டியின் உள்ளே 45W மூழ்கக்கூடிய பம்ப் மற்றும் செங்குத்து குழாயை இணைக்கவும்."
        },
        {
          "head": "படி 3: நாற்று நடுதல்:",
          "text": "கீரைகள் அல்லது ஸ்ட்ராபெர்ரி நாற்றுகளை 45 டிகிரி கோணக் குழிகளில் வைக்கவும்."
        },
        {
          "head": "படி 4: டைமர் அமைப்பு:",
          "text": "டிஜிட்டல் டைமரை 15 நிமிடங்கள் இயக்கம் / 15 நிமிடங்கள் நிறுத்தம் என அமைக்கவும்."
        }
      ],
      "gu": [
        {
          "head": "પગલું ૧: માળખું ગોઠવો:",
          "text": "યુવી-સંરક્ષિત પીવીસી ટાવર પાઈપો જોડીને ૫૦ લિટરની ટાંકી પર સ્થાપિત કરો."
        },
        {
          "head": "પગલું ૨: પંપ લગાવો:",
          "text": "ટાંકીની અંદર ૪૫ વોટનો સબમર્સિબલ પંપ અને ઊભી પાઈપલાઈન ફિટ કરો."
        },
        {
          "head": "પગલું ૩: છોડ રોપો:",
          "text": "રોકવૂલ પ્લગમાં તૈયાર શાકભાજી કે સ્ટ્રોબેરીના છોડ ૪૫ ડિગ્રીના ખાંચામાં મૂકો."
        },
        {
          "head": "પગલું ૪: ટાઈમર સેટ કરો:",
          "text": "ડિજિટલ ટાઈમરને ૧૫ મિનિટ ચાલુ અને ૧૫ મિનિટ બંધના ચક્ર પર ગોઠવો."
        }
      ],
      "ur": [
        {
          "head": "مرحلہ 1: ڈھانچہ جوڑیں:",
          "text": "یو وی سے محفوظ پی وی سی ٹاور کالمز کو جوڑ کر 50 لیٹر کے ٹینک پر نصب کریں۔"
        },
        {
          "head": "مرحلہ 2: پمپ لگائیں:",
          "text": "ٹینک کے اندر 45 واٹ کا واٹر پروف پمپ اور اوپر جانے والی نلی لگائیں۔"
        },
        {
          "head": "مرحلہ 3: پودے لگائیں:",
          "text": "راک وول پلگ میں تیار سبزیوں کے پودے 45 ڈگری زاویے والے کپ میں رکھیں۔"
        },
        {
          "head": "مرحلہ 4: ٹائمر سیٹ کریں:",
          "text": "خودکار ٹائمر کو 15 منٹ آن اور 15 منٹ آف کے وقفے پر سیٹ کریں۔"
        }
      ],
      "kn": [
        {
          "head": "ಹಂತ 1: ರಚನೆ ಜೋಡಣೆ:",
          "text": "ಯುವಿ-ರಕ್ಷಿತ ಪಿವಿಸಿ ಟವರ್ ಭಾಗಗಳನ್ನು ಜೋಡಿಸಿ 50 ಲೀಟರ್ ಟ್ಯಾಂಕ್ ಮೇಲೆ ಅಳವಡಿಸಿ."
        },
        {
          "head": "ಹಂತ 2: ಪಂಪ್ ಅಳವಡಿಕೆ:",
          "text": "ಟ್ಯಾಂಕ್ ಒಳಗೆ 45W ಸಬ್ಮರ್ಸಿಬಲ್ ಪಂಪ್ ಮತ್ತು ಲಂಬ ಪೈಪ್ ಸಂಪರ್ಕಿಸಿ."
        },
        {
          "head": "ಹಂತ 3: ಸಸಿ ನೆಡುವುದು:",
          "text": "ರಾಕ್‌ವೂಲ್ ಪ್ಲಗ್‌ನಲ್ಲಿರುವ ಸೊಪ್ಪು ಅಥವಾ ಸ್ಟ್ರಾಬೆರಿ ಸಸಿಗಳನ್ನು 45 ಡಿಗ್ರಿ ಕಪ್‌ಗಳಲ್ಲಿ ಇರಿಸಿ."
        },
        {
          "head": "ಹಂತ 4: ಟೈಮರ್ ಹೊಂದಾಣಿಕೆ:",
          "text": "ಡಿಜಿಟಲ್ ಟೈಮರ್ ಅನ್ನು 15 ನಿಮಿಷ ಆನ್ / 15 ನಿಮಿಷ ಆಫ್ ಚಕ್ರಕ್ಕೆ ಹೊಂದಿಸಿ."
        }
      ],
      "or": [
        {
          "head": "ପର୍ଯ୍ୟାୟ ୧: ଗଠନ ଯୋଡ଼ିବା:",
          "text": "ୟୁଭି-ସଂରକ୍ଷିତ ପିଭିସି ଟାୱାର ଅଂଶଗୁଡ଼ିକୁ ଯୋଡ଼ି ୫୦ ଲିଟର ଟାଙ୍କି ଉପରେ ସ୍ଥାପନ କରନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୨: ପମ୍ପ ଲଗାଇବା:",
          "text": "ଟାଙ୍କି ଭିତରେ ୪୫ ୱାଟର ସବମର୍ସିବଲ୍ ପମ୍ପ ଏବଂ ଉପରକୁ ଯାଉଥିବା ନଳୀ ଲଗାନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୩: ଚାରା ରୋପଣ:",
          "text": "ରକୱୁଲ ପ୍ଲଗରେ ଥିବା ଶାଗ ବା ଷ୍ଟ୍ରବେରୀ ଚାରାକୁ ୪୫ ଡିଗ୍ରୀ ଖୋପରେ ରଖନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୪: ଟାଇମର ସେଟ୍:",
          "text": "ସ୍ୱୟଂଚାଳିତ ଟାଇମରକୁ ୧୫ ମିନିଟ୍ ଚାଲୁ ଏବଂ ୧୫ ମିନିଟ୍ ବନ୍ଦ ଚକ୍ରରେ ସେଟ୍ କରନ୍ତୁ।"
        }
      ]
    },
    "mistakes": {
      "en": "⚠️ CRITICAL MISTAKE TO AVOID: Power Outage Root Desiccation! Because roots are suspended in air without soil, a 45-minute power cut in high heat will permanently wither the crop. Always connect a 12V solar battery backup to the pump.",
      "hi": "⚠️ क्या गलती न करें (गंभीर चेतावनी): बिजली जाने पर जड़ें सूखना! मिट्टी न होने से तेज धूप में केवल 45 मिनट बिजली कटने पर फसल नष्ट हो सकती है। पंप के साथ 12V का छोटा सोलर बैकअप जरूर लगाएं।",
      "bn": "⚠️ মারাত্মক ভুল এড়িয়ে চলুন: বিদ্যুৎ বিভ্রাটে শিকড় শুকিয়ে যাওয়া! মাটিতে না থাকায় তীব্র গরমে মাত্র ৪৫ মিনিট বিদ্যুৎ না থাকলে ফসল শুকিয়ে নষ্ট হয়ে যাবে। পাম্পের সাথে ১২ ভোল্ট সোলার ব্যাকআপ অবশ্যই রাখুন।",
      "mr": "⚠️ टाळावयाची गंभीर चूक: वीज गेल्यास मुळे सुकणे! माती नसल्यामुळे कडक उन्हात फक्त ४५ मिनिटे वीज खंडित झाल्यास पीक जळू शकते. पंपासाठी १२V सोलर बॅटरी बॅकअप नक्की ठेवा.",
      "te": "⚠️ నివారించవలసిన తీవ్రమైన తప్పు: విద్యుత్ కోతతో వేర్లు ఎండిపోవడం! మట్టి లేకపోవడం వల్ల ఎండలో 45 నిమిషాలు కరెంట్ పోతే పంట పూర్తిగా ఎండిపోతుంది. పంపుకు 12V సోలార్ బ్యాకప్ తప్పనిసరిగా ఉంచండి.",
      "ta": "⚠️ தவிர்க்க வேண்டிய கடுமையான தவறு: மின்தடையால் வேர்கள் காய்ந்து போவது! மண் இல்லாததால் கடுமையான வெயிலில் 45 நிமிடங்கள் மின்சாரம் தடைபட்டால் பயிர் கருகிவிடும். பம்பிற்கு 12V சோலார் பேட்டரி பேக்கப் கட்டாயம் இணைக்கவும்.",
      "gu": "⚠️ ટાળવા જેવી ગંભીર ભૂલ: વીજળી જતાં મૂળિયાં સુકાઈ જવા! માટી ન હોવાથી કાળઝાળ ગરમીમાં માત્ર ૪૫ મિનિટ લાઈટ જાય તો પાક બળી જાય. પંપ સાથે ૧૨V સોલાર બેટરી બેકઅપ અવશ્ય લગાવો.",
      "ur": "⚠️ اس سنگین غلطی سے بچیں: بجلی جانے پر جڑوں کا سوکھ جانا! مٹی نہ ہونے کی وجہ سے تیز دھوپ میں صرف 45 منٹ بجلی بند رہنے سے فصل مرجھا سکتی ہے۔ پمپ کے ساتھ 12V سولر بیک اپ ضرور لگائیں۔",
      "kn": "⚠️ ತಪ್ಪಿಸಬೇಕಾದ ಗಂಭೀರ ತಪ್ಪು: ವಿದ್ಯುತ್ ಕಡಿತದಿಂದ ಬೇರುಗಳು ಒಣಗುವುದು! ಮಣ್ಣು ಇಲ್ಲದಿರುವುದರಿಂದ ಬಿಸಿಲಿನಲ್ಲಿ 45 ನಿಮಿಷ ಕರೆಂಟ್ ಹೋದರೆ ಬೆಳೆ ನಾಶವಾಗುತ್ತದೆ. ಪಂಪ್‌ಗೆ 12V ಸೋಲಾರ್ ಬ್ಯಾಟರಿ ಬ್ಯಾಕಪ್ ಕಡ್ಡಾಯವಾಗಿ ಇರಿಸಿ.",
      "or": "⚠️ ଗୁରୁତର ଭୁଲରୁ ଦୂରେଇ ରୁହନ୍ତୁ: ବିଜୁଳି କଟିଲେ ଚେର ଶୁଖିଯିବା! ମାଟି ନଥିବାରୁ ପ୍ରଖର ଖରାରେ ମାତ୍ର ୪୫ ମିନିଟ୍ ବିଜୁଳି କଟିଲେ ଫସଲ ନଷ୍ଟ ହୋଇଯିବ। ପମ୍ପ ସହିତ ୧୨V ସୌର ବ୍ୟାଟେରୀ ବ୍ୟାକଅପ୍ ନିଶ୍ଚୟ ଲଗାନ୍ତୁ।"
    }
  },
  "hydro": {
    "id": "hydro",
    "icon": "💧",
    "tag": "Soil-less Nutrient Film",
    "vendorName": "Kryzen Biotech Hydroponics",
    "vendorUrl": "https://kryzen.com/",
    "waterSaving": "90% Water Saved",
    "names": {
      "en": "Hydroponic Channels (NFT Water Flow)",
      "hi": "हाइड्रोपोनिक्स चैनल (जल-प्रवाह खेती)",
      "bn": "হাইড্রোপনিক চ্যানেল (পুষ্টি-প্রবাহ চাষ)",
      "mr": "हायड्रोपोनिक वाहिन्या (जलप्रवाह शेती)",
      "te": "హైడ్రోపోనిక్స్ ఛానల్స్ (మట్టి లేని నీటి ప్రవాహ సాగు)",
      "ta": "ஹைட்ரோபோனிக்ஸ் சேனல்கள் (மண்ணில்லா நீரோட்ட முறை)",
      "gu": "હાઈડ્રોપોનિક્સ ચેનલ્સ (જળ-પ્રવાહ ખેતી)",
      "ur": "ہائیڈروپونکس چینلز (پانی کے بہاؤ کی کاشتکاری)",
      "kn": "ಹೈಡ್ರೋಪೋನಿಕ್ಸ್ ಚಾನೆಲ್‌ಗಳು (ಮಣ್ಣು ರಹಿತ ಜಲಪ್ರವಾಹ ಕೃಷಿ)",
      "or": "ହାଇଡ୍ରୋପୋନିକ୍ସ ଚ୍ୟାନେଲ୍ (ପାଣି ପ୍ରବାହ ଚାଷ)"
    },
    "yields": {
      "en": "6x Faster Growth",
      "hi": "6 गुना तेज वृद्धि",
      "bn": "৬ গুণ দ্রুত বৃদ্ধি",
      "mr": "६ पट जलद वाढ",
      "te": "6 రెట్లు వేగవంతమైన పెరుగుదల",
      "ta": "6 மடங்கு வேகமான வளர்ச்சி",
      "gu": "૬ ગણો ઝડપી વિકાસ",
      "ur": "6 گنا تیز رفتار نشوونما",
      "kn": "6 ಪಟ್ಟು ವೇಗದ ಬೆಳವಣಿಗೆ",
      "or": "୬ ଗୁଣ ଦ୍ରୁତ ବୃଦ୍ଧି"
    },
    "descs": {
      "en": "A continuous shallow stream of water loaded with essential minerals flows over bare roots inside enclosed slope channels.",
      "hi": "ढलान वाले पीवीसी चैनलों में पोषक तत्वों से युक्त पानी की पतली धारा लगातार बहती है जो पौधों को तेजी से बढ़ाती है।",
      "bn": "ঢালু পিভিসি চ্যানেলে খনিজ পুষ্টি সমৃদ্ধ জলের হালকা প্রবাহ ক্রমাগত শিকড়ের ওপর দিয়ে প্রবাহিত হয়।",
      "mr": "उताराच्या पीव्हीसी वाहिन्यांमध्ये पोषक घटकांनी युक्त पाण्याची पातळ धार सतत वाहते, ज्यामुळे पिके वेगाने वाढतात.",
      "te": "వాలుగా ఉండే PVC ఛానళ్లలో ఖనిజ లవణాలు కలిగిన పలుచని నీటి ప్రవాహం నిరంతరం వేర్లపై ప్రవహిస్తుంది.",
      "ta": "சாய்வான PVC சேனல்களில் அத்தியாவசிய தாதுக்கள் நிறைந்த மெல்லிய நீரோட்டம் வேர்களின் மீது தொடர்ந்து பாய்கிறது.",
      "gu": "ઢોળાવવાળી પીવીસી પાઇપોમાં પોષક તત્ત્વોવાળા પાણીનો પાતળો પ્રવાહ વહે છે જે છોડને ઝડપથી વધારે છે.",
      "ur": "ڈھلوان والے پی وی سی چینلز میں غذائی اجزاء سے بھرپور پانی کا ہلکا بہاؤ مسلسل جڑوں کے اوپر بہتا رہتا ہے۔",
      "kn": "ಇಳಿಜಾರಾದ ಪಿವಿಸಿ ಚಾನೆಲ್‌ಗಳಲ್ಲಿ ಖನಿಜಾಂಶಯುಕ್ತ ನೀರಿನ ತೆಳುವಾದ ಪ್ರವಾಹ ನಿರಂತರವಾಗಿ ಬೇರುಗಳ ಮೇಲೆ ಹರಿಯುತ್ತದೆ.",
      "or": "ଢଳୁଆ ପିଭିସି ଚ୍ୟାନେଲରେ ଖଣିଜ ପୋଷକ ତତ୍ତ୍ୱ ଯୁକ୍ତ ପାଣିର ପତଳା ଧାର ଚେର ଉପରେ କ୍ରମାଗତ ବହିଥାଏ।"
    },
    "steps": {
      "en": [
        {
          "head": "Step 1: Mount",
          "text": "food-grade rectangular NFT channels on galvanized iron A-frames with a precise 1:40 gravity slope."
        },
        {
          "head": "Step 2: Connect",
          "text": "the main manifold intake line with bypass valves and a continuous drainage catchment return pipe."
        },
        {
          "head": "Step 3: Mix",
          "text": "water-soluble A+B macro/micronutrients and calibrate electrical conductivity (EC) between 1.4 – 2.2 mS/cm."
        },
        {
          "head": "Step 4: Calibrate",
          "text": "nutrient solution pH strictly between 5.8 and 6.4 using food-grade phosphoric acid stabilizers."
        }
      ],
      "hi": [
        {
          "head": "चरण 1: चैनल लगाएं:",
          "text": "एनएफटी (NFT) पाइपों को लोहे के फ्रेम पर 1:40 के हल्के ढलान के साथ मजबूती से कसें।"
        },
        {
          "head": "चरण 2: पाइपलाइन जोड़ें:",
          "text": "पानी पहुंचाने वाली मुख्य इनटेक लाइन और पानी वापस टैंक में ले जाने वाली ड्रेन लाइन कनेक्ट करें।"
        },
        {
          "head": "चरण 3: खाद घोलें:",
          "text": "हाइड्रोपोनिक A+B तरल खाद को पानी में मिलाकर ईसी (EC मीटर) 1.4 से 2.2 के बीच सेट करें।"
        },
        {
          "head": "चरण 4: पीएच (pH) जांचें:",
          "text": "पीएच मीटर से पानी का पीएच 5.8 से 6.4 के बीच ही बनाए रखें ताकि पौधे पोषण ले सकें।"
        }
      ],
      "bn": [
        {
          "head": "ধাপ ১: চ্যানেল স্থাপন:",
          "text": "এনএফটি চ্যানেলগুলোকে লোহার এ-ফ্রেমে ১:৪০ মাধ্যাকর্ষণ ঢালে শক্তভাবে বসান।"
        },
        {
          "head": "ধাপ ২: সংযোগ পাইপ:",
          "text": "মূল ইনটেক লাইন এবং জল ফেরত নিয়ে যাওয়ার ড্রেনেজ লাইন যুক্ত করুন।"
        },
        {
          "head": "ধাপ ৩: পুষ্টি দ্রবণ:",
          "text": "পানিতে দ্রবণীয় A+B পুষ্টি মিশিয়ে ইসি (EC) ১.৪ থেকে ২.২ mS/cm এ রাখুন।"
        },
        {
          "head": "ধাপ ৪: পিএইচ নিয়ন্ত্রণ:",
          "text": "পুষ্টি দ্রবণের পিএইচ (pH) কঠোরভাবে ৫.৮ থেকে ৬.৪ এর মধ্যে বজায় রাখুন।"
        }
      ],
      "mr": [
        {
          "head": "पायरी १: चॅनेल्स बसवा:",
          "text": "एनएफटी पाईप्स लोखंडी फ्रेमवर १:४० च्या हलक्या उतारासह घट्ट बसवा."
        },
        {
          "head": "पायरी २: पाईपलाईन जोडा:",
          "text": "मुख्य पाणी पुरवठा लाईन आणि निचरा होऊन पाणी परत नेणारी ड्रेन लाईन जोडा."
        },
        {
          "head": "पायरी ३: खत विरघळवा:",
          "text": "हायड्रोपोनिक A+B खते पाण्यात मिसळून ईसी (EC) १.४ ते २.२ दरम्यान ठेवा."
        },
        {
          "head": "पायरी ४: पीएच (pH) तपासा:",
          "text": "पाण्याचा सामू (pH) ५.८ ते ६.४ दरम्यानच नियंत्रित ठेवा."
        }
      ],
      "te": [
        {
          "head": "దశ 1: ఛానల్స్ అమరిక:",
          "text": "NFT పైపులను ఐరన్ ఫ్రేమ్‌లపై 1:40 వాలుతో దృఢంగా అమర్చండి."
        },
        {
          "head": "దశ 2: పైప్‌లైన్ కనెక్షన్:",
          "text": "నీటి సరఫరా లైన్ మరియు తిరిగి ట్యాంక్‌కు వెళ్లే డ్రైనేజీ పైపును కలపండి."
        },
        {
          "head": "దశ 3: పోషకాల మిశ్రమం:",
          "text": "A+B లిక్విడ్ ఎరువులను కలిపి EC ని 1.4 నుండి 2.2 మధ్య సెట్ చేయండి."
        },
        {
          "head": "దశ 4: pH సమతుల్యత:",
          "text": "నీటి pH స్థాయిని ఖచ్చితంగా 5.8 నుండి 6.4 మధ్య ఉండేలా నియంత్రించండి."
        }
      ],
      "ta": [
        {
          "head": "படி 1: சேனல் பொருத்துதல்:",
          "text": "NFT சேனல்களை இரும்பு ஏ-பிரேம்களில் 1:40 என்ற லேசான சரிவில் பொருத்தவும்."
        },
        {
          "head": "படி 2: குழாய் இணைப்பு:",
          "text": "முக்கிய நீர் உட்செலுத்தும் குழாய் மற்றும் வடிகால் திருப்பக் குழாயை இணைக்கவும்."
        },
        {
          "head": "படி 3: சத்து கரைசல்:",
          "text": "நீரில் கரையும் A+B சத்துக்களைக் கலந்து EC அளவை 1.4 முதல் 2.2 வரை வைக்கவும்."
        },
        {
          "head": "படி 4: pH அளவு:",
          "text": "கரைசலின் pH அளவை 5.8 முதல் 6.4 வரை துல்லியமாகப் பராமரிக்கவும்."
        }
      ],
      "gu": [
        {
          "head": "પગલું ૧: ચેનલ ગોઠવો:",
          "text": "NFT ચેનલોને લોખંડની ફ્રેમ પર ૧:૪૦ ના ઢોળાવ સાથે મજબૂત રીતે ફિટ કરો."
        },
        {
          "head": "પગલું ૨: પાઈપલાઈન જોડો:",
          "text": "મુખ્ય ઇનટેક લાઇન અને પાણી પરત લઈ જતી ડ્રેઇન લાઇન કનેક્ટ કરો."
        },
        {
          "head": "પગલું ૩: ખાતર ઉમેરો:",
          "text": "હાઈડ્રોપોનિક A+B પ્રવાહી ખાતર ઉમેરી EC ૧.૪ થી ૨.૨ વચ્ચે રાખો."
        },
        {
          "head": "પગલું ૪: pH નિયંત્રણ:",
          "text": "પાણીનું pH માપ ૫.૮ થી ૬.૪ વચ્ચે જ જાળવી રાખો જેથી છોડ પોષણ મેળવી શકે."
        }
      ],
      "ur": [
        {
          "head": "مرحلہ 1: چینلز لگائیں:",
          "text": "این ایف ٹی چینلز کو لوہے کے فریم پر 1:40 کی ہلکی ڈھلوان کے ساتھ کسیں۔"
        },
        {
          "head": "مرحلہ 2: پائپ لائن جوڑیں:",
          "text": "پانی سپلائی کرنے والی انٹیک لائن اور ڈرین ریٹرن پائپ کو جوڑیں۔"
        },
        {
          "head": "مرحلہ 3: کھاد گھولیں:",
          "text": "مائع A+B کھاد پانی میں ملا کر ای سی (EC) 1.4 تا 2.2 کے درمیان رکھیں۔"
        },
        {
          "head": "مرحلہ 4: پی ایچ کی جانچ:",
          "text": "پانی کا پی ایچ (pH) 5.8 سے 6.4 کے درمیان برقرار رکھیں۔"
        }
      ],
      "kn": [
        {
          "head": "ಹಂತ 1: ಚಾನೆಲ್ ಅಳವಡಿಕೆ:",
          "text": "NFT ಚಾನೆಲ್‌ಗಳನ್ನು ಕಬ್ಬಿಣದ ಫ್ರೇಮ್ ಮೇಲೆ 1:40 ಇಳಿಜಾರಿನೊಂದಿಗೆ ಜೋಡಿಸಿ."
        },
        {
          "head": "ಹಂತ 2: ಪೈಪ್ ಸಂಪರ್ಕ:",
          "text": "ಮುಖ್ಯ ಒಳಹರಿವಿನ ಪೈಪ್ ಮತ್ತು ಮರುಬಳಕೆಯ ಡ್ರೈನೇಜ್ ಪೈಪ್ ಸಂಪರ್ಕಿಸಿ."
        },
        {
          "head": "ಹಂತ 3: ಪೋಷಕಾಂಶ ಮಿಶ್ರಣ:",
          "text": "A+B ದ್ರವ ಗೊಬ್ಬರ ಬೆರೆಸಿ EC ಮಟ್ಟವನ್ನು 1.4 ರಿಂದ 2.2 mS/cm ನಡುವೆ ಇರಿಸಿ."
        },
        {
          "head": "ಹಂತ 4: pH ನಿಯಂತ್ರಣ:",
          "text": "ನೀರಿನ pH ಮಟ್ಟವನ್ನು 5.8 ರಿಂದ 6.4 ರ ನಡುವೆ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಕಾಪಾಡಿಕೊಳ್ಳಿ."
        }
      ],
      "or": [
        {
          "head": "ପର୍ଯ୍ୟାୟ ୧: ଚ୍ୟାନେଲ୍ ସ୍ଥାପନ:",
          "text": "NFT ଚ୍ୟାନେଲ୍‌ଗୁଡ଼ିକୁ ଲୁହା ଫ୍ରେମ୍ ଉପରେ ୧:୪୦ ଢାଲୁରେ ଦୃଢ଼ ଭାବେ ବାନ୍ଧନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୨: ପାଇପ୍ ସଂଯୋଗ:",
          "text": "ମୁଖ୍ୟ ଜଳ ଯୋଗାଣ ପାଇପ୍ ଏବଂ ଫେରନ୍ତା ଡ୍ରେନେଜ୍ ପାଇପ୍ ସଂଯୋଗ କରନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୩: ଖତ ମିଶ୍ରଣ:",
          "text": "ହାଇଡ୍ରୋପୋନିକ୍ A+B ତରଳ ଖତ ପାଣିରେ ମିଶାଇ EC ୧.୪ ରୁ ୨.୨ ମଧ୍ୟରେ ରଖନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୪: pH ପରୀକ୍ଷା:",
          "text": "ପାଣିର pH ମାତ୍ରା ୫.୮ ରୁ ୬.୪ ମଧ୍ୟରେ ସନ୍ତୁଳିତ ରଖନ୍ତୁ।"
        }
      ]
    },
    "mistakes": {
      "en": "⚠️ CRITICAL MISTAKE TO AVOID: Uncontrolled pH Drift! If the water pH drifts above 6.8 or below 5.2, nutrient lockout occurs immediately and leaves will turn yellow within hours. Test pH twice daily.",
      "hi": "⚠️ क्या गलती न करें (गंभीर चेतावनी): पानी का पीएच (pH) अनियंत्रित होना! यदि पीएच 6.8 से ऊपर या 5.2 से नीचे गया तो पौधे भोजन लेना बंद कर देंगे और पत्तियां पीली पड़ जाएंगी। रोजाना पीएच जांचें।",
      "bn": "⚠️ মারাত্মক ভুল এড়িয়ে চলুন: অনিয়ন্ত্রিত পিএইচ (pH)! পিএইচ ৬.৮ এর উপরে বা ৫.২ এর নিচে গেলে গাছ পুষ্টি নেওয়া বন্ধ করে দেয় এবং কয়েক ঘণ্টার মধ্যে পাতা হলুদ হয়ে যায়। দিনে দুবার পিএইচ পরীক্ষা করুন।",
      "mr": "⚠️ टाळावयाची गंभीर चूक: पाण्याचा सामू (pH) अनियंत्रित होणे! जर सामू ६.८ च्या वर किंवा ५.२ च्या खाली गेला, तर वनस्पती अन्न घेणे बंद करतात आणि पाने पिवळी पडतात. रोज दोनदा pH तपासा.",
      "te": "⚠️ నివారించవలసిన తీవ్రమైన తప్పు: నీటి pH నియంత్రణ కోల్పోవడం! pH 6.8 కంటే పెరిగినా లేదా 5.2 కంటే తగ్గినా మొక్కలు పోషకాలను గ్రహించలేవు, ఆకులు పసుపు రంగులోకి మారతాయి. రోజుకు రెండుసార్లు pH తనిఖీ చేయండి.",
      "ta": "⚠️ தவிர்க்க வேண்டிய கடுமையான தவறு: கட்டுப்பாடற்ற pH அளவு! நீரின் pH 6.8க்கு மேல் அல்லது 5.2க்கு கீழ் சென்றால் ஊட்டச்சத்து தடைபட்டு இலைகள் சில மணிநேரங்களில் மஞ்சள் நிறமாக மாறும். தினமும் இருமுறை pH ஐ சோதிக்கவும்.",
      "gu": "⚠️ ટાળવા જેવી ગંભીર ભૂલ: પાણીનું pH અનિયંત્રિત થવું! જો pH ૬.૮ થી ઉપર અથવા ૫.૨ થી નીચે જાય તો છોડ ખોરાક લેવાનું બંધ કરી દેશે અને પાંદડા પીળા પડી જશે. રોજના બે વાર pH તપાસો.",
      "ur": "⚠️ اس سنگین غلطی سے بچیں: پانی کے پی ایچ (pH) کا بگڑ جانا! اگر پی ایچ 6.8 سے اوپر یا 5.2 سے نیچے چلا جائے تو پودے غذا لینا بند کر دیتے ہیں اور پتے پیلے پڑ جاتے ہیں۔ روزانہ دو بار پی ایچ چیک کریں۔",
      "kn": "⚠️ ತಪ್ಪಿಸಬೇಕಾದ ಗಂಭೀರ ತಪ್ಪು: ನೀರಿನ pH ಏರಿಳಿತ! pH 6.8 ಕ್ಕಿಂತ ಹೆಚ್ಚಾದರೆ ಅಥವಾ 5.2 ಕ್ಕಿಂತ ಕಡಿಮೆಯಾದರೆ ಸಸ್ಯಗಳು ಪೋಷಕಾಂಶಗಳನ್ನು ಹೀರಿಕೊಳ್ಳುವುದಿಲ್ಲ ಮತ್ತು ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತವೆ. ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ pH ಪರೀಕ್ಷಿಸಿ.",
      "or": "⚠️ ଗୁରୁତର ଭୁଲରୁ ଦୂରେଇ ରୁହନ୍ତୁ: ପାଣିର pH ଅନିୟନ୍ତ୍ରିତ ହେବା! ଯଦି pH ୬.୮ ରୁ ଅଧିକ ବା ୫.୨ ରୁ କମ୍ ହୁଏ, ଗଛ ଖାଦ୍ୟ ଗ୍ରହଣ କରିପାରିବ ନାହିଁ ଏବଂ ପତ୍ର ହଳଦିଆ ପଡ଼ିଯିବ। ଦୈନିକ ଦୁଇଥର pH ପରୀକ୍ଷା କରନ୍ତୁ।"
    }
  },
  "aero": {
    "id": "aero",
    "icon": "💨",
    "tag": "High-Pressure Atomization",
    "vendorName": "Barton Breeze Aeroponics",
    "vendorUrl": "https://www.bartonbreeze.com/",
    "waterSaving": "98% Water Saved",
    "names": {
      "en": "Aeroponic Mist Matrices (Air-Suspended)",
      "hi": "एरोपोनिक्स मिस्ट (हवा में लटकती जड़ें)",
      "bn": "অ্যারোপোনিক কুয়াশা (বাতাসে ভাসমান শিকড়)",
      "mr": "एरोपोनिक्स मिस्ट (हवेत तरंगणारी मुळे)",
      "te": "ఏరోపోనిక్స్ మిస్ట్ (గాలిలో వేలాడే వేర్లు)",
      "ta": "ஏரோபோனிக்ஸ் மிஸ்ட் (காற்றில் தொங்கும் வேர்கள்)",
      "gu": "એરોપોનિક્સ મિસ્ટ (હવામાં લટકતા મૂળ)",
      "ur": "ایروپونکس مسٹ (ہوا میں معلق جڑیں)",
      "kn": "ಏರೋಪೋನಿಕ್ಸ್ ಮಿಸ್ಟ್ (ಗಾಳಿಯಲ್ಲಿ ತೂಗಾಡುವ ಬೇರುಗಳು)",
      "or": "ଏରୋପୋନିକ୍ସ ମିଷ୍ଟ (ପବନରେ ଝୁଲୁଥିବା ଚେର)"
    },
    "yields": {
      "en": "Maximum Oxygenation",
      "hi": "सर्वोत्तम ऑक्सीजन पोषण",
      "bn": "সর্বাধিক অক্সিজেন সমৃদ্ধ",
      "mr": "उत्कृष्ट ऑक्सिजन पुरवठा",
      "te": "గరిష్ట ఆక్సిజన్ మరియు వేగవంతమైన పెరుగుదల",
      "ta": "அதிகபட்ச ஆக்ஸிஜன் மற்றும் வளர்ச்சி",
      "gu": "મહત્તમ ઓક્સિજન પોષણ",
      "ur": "بہترین آکسیجن اور تیز ترین افزائش",
      "kn": "ಗರಿಷ್ಠ ಆಮ್ಲಜನಕ ಪೋಷಣೆ",
      "or": "ସର୍ବାଧିକ ଅମ୍ଳଜାନ ଯୋଗାଣ"
    },
    "descs": {
      "en": "High-pressure brass atomizers blast a 50-micron nutrient fog directly onto root systems suspended in completely dark growth chambers.",
      "hi": "अंधेरे चैंबर में हवा में लटकती जड़ों पर हाई-प्रेशर नोजल से 50-माइक्रोन की बारीक पोषक धुंध (मिस्ट) छिड़की जाती है।",
      "bn": "অন্ধকার চেম্বারে ঝুলন্ত শিকড়ের ওপর উচ্চচাপের নজেলের মাধ্যমে ৫০-মাইক্রন পুষ্টি কুয়াশা স্প্রে করা হয়।",
      "mr": "अंधाऱ्या चेंबरमध्ये हवेत लटकणाऱ्या मुळांवर हाय-प्रेशर नोझलद्वारे ५०-मायक्रॉनचे पोषक धुके फवारले जाते.",
      "te": "చీకటి గదిలో గాలిలో వేలాడే వేర్లపై హై-ప్రెజర్ నాజిల్‌లతో 50-మైక్రాన్ పోషకాల పొగమంచును స్ప్రే చేస్తారు.",
      "ta": "இருண்ட அறையில் தொங்கும் வேர்களின் மீது உயர் அழுத்த நாசில்கள் மூலம் 50-மைக்ரான் சத்து மூடுபனி தெளிக்கப்படுகிறது.",
      "gu": "અંધારા ચેમ્બરમાં હવામાં લટકતા મૂળ પર હાઇ-પ્રેશર નોઝલ વડે ૫૦-માઇક્રોનનું પોષક ધુમ્મસ છાંટવામાં આવે છે.",
      "ur": "تاریک چیمبر میں ہوا میں معلق جڑوں پر ہائی پریشر نوزلز کے ذریعے 50 مائیکرون کی غذائی دھند چھڑکی جاتی ہے۔",
      "kn": "ಕತ್ತಲೆಯ ಚೇಂಬರ್‌ನಲ್ಲಿ ತೂಗಾಡುವ ಬೇರುಗಳ ಮೇಲೆ ಅಧಿಕ ಒತ್ತಡದ ನಳಿಕೆಗಳಿಂದ 50-ಮೈಕ್ರಾನ್ ಪೋಷಕಾಂಶಗಳ ಮಂಜು ಸಿಂಪಡಿಸಲಾಗುತ್ತದೆ.",
      "or": "ଅନ୍ଧାରୁଆ ଚାମ୍ବରରେ ଝୁଲୁଥିବା ଚେର ଉପରେ ହାଇ-ପ୍ରେସର ନୋଜଲ୍ ଦ୍ୱାରା ୫୦-ମାଇକ୍ରୋନ୍‌ର ପୋଷକ କୁହୁଡ଼ି ସ୍ପ୍ରେ କରାଯାଏ।"
    },
    "steps": {
      "en": [
        {
          "head": "Step 1: Seal",
          "text": "the vertical growth chamber completely light-tight to prevent any root algae and pathogen formation."
        },
        {
          "head": "Step 2: Plumb",
          "text": "80+ PSI high-pressure brass misting nozzles spaced 30cm apart at intersecting 45-degree spray angles."
        },
        {
          "head": "Step 3: Suspend",
          "text": "bare-root saplings inside soft neoprene foam collar rings with root crowns hanging internally."
        },
        {
          "head": "Step 4: Sync",
          "text": "a precision repeat cycle timer configured for 5 seconds of mist burst every 3 minutes."
        }
      ],
      "hi": [
        {
          "head": "चरण 1: चैंबर सील करें:",
          "text": "पौधों के डिब्बे को पूरी तरह प्रकाश-मुक्त (डार्क) रखें ताकि जड़ों में काई न जमे।"
        },
        {
          "head": "चरण 2: नोजल लगाएं:",
          "text": "80 PSI प्रेशर वाले ब्रास मिस्टिंग नोजल को 30 सेमी की दूरी पर सही कोण में कसें।"
        },
        {
          "head": "चरण 3: पौधे फंसाएं:",
          "text": "नियोप्रीन फोम रिंग में पौधे के तने को फंसाकर जड़ों को अंदर हवा में खुला लटकाएं।"
        },
        {
          "head": "चरण 4: मिस्ट टाइमर चालू करें:",
          "text": "माइक्रो टाइमर को हर 3 मिनट में केवल 5 सेकंड के मिस्ट स्प्रे पर चालू करें।"
        }
      ],
      "bn": [
        {
          "head": "ধাপ ১: চেম্বার সিল করুন:",
          "text": "চেম্বারটিকে সম্পূর্ণ আলোহীন রাখুন যাতে শিকড়ে শেওলা বা ছত্রাক না জন্মায়।"
        },
        {
          "head": "ধাপ ২: নজেল স্থাপন:",
          "text": "৮০+ PSI চাপের ব্রাস মিস্ট নজেল ৩০ সেমি দূরত্বে ৪৫ ডিগ্রি কোণে লাগান।"
        },
        {
          "head": "ধাপ ৩: চারা ঝুলানো:",
          "text": "নিওপ্রিন ফোম রিং ব্যবহার করে চারাগুলোর শিকড় চেম্বারের ভেতরে মুক্ত রাখুন।"
        },
        {
          "head": "ধাপ ৪: মিস্ট টাইমার:",
          "text": "টাইমার সেট করুন যাতে প্রতি ৩ মিনিটে ৫ সেকেন্ডের জন্য কুয়াশা স্প্রে হয়।"
        }
      ],
      "mr": [
        {
          "head": "पायरी १: चेंबर सील करा:",
          "text": "मुळांमध्ये शेवाळ होऊ नये म्हणून वाढीचा चेंबर पूर्णपणे अंधारा ठेवा."
        },
        {
          "head": "पायरी २: नोझल्स बसवा:",
          "text": "८०+ PSI दाबाचे पितळी मिस्टिंग नोझल्स ३० सेमी अंतरावर ४५ अंशात बसवा."
        },
        {
          "head": "पायरी ३: रोपे टांगा:",
          "text": "निओप्रीन फोम रिंगमध्ये खोड अडकवून मुळे आत हवेत मोकळी सोडा."
        },
        {
          "head": "पायरी ४: टायमर सेट करा:",
          "text": "दर ३ मिनिटांनी ५ सेकंदांसाठी मिस्ट स्प्रे चालू होईल असा टायमर लावा."
        }
      ],
      "te": [
        {
          "head": "దశ 1: ఛాంబర్ మూసివేత:",
          "text": "వేర్లకు నాచు పట్టకుండా గ్రోత్ ఛాంబర్‌లోకి వెలుతురు రాకుండా పూర్తిగా సీల్ చేయండి."
        },
        {
          "head": "దశ 2: నాజిల్స్ అమరిక:",
          "text": "80+ PSI ప్రెజర్ బ్రాస్ మిస్టింగ్ నాజిల్స్‌ను 30 సెం.మీ దూరంలో 45 డిగ్రీల కోణంలో బిగించండి."
        },
        {
          "head": "దశ 3: మొక్కలు వేలాడదీయడం:",
          "text": "నియోప్రీన్ ఫోమ్ రింగ్స్ ఉపయోగించి వేర్లు లోపల గాలిలో వేలాడేలా మొక్కలను ఉంచండి."
        },
        {
          "head": "దశ 4: మిస్ట్ టైమర్:",
          "text": "ప్రతి 3 నిమిషాలకు 5 సెకన్ల పాటు స్ప్రే అయ్యేలా టైమర్ సెట్ చేయండి."
        }
      ],
      "ta": [
        {
          "head": "படி 1: அறையை மூடுதல்:",
          "text": "பாசி உருவாகாமல் இருக்க வளர்ச்சி அறையை முற்றிலும் இருட்டாக வைக்கவும்."
        },
        {
          "head": "படி 2: நாசில் பொருத்துதல்:",
          "text": "80+ PSI உயர் அழுத்த பித்தளை நாசில்களை 30 செ.மீ இடைவெளியில் பொருத்தவும்."
        },
        {
          "head": "படி 3: நாற்றுகளைத் தொங்கவிடுதல்:",
          "text": "நுரை வளையங்களைப் பயன்படுத்தி வேர்கள் தொங்குமாறு நாற்றுகளை பொருத்தவும்."
        },
        {
          "head": "படி 4: மூடுபனி டைமர்:",
          "text": "ஒவ்வொரு 3 நிமிடத்திற்கும் 5 வினாடிகள் மூடுபனி தெளிக்குமாறு டைமரை அமைக்கவும்."
        }
      ],
      "gu": [
        {
          "head": "પગલું ૧: ચેમ્બર સીલ કરો:",
          "text": "મૂળમાં શેવાળ ન થાય તે માટે ચેમ્બરને સંપૂર્ણપણે અંધારાવાળું રાખો."
        },
        {
          "head": "પગલું ૨: નોઝલ ફિટ કરો:",
          "text": "૮૦+ PSI પ્રેશરવાળી બ્રાસ નોઝલ ૩૦ સેમીના અંતરે ૪૫ ડિગ્રીના ખૂણે લગાવો."
        },
        {
          "head": "પગલું ૩: છોડ લટકાવો:",
          "text": "નિયોપ્રીન ફોમ રિંગમાં છોડને ફસાવી મૂળ હવામાં મુક્ત રહે તે રીતે ગોઠવો."
        },
        {
          "head": "પગલું ૪: મિસ્ટ ટાઈમર:",
          "text": "દર ૩ મિનિટે માત્ર ૫ સેકન્ડ મિસ્ટ સ્પ્રે થાય તે રીતે ટાઈમર સેટ કરો."
        }
      ],
      "ur": [
        {
          "head": "مرحلہ 1: چیمبر بند کریں:",
          "text": "چیمبر کو مکمل طور پر اندھیرا رکھیں تاکہ جڑوں میں کائی نہ جمے۔"
        },
        {
          "head": "مرحلہ 2: نوزلز لگائیں:",
          "text": "80+ پی ایس آئی پریشر والی نوزلز 30 سینٹی میٹر کے فاصلے پر 45 ڈگری زاویے پر لگائیں۔"
        },
        {
          "head": "مرحلہ 3: پودے لٹکائیں:",
          "text": "فوم رنگ میں پودوں کے تنے کو پھنسا کر جڑوں کو اندر ہوا میں آزاد لٹکائیں۔"
        },
        {
          "head": "مرحلہ 4: ٹائمر سیٹ کریں:",
          "text": "ٹائمر کو ہر 3 منٹ بعد صرف 5 سیکنڈ کے مسٹ اسپرے پر سیٹ کریں۔"
        }
      ],
      "kn": [
        {
          "head": "ಹಂತ 1: ಚೇಂಬರ್ ಸೀಲ್ ಮಾಡಿ:",
          "text": "ಪಾಚಿ ಬೆಳೆಯುವುದನ್ನು ತಡೆಯಲು ಚೇಂಬರ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕತ್ತಲೆಯಾಗಿಡಿ."
        },
        {
          "head": "ಹಂತ 2: ನಳಿಕೆಗಳ ಅಳವಡಿಕೆ:",
          "text": "80+ PSI ಒತ್ತಡದ ಬ್ರಾಸ್ ನಳಿಕೆಗಳನ್ನು 30 ಸೆಂ.ಮೀ ಅಂತರದಲ್ಲಿ 45 ಡಿಗ್ರಿ ಕೋನದಲ್ಲಿ ಜೋಡಿಸಿ."
        },
        {
          "head": "ಹಂತ 3: ಸಸಿಗಳನ್ನು ತೂಗುಹಾಕಿ:",
          "text": "ಫೋಮ್ ರಿಂಗ್ ಬಳಸಿ ಸಸಿಗಳ ಬೇರುಗಳು ಒಳಗೆ ಗಾಳಿಯಲ್ಲಿ ತೂಗಾಡುವಂತೆ ಇರಿಸಿ."
        },
        {
          "head": "ಹಂತ 4: ಮಿಸ್ಟ್ ಟೈಮರ್:",
          "text": "ಪ್ರತಿ 3 ನಿಮಿಷಕ್ಕೆ 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಮಂಜು ಸಿಂಪರಣೆ ಮಾಡಲು ಟೈಮರ್ ಹೊಂದಿಸಿ."
        }
      ],
      "or": [
        {
          "head": "ପର୍ଯ୍ୟାୟ ୧: ଚାମ୍ବର ସିଲ୍:",
          "text": "ଚେରରେ ଶିଉଳି ନ ଲାଗିବା ପାଇଁ ଚାମ୍ବରକୁ ସମ୍ପୂର୍ଣ୍ଣ ଆଲୋକହୀନ ରଖନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୨: ନୋଜଲ୍ ଲଗାଇବା:",
          "text": "୮୦+ PSI ପ୍ରେସର ପିତ୍ତଳ ନୋଜଲ୍ ୩୦ ସେମି ଦୂରତାରେ ୪୫ ଡିଗ୍ରୀ କୋଣରେ ଲଗାନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୩: ଚାରା ଝୁଲାଇବା:",
          "text": "ଫୋମ୍ ରିଙ୍ଗରେ ଚାରାକୁ ଅଟକାଇ ଚେର ଭିତରେ ପବନରେ ମୁକ୍ତ ଭାବେ ଝୁଲାନ୍ତୁ।"
        },
        {
          "head": "ପର୍ଯ୍ୟାୟ ୪: ମିଷ୍ଟ ଟାଇମର:",
          "text": "ପ୍ରତି ୩ ମିନିଟ୍‌ରେ ୫ ସେକେଣ୍ଡ୍ ପାଇଁ କୁହୁଡ଼ି ସ୍ପ୍ରେ ହେବାକୁ ଟାଇମର ସେଟ୍ କରନ୍ତୁ।"
        }
      ]
    },
    "mistakes": {
      "en": "⚠️ CRITICAL MISTAKE TO AVOID: Mineral Salt Nozzle Clogging! Microscopic fertilizer salts clog ultra-fine mist nozzles without warning. You must install a 100-mesh inline sediment filter before the pump manifold.",
      "hi": "⚠️ क्या गलती न करें (गंभीर चेतावनी): नोजल में नमक जमना! बारीक नोजल खाद के कणों से तुरंत जाम हो जाते हैं। पंप के आगे 100-मेश वाला सेडिमेंट फिल्टर लगाना अनिवार्य है।",
      "bn": "⚠️ মারাত্মক ভুল এড়িয়ে চলুন: নজেলে লবণ জমা! সার কণার কারণে সূক্ষ্ম মিস্ট নজেল সহজেই বন্ধ হয়ে যায়। পাম্পের আগে অবশ্যই ১০০-মেশ ফিল্টার ব্যবহার করুন।",
      "mr": "⚠️ टाळावयाची गंभीर चूक: नोझलमध्ये खताचे क्षार साचणे! अतिसूक्ष्म नोझल्स खताच्या कणांमुळे चोकअप होतात. पंपाच्या आधी १००-मेश गाळणी (फिल्टर) लावणे अनिवार्य आहे.",
      "te": "⚠️ నివారించవలసిన తీవ్రమైన తప్పు: నాజిల్‌లలో ఉప్పు పేరుకుపోవడం! సూక్ష్మ ఎరువుల లవణాలు నాజిల్‌లను జామ్ చేస్తాయి. పంపు ముందు తప్పనిసರಿగా 100-మెష్ ఫిల్టర్‌ను అమర్చాలి.",
      "ta": "⚠️ தவிர்க்க வேண்டிய கடுமையான தவறு: நாசில்களில் உப்பு அடைப்பு! நுண்ணிய உப்புகள் நாசில்களை அடைத்துவிடும். பம்பிற்கு முன் 100-மெஷ் வடிப்பானை நிறுவுவது கட்டாயமாகும்.",
      "gu": "⚠️ ટાળવા જેવી ગંભીર ભૂલ: નોઝલમાં ક્ષાર જામવો! ખાતરના ઝીણા કણોથી અલ્ટ્રા-ફાઇન નોઝલ જામ થઈ જાય છે. પંપ પહેલાં ૧૦૦-મેશ સેડિમેન્ટ ફિલ્ટર લગાવવું અનિવાર્ય છે.",
      "ur": "⚠️ اس سنگین غلطی سے بچیں: نوزل کا کھاد کے نمکیات سے بند ہونا! باریک نوزلز کھاد کے ذرات سے فورا بند ہو جاتی ہیں۔ پمپ کے آگے 100 میش فلٹر لگانا لازمی ہے۔",
      "kn": "⚠️ ತಪ್ಪಿಸಬೇಕಾದ ಗಂಭೀರ ತಪ್ಪು: ನಳಿಕೆಯಲ್ಲಿ ಲವಣ ಶೇಖರಣೆ! ಸೂಕ್ಷ್ಮ ರಸಗೊಬ್ಬರದ ಕಣಗಳು ನಳಿಕೆಗಳನ್ನು ಮುಚ್ಚಿಹಾಕುತ್ತವೆ. ಪಂಪ್‌ಗಿಂತ ಮೊದಲು 100-ಮೆಶ್ ಫಿಲ್ಟರ್ ಅಳವಡಿಸುವುದು ಕಡ್ಡಾಯ.",
      "or": "⚠️ ଗୁରୁତର ଭୁଲରୁ ଦୂରେଇ ରୁହନ୍ତୁ: ନୋଜଲ୍‌ରେ ଖତ ଜମିବା! ଖତର କ୍ଷୁଦ୍ର କଣିକା ଯୋଗୁଁ ନୋଜଲ୍ ଜାମ୍ ହୋଇଯାଏ। ପମ୍ପ ଆଗରେ ୧୦୦-ମେଶ୍ ଫିଲ୍ଟର ଲଗାଇବା ବାଧ୍ୟତାମୂଳକ।"
    }
  }
};

  const FIRST_AID = {
  "snake": {
    "id": "snake",
    "icon": "🩹",
    "titles": {
      "en": "Snake Bite",
      "hi": "सांप का काटना (सर्पदंश)",
      "bn": "সাপের কামড় (সর্পদংশ)",
      "mr": "सापाचा दंश (सर्पदंश)",
      "te": "పాము కాటు",
      "ta": "பாம்பு கடி",
      "gu": "સાપ કરડવો (સર્પદંશ)",
      "ur": "سانپ کا کاٹنا",
      "kn": "ಹಾವು ಕಡಿತ",
      "or": "ସାପ କାମୁଡ଼ା"
    },
    "actions": {
      "en": [
        {
          "head": "Keep",
          "text": "the person calm, completely still, and lying down to slow systemic venom spread."
        },
        {
          "head": "Remove",
          "text": "rings, tight clothing, watches, or ankle bands near the bite area before swelling starts."
        },
        {
          "head": "Immobilize",
          "text": "the affected limb with a splint or firm bandage at heart level (keep loose enough for pulse)."
        },
        {
          "head": "Transport",
          "text": "immediately to the nearest Community Health Centre (CHC) / PHC for Anti-Snake Venom (ASV)."
        }
      ],
      "hi": [
        {
          "head": "रखें:",
          "text": "पीड़ित को बिल्कुल शांत और स्थिर लेटाकर रखें ताकि रक्त प्रवाह में जहर तेजी से न फैले।"
        },
        {
          "head": "हटाएं:",
          "text": "काटे गए अंग के पास से चूड़ी, अंगूठी, घड़ी या तंग कपड़े सूजन आने से पहले उतार दें।"
        },
        {
          "head": "स्थिर करें:",
          "text": "अंग को लकड़ी या ढीली पट्टी के सहारे बिना हिलाए सीधा हृदय के स्तर पर रखें।"
        },
        {
          "head": "तुरंत ले जाएं:",
          "text": "बिना समय गंवाए नजदीकी प्राथमिक/सामुदायिक स्वास्थ्य केंद्र एंटी-वेनम (ASV) के लिए ले जाएं।"
        }
      ],
      "bn": [
        {
          "head": "শান্ত রাখুন:",
          "text": "রোগীকে সম্পূর্ণ শান্ত ও স্থির রেখে শুইয়ে দিন যাতে রক্তে বিষ দ্রুত না ছড়ায়।"
        },
        {
          "head": "খুলুন:",
          "text": "ফোলা শুরু হওয়ার আগেই আংটি, ঘড়ি, চুড়ি বা আঁটসাঁট পোশাক খুলে ফেলুন।"
        },
        {
          "head": "অঙ্গ স্থির রাখুন:",
          "text": "আক্রান্ত অঙ্গটি কাঠের টুকরো বা ঢিলে ব্যান্ডেজ দিয়ে হার্ট লেভেলে স্থির রাখুন।"
        },
        {
          "head": "হাসপাতালে নিন:",
          "text": "সময় নষ্ট না করে অ্যান্টি-ভেনম (ASV) এর জন্য নিকটস্থ স্বাস্থ্যকেন্দ্রে নিয়ে যান।"
        }
      ],
      "mr": [
        {
          "head": "शांत ठेवा:",
          "text": "रुग्णाला अजिबात हलू न देता शांत झोपवा, जेणेकरून शरीरात विष वेगाने पसरणार नाही."
        },
        {
          "head": "दागिने काढा:",
          "text": "सूज येण्यापूर्वी चावलेल्या अवयवावरील अंगठी, घड्याळ किंवा घट्ट कपडे काढून टाका."
        },
        {
          "head": "स्थिर करा:",
          "text": "जखम झालेला हात किंवा पाय फळीच्या आधारे हृदयाच्या पातळीवर न हलवता ठेवा."
        },
        {
          "head": "तातडीने हलवा:",
          "text": "वेळ न घालवता अँटी-व्हेनम (ASV) साठी जवळच्या प्राथमिक आरोग्य केंद्रात न्या."
        }
      ],
      "te": [
        {
          "head": "ప్రశాంతంగా ఉంచండి:",
          "text": "విషం రక్తంలో వేగంగా వ్యాపించకుండా బాధితుడిని కదలకుండా పడుకోబెట్టండి."
        },
        {
          "head": "తొలగించండి:",
          "text": "వాపు రాకముందే కాటు వేసిన భాగంలోని ఉంగరాలు, గడియారాలు, బిగుతు దుస్తులను తొలగించండి."
        },
        {
          "head": "కదలకుండా ఉంచండి:",
          "text": "గాయపడిన భాగాన్ని కర్ర లేదా వదులైన కట్టుతో గుండె స్థాయికి సమానంగా ఉంచండి."
        },
        {
          "head": "ఆసుపత్రికి తరలించండి:",
          "text": "యాంటీ-స్నేక్ వీనం (ASV) కోసం వెంటనే సమీప ప్రాథమిక ఆరోగ్య కేంద్రానికి తీసుకెళ్లండి."
        }
      ],
      "ta": [
        {
          "head": "அமைதிப்படுத்துங்கள்:",
          "text": "விஷம் உடலில் பரவுவதைத் தடுக்க பாதிக்கப்பட்டவரை அசையாமல் படுக்க வைக்கவும்."
        },
        {
          "head": "அகற்றுங்கள்:",
          "text": "வீக்கம் ஏற்படுவதற்கு முன் மோதிரங்கள், இறுக்கமான ஆடைகள், கடிகாரங்களை அகற்றவும்."
        },
        {
          "head": "அசையாமல் வைக்கவும்:",
          "text": "பாதிக்கப்பட்ட கையை அல்லது காலை ஒரு துணியால் கட்டி இதய மட்டத்தில் வைக்கவும்."
        },
        {
          "head": "மருத்துவமனைக்கு செல்லுங்கள்:",
          "text": "விஷமுறிவு மருந்து (ASV) பெற உடனடியாக அரசு ஆரம்ப சுகாதார நிலையத்திற்கு கொண்டு செல்லுங்கள்."
        }
      ],
      "gu": [
        {
          "head": "શાંત રાખો:",
          "text": "દર્દીને સંપૂર્ણ શાંત રાખી સુવડાવો જેથી શરીરમાં ઝેર ઝડપથી ન ફેલાય."
        },
        {
          "head": "ઉતારી લો:",
          "text": "સોજો આવે તે પહેલાં કરડેલા અંગ પરથી વીંટી, ઘડિયાળ કે તંગ કપડાં ઉતારી લો."
        },
        {
          "head": "સ્થિર કરો:",
          "text": "અંગને લાકડાની પટ્ટી વડે હલનચલન ન થાય તે રીતે હૃદયના સ્તરે રાખો."
        },
        {
          "head": "તરત લઈ જાઓ:",
          "text": "સમય બગાડ્યા વિના એન્ટી-વેનમ (ASV) માટે નજીકના સરકારી આરોગ્ય કેન્દ્ર લઈ જાઓ."
        }
      ],
      "ur": [
        {
          "head": "پرسکون رکھیں:",
          "text": "مریض کو بالکل پرسکون اور ساکت لٹائیں تاکہ زہر خون میں تیزی سے نہ پھیلے۔"
        },
        {
          "head": "اتار دیں:",
          "text": "سوجن آنے سے پہلے کاٹے گئے مقام کے قریب سے انگوٹھی، گھڑی یا تنگ کپڑے اتار دیں۔"
        },
        {
          "head": "حرکت نہ دیں:",
          "text": "متاثرہ حصے کو بغیر ہلائے لکڑی کے سہارے دل کی سطح پر رکھیں۔"
        },
        {
          "head": "فوری ہسپتال لے جائیں:",
          "text": "وقت ضائع کیے بغیر اینٹی وینم (ASV) کے لیے قریبی سرکاری ہسپتال پہنچائیں۔"
        }
      ],
      "kn": [
        {
          "head": "ಶಾಂತರಾಗಿರಿಸಿ:",
          "text": "ವಿಷವು ರಕ್ತದಲ್ಲಿ ವೇಗವಾಗಿ ಹರಡದಂತೆ ರೋಗಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶಾಂತವಾಗಿ ಮಲಗಿಸಿ."
        },
        {
          "head": "ತೆಗೆಯಿರಿ:",
          "text": "ಊತ ಬರುವ ಮೊದಲೇ ಕಡಿತದ ಭಾಗದ ಉಂಗುರ, ವಾಚ್ ಅಥವಾ ಬಿಗಿಯಾದ ಬಟ್ಟೆಗಳನ್ನು ತೆಗೆಯಿರಿ."
        },
        {
          "head": "ಅಲುಗಾಡಿಸಬೇಡಿ:",
          "text": "ಗಾಯಗೊಂಡ ಭಾಗವನ್ನು ಮರದ ಪಟ್ಟಿಯ ಆಸರೆಯೊಂದಿಗೆ ಹೃದಯದ ಮಟ್ಟದಲ್ಲಿರಿಸಿ."
        },
        {
          "head": "ಆಸ್ಪತ್ರೆಗೆ ಕರೆದೊಯ್ಯಿರಿ:",
          "text": "ಆ್ಯಂಟಿ-ವೆನಮ್ (ASV) ಚುಚ್ಚುಮದ್ದಿಗಾಗಿ ತಕ್ಷಣವೇ ಸಮೀಪದ ಆರೋಗ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಕರೆದೊಯ್ಯಿರಿ."
        }
      ],
      "or": [
        {
          "head": "ଶାନ୍ତ ରଖନ୍ତୁ:",
          "text": "ରକ୍ତରେ ବିଷ ନ ବ୍ୟାପିବା ପାଇଁ ରୋଗୀଙ୍କୁ ସମ୍ପୂର୍ଣ୍ଣ ଶାନ୍ତ ଓ ସ୍ଥିର ଭାବେ ଶୁଆଇ ରଖନ୍ତୁ।"
        },
        {
          "head": "ଖୋଲି ଦିଅନ୍ତୁ:",
          "text": "ଫୁଲିବା ପୂର୍ବରୁ କାମୁଡ଼ା ସ୍ଥାନରୁ ମୁଦି, ଘଣ୍ଟା ବା ଚିପା ପୋଷାକ ଖୋଲି ଦିଅନ୍ତୁ।"
        },
        {
          "head": "ସ୍ଥିର ରଖନ୍ତୁ:",
          "text": "କ୍ଷତାକ୍ତ ଅଙ୍ଗକୁ ବାଉଁଶ ବା ପଟି ସାହାଯ୍ୟରେ ହୃଦୟ ସ୍ତରରେ ସ୍ଥିର ରଖନ୍ତୁ।"
        },
        {
          "head": "ତୁରନ୍ତ ନିଅନ୍ତୁ:",
          "text": "ବିଳମ୍ବ ନକରି ଆଣ୍ଟି-ସ୍ନେକ୍ ଭେନମ୍ (ASV) ପାଇଁ ନିକଟସ୍ଥ ସରକାରୀ ଡାକ୍ତରଖାନା ନିଅନ୍ତୁ।"
        }
      ]
    },
    "donts": {
      "en": [
        "Do NOT cut or slash the bite marks with razor blades or knives.",
        "Do NOT attempt to suck out venom by mouth or mechanical suction devices.",
        "Do NOT tie tight tourniquets or ropes that completely block arterial circulation.",
        "Do NOT apply cow dung, mud, turmeric, herbal leaves, or electric shock.",
        "Do NOT give alcohol, caffeinated drinks, painkiller sedatives, or traditional herbs."
      ],
      "hi": [
        "घाव पर ब्लेड, चाकू या चीरा बिल्कुल न लगाएं।",
        "मुंह या किसी पंप से जहर चूसने की कोशिश कतई न करें।",
        "रस्सी या तार से बहुत कसकर न बांधें (नसें बंद होने से अंग कटने का खतरा रहता है)।",
        "घाव पर गोबर, राख, हल्दी, जड़ी-बूटी या बर्फ बिल्कुल न लगाएं।",
        "पीड़ित को शराब, नशीली दवाएं या कोई तांत्रिक काढ़ा न पिलाएं।"
      ],
      "bn": [
        "ক্ষতস্থানে ব্লেড বা ছুরি দিয়ে কাটবেন না।",
        "মুখ দিয়ে বিষ চোষার চেষ্টা করবেন না।",
        "দড়ি দিয়ে খুব শক্ত করে বাঁধন দেবেন না (রক্ত চলাচল বন্ধ হলে অঙ্গহানি হতে পারে)।",
        "গোবর, মাটি, ছাই, হলুদ বা ভেষজ পাতা লাগাবেন না।",
        "রোগীকে মদ বা ঘুমের ওষুধ খাওয়াবেন না।"
      ],
      "mr": [
        "जखमेवर ब्लेड किंवा सुरीने कापू नका.",
        "तोंडाने किंवा पंपाने विष शोषण्याचा प्रयत्न करू नका.",
        "दौरीने रक्तप्रवाह पूर्ण बंद होईल इतके घट्ट बांधू नका.",
        "जखमेवर शेण, माती, हळद किंवा वनस्पती लावू नका.",
        "रुग्णाला मद्य किंवा गुंगीचे औषध देऊ नका."
      ],
      "te": [
        "గాయంపై బ్లేడ్ లేదా కత్తితో గాట్లు పెట్టవద్దు.",
        "నోటితో విషాన్ని పీల్చడానికి ప్రయత్నించవద్దు.",
        "రక్తప్రసరణ ఆగిపోయేలా తాడుతో చాలా గట్టిగా కట్టవద్దు.",
        "గాయంపై పేడ, బూడిద, పసుపు లేదా మూలికలు పూయవద్దు.",
        "బాధితుడికి మద్యం లేదా మత్తు మందులు ఇవ్వవద్దు."
      ],
      "ta": [
        "கடிபட்ட இடத்தில் பிளேடு அல்லது கத்தியால் கீற வேண்டாம்.",
        "வாயால் விஷத்தை உறிஞ்ச முயற்சிக்காதீர்கள்.",
        "ரத்த ஓட்டத்தை முற்றிலுமாகத் தடுக்கும் வகையில் கயிற்றால் இறுக்கமாகக் கட்ட வேண்டாம்.",
        "காயத்தின் மீது சாணம், மண், மஞ்சள் அல்லது பச்சிலைகளைப் பூச வேண்டாம்.",
        "பாதிக்கப்பட்டவருக்கு மது அல்லது மயக்க மருந்துகளைக் கொடுக்க வேண்டாம்."
      ],
      "gu": [
        "ઘા પર બ્લેડ કે ચપ્પુ વડે ચીરો ન મૂકો.",
        "મોં વડે ઝેર ચૂસવાનો પ્રયાસ ક્યારેય ન કરો.",
        "દોરડા વડે એટલું સખત ન બાંધો કે લોહીનું પરિભ્રમણ બંધ થઈ જાય.",
        "ઘા પર છાણ, માટી, હળદર કે વનસ્પતિનો લેપ ન લગાવો.",
        "દર્દીને દારૂ કે ઘેનની દવાઓ ન આપો."
      ],
      "ur": [
        "زخم پر بلیڈ یا چھری سے چیرا ہرگز نہ لگائیں۔",
        "منہ سے زہر چوسنے کی کوشش بالکل نہ کریں۔",
        "رسی سے اس قدر زور سے نہ باندھیں کہ خون کا بہاؤ رک جائے۔",
        "زخم پر گوبر، راکھ، ہلدی یا جڑی بوٹیاں نہ لگائیں۔",
        "مریض کو شراب یا نشہ آور ادویات نہ دیں۔"
      ],
      "kn": [
        "ಗಾಯದ ಮೇಲೆ ಬ್ಲೇಡ್ ಅಥವಾ ಚಾಕುವಿನಿಂದ ಗಾಯ ಮಾಡಬೇಡಿ.",
        "ಬಾಯಿಯಿಂದ ವಿಷವನ್ನು ಹೀರುವ ಪ್ರಯತ್ನ ಮಾಡಬೇಡಿ.",
        "ರಕ್ತ ಸಂಚಾರ ಸಂಪೂರ್ಣ ನಿಲ್ಲುವಂತೆ ಹಗ್ಗದಿಂದ ಬಿಗಿಯಾಗಿ ಕಟ್ಟಬೇಡಿ.",
        "ಗಾಯಕ್ಕೆ ಸಗಣಿ, ಮಣ್ಣು, ಅರಿಶಿನ ಅಥವಾ ಗಿಡಮೂಲಿಕೆಗಳನ್ನು ಹಚ್ಚಬೇಡಿ.",
        "ರೋಗಿಗೆ ಮದ್ಯ ಅಥವಾ ನಿದ್ರೆ ಮಾತ್ರೆಗಳನ್ನು ನೀಡಬೇಡಿ."
      ],
      "or": [
        "କ୍ଷତ ସ୍ଥାନରେ ବ୍ଲେଡ୍ ବା ଛୁରୀରେ ଚିରନ୍ତୁ ନାହିଁ।",
        "ପାଟିରେ ବିଷ ଟାଣିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ ନାହିଁ।",
        "ରକ୍ତ ଚଳାଚଳ ବନ୍ଦ ହେବା ପରି ଦଉଡ଼ିରେ କଷି ବାନ୍ଧନ୍ତୁ ନାହିଁ।",
        "କ୍ଷତରେ ଗୋବର, ପାଉଁଶ, ହଳଦୀ ବା ଚେରମୂଳି ଲଗାନ୍ତୁ ନାହିଁ।",
        "ରୋଗୀଙ୍କୁ ମଦ ବା ନିଶା ଔଷଧ ଦିଅନ୍ତୁ ନାହିଁ।"
      ]
    }
  },
  "heat": {
    "id": "heat",
    "icon": "☀️",
    "titles": {
      "en": "Heat Stroke / Severe Exhaustion",
      "hi": "लू लगना (हीट स्ट्रोक)",
      "bn": "সানস্ট্রোক / লু লাগা",
      "mr": "उष्माघात (उन्हाचा झटका)",
      "te": "వడదెబ్బ (హీట్ స్ట్రోక్)",
      "ta": "சூரிய பக்கவாதம் (வெப்ப பக்கவாதம்)",
      "gu": "લૂ લાગવી (હીટ સ્ટ્રોક)",
      "ur": "لو لگنا (ہیٹ اسٹروک)",
      "kn": "ಬಿಸಿಲು ಹೊಡೆತ (ಶಾಖಾಘಾತ)",
      "or": "ଅଂଶୁଘାତ (ଖରା ଲାଗିବା)"
    },
    "actions": {
      "en": [
        {
          "head": "Move",
          "text": "the person immediately to a cool, shaded, and well-ventilated spot out of direct sunlight."
        },
        {
          "head": "Loosen",
          "text": "outer clothing and fan the patient vigorously with cool air or mist."
        },
        {
          "head": "Apply",
          "text": "cold wet towels, ice wraps, or cool water sponges to the neck, armpits, and groin."
        },
        {
          "head": "Hydrate",
          "text": "with small, frequent sips of ORS electrolyte water or salted lemon water if fully conscious."
        }
      ],
      "hi": [
        {
          "head": "ले जाएं:",
          "text": "पीड़ित को तुरंत धूप से हटाकर किसी ठंडी, हवादार और छायादार जगह पर लाएं।"
        },
        {
          "head": "ढीला करें:",
          "text": "अतिरिक्त कपड़े उतारें या ढीले करें और पंखे या कपड़े से तेज हवा दें।"
        },
        {
          "head": "ठंडा करें:",
          "text": "गर्दन, बगल और जांघों के जोड़ों पर ठंडे पानी की पट्टी या गीला तौलिया रखें।"
        },
        {
          "head": "पिलाएं:",
          "text": "यदि मरीज पूरी तरह होश में है, तो ओआरएस (ORS), नींबू पानी या मट्ठा घूंट-घूंट पिलाएं।"
        }
      ],
      "bn": [
        {
          "head": "ছায়ায় আনুন:",
          "text": "আক্রান্ত ব্যক্তিকে অবিলম্বে রোদ থেকে সরিয়ে শীতল ও ছায়াযুক্ত স্থানে নিয়ে যান।"
        },
        {
          "head": "পোশাক ঢিলা করুন:",
          "text": "অতিরিক্ত জামাকাপড় খুলে দিন এবং বাতাস করুন।"
        },
        {
          "head": "শরীর ঠান্ডা করুন:",
          "text": "ঘাড়, বগল এবং কুঁচকিতে ভেজা গামছা বা ঠান্ডা জলের স্পঞ্জ দিন।"
        },
        {
          "head": "তরল পান করান:",
          "text": "জ্ঞান থাকলে ওআরএস (ORS), লেবুর জল বা ডাবের জল অল্প অল্প করে খাওয়ান।"
        }
      ],
      "mr": [
        {
          "head": "सावलीत न्या:",
          "text": "रुग्णाला ताबडतोब उन्हातून हलवून थंड व हवेशीर सावलीत आणा."
        },
        {
          "head": "कपडे सैल करा:",
          "text": "अंगावरील जास्तीचे कपडे काढून वारा घाला."
        },
        {
          "head": "थंडावा द्या:",
          "text": "मान, काखा आणि जांघेत गार पाण्याच्या पट्ट्या किंवा ओला टॉवेल ठेवा."
        },
        {
          "head": "पाणी पाजा:",
          "text": "मरीज पूर्ण शुद्धीत असल्यास ओआरएस (ORS) किंवा लिंबू पाणी घोट घोट पाजा."
        }
      ],
      "te": [
        {
          "head": "నీడకు చేర్చండి:",
          "text": "బాధితుడిని వెంటనే ఎండలో నుండి చల్లని, గాలి వీచే నీడ ప్రదేశానికి తరలించండి."
        },
        {
          "head": "బట్టలు వదులు చేయండి:",
          "text": "పై బట్టలను వదులు చేసి ఫ్యాన్ లేదా గుడ్డతో గాలి వేయండి."
        },
        {
          "head": "చల్లబరచండి:",
          "text": "మెడ, చంకలు మరియు తొడల వద్ద తడి గుడ్డ లేదా ఐస్ ప్యాక్‌లను ఉంచండి."
        },
        {
          "head": "ద్రవాలు ఇవ్వండి:",
          "text": "స్పృహలో ఉంటే కొద్దికొద్దిగా ఓఆర్ఎస్ (ORS) లేదా నిమ్మరసం తాగించండి."
        }
      ],
      "ta": [
        {
          "head": "நிழலுக்கு நகர்த்தவும்:",
          "text": "பாதிக்கப்பட்டவரை உடனடியாக வெயிலில் இருந்து குளிர்ந்த, நிழலான இடத்திற்கு அழைத்துச் செல்லுங்கள்."
        },
        {
          "head": "ஆடைகளைத் தளர்த்தவும்:",
          "text": "இறுக்கமான ஆடைகளைத் தளர்த்தி விசிறி மூலம் காற்று வீசவும்."
        },
        {
          "head": "குளிர்விக்கவும்:",
          "text": "கழுத்து, அக்குள் மற்றும் இடுப்புப் பகுதிகளில் குளிர்ந்த நீரில் நனைத்த துணியை வைக்கவும்."
        },
        {
          "head": "நீரேற்றம்:",
          "text": "நினைவு இருந்தால் ORS கரைசல் அல்லது எலுமிச்சை சாற்றை சிறிது சிறிதாகக் கொடுக்கவும்."
        }
      ],
      "gu": [
        {
          "head": "છાંયડામાં લાવો:",
          "text": "દર્દીને તાત્કાલિક તડકામાંથી હટાવી ઠંડી અને હવાની અવરજવરવાળી જગ્યાએ લાવો."
        },
        {
          "head": "કપડાં ઢીલાં કરો:",
          "text": "વધારાના કપડાં ઉતારો અથવા ઢીલા કરો અને પંખો નાખો."
        },
        {
          "head": "ઠંડક આપો:",
          "text": "ગરદન, બગલ અને સાથળના ભાગે ઠંડા પાણીનાં પોતાં મૂકો."
        },
        {
          "head": "પાણી આપો:",
          "text": "હોશમાં હોય તો ORS, લીંબુ પાણી કે છાશ ધીમે ધીમે પીવડાવો."
        }
      ],
      "ur": [
        {
          "head": "سائے میں لائیں:",
          "text": "مریض کو فورا دھوپ سے ہٹا کر کسی ٹھنڈی اور ہوا دار جگہ منتقل کریں۔"
        },
        {
          "head": "کپڑے ڈھیلے کریں:",
          "text": "اضافی کپڑے اتاریں یا ڈھیلے کریں اور ہوا دیں۔"
        },
        {
          "head": "ٹھنڈا کریں:",
          "text": "گردن، بغلوں اور رانوں پر ٹھنڈے پانی کی پٹیاں رکھیں۔"
        },
        {
          "head": "او آر ایس پلائیں:",
          "text": "اگر مریض ہوش میں ہو تو او آر ایس (ORS) یا لیموں پانی گھونٹ گھونٹ پلائیں۔"
        }
      ],
      "kn": [
        {
          "head": "ನೆರಳಿಗೆ ತನ್ನಿ:",
          "text": "ರೋಗಿಯನ್ನು ತಕ್ಷಣವೇ ಬಿಸಿಲಿನಿಂದ ತಂಪಾದ, ಗಾಳಿಯಾಡುವ ನೆರಳಿಗೆ ತನ್ನಿ."
        },
        {
          "head": "ಬಟ್ಟೆ ಸಡಿಲಗೊಳಿಸಿ:",
          "text": "ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ ಮತ್ತು ಗಾಳಿ ಬೀಸಿ."
        },
        {
          "head": "ತಂಪಾಗಿಸಿ:",
          "text": "ಕುತ್ತಿಗೆ, ಕಂಕುಳುಗಳಲ್ಲಿ ತಣ್ಣೀರಿನ ಬಟ್ಟೆ ಅಥವಾ ಐಸ್ ಪ್ಯಾಕ್ ಇರಿಸಿ."
        },
        {
          "head": "ದ್ರವಾಹಾರ ನೀಡಿ:",
          "text": "ಪ್ರಜ್ಞೆ ಇದ್ದರೆ ಸ್ವಲ್ಪ ಸ್ವಲ್ಪವೇ ORS ದ್ರಾವಣ ಅಥವಾ ಲಿಂಬೆ ರಸ ಕುಡಿಸಿ."
        }
      ],
      "or": [
        {
          "head": "ଛାଇକୁ ଆଣନ୍ତୁ:",
          "text": "ରୋଗୀଙ୍କୁ ତୁରନ୍ତ ଖରାରୁ ହଟାଇ ଥଣ୍ଡା ଓ ଛାଇ ଜାଗାକୁ ଆଣନ୍ତୁ।"
        },
        {
          "head": "ପୋଷାକ ଢିଲା କରନ୍ତୁ:",
          "text": "ଅତିରିକ୍ତ ପୋଷାକ ଢିଲା କରନ୍ତୁ ଏବଂ ବିଞ୍ଚଣାରେ ପବନ ଦିଅନ୍ତୁ।"
        },
        {
          "head": "ଥଣ୍ଡା କରନ୍ତୁ:",
          "text": "ବେକ, କାଖ ଓ ଜଙ୍ଘ ସନ୍ଧିରେ ଥଣ୍ଡା ପାଣି ପଟି ରଖନ୍ତୁ।"
        },
        {
          "head": "ଜଳୀୟ ଅଂଶ ଦିଅନ୍ତୁ:",
          "text": "ହୋସ୍ ଥିଲେ ORS ବା ଲେମ୍ବୁ ପାଣି ଧୀରେ ଧୀରେ ପିଇବାକୁ ଦିଅନ୍ତୁ।"
        }
      ]
    },
    "donts": {
      "en": [
        "Do NOT force fluids into the mouth if the patient is drowsy or unconscious.",
        "Do NOT give paracetamol or aspirin for heat stroke (cooling must be physical)."
      ],
      "hi": [
        "बेहोश व्यक्ति के मुंह में जबरन पानी न डालें।",
        "लू में बिना डॉक्टर पैरासिटामोल न दें—शरीर को बाहरी ठंडक दें।"
      ],
      "bn": [
        "অজ্ঞান ব্যক্তির মুখে জোর করে জল বা তরল দেবেন না।",
        "প্যারাসিটামল বা অ্যাসপিরিন দেবেন না (শারীরিক ঠান্ডাকরণ প্রয়োজন)।"
      ],
      "mr": [
        "बेભान व्यक्तीच्या तोंडात जबरदस्तीने पाणी ओतू नका.",
        "उष्माघातामध्ये पॅरासिटामॉल देऊ नका—शरीराला बाह्य थंडावा द्या."
      ],
      "te": [
        "స్పృహ లేని వ్యక్తి నోటిలో బలవంతంగా నీళ్లు పోయవద్దు.",
        "వడదెబ్బకు పారాసిటమాల్ ఇవ్వవద్దు (శరీరాన్ని చల్లబరచడమే ముఖ్యం)."
      ],
      "ta": [
        "மயக்க நிலையில் உள்ள நபரின் வாயில் வலுக்கட்டாயமாகத் திரவங்களை ஊற்ற வேண்டாம்.",
        "சூரிய பக்கவாதத்திற்கு பாராசிட்டமால் கொடுக்க வேண்டாம்."
      ],
      "gu": [
        "બેભાન વ્યક્તિના મોંમાં બળજબરીથી પાણી ન રેડો.",
        "લૂ લાગવા પર પેરાસીટામોલ ન આપો—શરીરને બાહ્ય ઠંડક આપો."
      ],
      "ur": [
        "بے ہوش مریض کے منہ میں زبردستی پانی نہ ڈالیں۔",
        "ہیٹ اسٹروک میں پیراسیٹامول نہ دیں (جسم کو باہر سے ٹھنڈا کرنا ضروری ہے)۔"
      ],
      "kn": [
        "ಪ್ರಜ್ಞಾಹೀನ ವ್ಯಕ್ತಿಯ ಬಾಯಿಗೆ ಬಲವಂತವಾಗಿ ನೀರನ್ನು ಸುರಿಯಬೇಡಿ.",
        "ಬಿಸಿಲು ಹೊಡೆತಕ್ಕೆ ಪ್ಯಾರಸಿಟಮಾಲ್ ನೀಡಬೇಡಿ (ದೇಹವನ್ನು ತಂಪಾಗಿಸುವುದು ಮುಖ್ಯ)."
      ],
      "or": [
        "ଅଚେତ ବ୍ୟକ୍ତିଙ୍କ ପାଟିରେ ଜୋର କରି ପାଣି ଢାଳନ୍ତୁ ନାହିଁ।",
        "ଅଂଶୁଘାତରେ ପାରାସିଟାମୋଲ୍ ଦିଅନ୍ତୁ ନାହିଁ।"
      ]
    }
  },
  "cut": {
    "id": "cut",
    "icon": "🔧",
    "titles": {
      "en": "Farm Cut / Heavy Bleeding",
      "hi": "खेत में कट / गहरी चोट",
      "bn": "ধারালো চোট / রক্তপাত",
      "mr": "शेतातील जखम / रक्तस्त्राव",
      "te": "పొలంలో గాయం / తీవ్ర రక్తస్రావం",
      "ta": "வயல்வெளி காயம் / ரத்தப்போக்கு",
      "gu": "ખેતરમાં ઘા / રક્તસ્ત્રાવ",
      "ur": "کھیت میں گہرا زخم / خون بہنا",
      "kn": "ಜಮೀನಿನಲ್ಲಿ ಗಾಯ / ರಕ್ತಸ್ರಾವ",
      "or": "ବିଲରେ କ୍ଷତ / ରକ୍ତସ୍ରାବ"
    },
    "actions": {
      "en": [
        {
          "head": "Press",
          "text": "a clean, sterile cloth firmly over the wound for 5–10 uninterrupted minutes."
        },
        {
          "head": "Elevate",
          "text": "the bleeding limb above heart level whenever feasible."
        },
        {
          "head": "Rinse",
          "text": "gently with clean potable water to clear soil debris."
        },
        {
          "head": "Seek",
          "text": "a Primary Health Centre for Tetanus Toxoid (TT) vaccine and sterile dressing."
        }
      ],
      "hi": [
        {
          "head": "दबाएं:",
          "text": "खून रोकने के लिए साफ कपड़े से घाव पर 5-10 मिनट तक लगातार दबाव बनाएं।"
        },
        {
          "head": "ऊंचा उठाएं:",
          "text": "चोटिल अंग को दिल के स्तर से थोड़ा ऊंचा रखें।"
        },
        {
          "head": "साफ करें:",
          "text": "घाव को साफ पानी से धीरे-धीरे धोएं।"
        },
        {
          "head": "टीका लगवाएं:",
          "text": "24 घंटे के अंदर अस्पताल जाकर टिटनेस (TT) का इंजेक्शन लगवाएं।"
        }
      ],
      "bn": [
        {
          "head": "চাপ দিন:",
          "text": "রক্তপাত বন্ধ করতে একটি পরিষ্কার কাপড় দিয়ে ৫-১০ মিনিট শক্ত করে চেপে ধরুন।"
        },
        {
          "head": "উঁচু করুন:",
          "text": "সম্ভব হলে আঘাতপ্রাপ্ত অঙ্গটি হৃদপিণ্ডের স্তরের ওপরে তুলে রাখুন।"
        },
        {
          "head": "পরিষ্কার করুন:",
          "text": "পরিষ্কার জল দিয়ে ধুলোবালি ধুয়ে ফেলুন।"
        },
        {
          "head": "ইনজেকশন নিন:",
          "text": "টিটেনাস (TT) টিকার জন্য নিকটস্থ স্বাস্থ্যকেন্দ্রে যান।"
        }
      ],
      "mr": [
        {
          "head": "दाबून धरा:",
          "text": "रक्त थांबवण्यासाठी स्वच्छ कापडाने ५-१० मिनिटे जखमेवर सलग दाब द्या."
        },
        {
          "head": "उंचावर ठेवा:",
          "text": "जखम झालेला भाग शक्यतो हृदयाच्या पातळीपेक्षा वर उचला."
        },
        {
          "head": "धुवा:",
          "text": "स्वच्छ पाण्याने माती व कचरा हळुवार धुवून काढा."
        },
        {
          "head": "धनुర్వాత लस:",
          "text": "२४ तासांच्या आत टिटॅनस (TT) चे इंजेक्शन नक्की घ्या."
        }
      ],
      "te": [
        {
          "head": "ఒత్తిడి ఉంచండి:",
          "text": "రక్తం ఆగడానికి శుభ్రమైన గుడ్డతో గాయంపై 5-10 నిమిషాలు గట్టిగా అదిమి పట్టుకోండి."
        },
        {
          "head": "ఎత్తుగా ఉంచండి:",
          "text": "గాయపడిన భాగాన్ని గుండె కంటే ఎత్తులో ఉంచండి."
        },
        {
          "head": "కడగండి:",
          "text": "మట్టిని తొలగించడానికి శుభ్రమైన నీటితో మెల్లగా కడగండి."
        },
        {
          "head": "టీకా తీసుకోండి:",
          "text": "ధనుర్వాతం (TT) ఇంజెక్షన్ కోసం సమీప ఆరోగ్య కేంద్రానికి వెళ్ళండి."
        }
      ],
      "ta": [
        {
          "head": "அழுத்தவும்:",
          "text": "ரத்தப்போக்கை நிறுத்த சுத்தமான துணியால் காயத்தின் மீது 5-10 நிமிடங்கள் அழுத்திப் பிடிக்கவும்."
        },
        {
          "head": "உயர்த்தவும்:",
          "text": "ரத்தம் வழியும் பகுதியை இதய மட்டத்திற்கு மேல் உயர்த்தவும்."
        },
        {
          "head": "கழுவவும்:",
          "text": "சுத்தமான நீரால் மண்ணை மெதுவாகக் கழுவவும்."
        },
        {
          "head": "டிடி ஊசி:",
          "text": "டெட்டனஸ் (TT) ஊசி போட ஆரம்ப சுகாதார நிலையத்தை அணுகவும்."
        }
      ],
      "gu": [
        {
          "head": "દબાવો:",
          "text": "લોહી રોકવા માટે સ્વચ્છ કપડાથી ઘા પર ૫-૧૦ મિનિટ સુધી સતત દબાણ રાખો."
        },
        {
          "head": "ઊંચું રાખો:",
          "text": "ઈજાગ્રસ્ત અંગને હૃદયના સ્તરથી ઊંચું રાખો."
        },
        {
          "head": "સાફ કરો:",
          "text": "સ્વચ્છ પાણીથી માટી ધીમેથી ધોઈ લો."
        },
        {
          "head": "ધનુર્વાનું ઇન્જેક્શન:",
          "text": "ટિટનેસ (TT) ના ઇન્જેક્શન માટે દવાખાને જાઓ."
        }
      ],
      "ur": [
        {
          "head": "دبائیں:",
          "text": "خون روکنے کے لیے صاف کپڑے سے زخم کو 5 تا 10 منٹ تک مسلسل دبا کر رکھیں۔"
        },
        {
          "head": "اونچا کریں:",
          "text": "زخمی حصے کو دل کی سطح سے اونچا رکھیں۔"
        },
        {
          "head": "دھوئین:",
          "text": "صاف پانی سے مٹی اور کچرا آہستہ سے دھو لیں۔"
        },
        {
          "head": "ٹیکہ لگوائیں:",
          "text": "تشنج (TT) کا ٹیکہ لگوانے کے لیے ہسپتال جائیں۔"
        }
      ],
      "kn": [
        {
          "head": "ಒತ್ತಿ ಹಿಡಿಯಿರಿ:",
          "text": "ರಕ್ತಸ್ರಾವ ನಿಲ್ಲಿಸಲು ಸ್ವಚ್ಛ ಬಟ್ಟೆಯಿಂದ ಗಾಯದ ಮೇಲೆ 5-10 ನಿಮಿಷ ನಿರಂತರವಾಗಿ ಒತ್ತಿ."
        },
        {
          "head": "ಎತ್ತರದಲ್ಲಿರಿಸಿ:",
          "text": "ಗಾಯಗೊಂಡ ಅಂಗವನ್ನು ಹೃದಯದ ಮಟ್ಟಕ್ಕಿಂತ ಎತ್ತರದಲ್ಲಿರಿಸಿ."
        },
        {
          "head": "ತೊಳೆಯಿರಿ:",
          "text": "ಸ್ವಚ್ಛ ನೀರಿನಿಂದ ಮಣ್ಣನ್ನು ನಿಧಾನವಾಗಿ ತೊಳೆಯಿರಿ."
        },
        {
          "head": "ಧನುರ್ವಾಯು ಲಸಿಕೆ:",
          "text": "ಟೆಟಾನಸ್ (TT) ಇಂಜೆಕ್ಷನ್‌ಗಾಗಿ ಆರೋಗ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ."
        }
      ],
      "or": [
        {
          "head": "ଚାପି ଧରନ୍ତୁ:",
          "text": "ରକ୍ତ ବନ୍ଦ କରିବା ପାଇଁ ସଫା କପଡ଼ାରେ ୫-୧୦ ମିନିଟ୍ କ୍ଷତକୁ ଚାପି ଧରନ୍ତୁ।"
        },
        {
          "head": "ଉଚ୍ଚାରେ ରଖନ୍ତୁ:",
          "text": "କ୍ଷତାକ୍ତ ଅଙ୍ଗକୁ ହୃଦୟ ସ୍ତରରୁ ଉଚ୍ଚାରେ ରଖନ୍ତୁ।"
        },
        {
          "head": "ଧୁଅନ୍ତୁ:",
          "text": "ପରିଷ୍କାର ପାଣିରେ ମାଟିକୁ ଧୀରେ ଧୁଅନ୍ତୁ।"
        },
        {
          "head": "ଧନୁଷ୍ଟଙ୍କାର ଇଞ୍ଜେକ୍ସନ:",
          "text": "ଟିଟାନସ୍ (TT) ଟିକା ନେବାକୁ ସ୍ୱାସ୍ଥ୍ୟକେନ୍ଦ୍ର ଯାଆନ୍ତୁ।"
        }
      ]
    },
    "donts": {
      "en": [
        "Do NOT pack the wound with cow dung, ash, engine oil, or raw turmeric.",
        "Do NOT pull out deeply embedded blade fragments yourself."
      ],
      "hi": [
        "घाव पर गोबर, राख या डीजल बिल्कुल न लगाएं।",
        "धंसे हुए लोहे या कांच को खुद न खींचें।"
      ],
      "bn": [
        "ক্ষতস্থানে গোবর, ছাই বা ইঞ্জিন তেল লাগাবেন না।",
        "ভেতরে ঢোকা লোহা বা কাচ নিজে টেনে বের করবেন না।"
      ],
      "mr": [
        "जखमेवर शेण, राख किंवा डिझेल लावू नका.",
        "रुतलेले लोखंड किंवा काच स्वतः ओढून काढू नका."
      ],
      "te": [
        "గాయంపై పేడ, బూడిద లేదా డీజిల్ పూయవద్దు.",
        "లోతుగా గుచ్చుకున్న ఇనుప ముక్కలను మీరే లాగవద్దు."
      ],
      "ta": [
        "காயத்தின் மீது சாணம், சாம்பல் அல்லது எண்ணெய் பூச வேண்டாம்.",
        "ஆழமாகப் பதிந்த இரும்புத் துண்டுகளை நீங்களே அகற்ற முயற்சிக்காதீர்கள்."
      ],
      "gu": [
        "ઘા પર છાણ, રાખ કે ડીઝલ બિલકુલ ન લગાવો.",
        "ઊંડે સુધી ઘૂસી ગયેલું લોખંડ કે કાચ જાતે ન ખેંચો."
      ],
      "ur": [
        "زخم پر گوبر، راکھ یا انجن کا تیل نہ لگائیں۔",
        "اندر دھنسے ہوئے لوہے یا شیشے کے ٹکڑوں کو خود نہ کھینچیں۔"
      ],
      "kn": [
        "ಗಾಯಕ್ಕೆ ಸಗಣಿ, ಬೂದಿ ಅಥವಾ ಎಂಜಿನ್ ಆಯಿಲ್ ಹಚ್ಚಬೇಡಿ.",
        "ಆಳವಾಗಿ ಚುಚ್ಚಿದ ಕಬ್ಬಿಣ ಅಥವಾ ಗಾಜಿನ ಚೂರನ್ನು ತಾವೇ ಎಳೆಯಬೇಡಿ."
      ],
      "or": [
        "କ୍ଷତରେ ଗୋବର, ପାଉଁଶ ବା ଡିଜେଲ୍ ଲଗାନ୍ତୁ ନାହିଁ।",
        "ପଶିଥିବା ଲୁହା କଣ୍ଟା ବା କାଚକୁ ନିଜେ ଟାଣନ୍ତୁ ନାହିଁ।"
      ]
    }
  }
};

  const GRIEVANCE_DATA = {
  "subjects": {
    "water": {
      "en": "Urgent Relief Required for Severe 5-Day Water Supply Shortage in Amaravati Ward",
      "hi": "अमरावती नगर वार्ड में पिछले 5 दिनों से गंभीर पेयजल संकट निवारण हेतु",
      "bn": "অমরাবতী ওয়ার্ডে গত ৫ দিন ধরে তীব্র পানীয় জল সংকট অবিলম্বে সমাধানের আবেদন",
      "mr": "अमरावती नगर वॉर्डात गेल्या ५ दिवसांपासून सुरू असलेल्या गंभीर पाणीटंचाई निवारणार्थ",
      "te": "అమరావతి వార్డులో గత 5 రోజులుగా తీవ్ర తాగునీటి ఎద్దడి నివారణ కొరకు",
      "ta": "அமராவதி வார்டில் கடந்த 5 நாட்களாக நிலவும் கடுமையான குடிநீர் தட்டுப்பாடு தீர்வு குறித்து",
      "gu": "અમરાવતી વોર્ડમાં છેલ્લા 5 દિવસથી પીવાના પાણીની ગંભીર તંગી નિવારણ બાબત",
      "ur": "امراوتی وارڈ میں پچھلے 5 دنوں سے پینے کے پانی کی شدید قلت کے ازالے کی بابت",
      "kn": "ಅಮರಾವತಿ ವಾರ್ಡ್‌ನಲ್ಲಿ ಕಳೆದ 5 ದಿನಗಳಿಂದ ಕುಡಿಯುವ ನೀರಿನ ತೀವ್ರ ಕೊರತೆ ನಿವಾರಣೆ ಕುರಿತು",
      "or": "ଅମରାବତୀ ୱାର୍ଡରେ ଗତ ୫ ଦିନରୁ ପାନୀୟ ଜଳ ସଙ୍କଟ ସମାଧାନ ପାଇଁ"
    },
    "electricity": {
      "en": "Petition Regarding Chronic Agricultural Grid Power Outages in Amaravati Rural Belt",
      "hi": "अमरावती कृषि क्षेत्र में अघोषित विद्युत कटौती समाधान हेतु",
      "bn": "অমরাবতী গ্রামীণ এলাকায় কৃষি বিদ্যুৎ সরবরাহের সংকট নিরসন প্রসঙ্গে",
      "mr": "अमरावती ग्रामीण भागात कृषी वीज पुरवठ्यातील व्यत्यय दूर करणेबाबत",
      "te": "అమరావతి వ్యవసాయ ప్రాంతంలో విద్యుత్ కోతల పరిష్కారం కొరకు",
      "ta": "அமராவதி வேளாண் பகுதியில் மின்தடை பிரச்சனை தீர்க்க கோருதல்",
      "gu": "કૃષિ ક્ષેત્રમાં અઘોષિત વીજ કાપની સમસ્યાના નિરાકરણ બાબત",
      "ur": "زرعی فیڈر پر غیراعلانیہ بجلی کٹوتی کے حل کے لیے درخواست",
      "kn": "ಕೃಷಿ ವಿದ್ಯುತ್ ಕಡಿತದ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸುವ ಕುರಿತು",
      "or": "କୃଷି ବିଦ୍ୟୁତ କାଟ ସମସ୍ୟା ସମାଧାନ ପାଇଁ"
    },
    "road": {
      "en": "Immediate Pothole Repair Requisition on Mandi Transit Corridor, Amaravati District",
      "hi": "अमरावती मुख्य मंडी संपर्क मार्ग के गड्ढों की तत्काल मरम्मत बाबत",
      "bn": "অমরাবতী মণ্ডী সংযোগ সড়কের গর্ত অবিলম্বে মেরামতের আবেদন",
      "mr": "अमरावती मुख्य बाजार रस्त्यावरील खड्डे तातडीने दुरुस्त करणेबाबत",
      "te": "అమరావతి మార్కెట్ ప్రధాన రహదారిపై గుంతల తక్షణ మరమ్మత్తుల కొరకు",
      "ta": "சந்தை சாலையின் பள்ளங்களை உடனடியாக சீரமைக்க கோருதல்",
      "gu": "અમરાવતી મુખ્ય માર્ગના ખાડાઓના તાત્કાલિક સમારકામ બાબત",
      "ur": "منڈی مرکزی سڑک کے کھڈوں کی فوری مرمت کے لیے درخواست",
      "kn": "ಮುಖ್ಯ ಮಾರುಕಟ್ಟೆ ರಸ್ತೆಯ ಗುಂಡಿಗಳನ್ನು ತಕ್ಷಣ ದುರಸ್ತಿ ಮಾಡುವ ಕುರಿತು",
      "or": "ମୁଖ୍ୟ ମଣ୍ଡି ରାସ୍ତାର ଖାଲଖମା ତୁରନ୍ତ ମରାମତି ବାବଦରେ"
    },
    "canal": {
      "en": "Urgent Silt Clearance & Water Release Requisition for Krishna Canal Feeder",
      "hi": "कृष्णा नहर फीडर से गाद निकासी व टेल-एंड जल प्रवाह सुनिश्चित करने हेतु",
      "bn": "কৃষ্ণা খাল ফিডার থেকে পলি অপসারণ ও জলপ্রবাহ নিশ্চিতকরণ প্রসঙ্গে",
      "mr": "कृष्णा कालव्यातून गाळ काढणे व सिंचन पाणी सुरळीत करणेबाबत",
      "te": "కృష్ణా కాలువ పూడికతీత మరియు సాగునీటి విడుదల కొరకు",
      "ta": "கிருஷ்ணா கால்வாய் தூர்வாருதல் மற்றும் நீர் வெளியீடு குறித்து",
      "gu": "કૃષ્ણા કેનાલમાંથી કાંપ હટાવવા અને પાણી છોડવા બાબત",
      "ur": "کرشنا کینال سے گاد کی صفائی اور پانی کی روانی کے لیے درخواست",
      "kn": "ಕೃಷ್ಣಾ ಕಾಲುವೆ ಹೂಳೆತ್ತುವಿಕೆ ಮತ್ತು ನೀರು ಬಿಡುವ ಕುರಿತು",
      "or": "କୃଷ୍ଣା କେନାଲରୁ ପଙ୍କ ଉଦ୍ଧାର ଏବଂ ଜଳ ପ୍ରବାହ ସୁନିଶ୍ଚିତ କରିବା ପାଇଁ"
    }
  },
  "letterStructure": {
    "en": {
      "to": "To,\nThe Municipal Commissioner,\nAmaravati Municipal Corporation (AMC),\nGovernment of Andhra Pradesh, Amaravati - 522503.",
      "salutation": "Respected Commissioner Sir / Madam,",
      "bodyIntro": "I, {name}, a resident landholder of {ward}, Amaravati, respectfully submit this urgent representation before your esteemed office.",
      "details": {
        "water": "our locality within {ward} is experiencing a severe disruption in municipal potable water supply for the past 5 consecutive days. The local overhead booster pumps have failed, forcing resident families to rely on untreated canal water.",
        "electricity": "unannounced high-voltage load shedding and agricultural feeder tripping are exceeding 8 hours daily across {ward}, paralyzing tubewell irrigation during critical crop stages.",
        "road": "the primary transit road connecting {ward} to the central Mandi has developed severe potholes and waterlogged craters, damaging agricultural vehicles and halting transit.",
        "canal": "heavy siltation and weed accumulation along the Krishna canal secondary branch in {ward} have completely blocked tail-end agricultural irrigation discharge."
      },
      "bodyOutro": "Despite verbal intimations to the local ward secretariat office, no corrective measures have been taken so far. In view of the critical hardship faced by residents, I humbly request your good office to instruct the Municipal Engineering & Public Health Wing to conduct an immediate on-site inspection and restore normal public services.",
      "signOff": "Yours faithfully,\n\n{name}\nResident Signatory, {ward}\nAmaravati Municipal Corporation, Andhra Pradesh\nRef: #AMC-GRM-2026-912"
    },
    "hi": {
      "to": "सेवा में,\nश्रीमान नगर आयुक्त महोदय,\nअमरावती नगर निगम (AMC),\nआंध्र प्रदेश सरकार, अमरावती - 522503.",
      "salutation": "आदरणीय महोदय,",
      "bodyIntro": "मैं, {name}, निवासी {ward}, अमरावती, यह आवश्यक आवेदन आपके संज्ञान में ला रहा हूँ।",
      "details": {
        "water": "हमारे क्षेत्र {ward} में पिछले 5 दिनों से नगर निगम की पेयजल आपूर्ति पूरी तरह ठप है। मुख्य ओवरहेड वाटर पंप खराब होने से सैकड़ों परिवारों को भारी कठिनाई का सामना करना पड़ रहा है।",
        "electricity": "हमारे क्षेत्र {ward} में प्रतिदिन 8 घंटे से अधिक की अघोषित बिजली कटौती हो रही है, जिससे कृषि पंप और घरेलू कार्य ठप पड़े हैं।",
        "road": "अमरावती मुख्य मंडी को जोड़ने वाली सड़क {ward} में जगह-जगह से बुरी तरह क्षतिग्रस्त हो चुकी है, जिससे फसल परिवहन और आवागमन बाधित है।",
        "canal": "{ward} से गुजरने वाली कृष्णा नहर डिस्ट्रीब्यूटरी में भारी गाद जमा होने के कारण अंतिम छोर तक सिंचाई का पानी नहीं पहुंच पा रहा है।"
      },
      "bodyOutro": "स्थानीय वार्ड सचिवालय में मौखिक शिकायत के उपरांत भी अब तक कोई समाधान नहीं हुआ है। अतः आपसे विनम्र अनुरोध है कि जनहित को ध्यान में रखते हुए संबंधित अभियंताओं को त्वरित निरीक्षण एवं समस्या समाधान के निर्देश देने की कृपा करें।",
      "signOff": "भवदीय,\n\n{name}\nस्थानीय निवासी, {ward}\nअमरावती नगर निगम, आंध्र प्रदेश\nडिजिटल आवेदन क्रमांक: #AMC-2026-912"
    },
    "bn": {
      "to": "বরাবর,\nপৌর কমিশনার,\nঅমরাবতী পৌর নিগম (AMC),\nঅন্ধ্রপ্রদেশ সরকার, অমরাবতী - ৫২২৫০৩।",
      "salutation": "মহাশয়/মহাশয়া,",
      "bodyIntro": "আমি, {name}, অমরাবতীর {ward}-এর বাসিন্দা, বিনীতভাবে আপনার নিকট এই জরুরি আবেদন পেশ করছি।",
      "details": {
        "water": "আমাদের {ward} এলাকায় গত ৫ দিন ধরে পুরসভার পানীয় জল সরবরাহ সম্পূর্ণ বন্ধ রয়েছে। স্থানীয় পাম্প বিকল হওয়ায় বাসিন্দারা চরম সংকটে পড়েছেন।",
        "electricity": "আমাদের এলাকায় {ward} প্রতিদিন ৮ ঘণ্টারও বেশি সময় ধরে অনিয়মিত বিদ্যুৎ বিভ্রাট ঘটছে, যার ফলে কৃষি পাম্প চালানো অসম্ভব হয়ে পড়েছে।",
        "road": "মণ্ডী সংযোগকারী প্রধান সড়কটি {ward} এলাকায় মারাত্মক গর্তের সৃষ্টি হয়ে চলাচলের অযোগ্য হয়ে পড়েছে।",
        "canal": "{ward}-এর কৃষ্ণা খালের শাখাটিতে অতিরিক্ত পলি জমার কারণে সেচের জল পৌঁছাতে পারছে না।"
      },
      "bodyOutro": "স্থানীয় ওয়ার্ড কার্যালয়ে মৌখিক অভিযোগ জানানো সত্ত্বেও এখনও কোনো প্রতিকার হয়নি। অতএব জনস্বার্থে অবিলম্বে পরিদর্শনের নির্দেশ দিয়ে সমস্যা সমাধানের অনুরোধ জানাচ্ছি।",
      "signOff": "বিনীত,\n\n{name}\nবাসিন্দা, {ward}\nঅমরাবতী পৌর নিগম, অন্ধ্রপ্রদেশ\nরেফারেন্স: #AMC-GRM-2026-912"
    },
    "mr": {
      "to": "प्रति,\nमा. महानगरपालिका आयुक्त,\nअमरावती महानगरपालिका (AMC),\nआंध्र प्रदेश शासन, अमरावती - ५२२५०३.",
      "salutation": "आदरणीय महोदय,",
      "bodyIntro": "मी, {name}, राहणार {ward}, अमरावती, आपल्या कार्यालयाकडे हे निवेदन सादर करत आहे.",
      "details": {
        "water": "आमच्या {ward} प्रभागात गेल्या ५ दिवसांपासून पालिकेचा पाणीपुरवठा खंडित झाला आहे. मुख्य पंप नादुरुस्त झाल्याने नागरिकांना पाण्यासाठी भटकंती करावी लागत आहे.",
        "electricity": "आमच्या {ward} परिसरात दररोज ८ तासांहून अधिक वेळ अघोषित वीज कपात होत असल्याने कृषी पंप बंद पडले आहेत.",
        "road": "मुख्य बाजाराकडे जाणारा {ward} मधील रस्ता खड्ड्यांमुळे अत्यंत दयनीय अवस्थेत असून वाहतूक ठप्प झाली आहे.",
        "canal": "{ward} भागातील कृष्णा कालव्यात गाळ साचल्यामुळे शेतीला सिंचनाचे पाणी मिळत नाहीये."
      },
      "bodyOutro": "स्थानिक प्रभाग कार्यालयात तक्रार करूनही अद्याप कोणतीही कारवाई झालेली नाही. तरी तातडीने प्रत्यक्ष पाहणी करून समस्या सोडवावी ही नम्र विनंती.",
      "signOff": "आपला नम्र,\n\n{name}\nनागरिक, {ward}\nअमरावती महानगरपालिका\nसंदर्भ: #AMC-GRM-2026-912"
    },
    "te": {
      "to": "గౌరవనీయులైన మున్సిపల్ కమిషనర్ గారికి,\nఅమరావతి మున్సిపల్ కార్పొరేషన్ (AMC),\nఆంధ్రప్రదేశ్ ప్రభుత్వం, అమరావతి - 522503.",
      "salutation": "అయ్యా / మేడం,",
      "bodyIntro": "నేను, {name}, అమరావతిలోని {ward} నివాసిని, ఈ క్రింది అత్యవసర సమస్యను మీ దృష్టికి తీసుకువస్తున్నాను.",
      "details": {
        "water": "మా {ward} పరిధిలో గత 5 రోజులుగా మున్సిపల్ తాగునీటి సరఫరా పూర్తిగా నిలిచిపోయింది. మోటార్లు పాడవడంతో ప్రజలు తీవ్ర ఇబ్బందులు పడుతున్నారు.",
        "electricity": "మా ప్రాంతంలో {ward} రోజుకు 8 గంటలకు పైగా అనధికారిక విద్యుత్ కోతలు ఉండటం వల్ల వ్యవసాయ బోర్లు పనిచేయడం లేదు.",
        "road": "మార్కెట్‌ను కలిపే ప్రధాన రహదారి {ward} వద్ద భారీ గుంతలతో ప్రమాదకరంగా మారింది, వాహనాల రాకపోకలు నిలిచిపోయాయి.",
        "canal": "{ward} లోని కృష్ణా కాలువలో పూడిక పేరుకుపోవడం వల్ల చివరి ఆయకట్టుకు సాగునీరు అందడం లేదు."
      },
      "bodyOutro": "స్థానిక వార్డు సచివాలయంలో తెలియజేసినప్పటికీ ఎటువంటి పరిష్కారం లభించలేదు. కావున అధికారులు వెంటనే పరిశీలించి తగిన చర్యలు తీసుకోవాలని కోరుతున్నాను.",
      "signOff": "భవదీయుడు,\n\n{name}\nస్థానిక నివాసి, {ward}\nఅమరావతి మున్సిపల్ కార్పొరేషన్, ఆంధ్రప్రదేశ్\nరెఫరెన్స్: #AMC-GRM-2026-912"
    },
    "ta": {
      "to": "பெறுநர்,\nமாநகராட்சி ஆணையர் அவர்கள்,\nஅமராவதி மாநகராட்சி (AMC),\nஆந்திரப் பிரதேச அரசு, அமராவதி - 522503.",
      "salutation": "மதிப்பிற்குரிய ஆணையர் அவர்களுக்கு,",
      "bodyIntro": "நான், {name}, அமராவதி {ward} பகுதியில் வசிக்கும் நில உரிமையாளர், இந்த அவசர மனுவைச் சமர்ப்பிக்கிறேன்.",
      "details": {
        "water": "எங்கள் {ward} பகுதியில் கடந்த 5 நாட்களாகக் குடிநீர் விநியோகம் முற்றிலும் தடைபட்டுள்ளது. பொதுமக்கள் பெரும் சிரமத்திற்கு ஆளாகியுள்ளனர்.",
        "electricity": "எங்கள் பகுதியில் {ward} தினசரி 8 மணி நேரத்திற்கும் மேலாக மின்தடை ஏற்படுவதால் வேளாண் பம்புகளை இயக்க முடியவில்லை.",
        "road": "சந்தைக்கான பிரதான சாலை {ward} பகுதியில் பெரும் பள்ளங்களுடன் மோசமாக உள்ளதால் போக்குவரத்து பாதிக்கப்பட்டுள்ளது.",
        "canal": "{ward} கிருஷ்ணா கால்வாயில் தூர்ந்து போயுள்ளதால் பாசன நீர் கடைமடை பகுதிக்கு வரவில்லை."
      },
      "bodyOutro": "வார்டு அலுவலகத்தில் தெரிவித்தும் நடவடிக்கை இல்லை. எனவே உடனடியாக ஆய்வு செய்து தீர்வுகாண வேண்டுகிறேன்.",
      "signOff": "இங்ஙனம்,\n\n{name}\nவசிப்பாளர், {ward}\nஅமராவதி மாநகராட்சி, ஆந்திரப் பிரதேசம்\nஎண்: #AMC-GRM-2026-912"
    },
    "gu": {
      "to": "પ્રતિ,\nમ્યુનિસિપલ કમિશનર સાહેબ,\nઅમરાવતી મ્યુનિસિપલ કોર્પોરેશન (AMC),\nઆંધ્ર પ્રદેશ સરકાર, અમરાવતી - 522503.",
      "salutation": "આદરણીય કમિશનર સાહેબ,",
      "bodyIntro": "હું, {name}, રહેવાસી {ward}, અમરાવતી, આ તાકીદની રજૂઆત આપની સમક્ષ મૂકું છું.",
      "details": {
        "water": "અમારા {ward} વિસ્તારમાં છેલ્લા 5 દિવસથી પીવાના પાણીનો સપ્લાય બંધ છે, જેના કારણે લોકોને ભારે મુશ્કેલી પડી રહી છે.",
        "electricity": "અમારા {ward} માં રોજના 8 કલાકથી વધુ વીજ કાપ હોવાથી ખેતીના પંપ બંધ પડ્યા છે.",
        "road": "મુખ્ય માર્કેટને જોડતો રસ્તો {ward} પાસે ખાડાઓથી ખરાબ થઈ ગયો છે જેથી વાહનવ્યવહાર અટકી ગયો છે.",
        "canal": "{ward} માંથી પસાર થતી કૃષ્ણા નહેરમાં કાંપ ભરાઈ જવાથી સિંચાઈનું પાણી પહોંચતું નથી."
      },
      "bodyOutro": "વોર્ડ કચેરીમાં જાણ કરવા છતાં કોઈ નિરાકરણ આવ્યું નથી. આથી તાત્કાલિક સ્થળ તપાસ કરાવી સમસ્યાનો ઉકેલ લાવવા વિનંતી છે.",
      "signOff": "આપનો વિશ્વાસુ,\n\n{name}\nસ્થાનિક રહેવાસી, {ward}\nઅમરાવતી મહાનગરપાલિકા, આંધ્ર પ્રદેશ\nસંદર્ભ ક્રમાંક: #AMC-GRM-2026-912"
    },
    "ur": {
      "to": "بخدمت جناب میونسپل کمشنر صاحب،\nامراوتی میونسپل کارپوریشن (AMC)،\nحکومت آندھرا پردیش، امراوتی - 522503۔",
      "salutation": "محترم کمشنر صاحب،",
      "bodyIntro": "میں، {name}، ساکن {ward}، امراوتی، یہ ضروری درخواست آپ کے دفتر میں پیش کر رہا ہوں۔",
      "details": {
        "water": "ہمارے علاقے {ward} میں پچھلے 5 دنوں سے پینے کے پانی کی سپلائی مکمل بند ہے جس سے شہری شدید پریشانی کا شکار ہیں۔",
        "electricity": "ہمارے علاقے {ward} میں روزانہ 8 گھنٹے سے زیادہ غیراعلانیہ بجلی کٹوتی کی وجہ سے زرعی ٹیوب ویل بند پڑے ہیں۔",
        "road": "مرکزی منڈی روڈ پر {ward} کے پاس گہرے کھڈے پڑ چکے ہیں جس سے ٹریفک کی روانی رک گئی ہے۔",
        "canal": "{ward} میں کرشنا نہر کی شاخ میں گاد جمع ہونے کی وجہ سے کسانوں کو پانی نہیں مل رہا ہے۔"
      },
      "bodyOutro": "مقامی دفتر میں مطلع کرنے کے باوجود ابھی تک کوئی کارروائی نہیں ہوئی۔ لہذا گزارش ہے کہ فوری معائنہ کر کے مسئلہ حل کیا جائے۔",
      "signOff": "مخلص،\n\n{name}\nرہائشی، {ward}\nامراوتی میونسپل کارپوریشن، آندھرا پردیش\nحوالہ: #AMC-GRM-2026-912"
    },
    "kn": {
      "to": "ಮಾನ್ಯ ಪಾಲಿಕೆ ಆಯುಕ್ತರಿಗೆ,\nಅಮರಾವತಿ ಮಹಾನಗರ ಪಾಲಿಕೆ (AMC),\nಆಂಧ್ರಪ್ರದೇಶ ಸರ್ಕಾರ, ಅಮರಾವತಿ - 522503.",
      "salutation": "ಗೌರವಾನ್ವಿತ ಆಯುಕ್ತರೇ,",
      "bodyIntro": "ನಾನು, {name}, ಅಮರಾವತಿಯ {ward} ನಿವಾಸಿಯಾಗಿದ್ದು, ಈ ತುರ್ತು ಅರ್ಜಿಯನ್ನು ತಮ್ಮ ಗಮನಕ್ಕೆ ತರುತ್ತಿದ್ದೇನೆ.",
      "details": {
        "water": "ನಮ್ಮ {ward} ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕಳೆದ 5 ದಿನಗಳಿಂದ ಕುಡಿಯುವ ನೀರಿನ ಪೂರೈಕೆ ಸಂಪೂರ್ಣ ಸ್ಥಗಿತಗೊಂಡಿದ್ದು, ಜನರಿಗೆ ತೀವ್ರ ತೊಂದರೆಯಾಗಿದೆ.",
        "electricity": "ನಮ್ಮ {ward} ಪ್ರದೇಶದಲ್ಲಿ ಪ್ರತಿದಿನ 8 ಗಂಟೆಗೂ ಹೆಚ್ಚು ಕಾಲ ಅನಧಿಕೃತ ವಿದ್ಯುತ್ ಕಡಿತವಾಗುತ್ತಿರುವುದರಿಂದ ಕೃಷಿ ಪಂಪ್‌ಗಳು ಸ್ಥಗಿತಗೊಂಡಿವೆ.",
        "road": "ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕಿಸುವ ಮುಖ್ಯ ರಸ್ತೆ {ward} ಬಳಿ ತೀವ್ರವಾಗಿ ಹಾಳಾಗಿದ್ದು, ವಾಹನ ಸಂಚಾರಕ್ಕೆ ಅಡ್ಡಿಯಾಗಿದೆ.",
        "canal": "{ward} ಭಾಗದ ಕೃಷ್ಣಾ ಕಾಲುವೆಯಲ್ಲಿ ಹೂಳು ತುಂಬಿರುವುದರಿಂದ ಕೊನೆಯ ಹಂತದ ಜಮೀನುಗಳಿಗೆ ನೀರು ತಲುಪುತ್ತಿಲ್ಲ."
      },
      "bodyOutro": "ವಾರ್ಡ್ ಕಚೇರಿಯಲ್ಲಿ ಮೌಖಿಕವಾಗಿ ತಿಳಿಸಿದರೂ ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಂಡಿಲ್ಲ. ಆದ್ದರಿಂದ ಅಧಿಕಾರಿಗಳಿಗೆ ಸೂಕ್ತ ಸೂಚನೆ ನೀಡಿ ಸಮಸ್ಯೆ ಬಗೆಹರಿಸಲು ವಿನಂತಿ.",
      "signOff": "ತಮ್ಮ ವಿಶ್ವಾಸಿ,\n\n{name}\nಸ್ಥಳೀಯ ನಿವಾಸಿ, {ward}\nಅಮರಾವತಿ ಮಹಾನಗರ ಪಾಲಿಕೆ\nಉಲ್ಲೇಖ: #AMC-GRM-2026-912"
    },
    "or": {
      "to": "ସମ୍ମାନନୀୟ ପୌର କମିଶନରଙ୍କ ସମୀପେ,\nଅମରାବତୀ ମ୍ୟୁନିସିପାଲ କର୍ପୋରେସନ (AMC),\nଆନ୍ଧ୍ର ପ୍ରଦେଶ ସରକାର, ଅମରାବତୀ - ୫୨୨୫୦୩।",
      "salutation": "ମହାଶୟ,",
      "bodyIntro": "ମୁଁ, {name}, ଅମରାବତୀ {ward} ର ବାସିନ୍ଦା, ଏହି ଜରୁରୀ ଆବେଦନ ଆପଣଙ୍କ ଦୃଷ୍ଟିଗୋଚର କରୁଛି।",
      "details": {
        "water": "ଆମ {ward} ଅଞ୍ଚଳରେ ବିଗତ ୫ ଦିନ ହେବ ପାନୀୟ ଜଳ ଯୋଗାଣ ସମ୍ପୂର୍ଣ୍ଣ ବନ୍ଦ ରହିଛି, ଯାହାଫଳରେ ଲୋକେ ନାହିଁ ନଥିବା ଅସୁବିଧା ଭୋଗୁଛନ୍ତି।",
        "electricity": "ଆମ {ward} ଅଞ୍ଚଳରେ ଦୈନିକ ୮ ଘଣ୍ଟାରୁ ଅଧିକ ବିଜୁଳି କାଟ ହେଉଥିବାରୁ କୃଷି ପମ୍ପ ଚାଲିପାରୁ ନାହିଁ।",
        "road": "ମଣ୍ଡି ସଂଯୋଗକାରୀ ମୁଖ୍ୟ ରାସ୍ତା {ward} ରେ ଗାତ ସୃଷ୍ଟି ହୋଇ ଯାତାୟାତ ସମ୍ପୂର୍ଣ୍ଣ ବାଧାପ୍ରାପ୍ତ ହୋଇଛି।",
        "canal": "{ward} ଦେଇ ଯାଇଥିବା କୃଷ୍ଣା କେନାଲରେ ପଙ୍କ ଜମି ରହିବାରୁ ଚାଷୀମାନଙ୍କୁ ପାଣି ମିଳିପାରୁ ନାହିଁ।"
      },
      "bodyOutro": "ସ୍ଥାନୀୟ କାର୍ଯ୍ୟାଳୟରେ ଜଣାଇବା ସତ୍ତ୍ୱେ କୌଣସି ପଦକ୍ଷେପ ନିଆଯାଇ ନାହିଁ। ତେଣୁ ତୁରନ୍ତ ତଦନ୍ତ କରି ସମସ୍ୟାର ସମାଧାନ କରିବାକୁ ଅନୁରୋଧ କରୁଛି।",
      "signOff": "ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ,\n\n{name}\nସ୍ଥାନୀୟ ବାସିନ୍ଦା, {ward}\nଅମରାବତୀ ମ୍ୟୁନିସିପାଲ କର୍ପୋରେସନ\nଆବେଦନ କ୍ରମାଙ୍କ: #AMC-GRM-2026-912"
    }
  }
};

  const INTENT_DICTIONARY = [
  {
    "targetPage": "futureFarming",
    "keywords": [
      "hydroponic",
      "hydroponics",
      "tower",
      "aeroponic",
      "aeroponics",
      "vertical",
      "future farming",
      "vertical farming",
      "आधुनिक खेती",
      "वर्टिकल",
      "हाइड्रोपोनिक्स",
      "एरोपोनिक्स",
      "aadhunik kheti",
      "kheti",
      "হাইড্রোপনিক্স",
      "উল্লম্ব চাষ",
      "আধুনিক কৃষি",
      "অ্যারোপনিক্স",
      "উল্লম্ব খামার",
      "हायड्रोपोनिक्स",
      "उभी शेती",
      "आधुनिक शेती",
      "एरोपोनिक्स",
      "व्हर्टिकल फार्मिंग",
      "హైడ్రోపోనిక్స్",
      "నిలువు వ్యవసాయం",
      "ఆధునిక వ్యవసాయం",
      "ఏరోపోనిక్స్",
      "వర్టికల్ ఫార్మింగ్",
      "ஹைட்ரோபோனிக்ஸ்",
      "செங்குத்து விவசாயம்",
      "நவீன விவசாயம்",
      "ஏரோபோனிக்ஸ்",
      "હાઈડ્રોપોનિક્સ",
      "આધુનિક ખેતી",
      "વર્ટિકલ ફાર્મિંગ",
      "એરોપોનિક્સ",
      "ہائیڈروپونکس",
      "جدید زراعت",
      "عمودی کاشتکاری",
      "ایروپونکس",
      "ಹೈಡ್ರೋಪೋನಿಕ್ಸ್",
      "ಲಂಬ ಕೃಷಿ",
      "ಆಧುನಿಕ ಕೃಷಿ",
      "ಏರೋಪೋನಿಕ್ಸ್",
      "ହାଇଡ୍ରୋପୋନିକ୍ସ",
      "ଆଧୁନିକ କୃଷି",
      "ଭୂଲମ୍ବ ଚାଷ",
      "ଏରୋପୋନିକ୍ସ"
    ],
    "banners": {
      "en": "🚀 Recognized Advanced Future Farming Query • Routing to Setup Blueprints...",
      "hi": "🚀 आधुनिक खेती संबंधी प्रश्न पहचाना गया • ब्लूप्रिंट हब खोला जा रहा है...",
      "bn": "🚀 উন্নত আধুনিক কৃষি অনুসন্ধান শনাক্ত • ব্লুপ্রিন্ট হাবে নিয়ে যাওয়া হচ্ছে...",
      "mr": "🚀 आधुनिक प्रगत शेतीचा प्रश्न ओळखला • ब्लूप्रिंट हब उघडत आहे...",
      "te": "🚀 ఆధునిక వ్యవసాయ ప్రశ్న గుర్తించబడింది • బ్లూప్రింట్ హబ్‌కు దారి మళ్లిస్తోంది...",
      "ta": "🚀 நவீன விவசாய வினவல் கண்டறியப்பட்டது • திட்ட மையத்திற்கு வழிகாட்டுகிறது...",
      "gu": "🚀 આધુનિક ખેતી સંબંધિત પ્રશ્ન ઓળખાયો • બ્લૂપ્રિન્ટ હબ ખોલાઈ રહ્યું છે...",
      "ur": "🚀 جدید زراعت کا استفسار شناخت ہوا • خاکہ مرکز کھولا جا رہا ہے...",
      "kn": "🚀 ಆಧುನಿಕ ಕೃಷಿ ಪ್ರಶ್ನೆ ಗುರುತಿಸಲಾಗಿದೆ • ಬ್ಲೂಪ್ರಿಂಟ್ ಹಬ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "🚀 ଆଧୁନିକ କୃଷି ପ୍ରଶ୍ନ ଚିହ୍ନଟ ହେଲା • ବ୍ଲୁପ୍ରିଣ୍ଟ ହବ୍ ଖୋଲାଯାଉଛି..."
    }
  },
  {
    "targetPage": "grievance",
    "profile": "water",
    "keywords": [
      "water",
      "paani",
      "pani",
      "supply",
      "shortage",
      "tap",
      "tubewell",
      "pump kharab",
      "drinking water",
      "peene ka paani",
      "pipeline",
      "पानी",
      "जल",
      "जल संकट",
      "नल",
      "पीने का पानी",
      "पानी की किल्लत",
      "জল",
      "পানি",
      "জল সরবরাহ",
      "পানের জল",
      "নলকূপ",
      "কলের জল",
      "জলের সমস্যা",
      "पाणी",
      "पाणीपुरवठा",
      "नळ",
      "पिण्याचे पाणी",
      "पाण्याची टंचाई",
      "पाणी नाही",
      "నీరు",
      "నీళ్లు",
      "తాగునీరు",
      "కుళాయి",
      "నీటి సరఫరా",
      "నీటి ఎద్దడి",
      "నీటి సమస్య",
      "தண்ணீர்",
      "நீர்",
      "குடிநீர்",
      "குழாய்",
      "தண்ணீர் தட்டுப்பாடு",
      "தண்ணீர் வரவில்லை",
      "પાણી",
      "જળ",
      "પીવાનું પાણી",
      "નળ",
      "પાણીની તંગી",
      "પાણી નથી આવતું",
      "پانی",
      "پینے کا پانی",
      "پانی کی قلت",
      "نل",
      "پانی نہیں آ رہا",
      "ನೀರು",
      "ಕುಡಿಯುವ ನೀರು",
      "ನೀರ ಸರಬರಾಜು",
      "ನಲ್ಲಿ",
      "ನೀರಿನ ಕೊರತೆ",
      "ನೀರು ಬರುತ್ತಿಲ್ಲ",
      "ପାଣି",
      "ଜଳ",
      "ପିଇବା ପାଣି",
      "ନଳ",
      "ଜଳ ସଙ୍କଟ",
      "ପାଣି ଆସୁନାହିଁ"
    ],
    "banners": {
      "en": "Recognized Drinking Water Supply Issue • Routing to Grievance Formatter...",
      "hi": "पेयजल आपूर्ति समस्या पहचानी गई • शिकायत पत्र पर प्रेषित किया जा रहा है...",
      "bn": "পানীয় জল সরবরাহ সমস্যা শনাক্ত • অভিযোগ পত্রে নিয়ে যাওয়া হচ্ছে...",
      "mr": "पिण्याच्या पाण्याची समस्या ओळखली • तक्रार अर्जाकडे निर्देशित केले जात आहे...",
      "te": "తాగునీటి సమస్య గుర్తించబడింది • ఫిర్యాదు దరఖాస్తుకు దారి మళ్లిస్తోంది...",
      "ta": "குடிநீர் விநியோகப் பிரச்சனை கண்டறியப்பட்டது • புகார் மனுவிற்கு வழிகாட்டுகிறது...",
      "gu": "પીવાના પાણીની સમસ્યા ઓળખાઈ • ફરિયાદ અરજી તરફ મોકલાઈ રહ્યું છે...",
      "ur": "پینے کے پانی کا مسئلہ شناخت ہوا • شکایت نامہ کھولا جا رہا ہے...",
      "kn": "ಕುಡಿಯುವ ನೀರಿನ ಸಮಸ್ಯೆ ಗುರುತಿಸಲಾಗಿದೆ • ದೂರು ಅರ್ಜಿಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "ପାନୀୟ ଜଳ ସମସ୍ୟା ଚିହ୍ନଟ ହେଲା • ଅଭିଯୋଗ ପତ୍ରକୁ ପ୍ରେରଣ କରାଯାଉଛି..."
    }
  },
  {
    "targetPage": "grievance",
    "profile": "electricity",
    "keywords": [
      "electricity",
      "bijli",
      "power",
      "light",
      "current",
      "outage",
      "cut",
      "transformer",
      "load shedding",
      "बिजली",
      "विद्युत",
      "करंट",
      "पावर कट",
      "बिजली कटौती",
      "ट्रांसफार्मर",
      "बिजली चली गई",
      "বিদ্যুৎ",
      "কারেন্ট",
      "লোডশেডিং",
      "বিদ্যুৎ বিভ্রাট",
      "কারেন্ট নেই",
      "वीज",
      "विद्युत",
      "करंट",
      "लोडशेडिंग",
      "वीज खंडित",
      "लाईट गेली",
      "విద్యుత్",
      "కరెంట్",
      "పవర్ కట్",
      "ట్రాన్స్‌ఫార్మర్",
      "కరెంట్ పోయింది",
      "மின்சாரம்",
      "கரண்ட்",
      "மின்வெட்டு",
      "மின்சாரம் இல்லை",
      "વીજળી",
      "પાવર કટ",
      "લાઈટ",
      "કરંટ",
      "લાઈટ જતી રહી",
      "بجلی",
      "کرنٹ",
      "لوڈ شیڈنگ",
      "پاور کٹ",
      "بجلی چلی گئی",
      "ವಿದ್ಯುತ್",
      "ಕರೆಂಟ್",
      "ಪವರ್ ಕಟ್",
      "ಕರೆಂಟ್ ಹೋಯಿತು",
      "ବିଜୁଳି",
      "ବିଦ୍ୟୁତ",
      "ଲାଇନ କଟା",
      "କରେଣ୍ଟ",
      "ଲାଇନ୍ ଚାଲିଗଲା"
    ],
    "banners": {
      "en": "Recognized Agricultural Power Outage • Routing to Grievance Formatter...",
      "hi": "विद्युत कटौती समस्या पहचानी गई • शिकायत पत्र पर प्रेषित किया जा रहा है...",
      "bn": "বিদ্যুৎ বিভ্রাট সমস্যা শনাক্ত • অভিযোগ পত্রে নিয়ে যাওয়া হচ্ছে...",
      "mr": "वीज पुरवठा समस्या ओळखली • तक्रार अर्जाकडे निर्देशित केले जात आहे...",
      "te": "విద్యుత్ సమస్య గుర్తించబడింది • ఫిర్యాదు దరఖాస్తుకు దారి మళ్లిస్తోంది...",
      "ta": "மின்வெட்டு பிரச்சனை கண்டறியப்பட்டது • புகார் மனுவிற்கு வழிகாட்டுகிறது...",
      "gu": "વીજ કાપની સમસ્યા ઓળખાઈ • ફરિયાદ અરજી તરફ મોકલાઈ રહ્યું છે...",
      "ur": "بجلی کی کٹوتی کا مسئلہ شناخت ہوا • شکایت نامہ کھولا جا رہا ہے...",
      "kn": "ವಿದ್ಯುತ್ ಕಡಿತದ ಸಮಸ್ಯೆ ಗುರುತಿಸಲಾಗಿದೆ • ದೂರು ಅರ್ಜಿಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "ବିଜୁଳି ସମସ୍ୟା ଚିହ୍ନଟ ହେଲା • ଅଭିଯୋଗ ପତ୍ରକୁ ପ୍ରେରଣ କରାଯାଉଛି..."
    }
  },
  {
    "targetPage": "grievance",
    "profile": "road",
    "keywords": [
      "road",
      "sadak",
      "pothole",
      "rasta",
      "gaddha",
      "mandi road",
      "traffic",
      "सड़क",
      "रास्ता",
      "गड्ढा",
      "टूटी सड़क",
      "खराब रास्ता",
      "রাস্তা",
      "সড়ক",
      "ভাঙা রাস্তা",
      "গর্ত",
      "रस्ता",
      "खड्डे",
      "खराब रस्ता",
      "రోడ్డు",
      "రహదారి",
      "గుంతలు",
      "పాడైన రోడ్డు",
      "சாலை",
      "ரோடு",
      "பள்ளம்",
      "மோசமான சாலை",
      "રસ્તો",
      "ખાડા",
      "ખરાબ રસ્તો",
      "سڑک",
      "راستہ",
      "کھڈے",
      "ٹوٹی سڑک",
      "ರಸ್ತೆ",
      "ಗುಂಡಿ",
      "ಹಾಳಾದ ರಸ್ತೆ",
      "ରାସ୍ତା",
      "ଖାଲଖମା",
      "ଭଙ୍ଗା ରାସ୍ତା"
    ],
    "banners": {
      "en": "Recognized Damaged Road Grievance • Routing to Grievance Formatter...",
      "hi": "टूटी सड़क की समस्या पहचानी गई • शिकायत पत्र पर प्रेषित किया जा रहा है...",
      "bn": "ভাঙা রাস্তার অভিযোগ শনাক্ত • অভিযোগ পত্রে নিয়ে যাওয়া হচ্ছে...",
      "mr": "खराब रस्त्याची समस्या ओळखली • तक्रार अर्जाकडे निर्देशित केले जात आहे...",
      "te": "పాడైన రోడ్డు సమస్య గుర్తించబడింది • ఫిర్యాదు దరఖాస్తుకు దారి మళ్లిస్తోంది...",
      "ta": "சேதமடைந்த சாலை பிரச்சனை கண்டறியப்பட்டது • புகார் மனுவிற்கு வழிகாட்டுகிறது...",
      "gu": "તૂટેલા રસ્તાની સમસ્યા ઓળખાઈ • ફરિયાદ અરજી તરફ મોકલાઈ રહ્યું છે...",
      "ur": "ٹوٹی سڑک کا مسئلہ شناخت ہوا • شکایت نامہ کھولا جا رہا ہے...",
      "kn": "ಹಾಳಾದ ರಸ್ತೆಯ ಸಮಸ್ಯೆ ಗುರುತಿಸಲಾಗಿದೆ • ದೂರು ಅರ್ಜಿಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "ଭଙ୍ଗା ରାସ୍ତା ସମସ୍ୟା ଚିହ୍ନଟ ହେଲା • ଅଭିଯୋଗ ପତ୍ରକୁ ପ୍ରେରଣ କରାଯାଉଛି..."
    }
  },
  {
    "targetPage": "firstAid",
    "condition": "snake",
    "keywords": [
      "snake",
      "saanp",
      "sap",
      "bite",
      "venom",
      "kaat liya",
      "viper",
      "cobra",
      "डंक",
      "सांप",
      "सांप ने काटा",
      "सर्पदंश",
      "जहर",
      "সাপ",
      "সাপের কামড়",
      "সর্পদংশ",
      "বিষ",
      "साप",
      "सर्पदंश",
      "सापाने चावले",
      "विष",
      "పాము",
      "పాము కాటు",
      "విషం",
      "பாம்பு",
      "பாம்பு கடி",
      "விஷம்",
      "સાપ",
      "સાપ કરડ્યો",
      "સર્પદંશ",
      "ઝેર",
      "سانپ",
      "سانپ کا کاٹنا",
      "زہر",
      "ಹಾವು",
      "ಹಾವು ಕಡಿತ",
      "ವಿಷ",
      "ସାପ",
      "ସାପ କାମୁଡ଼ା",
      "ବିଷ"
    ],
    "banners": {
      "en": "Recognized Snake Bite Emergency • Loading First-Aid Protocol...",
      "hi": "सांप के काटने का आपातकाल पहचाना गया • प्राथमिक उपचार लोड हो रहा है...",
      "bn": "সাপের কামড়ের জরুরি অবস্থা শনাক্ত • প্রাথমিক চিকিৎসা লোড হচ্ছে...",
      "mr": "सर्पदंशाची आणीबाणी ओळखली • प्रथमोपचार लोड होत आहे...",
      "te": "పాము కాటు అత్యవసర పరిస్థితి గుర్తించబడింది • ప్రథమ చికిత్స లోడ్ అవుతోంది...",
      "ta": "பாம்பு கடி அவசரநிலை கண்டறியப்பட்டது • முதலுதவி நெறிமுறை தொடங்குகிறது...",
      "gu": "સાપ કરડવાની કટોકટી ઓળખાઈ • પ્રાથમિક સારવાર લોડ થઈ રહી છે...",
      "ur": "سانپ کے کاٹنے کی ایمرجنسی شناخت ہوئی • ابتدائی طبی امداد لوڈ ہو رہی ہے...",
      "kn": "ಹಾವು ಕಡಿತದ ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಗುರುತಿಸಲಾಗಿದೆ • ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      "or": "ସାପ କାମୁଡ଼ା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ଚିହ୍ନଟ • ପ୍ରାଥମିକ ଚିକିତ୍ସା ଖୋଲୁଛି..."
    }
  },
  {
    "targetPage": "firstAid",
    "condition": "heat",
    "keywords": [
      "heat",
      "loo",
      "sunstroke",
      "faint",
      "garmi",
      "chakkar",
      "dehydration",
      "लू",
      "धूप",
      "चक्कर",
      "गर्मी",
      "बेहोश",
      "लू लगना",
      "লু",
      "সানস্ট্রোক",
      "তীব্র গরম",
      "অজ্ঞান",
      "মাথা ঘোরা",
      "उष्माघात",
      "उन्हाचा झटका",
      "चक्कर",
      "उष्णता",
      "వడదెబ్బ",
      "ఎండ",
      "మూర్ఛ",
      "కళ్ళు తిరగడం",
      "சூரிய பக்கவாதம்",
      "வெப்ப பக்கவாதம்",
      "மயக்கம்",
      "வெயில்",
      "લૂ લાગવી",
      "ગરમી",
      "ચક્કર",
      "તડકો",
      "لو لگنا",
      "گرمی",
      "بے ہوشی",
      "چکر آنا",
      "ಬಿಸಿಲು ಹೊಡೆತ",
      "ಶಾಖಾಘಾತ",
      "ತಲೆಸುತ್ತು",
      "ಬಿಸಿಲು",
      "ଅଂଶୁଘାତ",
      "ଖରା",
      "ମୁଣ୍ଡ ବୁଲାଇବା",
      "ଅଚେତ"
    ],
    "banners": {
      "en": "Recognized Heat Stroke Symptoms • Loading First-Aid Protocol...",
      "hi": "लू लगने के लक्षण पहचाने गए • प्राथमिक उपचार लोड हो रहा है...",
      "bn": "সানস্ট্রোকের লক্ষণ শনাক্ত • প্রাথমিক চিকিৎসা লোড হচ্ছে...",
      "mr": "उष्माघाताची लक्षणे ओळखली • प्रथमोपचार लोड होत आहे...",
      "te": "వడదెబ్బ లక్షణాలు గుర్తించబడ్డాయి • ప్రథమ చికిత్స లోడ్ అవుతోంది...",
      "ta": "வெப்ப பக்கவாத அறிகுறிகள் கண்டறியப்பட்டன • முதலுதவி நெறிமுறை தொடங்குகிறது...",
      "gu": "લૂ લાગવાના લક્ષણો ઓળખાયા • પ્રાથમિક સારવાર લોડ થઈ રહી છે...",
      "ur": "لو لگنے کی علامات شناخت ہوئیں • ابتدائی طبی امداد لوڈ ہو رہی ہے...",
      "kn": "ಬಿಸಿಲು ಹೊಡೆತದ ಲಕ್ಷಣಗಳು ಗುರುತಿಸಲಾಗಿದೆ • ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      "or": "ଅଂଶୁଘାତ ଲକ୍ଷଣ ଚିହ୍ନଟ ହେଲା • ପ୍ରାଥମିକ ଚିକିତ୍ସା ଖୋଲୁଛି..."
    }
  },
  {
    "targetPage": "climate",
    "keywords": [
      "weather",
      "climate",
      "barish",
      "rain",
      "forecast",
      "moisture",
      "irrigation",
      "khet",
      "overcast",
      "मौसम",
      "बारिश",
      "सिंचाई",
      "नमी",
      "वर्षा",
      "আবহাওয়া",
      "বৃষ্টি",
      "সেচ",
      "আর্দ্রতা",
      "हवामान",
      "पाऊस",
      "सिंचन",
      "ओलावा",
      "వాతావరణం",
      "వర్షం",
      "నీటిపారుదల",
      "తేమ",
      "வானிலை",
      "மழை",
      "பாசனம்",
      "ஈரப்பதம்",
      "હવામાન",
      "વરસાદ",
      "સિંચાઈ",
      "ભેજ",
      "موسم",
      "بارش",
      "آبپاشی",
      "نمی",
      "ಹವಾಮಾನ",
      "ಮಳೆ",
      "ನೀರಾವರಿ",
      "ತೇವಾಂಶ",
      "ପାଣିପାଗ",
      "ବର୍ଷା",
      "ଜଳସେଚନ",
      "ଆର୍ଦ୍ରତା"
    ],
    "banners": {
      "en": "Recognized Weather & Soil Moisture Query • Routing to Climate Module...",
      "hi": "मौसम व खेत नमी संबंधी प्रश्न • जलवायु मॉड्यूल खोला जा रहा है...",
      "bn": "আবহাওয়া ও মাটির আর্দ্রতা সংক্রান্ত অনুসন্ধান • জলবায়ু মডিউলে নিয়ে যাওয়া হচ্ছে...",
      "mr": "हवामान व मातीतील ओलावा प्रश्न • हवामान मॉड्यूल उघडत आहे...",
      "te": "వాతావరణం & తేమ ప్రశ్న గుర్తించబడింది • క్లైమేట్ మాడ్యూల్‌కు దారి మళ్లిస్తోంది...",
      "ta": "வானிலை & மண் ஈரப்பதம் வினவல் கண்டறியப்பட்டது • தொகுதிக்கு வழிகாட்டுகிறது...",
      "gu": "હવામાન અને જમીન ભેજનો પ્રશ્ન ઓળખાયો • ક્લાયમેટ મોડ્યુલ ખોલાઈ રહ્યું છે...",
      "ur": "موسم اور مٹی کی نمی کا استفسار شناخت ہوا • کلائمیٹ ماڈیول کھولا جا رہا ہے...",
      "kn": "ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣಿನ ತೇವಾಂಶದ ಪ್ರಶ್ನೆ • ಹವಾಮಾನ ಮಾಡ್ಯೂಲ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "ପାଣିପାଗ ଓ ମାଟି ଆର୍ଦ୍ରତା ପ୍ରଶ୍ନ ଚିହ୍ନଟ • କ୍ଲାଇମେଟ୍ ମଡ୍ୟୁଲ୍ ଖୋଲାଯାଉଛି..."
    }
  },
  {
    "targetPage": "adlaBadli",
    "keywords": [
      "tractor",
      "pump",
      "share",
      "barter",
      "adla badli",
      "seed",
      "wheat",
      "rice",
      "exchange",
      "किराया",
      "अदला बदली",
      "ट्रैक्टर",
      "बीज",
      "साझा",
      "বিনিময়",
      "আদলা বদলি",
      "ট্রাক্টর",
      "বীজ",
      "শেয়ার",
      "देवाणघेवाण",
      "अदलाबदल",
      "ट्रॅक्टर",
      "बियाणे",
      "మార్పిడి",
      "ట్రాక్టర్",
      "విత్తనాలు",
      "పంచుకోవడం",
      "பண்டமாற்று",
      "டிராக்டர்",
      "விதைகள்",
      "பகிர்வு",
      "અદલાબદલી",
      "ટ્રેક્ટર",
      "બીયારણ",
      "શેર",
      "تبادلہ",
      "ٹریکٹر",
      "بیج",
      "شراکت",
      "ವಿನಿಮಯ",
      "ಟ್ರಾಕ್ಟರ್",
      "ಬೀಜ",
      "ಹಂಚಿಕೆ",
      "ଅଦଳବଦଳ",
      "ଟ୍ରାକ୍ଟର",
      "ବିହନ",
      "ବିନିମୟ"
    ],
    "banners": {
      "en": "Recognized Resource Barter Request • Routing to Adla-Badli Board...",
      "hi": "संसाधन साझाकरण अनुरोध • अदला-बदली बोर्ड खोला जा रहा है...",
      "bn": "সম্পদ বিনিময় অনুরোধ শনাক্ত • আদলা-বদলি বোর্ডে নিয়ে যাওয়া হচ্ছে...",
      "mr": "साधन देवाणघेवाण विनंती ओळखली • अदलाबदल बोर्ड उघडत आहे...",
      "te": "వనరుల మార్పిడి అభ్యర్థన గుర్తించబడింది • అద్లా-బద్లీ బోర్డుకు దారి మళ్లిస్తోంది...",
      "ta": "வள பண்டமாற்று கோரிக்கை கண்டறியப்பட்டது • பலகைக்கு வழிகாட்டுகிறது...",
      "gu": "સાધન વિનિમય વિનંતી ઓળખાઈ • અદલા-બદલી બોર્ડ ખોલાઈ રહ્યું છે...",
      "ur": "وسائل کے تبادلے کی درخواست شناخت ہوئی • تبادلہ بورڈ کھولا جا رہا ہے...",
      "kn": "ಸಂಪನ್ಮೂಲ ವಿನಿಮಯ ವಿನಂತಿ ಗುರುತಿಸಲಾಗಿದೆ • ಅದ್ಲಾ-ಬದ್ಲಿ ಬೋರ್ಡ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
      "or": "ସମ୍ବଳ ବିନିମୟ ଅନୁରୋଧ ଚିହ୍ନଟ ହେଲା • ଅଦଳବଦଳ ବୋର୍ଡ ଖୋଲାଯାଉଛି..."
    }
  }
];

  const COMMODITIES = [
  {
    "id": "wheat",
    "icon": "🌾",
    "unitValue": 100,
    "names": {
      "en": "Wheat (Gahun)",
      "hi": "गेहूं (गहूं)",
      "bn": "গম (দানা)",
      "mr": "गहू (Gahu)",
      "te": "గోధుమలు (Wheat)",
      "ta": "கோதுமை",
      "gu": "ઘઉં (Ghav)",
      "ur": "گندم",
      "kn": "ಗೋಧಿ",
      "or": "ଗହମ"
    }
  },
  {
    "id": "rice",
    "icon": "🍚",
    "unitValue": 100,
    "names": {
      "en": "Rice (Chawal)",
      "hi": "चावल (धान)",
      "bn": "ধান / চাল",
      "mr": "तांदूळ (धान)",
      "te": "వరి / బియ్యం",
      "ta": "அரிசி / நெல்",
      "gu": "ડાંગર / ચોખા",
      "ur": "چاول / دھان",
      "kn": "ಅಕ್ಕಿ / ಭತ್ತ",
      "or": "ଧାନ / ଚାଉଳ"
    }
  },
  {
    "id": "pump",
    "icon": "⚡",
    "unitValue": 300,
    "names": {
      "en": "Water Pump (5HP)",
      "hi": "पानी का पंप (5HP)",
      "bn": "জলের পাম্প (5HP)",
      "mr": "पाण्याचा पंप (5HP)",
      "te": "వాటర్ పంప్ (5HP)",
      "ta": "தண்ணீர் பம்ப் (5HP)",
      "gu": "પાણીનો પંપ (5HP)",
      "ur": "پانی کا پمپ (5HP)",
      "kn": "ನೀರಿನ ಪಂಪ್ (5HP)",
      "or": "ପାଣି ପମ୍ପ (5HP)"
    }
  },
  {
    "id": "tractor",
    "icon": "🚜",
    "unitValue": 350,
    "names": {
      "en": "Tractor Hours (2 hrs)",
      "hi": "ट्रैक्टर जुताई (2 घंटे)",
      "bn": "ট্রাক্টর চাষ (২ ঘণ্টা)",
      "mr": "ट्रॅक्टर नांगरणी (२ तास)",
      "te": "ట్రాక్టర్ దుక్కి (2 గంటలు)",
      "ta": "டிராக்டர் உழவு (2 மணி)",
      "gu": "ટ્રેક્ટર ખેડાણ (૨ કલાક)",
      "ur": "ٹریکٹر جوتائی (2 گھنٹے)",
      "kn": "ಟ್ರಾಕ್ಟರ್ ಉಳುಮೆ (2 ಗಂಟೆ)",
      "or": "ଟ୍ରାକ୍ଟର ହଳ (୨ ଘଣ୍ଟା)"
    }
  },
  {
    "id": "mustard",
    "icon": "🌱",
    "unitValue": 120,
    "names": {
      "en": "Mustard Seed (Sarson)",
      "hi": "सरसों बीज (सरसों)",
      "bn": "সরিষা বীজ",
      "mr": "मोहरी / मोहरी बियाणे",
      "te": "ఆవాలు (విత్తనాలు)",
      "ta": "கடுகு விதைகள்",
      "gu": "રાઈ / સરસવ બીજ",
      "ur": "سرسوں کے بیج",
      "kn": "ಸಾಸಿವೆ ಬೀಜ",
      "or": "ଶୋରିଷ ବିହନ"
    }
  },
  {
    "id": "sprayer",
    "icon": "💦",
    "unitValue": 180,
    "names": {
      "en": "Battery Sprayer",
      "hi": "बैटरी स्प्रेयर",
      "bn": "ব্যাটারি স্প্রেয়ার",
      "mr": "बॅटरी स्प्रेअर",
      "te": "బ్యాటరీ స్ప్రేయర్",
      "ta": "பேட்டரி தெளிப்பான்",
      "gu": "બેટરી સ્પ્રેયર",
      "ur": "بیٹری اسپرے مشین",
      "kn": "ಬ್ಯಾಟರಿ ಸ್ಪ್ರೇಯರ್",
      "or": "ବ୍ୟାଟେରୀ ସ୍ପ୍ରେୟାର୍"
    }
  }
];

  const LISTINGS = [
  {
    "id": 1,
    "owner": "Harish Patel",
    "loc": "Ward 14 (Thullur)",
    "tag": "Irrigation",
    "icon": "⚡",
    "titles": {
      "en": "5HP Submersible Pump (2 Days Free)",
      "hi": "5HP सबमर्सिबल पंप (2 दिन उपलब्ध)",
      "bn": "৫ এইচপি পাম্প (২ দিন পাওয়া যাবে)",
      "mr": "५HP सबमर्सिबल पंप (२ दिवस उपलब्ध)",
      "te": "5HP సబ్‌మెర్సిబుల్ పంపు (2 రోజులు లభ్యం)",
      "ta": "5HP மூழ்கக்கூடிய பம்ப் (2 நாட்கள் கிடைக்கும்)",
      "gu": "૫ HP સબમર્સિબલ પંપ (૨ દિવસ ઉપલબ્ધ)",
      "ur": "5HP سبمرسیبل پمپ (2 دن کے لیے دستیاب)",
      "kn": "5HP ಸಬ್ಮರ್ಸಿಬಲ್ ಪಂಪ್ (2 ದಿನ ಲಭ್ಯ)",
      "or": "୫ HP ସବମର୍ସିବଲ୍ ପମ୍ପ (୨ ଦିନ ଉପଲବ୍ଧ)"
    }
  },
  {
    "id": 2,
    "owner": "Balwan Singh",
    "loc": "Amaravati Mandi Road",
    "tag": "Tillage",
    "icon": "🚜",
    "titles": {
      "en": "Mahindra 475 Tractor + Disc Harrow",
      "hi": "महिंद्रा 475 ट्रैक्टर + हैरो",
      "bn": "মহিন্দ্রা ৪৭৫ ট্রাক্টর + হ্যারো",
      "mr": "महिंद्रा ४७५ ट्रॅक्टर + हॅरो",
      "te": "మహీంద్రా 475 ట్రాక్టర్ + హారో",
      "ta": "மஹிந்திரா 475 டிராக்டர் + உழவுக்கருவி",
      "gu": "મહિન્દ્રા ૪૭૫ ટ્રેક્ટર + હેરો",
      "ur": "مہندرا 475 ٹریکٹر + ہیرو",
      "kn": "ಮಹೀಂದ್ರಾ 475 ಟ್ರಾಕ್ಟರ್ + ಹ್ಯಾರೋ",
      "or": "ମହିନ୍ଦ୍ରା ୪୭୫ ଟ୍ରାକ୍ଟର + ହାରୋ"
    }
  },
  {
    "id": 3,
    "owner": "Smt. Kamala Devi",
    "loc": "Panchayat Hub Mandadam",
    "tag": "Seeds",
    "icon": "🌾",
    "titles": {
      "en": "3 Bags Certified HD-3086 Wheat Seed",
      "hi": "3 बोरी प्रमाणित गेहूं बीज (HD-3086)",
      "bn": "৩ বস্তা সার্টিফাইড গমের বীজ (HD-3086)",
      "mr": "३ पोती प्रमाणित गहू बियाणे (HD-3086)",
      "te": "3 బస్తాల ధృవీకరించిన గోధుమ విత్తనాలు (HD-3086)",
      "ta": "3 மூட்டை சான்றளிக்கப்பட்ட கோதுமை விதை (HD-3086)",
      "gu": "૩ બોરી પ્રમાણિત ઘઉંનું બિયારણ (HD-3086)",
      "ur": "3 بوری تصدیق شدہ گندم کے بیج (HD-3086)",
      "kn": "3 ಚೀಲ ಪ್ರಮಾಣೀಕೃತ ಗೋಧಿ ಬೀಜ (HD-3086)",
      "or": "୩ ବସ୍ତା ପ୍ରମାଣିତ ଗହମ ବିହନ (HD-3086)"
    }
  }
];

  function t(key, lang) {
    const l = lang || 'en';
    if (UI[l] && UI[l][key] !== undefined) {
      return UI[l][key];
    }
    if (UI['en'] && UI['en'][key] !== undefined) {
      return UI['en'][key];
    }
    return key;
  }

  function getFarmingMethod(methodKey, lang) {
    const l = lang || 'en';
    const m = FARMING_METHODS[methodKey] || FARMING_METHODS.tower;
    return {
      id: m.id,
      icon: m.icon,
      tag: m.tag,
      waterSaving: m.waterSaving,
      vendorName: m.vendorName,
      vendorUrl: m.vendorUrl,
      name: (m.names && m.names[l]) || (m.names && m.names.en) || '',
      yield: (m.yields && m.yields[l]) || (m.yields && m.yields.en) || '',
      desc: (m.descs && m.descs[l]) || (m.descs && m.descs.en) || '',
      steps: (m.steps && m.steps[l]) || (m.steps && m.steps.en) || [],
      mistake: (m.mistakes && m.mistakes[l]) || (m.mistakes && m.mistakes.en) || ''
    };
  }

  function getFirstAidItem(itemKey, lang) {
    const l = lang || 'en';
    const item = FIRST_AID[itemKey] || FIRST_AID.snake;
    return {
      id: item.id,
      icon: item.icon,
      title: (item.titles && item.titles[l]) || (item.titles && item.titles.en) || '',
      actions: (item.actions && item.actions[l]) || (item.actions && item.actions.en) || [],
      donts: (item.donts && item.donts[l]) || (item.donts && item.donts.en) || []
    };
  }

  function getGrievanceLetter(issue, ward, signatoryName, lang) {
    const l = (GRIEVANCE_DATA.letterStructure && GRIEVANCE_DATA.letterStructure[lang]) ? lang : 'en';
    const tmpl = GRIEVANCE_DATA.letterStructure[l];
    const defaultSigner = (lang === 'en') ? 'Concerned Resident / Landholder' :
      (lang === 'hi') ? 'निवेदक / स्थानीय निवासी' :
      (lang === 'te') ? 'స్థానిక నివాసి / భూయజమాని' :
      (lang === 'ta') ? 'பாதிக்கப்பட்ட நில உரிமையாளர்' :
      (lang === 'bn') ? 'স্থানীয় বাসিন্দা / জমির মালিক' :
      (lang === 'mr') ? 'स्थानिक नागरिक / शेतकरी' :
      (lang === 'gu') ? 'સ્થાનિક રહેવાસી / ખેડૂત' :
      (lang === 'ur') ? 'رہائشی زمیندار' :
      (lang === 'kn') ? 'ಸ್ಥಳೀಯ ನಿವಾಸಿ / ರೈತ' : 'ସ୍ଥାନୀୟ ବାସିନ୍ଦା';

    const name = (signatoryName && signatoryName.trim()) ? signatoryName.trim() : defaultSigner;
    const subjectsMap = GRIEVANCE_DATA.subjects[issue] || GRIEVANCE_DATA.subjects.water;
    const subject = subjectsMap[lang] || subjectsMap['en'];

    const detailRaw = (tmpl.details && tmpl.details[issue]) ? tmpl.details[issue] : tmpl.details.water;
    const detail = detailRaw.replace(/{ward}/g, ward);

    const bodyIntro = tmpl.bodyIntro.replace(/{name}/g, name).replace(/{ward}/g, ward);
    const bodyOutro = tmpl.bodyOutro;

    const fullBody = bodyIntro + "\n\n" + detail + "\n\n" + bodyOutro;
    const signOff = tmpl.signOff.replace(/{name}/g, name).replace(/{ward}/g, ward);

    const fullText = tmpl.to + "\n\nDate: 9/12/2026\n\nSubject: " + subject + " - Reg.\n\n" +
      tmpl.salutation + "\n\n" + fullBody + "\n\n" + signOff;

    return {
      to: tmpl.to,
      subject: (l === 'en' ? 'Subject: ' : l === 'hi' ? 'विषय: ' : l === 'te' ? 'విషయం: ' : l === 'ta' ? 'பொருள்: ' : l === 'bn' ? 'বিষয়: ' : l === 'mr' ? 'विषय: ' : l === 'gu' ? 'વિષય: ' : l === 'ur' ? 'موضوع: ' : l === 'kn' ? 'ವಿಷಯ: ' : 'ବିଷୟ: ') + subject,
      salutation: tmpl.salutation,
      body: fullBody,
      signOff: signOff,
      fullText: fullText
    };
  }

  function getCommodities(lang) {
    const l = lang || 'en';
    return COMMODITIES.map(c => ({
      id: c.id,
      icon: c.icon,
      unitValue: c.unitValue,
      name: (c.names && c.names[l]) || (c.names && c.names.en) || c.id
    }));
  }

  function getListings(lang) {
    const l = lang || 'en';
    return LISTINGS.map(item => ({
      id: item.id,
      owner: item.owner,
      loc: item.loc,
      tag: item.tag,
      icon: item.icon,
      title: (item.titles && item.titles[l]) || (item.titles && item.titles.en) || ''
    }));
  }

  return {
    SUPPORTED_LANGUAGES,
    SPEECH_LOCALE_MAP,
    UI,
    FARMING_METHODS,
    FIRST_AID,
    GRIEVANCE_DATA,
    INTENT_DICTIONARY,
    t,
    getFarmingMethod,
    getFirstAidItem,
    getGrievanceLetter,
    getCommodities,
    getListings
  };
})();
