import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";
import {Store} from "@ngrx/store";
import {getRemote} from "../../store/scoreboard.selector";
import {distinctUntilChanged, take} from "rxjs";
import {ScoreboardState} from "../../store/scoreboard.reducer";
import {showRemoteControlQr} from "../../store/scoreboard.actions";

@Component({
  selector: 'app-qr-control',
  imports: [
  ],
  templateUrl: './qr-control.component.html',
  styleUrl: './qr-control.component.scss',
})
export class QrControlComponent {
  readonly dialog = inject(MatDialog);
  private dialogRef?: MatDialogRef<QrDialogComponent>;

  constructor(private state: Store<ScoreboardState>){
    // React only to actual value changes of `remote` to avoid initial popup
    this.state.select(getRemote).pipe(
      distinctUntilChanged()
    ).subscribe(remote => {
      const hasRemote = !!remote && remote.length > 0;

      if (hasRemote) {
        // Open only when remote becomes non-empty, and only if not already open
        if (!this.dialogRef) {
          this.dialogRef = this.dialog.open(QrDialogComponent);
          this.dialogRef.afterClosed().pipe(take(1)).subscribe(() => {
            this.dialogRef = undefined;
          });
        }
      } else {
        // Close when remote becomes empty
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      }
    });
  }


  openRemoteControl() {
    this.state.dispatch(showRemoteControlQr());
   }

}
