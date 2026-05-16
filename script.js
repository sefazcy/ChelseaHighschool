// Chelsea High School - Language Support (Turkish & English)

const translations = {
    tr: {
        "nav-about": "Hakkımızda", "nav-programs": "Programlar", "nav-method": "Ders Süreci", "nav-faq": "SSS", "nav-contact": "İletişim",
        "hero-badge": "LGS • YKS • Ortaokul • Lise", "hero-title": "Başarı tesadüf değil, doğru planın sonucudur.", "hero-description": "Chelsea High School, öğrencilerin akademik hedeflerine ulaşması için kişiye özel ders planı, düzenli takip ve güçlü iletişim modeli sunan modern bir eğitim merkezidir.", "btn-consultation": "Ücretsiz Ön Görüşme Al", "btn-programs": "Programları İncele",
        "hero-stat-1-number": "120+", "hero-stat-1-text": "Öğrenci", "hero-stat-2-number": "8", "hero-stat-2-text": "Branş", "hero-stat-3-number": "%90", "hero-stat-3-text": "Memnuniyet",
        "about-label": "Neden Biz?", "about-title": "Öğrenciyi sadece derste değil, süreç boyunca takip ediyoruz.", "about-description": "Chelsea High School'da amaç sadece konu anlatmak değildir. Öğrencinin seviyesini anlamak, eksiklerini görmek, düzenli tekrar ve soru çözümüyle gelişimini takip etmek temel yaklaşımımızdır.",
        "feature-1-title": "Kişiye Özel Plan", "feature-1-desc": "Her öğrenci için hedefe, seviyeye ve zamana göre ayrı çalışma programı hazırlanır.", "feature-2-title": "Düzenli Takip", "feature-2-desc": "Ders sonrası ödev, tekrar ve soru çözüm süreci düzenli olarak kontrol edilir.", "feature-3-title": "Veli Bilgilendirme", "feature-3-desc": "Öğrencinin gelişimi hakkında velilere sade ve anlaşılır geri bildirim sağlanır.",
        "programs-label": "Programlar", "programs-title": "Farklı seviyelere uygun eğitim seçenekleri", "programs-description": "Ortaokuldan lise son sınıfa kadar öğrencilerin ihtiyaçlarına göre planlanan ders ve sınav hazırlık programları.",
        "programs-feature-label": "Sınav Hazırlık", "programs-feature-title": "LGS ve YKS sürecinde planlı, takipli ve hedef odaklı ilerleme", "programs-feature-desc": "Öğrencilerin sadece konu öğrenmesini değil, sınav stratejisi geliştirmesini, zaman yönetimi kazanmasını ve düzenli deneme analizi yapmasını önemsiyoruz.",
        "program-1-label": "LGS", "program-1-title": "LGS Hazırlık", "program-1-desc": "Matematik, Fen, Türkçe ve İngilizce derslerinde sınav odaklı hazırlık.", "program-2-label": "YKS", "program-2-title": "TYT - AYT Hazırlık", "program-2-desc": "Üniversite hedeflerine göre konu anlatımı, deneme analizi ve net takibi.", "program-3-label": "Okul Destek", "program-3-title": "Ortaokul ve Lise", "program-3-desc": "Okul derslerine destek, yazılı hazırlığı ve eksik konu tamamlama çalışmaları.", "program-4-label": "Online", "program-4-title": "Online Özel Ders", "program-4-desc": "Uzaktan eğitimle düzenli, planlı ve etkileşimli birebir ders imkanı.",
        "method-label": "Ders Süreci", "method-title": "Başarıyı sistemli hale getiren 4 adım", "step-1-title": "Seviye Analizi", "step-1-desc": "Öğrencinin mevcut durumu ve temel eksikleri belirlenir.", "step-2-title": "Kişisel Plan", "step-2-desc": "Hedefe göre haftalık ders ve çalışma programı hazırlanır.", "step-3-title": "Ders ve Uygulama", "step-3-desc": "Konu anlatımı, örnek çözüm ve öğrenciyle aktif soru çözümü yapılır.", "step-4-title": "Takip ve Geri Bildirim", "step-4-desc": "Ödevler, denemeler ve gelişim süreci düzenli olarak takip edilir.",
        "online-label": "Online Eğitim", "online-title": "İster yüz yüze, ister online; süreç aynı ciddiyetle ilerler.", "online-description": "Online derslerde de öğrencinin aktif katılımı, düzenli ödev takibi ve haftalık gelişim kontrolü korunur. Amaç sadece ekran başında ders yapmak değil, sürdürülebilir bir öğrenme düzeni oluşturmaktadır.", "btn-online-info": "Online Ders Bilgisi Al",
        "testimonials-label": "Yorumlar", "testimonials-title": "Öğrenci ve velilerden geri bildirimler",
        "testimonial-1-text": "Kızımın matematik kaygısı ciddi şekilde azaldı. Dersler düzenli ve takipli ilerlediği için süreci daha rahat yönetebildik.", "testimonial-1-name": "Ayşe K.", "testimonial-1-role": "8. sınıf velisi",
        "testimonial-2-text": "TYT matematikte nerede hata yaptığımı ilk defa bu kadar net gördüm. Deneme analizleri çok işe yaradı.", "testimonial-2-name": "Emir T.", "testimonial-2-role": "12. sınıf öğrencisi",
        "testimonial-3-text": "Sadece ders anlatımı değil, çalışma düzeni kurma konusunda da destek aldık. Bu bizim için çok değerliydi.", "testimonial-3-name": "Murat D.", "testimonial-3-role": "10. sınıf velisi",
        "faq-label": "Sık Sorulan Sorular", "faq-title": "Aklınıza takılabilecek sorular",
        "faq-1-question": "Dersler online mı yüz yüze mi yapılıyor?", "faq-1-answer": "Dersler öğrencinin ihtiyacına göre online veya yüz yüze olarak planlanabilir.",
        "faq-2-question": "İlk görüşme ücretli mi?", "faq-2-answer": "Hayır. İlk ön görüşme ücretsizdir. Bu görüşmede öğrencinin hedefi ve ihtiyaçları değerlendirilir.",
        "faq-3-question": "Her öğrenci için aynı program mı uygulanıyor?", "faq-3-answer": "Hayır. Programlar öğrencinin seviyesine, hedefine ve haftalık çalışma düzenine göre hazırlanır.",
        "faq-4-question": "Veli bilgilendirmesi yapılıyor mu?", "faq-4-answer": "Evet. Öğrencinin gelişimi belirli aralıklarla veliye sade ve anlaşılır şekilde aktarılır.",
        "contact-label": "İletişim", "contact-title": "Öğrenciniz için doğru planı birlikte oluşturalım.", "contact-description": "Ücretsiz ön görüşme için bizimle iletişime geçin. Öğrencinin seviyesi, hedefi ve ihtiyaçlarına göre en uygun eğitim planını konuşalım.", "form-name": "Ad Soyad", "form-phone": "Telefon", "form-email": "E-posta", "form-message": "Kısaca ihtiyacınızı yazın", "form-submit": "Gönder",
        "footer-text": "© 2026 Chelsea High School. Tüm hakları saklıdır.",
    },
    en: {
        "nav-about": "About", "nav-programs": "Programs", "nav-method": "Lesson Process", "nav-faq": "FAQ", "nav-contact": "Contact",
        "hero-badge": "LGS • YKS • Middle School • High School", "hero-title": "Success is not a coincidence, it's the result of the right plan.", "hero-description": "Chelsea High School is a modern education center that provides personalized lesson plans, regular follow-up, and strong communication models for students to achieve their academic goals.", "btn-consultation": "Get Free Consultation", "btn-programs": "Explore Programs",
        "hero-stat-1-number": "120+", "hero-stat-1-text": "Students", "hero-stat-2-number": "8", "hero-stat-2-text": "Subjects", "hero-stat-3-number": "%90", "hero-stat-3-text": "Satisfaction",
        "about-label": "Why Us?", "about-title": "We follow the student not only in class, but throughout the process.", "about-description": "At Chelsea High School, the purpose is not just to explain subjects. Our basic approach is to understand the student's level, identify their weaknesses, and monitor their progress through regular review and problem-solving.",
        "feature-1-title": "Personalized Plan", "feature-1-desc": "A separate study program is prepared for each student based on their goals, level, and available time.", "feature-2-title": "Regular Follow-up", "feature-2-desc": "The homework, review, and problem-solving process after lessons is regularly monitored.", "feature-3-title": "Parent Feedback", "feature-3-desc": "Parents receive clear and understandable feedback about their student's progress.",
        "programs-label": "Programs", "programs-title": "Educational options suitable for different levels", "programs-description": "Planned exam and lesson preparation programs tailored to the needs of students from middle school to high school graduation.",
        "programs-feature-label": "Exam Preparation", "programs-feature-title": "Planned, monitored and goal-oriented progress in the LGS and YKS process", "programs-feature-desc": "We emphasize not only teaching subjects but also developing exam strategy, gaining time management skills, and conducting regular practice analysis.",
        "program-1-label": "LGS", "program-1-title": "LGS Preparation", "program-1-desc": "Exam-focused preparation in Math, Science, Turkish, and English courses.", "program-2-label": "YKS", "program-2-title": "TYT - AYT Preparation", "program-2-desc": "Subject explanation, practice analysis, and score tracking based on university goals.", "program-3-label": "School Support", "program-3-title": "Middle & High School", "program-3-desc": "Support for school lessons, exam preparation, and completing missing topics.", "program-4-label": "Online", "program-4-title": "Online Private Lessons", "program-4-desc": "Remote education with regular, planned, and interactive one-on-one lessons.",
        "method-label": "Lesson Process", "method-title": "4 steps that make success systematic", "step-1-title": "Level Analysis", "step-1-desc": "The student's current level and fundamental gaps are identified.", "step-2-title": "Personal Plan", "step-2-desc": "Weekly lessons and study program are prepared based on goals.", "step-3-title": "Lesson and Practice", "step-3-desc": "Subject explanation, example solutions, and active problem-solving with the student.", "step-4-title": "Follow-up and Feedback", "step-4-desc": "Homework, practice tests, and progress are regularly monitored.",
        "online-label": "Online Education", "online-title": "Whether in-person or online, the process proceeds with the same seriousness.", "online-description": "In online lessons, active student participation, regular homework monitoring, and weekly progress control are maintained. The goal is not just to teach on a screen, but to create a sustainable learning routine.", "btn-online-info": "Get Online Lesson Information",
        "testimonials-label": "Testimonials", "testimonials-title": "Feedback from students and parents",
        "testimonial-1-text": "My daughter's math anxiety decreased significantly. Since the lessons progressed regularly and monitored, we could manage the process more comfortably.", "testimonial-1-name": "Ayşe K.", "testimonial-1-role": "8th grade parent",
        "testimonial-2-text": "In TYT mathematics, I've never seen my mistakes so clearly before. Practice analysis sessions were very helpful.", "testimonial-2-name": "Emir T.", "testimonial-2-role": "12th grade student",
        "testimonial-3-text": "Not only lesson explanation but also support in building a study routine. This was very valuable for us.", "testimonial-3-name": "Murat D.", "testimonial-3-role": "10th grade parent",
        "faq-label": "Frequently Asked Questions", "faq-title": "Questions you might have",
        "faq-1-question": "Are lessons online or face-to-face?", "faq-1-answer": "Lessons can be planned online or face-to-face based on the student's needs.",
        "faq-2-question": "Is the first consultation paid?", "faq-2-answer": "No. The first consultation is free. During this meeting, the student's goals and needs are assessed.",
        "faq-3-question": "Is the same program applied to all students?", "faq-3-answer": "No. Programs are prepared according to the student's level, goals, and weekly study routine.",
        "faq-4-question": "Is parent feedback provided?", "faq-4-answer": "Yes. The student's progress is communicated to parents at regular intervals in a clear and understandable way.",
        "contact-label": "Contact", "contact-title": "Let's create the right plan for your student together.", "contact-description": "Contact us for a free consultation. Let's discuss the most suitable education plan according to your student's level, goals, and needs.", "form-name": "Full Name", "form-phone": "Phone", "form-email": "Email", "form-message": "Tell us your needs briefly", "form-submit": "Send",
        "footer-text": "© 2026 Chelsea High School. All rights reserved.",
    }
};

let currentLang = localStorage.getItem('language') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.documentElement.lang = lang;
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.querySelector('.lang-short').textContent = lang === 'tr' ? 'EN' : 'TR';
    }
}

function initLanguage() {
    setLanguage(currentLang);
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.addEventListener('click', () => {
            setLanguage(currentLang === 'tr' ? 'en' : 'tr');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

window.setLanguage = setLanguage;
