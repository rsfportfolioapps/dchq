import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { ScChatlogService } from '../../services/sc-chatlog.service';

// Models
export class ScSessionListing {
  data: ScSessionListingItem[];
}

export class ScSessionListingItem {
  interview_id: string;
  createdAt: string;
  updatedAt: string;
}

export class ScChatLog {
  data: ScChatLogItem[];
}

export class ScChatLogItem {
  type: string;
  message: string;
  origin: string
}

@Component({
  selector: 'app-sc-chatlog-viewer',
  templateUrl: './sc-chatlog-viewer.component.html',
  styleUrls: ['./sc-chatlog-viewer.component.scss']
})
export class ScChatlogViewerComponent implements OnInit {
  public scSessions: ScSessionListing;
  public scChatLog: ScChatLog;
  public scChatLogDiagnosis: any;
  public showSessionTable: boolean = false;
  public showSessions: boolean = false;
  public showSessionDiagnosis: boolean = false;

  constructor(
    private sc: ScChatlogService
  ) { }

  ngOnInit() {
    this.sc.getSessions()
      .subscribe((data: ScSessionListing) => {
        this.scSessions = data
        this.showSessions = true;
      })
  }

  onChange(id: string) {
    this.sc.getSessionChatlog(id)
      .subscribe((data: ScChatLog) => {
        this.scChatLog = data
        this.showSessionTable = true;
      })
    this.sc.getSession(id)
      .subscribe((data: any) => {
        console.log (data);
        this.scChatLogDiagnosis = data;
        this.showSessionDiagnosis = true;
      })
  }

  parseJSON(t:string, m:string) {
    switch(t) {
      case 'start_chat': {
        try {
          let n = JSON.parse(m);
          return "Name Provided: " + n.name + " Gender: " + n.sex + " Age: " + n.age;
        }
        catch{
          return m;
        }
        break;
      }
      case 'answer': {
        try {
          let n = JSON.parse(m)
          if (n.choice_id == "present") {
            return "Yes";
          }
          else if (n.choice_id == "absent") {
            return "No";
          }
          else {
            return m;
          }
        } catch {
          return m;
        }
        break;
      }
      case "diagnosis": {
        console.log(m)
        return m;
        break;
      }
      default: {
        return m;
        break;
      }
    }
  }
}
