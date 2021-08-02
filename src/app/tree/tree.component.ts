import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from './tree';
import { TreeService } from './tree.component.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() node: TreeNode | undefined;

  constructor(private treeService: TreeService) {
  }

  ngOnInit(): void {
    // on init
  }

  isThatArray(node: any): boolean {
    return Array.isArray(node);
  }

  nodeExpand(node: TreeNode): void {
    node.isOpen = true;
    this.treeService.pointSelectedNode(node ? node : null);
  }

  nodeCollapse(node: TreeNode): void {
    node.isOpen = false;
  }

  selectedNode(node: any): void {
    // selected node
  }

  selectedNodeStats(node: any): void {
    this.treeService.selectedNodeStats(node && node.stats ? node.stats : null);
  }

}
