import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMonsterConfirmationDialogComponent } from '../../components/delete-monster-confirmation-dialog/delete-monster-confirmation-dialog.component';

@Component({
  selector: 'app-monster',
  imports: [
    ReactiveFormsModule,
    PlayingCardComponent,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css',
})
export class MonsterComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private monsterService = inject(MonsterService);
  private router = inject(Router);
  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;

  private readonly dialog = inject(MatDialog);

  monsterId = signal<number | undefined>(undefined);

  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    image: [''],
    type: [MonsterType.ELECTRIC, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', [Validators.required]],
    attackName: ['', [Validators.required]],
    attackStrength: [
      0,
      [Validators.required, Validators.min(1), Validators.max(200)],
    ],
    attackDescription: ['', [Validators.required]],
  });

  monster: Monster = Object.assign(new Monster(), this.formGroup.value);

  monsterType = Object.values(MonsterType);
  //monsterId = -1;

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(
      (data) => {
        this.monster = Object.assign(new Monster(), data);
      }
    );
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.monsterId.set(parseInt(params['monster']));
      console.log(this.monsterId);
      this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
      const monsterFound =
        this.monsterId() !== undefined
          ? this.monsterService.get(this.monsterId()!)
          : undefined;
      if (monsterFound) {
        this.monster = monsterFound;
        this.formGroup.patchValue(this.monster);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.formValuesSubscription?.unsubscribe();
  }

  submit(event: Event) {
    event.preventDefault;
    if (this.monsterId() === -1) {
      this.monsterService.add(this.monster);
    } else {
      this.monster.id = this.monsterId() ?? 0;
      this.monsterService.udpate(this.monster);
    }
    this.navigateBack();
  }

  isFieldValid(name: string) {
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string,
        });
      };
    }
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }
  deleteMonster() {
    const dialogRef = this.dialog.open(
      DeleteMonsterConfirmationDialogComponent
    );
    dialogRef.afterClosed().subscribe((confirmation) => {
      if (confirmation) {
        this.monsterService.delete(this.monsterId()!);
        this.navigateBack();
      }
    });
  }
}
