import { Injectable } from '@angular/core';
@Injectable()
class DataItem{
    constructor(public  name:string, public description:string){

    }
}

export class DataItemService {
public DATAITEMS:Array<DataItem>
constructor(){
    this.DATAITEMS=[];
    this.DATAITEMS.push(new DataItem("SampleName1", "disc1"));
        this.DATAITEMS.push(new DataItem("SampleName2", "disc2"));
        this.DATAITEMS.push(new DataItem("SampleName3", "disc3"));
}
    getDataItems(): DataItem[] {
        
        return this.DATAITEMS;
    }

   
}
