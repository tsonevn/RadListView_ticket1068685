import {Component} from "@angular/core";
import {ObservableArray} from "data/observable-array"
import {DataItemService} from "./dataitem.service"


class DataItem{
    constructor(public  name:string, public description:string){

    }
}
@Component({
    selector: "my-app",
    providers: [DataItemService],
    templateUrl: "app.component.html",
})
export class AppComponent {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
        console.log(this._dataItems.length+" hello friends of data ");
    }
}


