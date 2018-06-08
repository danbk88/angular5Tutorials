import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  reqId: string;
  goals: any;

  constructor(private route: ActivatedRoute, private router: Router,private _dataService: DataService) {            //dependency injection - instanciating avtivated route in ctor
    this.route.params.subscribe(req => this.setReqId(req.id));  //get query params from req that in avtivatedRoute
  }

  ngOnInit() {
    this._dataService.goal.subscribe(res => this.goals = res)
  }

  setReqId(reqid){ 
    console.log("id retrieved: " + reqid);
    this.reqId = reqid;
  }

  sendMeHome(){
    //Navigate throw components:
    this.router.navigateByUrl("");
  }

}
