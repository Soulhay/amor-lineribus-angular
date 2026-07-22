import 'zone.js';
import { ApplicationRef, NgModuleRef, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

let platformRef: PlatformRef | null = null;
let moduleRef: NgModuleRef<AppModule> | null = null;

export async function mount(el: HTMLElement): Promise<void> {
  if (!platformRef) platformRef = platformBrowserDynamic();
  moduleRef = await platformRef.bootstrapModule(AppModule);
  const appRef = moduleRef.injector.get(ApplicationRef);
  appRef.bootstrap(AppComponent, el);
}

export function unmount(): void {
  moduleRef?.destroy();
  moduleRef = null;
}