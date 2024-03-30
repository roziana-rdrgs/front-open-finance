import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
selector: 'app-root',
standalone: true,
imports: [],
template: `
<p> External companie </p>
`,
styles: [`
:host {
display: block;
}`,
],
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
constructor() {}
ngOnInit(): void {}
}