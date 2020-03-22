import { NgModule } from '@angular/core';
import {
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   MatProgressSpinnerModule,
   MatToolbarModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgZorroAntdModule } from 'ng-zorro-antd';

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
