'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
    en: {
      'nav.services': 'Services',
      'nav.portfolio': 'Cases',
      'nav.about': 'About Us',
      'nav.why': 'Why Haters',
      'nav.pricing': 'Packages',
      'nav.contact': 'Contact',
    'hero.title': 'We don\'t chase likes. We build revenue.',
    'hero.subtitle': 'Marketing agency "Haters". Bold strategies, aggressive growth, and results that speak for themselves.',
    'hero.agency': 'Marketing agency Haters',

'hero.form.name': 'Name',
'hero.form.phone': 'WhatsApp / Telegram Number',
'hero.form.message': 'Your Message',
'hero.form.submit': 'Start Growing',
'hero.form.success': 'Message sent! We\'ll get back to you soon.',
    'about_us.title': 'About Us',
    'about_us.desc': 'We are a team of marketing rebels who don\'t follow the rules. We create the rules. Our mission is to transform businesses through aggressive, results-driven digital strategies.',
    'services.title': 'Services',

'services.smm.title': 'Social Media Marketing',
'services.smm.desc': 'Strategic presence across all major platforms to build community and brand authority.',
'services.ads.title': 'Meta & TikTok Ads',
'services.ads.desc': 'High-conversion advertising campaigns that target your perfect audience with precision.',
'services.marketing.title': 'Marketing Development',
'services.marketing.desc': 'Full-funnel marketing strategies designed for rapid scaling and market dominance.',
'why.title': 'Why Haters?',
'why.desc': 'In a world of boring marketing, being loved by everyone means being noticed by no one. We create brands that trigger emotions and drive action.',
'why.point1.title': 'Aggressive Growth',
'why.point1.desc': 'We don\'t wait for results. We go and get them with high-impact strategies.',
'why.point2.title': 'Data-Driven Creativity',
'why.point2.desc': 'Every creative decision is backed by solid market data and analytics.',
'why.point3.title': 'No Bullshit Approach',
'why.point3.desc': 'Direct communication, transparent reporting, and real business results.',
'why.point4.title': 'Market Dominance',
'why.point4.desc': 'We don\'t just compete; we aim to make you the absolute leader in your niche.',
'why.point5.title': 'Speed of Execution',
'why.point5.desc': 'We launch faster than anyone else, capturing momentum while others are still planning.',
'why.point6.title': 'Full ROI Focus',
'why.point6.desc': 'Every campaign is built for profit. We care about your bottom line more than vanity metrics.',
'process.title': 'Our Process',
'process.step1.title': 'Research & Audit',
'process.step1.desc': 'Deep dive into your business, competitors, and target audience.',
'process.step2.title': 'Strategy Design',
'process.step2.desc': 'Creating a custom roadmap for your brand\'s aggressive growth.',
'process.step3.title': 'Creative Execution',
'process.step3.desc': 'Developing high-impact visuals and copy that demand attention.',
'process.step4.title': 'Launch & Scaling',
'process.step4.desc': 'Going live and continuously optimizing for maximum ROI.',
'process.step5.title': 'Reporting & Analysis',
'process.step5.desc': 'Detailed weekly breakdowns of performance and future steps.',
'pricing.title': 'Packages',
'pricing.p1.name': 'Meta & TikTok Ads',
'pricing.p1.desc': 'Perfect for businesses focusing on direct traffic.',
'pricing.p1.features': 'Meta Ads, TikTok Ads, Creative Testing, Weekly Reports',
'pricing.p2.name': 'Full SMM + Ads',
'pricing.p2.desc': 'Complete social media presence and growth.',
'pricing.p2.features': 'Content Creation, Community Management, Ads Management, Influencer Outreach',
'pricing.p3.name': 'All-in-One + Marketing',
'pricing.p3.desc': 'Total market takeover and strategy development.',
'pricing.p3.features': 'All Features + Marketing Strategy, Branding, Funnel Optimization, 24/7 Support',
'faq.title': 'FAQ',
'faq.q1': 'What is the "Haters" approach?',
'faq.a1': 'We focus on bold, disruptive marketing that makes you stand out from the crowd. We believe in high-impact results over "safe" but invisible marketing.',
'faq.q2': 'How soon can we see results?',
'faq.a2': 'For Ads, you can see initial data within 48-72 hours. Significant scaling usually happens after the first 14 days of testing.',
'faq.q3': 'Do you work with small businesses?',
'faq.a3': 'We work with businesses of all sizes that are ready for aggressive growth and aren\'t afraid to be different.',
'faq.q4': 'What platforms do you specialize in?',
'faq.a4': 'We are experts in Meta (Facebook/Instagram), TikTok, and developing comprehensive cross-platform marketing ecosystems.',
'faq.q5': 'Do I get a dedicated manager?',
'faq.a5': 'Yes, every project is assigned a lead strategist who is your direct point of contact for everything.',
'footer.rights': 'All rights reserved.',
    'footer.email': 'anton.chernykh0@gmail.com',
    'stats.project': 'Projects',
    'stats.earned': 'Earned',
    'stats.campaigns': 'Campaigns',
  },
  ru: {

  'nav.services': 'Услуги',
  'nav.portfolio': 'Кейсы',
  'nav.about': 'О нас',
  'nav.why': 'Почему Haters',
  'nav.pricing': 'Пакеты',
  'nav.contact': 'Контакты',
  'hero.title': 'Мы не гонимся за лайками. Мы приносим доход.',
  'hero.subtitle': 'Маркетинговое агентство "Haters". Смелые стратегии, агрессивный рост и результаты, которые говорят сами за себя.',
  'hero.agency': 'Маркетинговое агентство Haters',

'hero.form.name': 'Имя',
'hero.form.phone': 'Номер WhatsApp / Telegram',
'hero.form.message': 'Ваше сообщение',
'hero.form.submit': 'Начать рост',
'hero.form.success': 'Сообщение отправлено! Мы скоро свяжемся с вами.',
    'about_us.title': 'О нас',
    'about_us.desc': 'Мы — команда маркетинговых бунтарей, которые не следуют правилам. Мы их создаем. Наша миссия — трансформировать бизнес через агрессивные цифровые стратегии, ориентированные на результат.',
    'services.title': 'Услуги',

'services.smm.title': 'SMM Продвижение',
'services.smm.desc': 'Стратегическое присутствие на всех основных платформах для создания сообщества и авторитета бренда.',
'services.ads.title': 'Meta и TikTok Ads',
'services.ads.desc': 'Высококонверсионные рекламные кампании, которые точечно бьют в вашу идеальную аудиторию.',
'services.marketing.title': 'Развитие маркетинга',
'services.marketing.desc': 'Полноцикловые маркетинговые стратегии, разработанные для быстрого масштабирования и доминирования на рынке.',
'why.title': 'Почему Haters?',
'why.desc': 'В мире скучного маркетинга быть любимым всеми значит быть незамеченным никем. Мы создаем бренды, которые вызывают эмоции и побуждают к действию.',
'why.point1.title': 'Агрессивный рост',
'why.point1.desc': 'Мы не ждем результатов. Мы идем и забираем их с помощью высокоэффективных стратегий.',
'why.point2.title': 'Креатив на основе данных',
'why.point2.desc': 'Каждое креативное решение подкреплено твердыми рыночными данными и аналитикой.',
'why.point3.title': 'Никакой воды',
'why.point3.desc': 'Прямая коммуникация, прозрачная отчетность и реальные результаты для бизнеса.',
'why.point4.title': 'Доминирование на рынке',
'why.point4.desc': 'Мы не просто конкурируем; мы стремимся сделать вас абсолютным лидером в вашей нише.',
'why.point5.title': 'Скорость исполнения',
'why.point5.desc': 'Мы запускаемся быстрее всех, захватывая импульс, пока другие еще планируют.',
'why.point6.title': 'Фокус на ROI',
'why.point6.desc': 'Каждая кампания строится ради прибыли. Нам важен ваш доход больше, чем красивые цифры.',
'process.title': 'Наш процесс',
'process.step1.title': 'Исследование и аудит',
'process.step1.desc': 'Глубокое погружение в ваш бизнес, конкурентов и целевую аудиторию.',
'process.step2.title': 'Разработка стратегии',
'process.step2.desc': 'Создание индивидуальной дорожной карты для агрессивного роста вашего бренда.',
'process.step3.title': 'Креативное исполнение',
'process.step3.desc': 'Разработка визуалов и текстов, которые захватывают внимание.',
'process.step4.title': 'Запуск и масштабирование',
'process.step4.desc': 'Запуск кампаний и постоянная оптимизация для максимального ROI.',
'process.step5.title': 'Отчетность и анализ',
'process.step5.desc': 'Детальные еженедельные разборы показателей и дальнейших шагов.',
'pricing.title': 'Пакеты',
'pricing.p1.name': 'Meta и TikTok Ads',
'pricing.p1.desc': 'Идеально для бизнеса, ориентированного на прямой трафик.',
'pricing.p1.features': 'Meta Ads, TikTok Ads, Тестирование креативов, Еженедельные отчеты',
'pricing.p2.name': 'SMM + Реклама',
'pricing.p2.desc': 'Полное присутствие и рост в социальных сетях.',
'pricing.p2.features': 'Создание контента, Ведение сообществ, Управление рекламой, Работа с блогерами',
'pricing.p3.name': 'Все сразу + Маркетинг',
'pricing.p3.desc': 'Полный захват рынка и разработка стратегии.',
'pricing.p3.features': 'Все функции + Маркетинговая стратегия, Брендинг, Оптимизация воронки, Поддержка 24/7',
'faq.title': 'FAQ',

    'faq.q1': 'В чем заключается подход "Haters"?',
    'faq.a1': 'Мы фокусируемся на смелом, прорывном маркетинге, который выделяет вас из толпы. Мы верим в результаты, а не в "безопасный", но невидимый маркетинг.',
    'faq.q2': 'Как скоро мы увидим результаты?',
    'faq.a2': 'Для рекламы первые данные можно увидеть в течение 48-72 часов. Значительное масштабирование обычно происходит после первых 14 дней тестов.',
    'faq.q3': 'Вы работаете с малым бизнесом?',
    'faq.a3': 'Мы работаем с компаниями любого размера, которые готовы к агрессивному росту и не боятся отличаться.',
    'faq.q4': 'На каких платформах вы специализируетесь?',
    'faq.a4': 'Мы эксперты в Meta (Facebook/Instagram), TikTok и разработке комплексных экосистем маркетинга.',
    'faq.q5': 'Будет ли у меня персональный менеджер?',
    'faq.a5': 'Да, за каждым проектом закрепляется ведущий стратег, который является вашим прямым контактным лицом.',
    'footer.rights': 'Все права защищены.',
    'footer.email': 'anton.chernykh0@gmail.com',
    'stats.project': 'Проектов',
    'stats.earned': 'Заработано',
    'stats.campaigns': 'Кампаний',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
