import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public url: any;
  public homeLabel: string = 'Home';
  public servicesLabel: string = 'Services';
  public contactLabel: string = 'Contact us';
  public englishLabelDropdown: string = 'English';
  public englishLabel: string = 'English';
  public frenchLabel: string = 'French';

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();

    if (lang === 'en') {
      this.homeLabel = 'Home';
      this.servicesLabel = 'Services';
      this.contactLabel = 'Contact us';
      this.englishLabelDropdown = 'English';
      this.englishLabel = 'English';
      this.frenchLabel = 'French';
      document.getElementById('enOption')!.classList.add('d-none');
      document.getElementById('frOption')!.classList.remove('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
    } else {
      this.homeLabel = 'Accueil';
      this.servicesLabel = 'Services';
      this.contactLabel = 'Contactez-nous';
      this.englishLabelDropdown = 'Français';
      this.englishLabel = 'Anglais';
      this.frenchLabel = 'Français';
      document.getElementById('enOption')!.classList.remove('d-none');
      document.getElementById('frOption')!.classList.add('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
    }
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
