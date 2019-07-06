import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diagram-chart';

  public zoomSelected: any;
  public data: any;

  ngOnInit() {

    this.data = [{
      id: "12f712e7-9555-4f7f-b996-7d045fd87cf6",
      name: "Análise",
      blockType: 1,
      idParent: null,
      isAndDoor: null,
      children: [{
        id: "1e143fef-d5b2-4de4-993e-b3d40f02d735",
        name: "Causa Fisica I",
        blockType: 3,
        idParent: "12f712e7-9555-4f7f-b996-7d045fd87cf6",
        isAndDoor: null,
        children: []
      },{
          id: "1e143fef-d5b2-4de4-993e-b3d40f02d735",
          name: "Causa Fisica I",
          blockType: 3,
          idParent: "12f712e7-9555-4f7f-b996-7d045fd87cf6",
          isAndDoor: null,
          children: []
        },{
          id: "1e143fef-d5b2-4de4-993e-b3d40f02d735",
          name: "Causa Fisica I",
          blockType: 3,
          idParent: "12f712e7-9555-4f7f-b996-7d045fd87cf6",
          isAndDoor: null,
          children: [{
            id: "5a2fcade-3716-47d0-b3b2-332d6cf08ba8",
            name: "Teste",
            blockType: 5,
            idParent: "ef412bc3-df56-42ac-92be-ad16ca750474",
            isAndDoor: null,
            children: []
          }]
        }, {
          id: "38ae1a06-cc80-4744-8d9b-ea078cf61fab",
          name: "Causa Humana I",
          blockType: 4,
          idParent: "12f712e7-9555-4f7f-b996-7d045fd87cf6",
          isAndDoor: null,
          children: [{
              id: "ef412bc3-df56-42ac-92be-ad16ca750474",
              name: "Causa Humana II",
              blockType: 4,
              idParent: "38ae1a06-cc80-4744-8d9b-ea078cf61fab",
              isAndDoor: null,
              children: [{
                  id: "5a2fcade-3716-47d0-b3b2-332d6cf08ba8",
                  name: "Teste",
                  blockType: 5,
                  idParent: "ef412bc3-df56-42ac-92be-ad16ca750474",
                  isAndDoor: null,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  }
}
