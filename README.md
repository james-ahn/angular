# Angular
studying for Angular 2.0

## Quick start
```
git clone https://github.com/angular/quickstart.git
```

## Angular js background skills

- NPM
- ES6와 Module(CommonJS, AMD…)
- Transpiler(Polyfill, shim)
- TypeScript, (typings, tsd)
- Angular 프레임워크 관련 개념: MVVM, Change Detector, Observable, Immutable, Two-way Binding, Zone.js
RxJs
- Webpack 등의 Bundler

## binding

- {}: RENDERING
```
My name is {{name}}
```

- []: BINDING PROPERTIES
```
<video-control [volume]="currentVolume"></video-control>
```

- (): HANDLING EVENTS
```
<my-component (click)="onClick($event)"></my-component>
```

- [()]: TWO-WAY DATA BINDING
```
<input [(ngModel)]="myName">
```

- *: THE ASTERISK (*ngFor, *ngIf, *mgSwitch ...)
```
<my-component *ngFor="#item of items">
</my-component>
```


