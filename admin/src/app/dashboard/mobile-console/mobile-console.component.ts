import { Component } from '@angular/core';


@Component({
  templateUrl: './mobile-console.component.html'
})
export class MobileConsoleComponent {

  socket;
  sessions = [];
  activeSession;
  sessionSearch: string = "";
  tabSearch: string = "";
  activeConsoleTab: string;
  private consoleServer: string = "http://ec2-52-59-169-152.eu-central-1.compute.amazonaws.com:3001";
  private consoleServerLocal: string = "http://localhost:3001";

  ngOnInit() {
    this.connectConsole();
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  // init websocket connection 
  private connectConsole(): void {

    this.socket = (<any>window).io(this.consoleServerLocal, {
      path: '/api/mobile-console'
    });

    this.socket.on('update', (msg) => {
      console.log(' update: ', msg, this.activeSession);
      if (!msg) return;
      if (msg.update === 'sessions' && Array.isArray(msg.items)) {
        msg.items.forEach((item) => {
          this.sessions.forEach((session) => {
            if (session.sessionId === item.sessionId && session.type === 'active') session.type = 'closed';
          });
        });
        this.addToList(this.sessions, msg.items);
      }
      if (msg.update === 'logs' && this.activeSession && this.activeSession.sessionId == msg.sessionId &&
        Array.isArray(msg.items)) {
        if (!this.activeSession.logs) this.activeSession.logs = [];
        this.addToList(this.activeSession.logs, msg.items);
      }
      if (msg.update === 'states' && this.activeSession && this.activeSession.sessionId == msg.sessionId &&
        Array.isArray(msg.items)) {
        if (!this.activeSession.states) this.activeSession.states = [];
        this.addToList(this.activeSession.states, msg.items);
      }
    });

    this.socket.on('close-session', (msg) => {
      if (!msg) return;
      this.sessions.filter((session) => {
        if (session.sessionId === msg.sessionId && session.type === 'active') session.type = 'closed';
      });
    });

    this.socket.on('sessions', (msg) => {
      console.log('sessions : ', msg);
      if (!msg || !Array.isArray(msg.sessions)) return;
      this.removeOldFromList(this.sessions, msg.date);
      this.sessions.length = 0;
      this.sessions.unshift(...msg.sessions);
    });

    this.socket.on('logs', (msg) => {
      console.log('logs : ', msg);
      this.addToActiveSession(msg, 'logs');
    });

    this.socket.on('states', (msg) => {
      console.log('states : ', msg);
      this.addToActiveSession(msg, 'states');
    });

  }

  // 
  private removeOldFromList(list, date ):void {
    for (let i = list.length - 1; 0 < i; i--) {
      //if( list[i].timeStamp + 1000*10 < + new Date() ) list.splice(i, 1);
      if (list[i].timeStamp + 1000*60*60*20 < date ) list.splice(i, 1);
    }
  };

  // add new items to active session logs, states ...
  private addToActiveSession(msg, propName: string): void {
    if (!this.activeSession || !msg || !Array.isArray(msg[propName])) return;
    if (!this.activeSession[propName]) this.activeSession[propName] = [];
    this.activeSession[propName].length = 0;
    this.activeSession[propName].unshift(...msg[propName]);
    console.log(propName + ' : ', this.activeSession[propName].length);
  }

  // add items to array
  private addToList(list: Array<any>, items: Array<any>): void {
    console.log(items);
    list.unshift(...items);
  }

  // filter lists before showing
  filter(arr: Array<any>, targ: string, search: string): Array<any> {
    if (!search || !Array.isArray(arr)) return arr || [];
    let newArr = arr.filter((item) => {
      return item[targ] && item[targ].toLowerCase().indexOf(search.toLowerCase()) != -1;
    });
    return newArr;
  }

  // activate tab of active session
  activateConsoleTab(activeConsoleTab: string): void {
    console.log(" activeConsoleTab ", activeConsoleTab);
    this.activeConsoleTab = activeConsoleTab;
  }

  // test function / for adding value
  addToConsoleList(targetEmit: string, value): void {
    console.log(' addToConsoleList ', targetEmit, this.activeSession);
    if (targetEmit === 'session') this.socket.emit(targetEmit, [{ sessionId: value, type: 'active' }]); // active, closed, exception
    if (targetEmit === 'log' || targetEmit == 'state') this.socket.emit(targetEmit, [
      { sessionId: this.activeSession ? this.activeSession.sessionId : null, value: value }
    ]);
  }

  // select session
  selectSession(selectSession): void {
    this.sessions.forEach((session) => session.isActive = false);
    selectSession.isActive = true;
    this.activeSession = selectSession;
  }

  // init searcg for session
  setSessionSearch(val: string): void {
    this.sessionSearch = val;
  }

  // init searcg for logs, states ...
  setTabSearch(val: string): void {
    this.tabSearch = val;
  }

}
