import {Component, Input} from '@angular/core';
import {DartsPlayer} from '../../model/darts-model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-darts-player-score',
    templateUrl: './darts-player-score.component.html',
    styleUrls: ['./darts-player-score.component.scss'],
    standalone: false
})
export class DartsPlayerScoreComponent {

  @Input()
  public dartPlayer$!: Observable<DartsPlayer>;

}
