/* Chatbot answers: edit text/keywords here. Each rule is [regex, answer, offerContactForm]. */
window.EU_CHAT={};
EU_CHAT.CH=["Our services","Pricing","How we work","Talk to a human"];
EU_CHAT.KB=[
[/human|person|agent|someone|contact|email|call|reach|quote|talk/,"Happy to connect you with the team. Use the contact form and we will reply with a clear plan and next steps.",true],
[/price|cost|pricing|budget|rate|quote|how much|expensive/,"Every project is scoped individually, so there is no fixed price list. Tell us what you need through the contact form and we will send a clear estimate before any work starts.",true],
[/how.*(work|start|process)|process|timeline|how long|time|deliver|steps/,"We keep it simple: 1) Listen and scope your needs, 2) Design and build in short iterations you can review, 3) Launch and support. Timelines depend on size; small sites take weeks, larger systems a few months.",false],
[/logo|brand|website|web design|landing|\bweb\b/,"Websites & Logos: brand identities, logos and modern, fast websites that make your business look as sharp as it works.",false],
[/web app|portal|application|software|custom/,"Custom Software: custom web applications and portals built to be fast, secure and easy to maintain.",false],
[/mobile|ios|android|\bapp\b/,"Mobile Apps: iOS and Android apps, from first prototype to release.",false],
[/\bai\b|automat|workflow|bot|machine|ml/,"Task Automation: AI-powered tools and automations that cut repetitive work and speed up decisions. We also build chatbots like me.",false],
[/kpi|dashboard|report|analytic|metric/,"Business Dashboards: live dashboards for the numbers that matter, plus workflows that run on their own.",false],
[/data|pipeline|engineer|etl|warehouse/,"Data Organization: reliable data pipelines and clean, structured data your team can trust.",false],
[/service|offer|what.*(do|you)|help/,"We offer: Task Automation, Business Dashboards, Data Organization, Mobile Apps, Websites & Logos and Custom Software. Ask about any of them!",false],
[/hi\b|hello|hey|good (morning|evening|afternoon)/,"Hello! I can tell you about our services, how we work, or connect you with the team. What would you like to know?",false],
[/thank|thx|great|ok\b|cool/,"You are welcome! Anything else I can help with?",false]
];
