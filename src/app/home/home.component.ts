import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
      document.getElementById('title1')!.textContent = 'transforming';
      document.getElementById('title2')!.textContent = 'challenges';
      document.getElementById('title3')!.textContent = 'into';
      document.getElementById('title4')!.textContent = 'opportunities';
      document.getElementById('subtitle')!.textContent =
        'Embrace the future with us';
      document.getElementById('learnMoreButton')!.textContent = 'Learn More';
      document.getElementById('slogan')!.textContent =
        'Simplify, Optimize, Innovate: Empowering Businesses';
      document.getElementById('textRightSection')!.textContent =
        'Company specializing in software development and information technology';
      document.getElementById('contactUs')!.textContent = 'Contact us';
      document.getElementById('text1')!.textContent =
        'Web and mobile application development';
      document.getElementById('text2')!.textContent = 'Réalité virtuelle (RV)';
      document.getElementById('text3')!.textContent =
        'Custom software development';
      document.getElementById('text4')!.textContent = 'Software engineering';
      document.getElementById('text5')!.textContent =
        'Artificial Intelligence (AI)';
      document.getElementById('text6')!.textContent =
        'Consulting, maintenance, and technical support';
      document.getElementById('text7')!.textContent = 'Big data and analytics';
      document.getElementById('text8')!.textContent =
        'Robotic process automation';
      document.getElementById('text9')!.textContent =
        'Testing and quality assurance';
      document.getElementById('text10')!.textContent =
        'Internet of Things (IoT)';
      document.getElementById('text11')!.textContent = 'Cybersecurity';
      document.getElementById('enOption')!.classList.add('d-none');
      document.getElementById('frOption')!.classList.remove('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
    } else {
      // Traduction French
      document.getElementById('title1')!.textContent = 'transformer';
      document.getElementById('title2')!.textContent = 'les défis';
      document.getElementById('title3')!.textContent = 'en';
      document.getElementById('title4')!.textContent = 'opportunités';
      document.getElementById('subtitle')!.textContent =
        "Ensemble, embrassons l'avenir";
      document.getElementById('learnMoreButton')!.textContent = 'Voir plus';
      document.getElementById('slogan')!.textContent =
        'Simplifier, Optimiser, Innover : Donner les moyens aux entreprises';
      document.getElementById('textRightSection')!.textContent =
        "Société spécialisée dans le domaine du développement logiciel et des technologies de l'information";
      document.getElementById('contactUs')!.textContent = 'Contactez-nous';
      document.getElementById('text1')!.textContent =
        'Développement des applications web et mobiles';
      document.getElementById('text2')!.textContent = 'Réalité virtuelle (RV)';
      document.getElementById('text3')!.textContent =
        'Développement des logiciels personnalisés';
      document.getElementById('text4')!.textContent = 'Ingénierie logicielle';
      document.getElementById('text5')!.textContent =
        'Intelligence artificielle (IA)';
      document.getElementById('text6')!.textContent =
        'Conseil, maintenance et support technique';
      document.getElementById('text7')!.textContent = 'Big data et analytique';
      document.getElementById('text8')!.textContent =
        'Automatisation des processus robotiques';
      document.getElementById('text9')!.textContent =
        'Tests et assurance qualité';
      document.getElementById('text10')!.textContent = 'Internet des objets';
      document.getElementById('text11')!.textContent = 'Cybersécurité';
      document.getElementById('enOption')!.classList.remove('d-none');
      document.getElementById('frOption')!.classList.add('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
    }
  }
}
