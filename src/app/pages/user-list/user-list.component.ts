import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    alluser: any = [];
    constructor() { }

    ngOnInit(): void {
        this.getuser()

    }
    getuser() {
        var url = `assets/datas.json`;
        var request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send(null);
        var res;
        res = JSON.parse(request.responseText);
        this.alluser = res.dashboard;
    }
}

