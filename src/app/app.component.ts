import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TREE_NODE } from './data';
import { TreeNode } from './tree/tree';
import { TreeService } from './tree/tree.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tree-component';
  treeNode = TREE_NODE;
  nodeStats: Observable<any>;
  
  constructor(private treeService: TreeService) {
    this.nodeStats = this.treeService.stats$;
  }

  ngOnInit(): void {
    // on init
  }

}
