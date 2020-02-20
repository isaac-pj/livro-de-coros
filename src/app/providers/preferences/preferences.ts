import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PreferencesProvider {

  private defaultPreferences = {
    home: {
      book: 'ALL',
    },
    music: {
      fontSize: 16,
    },
    slide: {
      fontSize: 32,
    }
  };

  private preferences: object;

  constructor() {
    this.start();
  }

  private start() {
    this.preferences = JSON.parse(localStorage.getItem('preferences'));
    if (!this.preferences) {
      this.preferences = this.defaultPreferences;
      this.writePreferences();
    }
  }

  private writePreferences() {
    return localStorage.setItem('preferences', JSON.stringify(this.preferences));
  }

  public getPreference(settings) {
    const [group, prop] = settings;
    return this.preferences[group][prop];
  }

  public setPreference(settings, value) {
    const [group, prop] = settings;
    this.preferences[group][prop] = value;
    return this.writePreferences();
  }

  public resetPreferences() {
    return localStorage.removeItem('preferences');
  }

}

export const CONFIGS = Object.freeze({
  HOME: {
    SELECTED_BOOK: ['home', 'book'],
  },
  MUSIC: {
    FONT_SIZE: ['music', 'fontSize' ],
  },
  SLIDE: {
    FONT_SIZE: ['slide', 'fontSize' ],
  }
});
