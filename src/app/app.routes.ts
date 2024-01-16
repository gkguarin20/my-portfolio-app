import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'header', component: HeaderComponent},
    { path: 'about', component: AboutComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'education', component: EducationComponent},
    { path: 'skill', component: SkillComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: HomeComponent, pathMatch: 'full'}
    
    
];
