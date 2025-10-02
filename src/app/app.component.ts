import { Component } from '@angular/core';
import { TranslationService } from './shared/services/translation.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private translationService: TranslationService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingService.startLoadingSpinner();
    setTimeout(() => {
      this.loadingService.stopLoadingSpinner();
    }, 2000);
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
