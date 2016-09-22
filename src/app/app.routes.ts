import { Routes, RouterModule } from '@angular/router';

import { ChoiceComponent } from './choice/choice.component';
const routes: Routes = [
    { path: '', component: ChoiceComponent }
];

export const routing = RouterModule.forRoot(routes);