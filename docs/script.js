const backToTopBtn = document.createElement('button');
        backToTopBtn.textContent = '↑';
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background: #2e7d32;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            font-size: 18px;
        `;
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});


const translations = {
  "ru": {
    "nav_about": "О нас",
    "nav_gallery": "Галерея",
    "nav_services": "Услуги",
    "nav_contacts": "Контакты",
    "about_title": "О компании Kaz Aiu",
    "company_about": "Более 5 лет профессионально занимаемся утилизацией и выкупом электронного оборудования в Алматы и области. Экологично, законно и выгодно.",
    "hero_title": "Утилизация и выкуп электроники в Алматы",
    "hero_subtitle": "Принимаем компьютеры, кондиционеры, платы, микросхемы, медный кабель по выгодной цене",
    "company_about": "Более 5 лет профессионально занимаемся утилизацией и выкупом электронного оборудования в Алматы и области. Экологично, законно и выгодно.",
    "gallery_title": "Галерея (Примеры того, что покупаем и продаем)",
    "services_title": "Что мы принимаем",
    "services_1": "Компьютеры и оргтехника",
    "services_2": "Микросхемы и платы",
    "services_3": "Медный кабель",
    "item1_text": "Принимаем старые и нерабочие компьютеры, системные блоки, мониторы и офисную технику для безопасной утилизации и переработки.",
    "item2_text": "Принимаем электронные платы и микросхемы для дальнейшей переработки драгоценных металлов и компонентов.",
    "item3_text": "Покупаем и утилизируем медный кабель различных диаметров и длин, включая остатки после демонтажа техники и электропроводки.",
    "how_it_works": "Как это работает",
    "step1_name": "Связь с нами",
    "step2_name": "Оценка",
    "step3_name": "Выезд",
    "step4_name": "Оплата",
    "step1": "Вы звоните или пишете в WhatsApp",
    "step2": "Мы делаем оценку и договариваемся о времени",
    "step3": "Приезжаем и забираем технику",
    "step4": "Вы получаете деньги сразу",
    "contacts_title": "Контакты",
    "contacts_phone": "Тел",
    "contacts_email": "Email",
    "contacts_address": "Работаем по всему Казахстану. Адрес в Алматы:",
    "contacts_whatsapp_btn": "📱 Написать в WhatsApp",
    "footer_text": "© 2025 ТОО «Kaz Aiu». Все права защищены."
  },
  "kk": {
    "nav_about": "Біз туралы",
    "nav_gallery": "Галерея",
    "nav_services": "Қызметтер",
    "nav_contacts": "Байланыс",
    "about_title": "Kaz Aiu компаниясы туралы",
    "company_about": "Біз Алматы мен өңірде 5 жылдан астам уақыт бойы электрониканы кәдеге жаратып, сатып алып келеміз. Экологиялық, заңды және тиімді.",
    "hero_title": "Алматыда электрониканы кәдеге жарату және сатып алу",
    "hero_subtitle": "Компьютерлерді, кондиционерлерді, платаларды, микросхемаларды, мыс сымдарды тиімді бағамен қабылдаймыз",
    "company_about": "Біз Алматы мен өңірде 5 жылдан астам уақыт бойы электрондық жабдықтарды кәдеге жаратып, сатып алып келеміз. Экологиялық, заңды және тиімді.",
    "gallery_title": "Галерея (Сатып алатын және сататын заттар мысалдары)",
    "services_title": "Біз не қабылдаймыз",
    "services_1": "Компьютерлер мен кеңсе техникасы",
    "services_2": "Микросхемалар мен платалар",
    "services_3": "Мыс кабель",
    "item1_text": "Ескі және істемейтін компьютерлерді, жүйелік блоктарды, мониторлар мен кеңсе техникасын қауіпсіз кәдеге жарату үшін қабылдаймыз.",
    "item2_text": "Бағалы металдарды алу үшін электрондық платалар мен микросхемаларды қабылдаймыз.",
    "item3_text": "Техниканы бөлшектегеннен кейін қалған мыс сымдарды әртүрлі өлшемдерде сатып алып, кәдеге жаратамыз.",
    "how_it_works": "Қалай жұмыс істейміз",
    "step1_name": "Бізбен байланысыңыз",
    "step2_name": "Бағалау",
    "step3_name": "Шығу",
    "step4_name": "Төлем",
    "step1": "Сіз бізге қоңырау шалып немесе WhatsApp-қа жазасыз",
    "step2": "Біз бағалап, уақытты келісеміз",
    "step3": "Біз келіп, техниканы алып кетеміз",
    "step4": "Сіз ақшаны бірден аласыз",
    "contacts_title": "Байланыс",
    "contacts_phone": "Телефон",
    "contacts_email": "Электрондық пошта",
    "contacts_address": "Бүкіл Қазақстан бойынша жұмыс істейміз. Алматыдағы мекенжай:",
    "contacts_whatsapp_btn": "📱 WhatsApp-қа жазу",
    "footer_text": "© 2025 «Kaz Aiu» ЖШС. Барлық құқықтар қорғалған."
  },
  "en": {
    "nav_about": "About Us",
    "nav_gallery": "Gallery",
    "nav_services": "Services",
    "nav_contacts": "Contact",
    "about_title": "About Kaz Aiu",
    "company_about": "We have been professionally recycling and buying electronic equipment in Almaty and the region for over 5 years. Eco-friendly, legal, and profitable.",
    "hero_title": "Electronics Recycling and Buyout in Almaty",
    "hero_subtitle": "We accept computers, air conditioners, boards, chips, and copper cable at good prices",
    "company_about": "We have been recycling and purchasing electronic equipment in Almaty and the region for over 5 years. Eco-friendly, legal, and profitable.",
    "gallery_title": "Gallery (Examples of what we buy and sell)",
    "services_title": "What We Accept",
    "services_1": "Computers and Office Equipment",
    "services_2": "Microchips and Boards",
    "services_3": "Copper Cable",
    "item1_text": "We accept old and non-working computers, system units, monitors, and office equipment for safe recycling.",
    "item2_text": "We accept electronic boards and microchips for further recovery of precious metals and components.",
    "item3_text": "We buy and recycle copper cables of various diameters and lengths, including those left after dismantling equipment and wiring.",
    "how_it_works": "How It Works",
    "step1_name": "Contact Us",
    "step2_name": "Evaluation",
    "step3_name": "Departure",
    "step4_name": "Payment",
    "step1": "You call or message us on WhatsApp",
    "step2": "We provide an estimate and agree on a time",
    "step3": "We come and collect the equipment",
    "step4": "You get paid immediately",
    "contacts_title": "Contact Us",
    "contacts_phone": "Phone",
    "contacts_email": "Email",
    "contacts_address": "We work throughout Kazakhstan. Address in Almaty:",
    "contacts_whatsapp_btn": "📱 Message us on WhatsApp",
    "footer_text": "© 2025 LLP «Kaz Aiu». All rights reserved."
  }
};

function translate(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("language-select").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  translate(selectedLang);
});

translate("ru"); 