import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from './tree';
import { TreeService } from './tree.component.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() node: TreeNode | undefined;
  @Output() nodeSelect: EventEmitter<TreeNode>;

  constructor(private treeService: TreeService) {
    this.nodeSelect = new EventEmitter<TreeNode>()
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
    this.nodeSelect.emit(node);
  }

  selectedNodeStats(node: any): void {
    this.nodeSelect.emit(node);
  }

}
