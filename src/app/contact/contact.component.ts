import { Component } from '@angular/core';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLang$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations() {
    const lang = this.translationService.getCurrentLanguage();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;

    if (lang === 'en') {
      // Traduction English
      document.getElementById('contactTab')!.textContent = 'Contact us';
      document.getElementById('submit')!.textContent = 'Submit';
      document.getElementById('addressContact')!.textContent = 'Address';
      document.getElementById('addressText1')!.textContent =
        'Sanwen Center, 7 Avenue Habib Bourguiba';
      document.getElementById('addressText2')!.textContent = 'The Bardo, Tunis';
      document.getElementById('emailContact')!.textContent = 'Email';
      document.getElementById('phone')!.textContent = 'Phone';
      document.getElementById('socialMedia')!.textContent =
        'Follow us on social media';
      nameInput.placeholder = 'Name & Surname';
      emailInput.placeholder = 'Email';
      subjectInput.placeholder = 'Subject';
      messageInput.placeholder = 'Message';
      document.getElementById('enOption')!.classList.add('d-none');
      document.getElementById('frOption')!.classList.remove('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/english.png';
    } else {
      // Traduction French
      document.getElementById('contactTab')!.textContent = 'Contactez-nous';
      document.getElementById('submit')!.textContent = 'Soumettre';
      document.getElementById('addressContact')!.textContent = 'Adresse';
      document.getElementById('addressText1')!.textContent =
        'Centre Sanwen, 7 Av. Habib Bourguiba';
      document.getElementById('addressText2')!.textContent = 'Le Bardo, Tunis';
      document.getElementById('emailContact')!.textContent = 'E-mail';
      document.getElementById('phone')!.textContent = 'Téléphone';
      document.getElementById('socialMedia')!.textContent =
        'Suivez-nous sur les réseaux sociaux';
      nameInput.placeholder = 'Nom & Prénom';
      emailInput.placeholder = 'E-mail';
      subjectInput.placeholder = 'Sujet';
      messageInput.placeholder = 'Message';
      document.getElementById('enOption')!.classList.remove('d-none');
      document.getElementById('frOption')!.classList.add('d-none');
      (document.getElementById('englishFlag') as HTMLImageElement).src =
        'assets/imgs/french.png';
    }
  }
}
