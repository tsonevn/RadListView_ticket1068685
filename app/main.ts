// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';


@NgModule({
    declarations: [AppComponent, LISTVIEW_DIRECTIVES],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);