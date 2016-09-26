import { Routes, RouterModule } from '@angular/router';

import { ChoiceComponent } from './choice/choice.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    { path: '', component: ChoiceComponent },
    { path: 'settings', component: ChoiceComponent },
    { path: 'news', component: NewsComponent }
];

export const routing = RouterModule.forRoot(routes);
