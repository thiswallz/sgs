import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sgs-not-authorized',
  template: `
    <p>
      not-authorized works!
    </p>
  `,
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
