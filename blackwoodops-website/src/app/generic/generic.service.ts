import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private _title: string | undefined;
  private _heroImage: string | undefined;
  private _contentParagraphs: string[] = [];

  public get title(): string {
    return this._title ?? '';
  }

  public get heroImage(): string {
    return this._heroImage ?? '';
  }

  public get content(): string[] {
    return this._contentParagraphs ?? [];
  }

  constructor() { }


  public setPage(title: string | undefined, heroImage: string | undefined, content: string[]): void {
    this._heroImage = heroImage;
    this._title = title;
    this._contentParagraphs = content;
  }

}
