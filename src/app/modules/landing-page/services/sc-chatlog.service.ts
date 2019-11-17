import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScChatlogService {
  baseUrl = "https://staging.dochq.co.uk/api/v2/symptom-checker"

  constructor(
    private http: HttpClient
  ) { }

  getSessions() {
    return this.http.get(this.baseUrl);
  }

  getSessionChatlog(id: string) {
    return this.http.get(this.baseUrl + "/" + id + "/chat")
  }

  getSession(id: string) {
    return this.http.get(this.baseUrl + "/" + id)
  }
}
