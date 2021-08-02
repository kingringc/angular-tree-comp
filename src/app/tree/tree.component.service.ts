import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TreeService {
    private selectedNode = new BehaviorSubject<any>(null);
    private nodeStats = new BehaviorSubject<any>(null);
    node$: Observable<any> = this.selectedNode.asObservable();
    stats$: Observable<any> = this.nodeStats.asObservable();

    pointSelectedNode(node: any): void {
        this.selectedNode.next(node);
    }

    selectedNodeStats(stats: any): void {
        this.nodeStats.next(stats)
    }
}