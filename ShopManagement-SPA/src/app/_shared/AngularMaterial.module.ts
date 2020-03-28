import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatSelectModule} from '@angular/material/typings/select';

@NgModule({
   imports: [
      NgZorroAntdModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatToolbarModule,
      MatMenuModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatSelectModule,
   ],
   declarations: [],
   exports: [
      NgZorroAntdModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatToolbarModule,
      MatMenuModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatProgressSpinnerModule,
   ],
})
export class AngularMaterialModule {}
