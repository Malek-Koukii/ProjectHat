import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent {
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();

    if (lang === 'en') {
      // Traduction English
      document.getElementById('titleServices1')!.textContent = 'Our';
      document.getElementById('servTitle1')!.textContent =
        'Web and Mobile Application Development';
      document.getElementById('servTitle2')!.textContent =
        'Virtual Reality (VR)';
      document.getElementById('servTitle3')!.textContent =
        'Custom Software Development';
      document.getElementById('servTitle4')!.textContent =
        'Software Engineering';
      document.getElementById('servTitle5')!.textContent =
        'Artificial Intelligence (AI)';
      document.getElementById('servTitle6')!.textContent =
        'Consulting, Maintenance, and Technical Support';
      document.getElementById('servTitle7')!.textContent =
        'Big Data and Analytics';
      document.getElementById('servTitle8')!.textContent =
        'Robotic Process Automation';
      document.getElementById('servTitle9')!.textContent =
        'Testing and Quality Assurance';
      document.getElementById('servTitle10')!.textContent =
        'Internet of Things (IoT)';
      document.getElementById('servTitle11')!.textContent = 'Cybersecurity';
      document.getElementById('servDescription1')!.textContent =
        'We create customized applications for web and mobile platforms, using the latest technologies to deliver seamless and intuitive user experiences. Our team of experienced developers works closely with our clients to design and implement tailored applications that meet their specific needs.';
      document.getElementById('servDescription2')!.textContent =
        "We harness the power of virtual reality to create immersive and captivating experiences. Whether it's for training, entertainment, or product visualization, our expertise in virtual reality allows us to develop realistic applications and virtual environments that push the boundaries of human interaction with technology.";
      document.getElementById('servDescription3')!.textContent =
        'We design and develop customized software to meet the specific needs of our clients. Our tailored approach ensures that each software solution is aligned with the unique requirements and goals of the business, offering increased efficiency, improved productivity, and optimal user experience.';
      document.getElementById('servDescription4')!.textContent =
        'We apply software engineering methodologies and practices to design, develop, test, and maintain high-quality software systems. Our team of experienced software engineers implements rigorous standards and processes to ensure the reliability, performance, and scalability of applications and systems.';
      document.getElementById('servDescription5')!.textContent =
        'We harness the latest advancements in artificial intelligence to develop innovative solutions that automate tasks, make data-driven decisions, and enhance business processes. Our expertise in AI encompasses computer vision, natural language processing, machine learning, and other domains to deliver intelligent and adaptive applications.';
      document.getElementById('servDescription6')!.textContent =
        'We offer consulting services to assist our clients in evaluating their technological needs, developing strategies, and making informed decisions. Additionally, we provide maintenance and technical support for their systems, ensuring their smooth operation, security, and long-term scalability.';
      document.getElementById('servDescription7')!.textContent =
        'We help businesses leverage the potential of their data by using advanced analytics techniques to extract valuable insights. Our expertise in big data allows us to collect, store, process, and analyze large volumes of data, offering significant insights for strategic decision-making and improving operational performance.';
      document.getElementById('servDescription8')!.textContent =
        'We utilize cutting-edge technologies such as robotics, artificial intelligence, and automation to optimize and enhance business processes. By automating repetitive and manual tasks, we enable companies to gain efficiency, reduce errors, and free up their employees for higher-value tasks.';
      document.getElementById('servDescription9')!.textContent =
        'We provide comprehensive testing and quality assurance services to ensure the reliability, performance, and security of software and applications. Our rigorous testing approach, including functional testing, performance testing, security testing, and interoperability testing, helps identify and resolve potential issues before deployment.';
      document.getElementById('servDescription10')!.textContent =
        'We design and develop IoT solutions that connect devices and physical objects across networks, enabling increased data collection and automation. Our IoT expertise encompasses hardware design, software development, network connectivity, and data analytics, offering innovative opportunities in areas such as home automation, connected health, and smart infrastructure management.';
      document.getElementById('servDescription11')!.textContent =
        "We offer cybersecurity services aimed at protecting computer systems, networks, and data against threats and malicious attacks. We implement preventive measures such as risk management, network and application security strengthening, as well as detection and response to security incidents. Our goal is to ensure the confidentiality, integrity, and availability of our clients' sensitive information.";
      document.getElementById('moreCard1')!.textContent = 'View more';
      document.getElementById('moreCard2')!.textContent = 'View more';
      document.getElementById('moreCard3')!.textContent = 'View more';
      document.getElementById('moreCard4')!.textContent = 'View more';
      document.getElementById('moreCard5')!.textContent = 'View more';
      document.getElementById('moreCard6')!.textContent = 'View more';
      document.getElementById('moreCard7')!.textContent = 'View more';
      document.getElementById('moreCard8')!.textContent = 'View more';
      document.getElementById('moreCard9')!.textContent = 'View more';
      document.getElementById('moreCard10')!.textContent = 'View more';
      document.getElementById('moreCard11')!.textContent = 'View more';
      document.getElementById('lessCard1')!.textContent = 'View less';
      document.getElementById('lessCard2')!.textContent = 'View less';
      document.getElementById('lessCard3')!.textContent = 'View less';
      document.getElementById('lessCard4')!.textContent = 'View less';
      document.getElementById('lessCard5')!.textContent = 'View less';
      document.getElementById('lessCard6')!.textContent = 'View less';
      document.getElementById('lessCard7')!.textContent = 'View less';
      document.getElementById('lessCard8')!.textContent = 'View less';
      document.getElementById('lessCard9')!.textContent = 'View less';
      document.getElementById('lessCard10')!.textContent = 'View less';
      document.getElementById('lessCard11')!.textContent = 'View less';
      document.getElementById('enOption')!.classList.add('d-none');
      document.getElementById('frOption')!.classList.remove('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
    } else {
      // Traduction French
      document.getElementById('titleServices1')!.textContent = 'Nos';
      document.getElementById('servTitle1')!.textContent =
        'Développement des applications web et mobiles';
      document.getElementById('servTitle2')!.textContent =
        'Réalité virtuelle (VR)';
      document.getElementById('servTitle3')!.textContent =
        'Développement des logiciels sur mesure';
      document.getElementById('servTitle4')!.textContent =
        'Ingénierie logicielle';
      document.getElementById('servTitle5')!.textContent =
        'Intelligence artificielle (IA)';
      document.getElementById('servTitle6')!.textContent =
        'Consultance, maintenance et support technique';
      document.getElementById('servTitle7')!.textContent =
        'Big data et Analytique';
      document.getElementById('servTitle8')!.textContent =
        'Automatisation des processus robotiques';
      document.getElementById('servTitle9')!.textContent =
        'Tests et assurance qualité';
      document.getElementById('servTitle10')!.textContent =
        'Internet des objets (IoT)';
      document.getElementById('servTitle11')!.textContent = 'Cybersécurité';
      document.getElementById('servDescription1')!.textContent =
        'Nous créons des applications sur mesure pour les plateformes web et mobiles, en utilisant les dernières technologies pour offrir des expériences utilisateur fluides et intuitives. Notre équipe de développeurs expérimentés travaille en étroite collaboration avec nos clients pour concevoir et mettre en œuvre des applications personnalisées répondant à leurs besoins spécifiques.';
      document.getElementById('servDescription2')!.textContent =
        "Nous exploitons le pouvoir de la réalité virtuelle pour créer des expériences immersives et captivantes. Que ce soit pour la formation, le divertissement ou la visualisation de produits, notre expertise en réalité virtuelle nous permet de développer des applications et des environnements virtuels réalistes qui repoussent les limites de l'interaction humaine avec la technologie.";
      document.getElementById('servDescription3')!.textContent =
        "Nous concevons et développons des logiciels personnalisés pour répondre aux besoins spécifiques de nos clients. Notre approche sur mesure garantit que chaque solution logicielle est adaptée aux exigences et aux objectifs uniques de l'entreprise, offrant une efficacité accrue, une productivité améliorée et une expérience utilisateur optimale.";
      document.getElementById('servDescription4')!.textContent =
        "Nous appliquons des méthodologies et des pratiques d'ingénierie logicielle pour concevoir, développer, tester et maintenir des systèmes logiciels de haute qualité. Notre équipe d'ingénieurs logiciels expérimentés met en œuvre des normes et des processus rigoureux pour assurer la fiabilité, la performance et la scalabilité des applications et des systèmes.";
      document.getElementById('servDescription5')!.textContent =
        "Nous exploitons les dernières avancées en matière d'intelligence artificielle pour développer des solutions innovantes qui automatisent les tâches, prennent des décisions basées sur les données et améliorent les processus métier. Notre expertise en IA englobe la vision par ordinateur, le traitement du langage naturel, l'apprentissage automatique et d'autres domaines pour offrir des applications intelligentes et adaptatives.";
      document.getElementById('servDescription6')!.textContent =
        'Nous offrons des services de consultation pour aider nos clients à évaluer leurs besoins technologiques, à élaborer des stratégies et à prendre des décisions éclairées. En outre, nous assurons la maintenance et le support technique de leurs systèmes, garantissant leur bon fonctionnement, leur sécurité et leur évolutivité à long terme.';
      document.getElementById('servDescription7')!.textContent =
        "Nous aidons les entreprises à exploiter le potentiel de leurs données en utilisant des techniques d'analyse avancées pour extraire des informations précieuses. Notre expertise en big data nous permet de collecter, stocker, traiter et analyser de grands volumes de données, offrant des insights significatifs pour prendre des décisions stratégiques et améliorer les performances opérationnelles.";
      document.getElementById('servDescription8')!.textContent =
        "Nous utilisons des technologies de pointe telles que la robotique, l'intelligence artificielle et l'automatisation pour optimiser et améliorer les processus métier. En automatisant les tâches répétitives et manuelles, nous permettons aux entreprises de gagner en efficacité, de réduire les erreurs et de libérer leurs employés pour des tâches à plus forte valeur ajoutée.";
      document.getElementById('servDescription9')!.textContent =
        "Nous offrons des services complets de tests et d'assurance qualité pour garantir la fiabilité, la performance et la sécurité des logiciels et des applications. Notre approche rigoureuse de tests, comprenant des tests fonctionnels, des tests de performance, des tests de sécurité et des tests d'interopérabilité, permet d'identifier et de résoudre les problèmes potentiels avant le déploiement.";
      document.getElementById('servDescription10')!.textContent =
        'Nous concevons et développons des solutions IoT qui connectent les appareils et les objets physiques à travers les réseaux, permettant une collecte de données et une automatisation accrues. Notre expertise en IoT englobe la conception matérielle, le développement logiciel, la connectivité réseau et les analyses de données, offrant des possibilités innovantes dans des domaines tels que la domotique, la santé connectée et la gestion intelligente des infrastructures.';
      document.getElementById('servDescription11')!.textContent =
        "Nous proposons un service de cybersécurité qui vise à protéger les systèmes informatiques, les réseaux et les données contre les menaces et les attaques malveillantes. Nous mettons en place des mesures préventives telles que la gestion des risques, le renforcement de la sécurité des réseaux et des applications, ainsi que la détection et la réponse aux incidents de sécurité. Notre objectif est d'assurer la confidentialité, l'intégrité et la disponibilité des informations sensibles de nos clients.";
      document.getElementById('moreCard1')!.textContent = 'Voir plus';
      document.getElementById('moreCard2')!.textContent = 'Voir plus';
      document.getElementById('moreCard3')!.textContent = 'Voir plus';
      document.getElementById('moreCard4')!.textContent = 'Voir plus';
      document.getElementById('moreCard5')!.textContent = 'Voir plus';
      document.getElementById('moreCard6')!.textContent = 'Voir plus';
      document.getElementById('moreCard7')!.textContent = 'Voir plus';
      document.getElementById('moreCard8')!.textContent = 'Voir plus';
      document.getElementById('moreCard9')!.textContent = 'Voir plus';
      document.getElementById('moreCard10')!.textContent = 'Voir plus';
      document.getElementById('moreCard11')!.textContent = 'Voir plus';
      document.getElementById('lessCard1')!.textContent = 'Voir moins';
      document.getElementById('lessCard2')!.textContent = 'Voir moins';
      document.getElementById('lessCard3')!.textContent = 'Voir moins';
      document.getElementById('lessCard4')!.textContent = 'Voir moins';
      document.getElementById('lessCard5')!.textContent = 'Voir moins';
      document.getElementById('lessCard6')!.textContent = 'Voir moins';
      document.getElementById('lessCard7')!.textContent = 'Voir moins';
      document.getElementById('lessCard8')!.textContent = 'Voir moins';
      document.getElementById('lessCard9')!.textContent = 'Voir moins';
      document.getElementById('lessCard10')!.textContent = 'Voir moins';
      document.getElementById('lessCard11')!.textContent = 'Voir moins';
      document.getElementById('enOption')!.classList.remove('d-none');
      document.getElementById('frOption')!.classList.add('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
    }
  }

  isOpened: boolean[] = new Array(11).fill(false);

  toggleView(cardNumber: number) {
    this.isOpened[cardNumber] = !this.isOpened[cardNumber];
  }
}
